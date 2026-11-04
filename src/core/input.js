// Unified keyboard / mouse / Xbox-style controller input.
//
// Button reference (W3C "standard" gamepad mapping):
//   0 A   1 B   2 X   3 Y   4 LB  5 RB  6 LT  7 RT
//   8 View/Back   9 Menu/Start   10 L3   11 R3
//   12 D-pad Up   13 D-pad Down   14 D-pad Left   15 D-pad Right
export const XBOX_BUTTONS = [
  'A', 'B', 'X', 'Y', 'LB', 'RB', 'LT', 'RT',
  'VIEW', 'MENU', 'L3', 'R3',
  'D-PAD ↑', 'D-PAD ↓', 'D-PAD ←', 'D-PAD →',
];

export function gamepadGlyph(index) {
  return XBOX_BUTTONS[index] || `BTN ${index}`;
}

const STICK_DEADZONE = 0.18;
const LOOK_DEADZONE = 0.14;
const TRIGGER_THRESHOLD = 0.5;

function radial(x, y, deadzone) {
  const mag = Math.hypot(x, y);
  if (mag <= deadzone) return { x: 0, y: 0, mag: 0 };
  const scaled = Math.min(1, (mag - deadzone) / (1 - deadzone));
  return { x: (x / mag) * scaled, y: (y / mag) * scaled, mag: scaled };
}

export class Input {
  constructor(canvas) {
    this.canvas = canvas;
    this.keys = new Set();
    this.pressed = new Set();
    this.released = new Set();
    this.mouseDX = 0; this.mouseDY = 0;
    this.mouse = [false, false, false];
    this.mousePressed = [false, false, false];
    this.wheel = 0;
    this.pointerLocked = false;
    this.sensitivity = 0.0022;
    this.moveX = 0; this.moveY = 0;
    this.lookX = 0; this.lookY = 0;
    this.gamepad = null;
    this.gpButtons = [];
    this.gpPrev = [];
    this.gpConnected = false;
    this.gpId = '';
    this.gpMapping = '';
    this.gpMoveX = 0; this.gpMoveY = 0;
    this.gpLookX = 0; this.gpLookY = 0;
    this.gpNavX = 0; this.gpNavY = 0;
    this.lastDevice = 'keyboard';
    this._lastGpInput = 0;
    this._lastRumble = 0;
    this.enabled = true;
    this.onPointerLockChange = null;

    window.addEventListener('keydown', (e) => {
      this.lastDevice = 'keyboard';
      if (e.code === 'Tab' || e.code === 'Space' || e.code.startsWith('Arrow')) e.preventDefault();
      if (!this.keys.has(e.code)) this.pressed.add(e.code);
      this.keys.add(e.code);
      if (e.code === 'Escape' && this.pointerLocked) document.exitPointerLock?.();
    });
    window.addEventListener('keyup', (e) => {
      this.keys.delete(e.code);
      this.released.add(e.code);
    });
    window.addEventListener('blur', () => { this.keys.clear(); this.mouse = [false, false, false]; });
    canvas.addEventListener('mousedown', (e) => {
      this.lastDevice = 'keyboard';
      this.mouse[e.button] = true;
      this.mousePressed[e.button] = true;
      if (e.button === 0 && !this.pointerLocked && this.enabled) this.requestLock();
    });
    window.addEventListener('mouseup', (e) => { this.mouse[e.button] = false; });
    window.addEventListener('mousemove', (e) => {
      if (this.pointerLocked) { this.mouseDX += e.movementX; this.mouseDY += e.movementY; }
      else if (this.mouse[2]) { this.mouseDX += e.movementX; this.mouseDY += e.movementY; }
      if (Math.abs(e.movementX) + Math.abs(e.movementY) > 1) this.lastDevice = 'keyboard';
    });
    canvas.addEventListener('wheel', (e) => { this.wheel += Math.sign(e.deltaY); e.preventDefault(); }, { passive: false });
    canvas.addEventListener('contextmenu', (e) => e.preventDefault());
    document.addEventListener('pointerlockchange', () => {
      this.pointerLocked = document.pointerLockElement === this.canvas;
      this.onPointerLockChange?.(this.pointerLocked);
      if (!this.pointerLocked) { this.mouse = [false, false, false]; }
    });
    window.addEventListener('gamepadconnected', (e) => {
      this.gpConnected = true;
      this.gamepad = e.gamepad;
      this.gpId = e.gamepad.id || '';
      this.gpMapping = e.gamepad.mapping || '';
      this.lastDevice = 'gamepad';
      window.dispatchEvent(new CustomEvent('gpadchange', { detail: true, gamepad: e.gamepad }));
    });
    window.addEventListener('gamepaddisconnected', () => {
      this.gpConnected = false;
      this.gamepad = null;
      this.gpButtons = [];
      this.gpPrev = [];
      this.gpMoveX = this.gpMoveY = this.gpLookX = this.gpLookY = this.gpNavX = this.gpNavY = 0;
      window.dispatchEvent(new CustomEvent('gpadchange', { detail: false }));
    });
  }

  requestLock() { this.canvas.requestPointerLock?.(); }
  releaseLock() { if (document.pointerLockElement === this.canvas) document.exitPointerLock?.(); }

  pollGamepad() {
    if (!navigator.getGamepads) return;
    const pads = navigator.getGamepads();
    let gp = null;
    // Prefer a standard-mapped pad, otherwise take the first live one.
    for (const p of pads) if (p && p.connected) { gp = p; if (p.mapping === 'standard') break; }
    if (!gp) {
      if (this.gpConnected) {
        this.gpConnected = false;
        this.gamepad = null;
        this.gpButtons = [];
        this.gpPrev = [];
        window.dispatchEvent(new CustomEvent('gpadchange', { detail: false }));
      }
      return;
    }
    if (!this.gpConnected) {
      this.lastDevice = 'gamepad';
      window.dispatchEvent(new CustomEvent('gpadchange', { detail: true, gamepad: gp }));
    }
    this.gpConnected = true;
    this.gamepad = gp;
    this.gpId = gp.id || '';
    this.gpMapping = gp.mapping || '';

    const left = radial(gp.axes[0] || 0, gp.axes[1] || 0, STICK_DEADZONE);
    const rightRaw = radial(gp.axes[2] || 0, gp.axes[3] || 0, LOOK_DEADZONE);
    // A gentle response curve gives finer aim near centre without a dead snap.
    const rightScale = rightRaw.mag > 0 ? Math.pow(rightRaw.mag, 1.35) / rightRaw.mag : 0;
    this.gpMoveX = left.x;
    this.gpMoveY = left.y;
    this.gpNavX = left.x;
    this.gpNavY = left.y;
    this.gpLookX = rightRaw.x * rightScale;
    this.gpLookY = rightRaw.y * rightScale;

    const cur = gp.buttons.map(b => !!b && (b.pressed || b.value > TRIGGER_THRESHOLD));
    this.gpButtons = cur;
    let active = false;
    for (let i = 0; i < cur.length; i++) {
      if (cur[i] && !this.gpPrev[i]) { this.pressed.add('GP' + i); active = true; }
      if (!cur[i] && this.gpPrev[i]) { this.released.add('GP' + i); active = true; }
    }
    this.gpPrev = cur;
    if (active || left.mag > 0 || rightRaw.mag > 0 || this.isDown('GP12') || this.isDown('GP13') || this.isDown('GP14') || this.isDown('GP15')) {
      this.lastDevice = 'gamepad';
      this._lastGpInput = performance.now();
    }
  }

  update() {
    if (!this.enabled) {
      this.moveX = this.moveY = this.lookX = this.lookY = 0;
      this.pressed.clear(); this.released.clear();
      this.mousePressed = [false, false, false];
      this.mouseDX = this.mouseDY = 0;
      this.wheel = 0;
      return;
    }
    this.pollGamepad();
    let mx = 0, my = 0;
    if (this.isDown('KeyW') || this.isDown('ArrowUp')) my += 1;
    if (this.isDown('KeyS') || this.isDown('ArrowDown')) my -= 1;
    if (this.isDown('KeyD') || this.isDown('ArrowRight')) mx += 1;
    if (this.isDown('KeyA') || this.isDown('ArrowLeft')) mx -= 1;
    if (this.gpMoveX || this.gpMoveY) { mx = this.gpMoveX; my = -this.gpMoveY; }
    const ml = Math.hypot(mx, my);
    if (ml > 1) { mx /= ml; my /= ml; }
    this.moveX = mx; this.moveY = my;
    this.lookX = this.gpLookX || 0;
    this.lookY = this.gpLookY || 0;
  }

  endFrame() {
    this.pressed.clear(); this.released.clear();
    this.mousePressed = [false, false, false];
    this.mouseDX = 0; this.mouseDY = 0;
    this.wheel = 0;
  }

  isDown(c) { return this.keys.has(c) || (this.gpButtons && c.startsWith('GP') && this.gpButtons[+c.slice(2)]); }
  wasPressed(c) { return this.pressed.has(c); }
  wasReleased(c) { return this.released.has(c); }
  mouseDown(b) { return this.mouse[b]; }
  mouseWasPressed(b) { return this.mousePressed[b]; }

  /* ==================== HAPTICS ==================== */
  rumble(strong = 0.45, weak = 0.2, duration = 120) {
    const gp = this.gamepad;
    const actuator = gp?.vibrationActuator;
    if (!actuator?.playEffect) return;
    const now = performance.now();
    if (now - this._lastRumble < 45) return;
    this._lastRumble = now;
    try {
      const p = actuator.playEffect('dual-rumble', {
        startDelay: 0,
        duration,
        strongMagnitude: Math.max(0, Math.min(1, strong)),
        weakMagnitude: Math.max(0, Math.min(1, weak)),
      });
      p?.catch?.(() => {});
    } catch { /* haptics are a bonus, never fatal */ }
  }

  /* ==================== UI NAVIGATION ==================== */
  // Left stick is -1 up / +1 down, matching the D-pad getters below.
  get navX() {
    let x = this.gpNavX || 0;
    if (this.isDown('GP15')) x = 1;
    if (this.isDown('GP14')) x = -1;
    return x;
  }
  get navY() {
    let y = this.gpNavY || 0;
    if (this.isDown('GP12')) y = -1;
    if (this.isDown('GP13')) y = 1;
    return y;
  }
  get navConfirm() { return this.wasPressed('GP0'); }
  get navCancel() { return this.wasPressed('GP1'); }
  get navMenu() { return this.wasPressed('GP9'); }

  /* ==================== SEMANTIC ACTIONS ==================== */
  // Gameplay: A interact, B dodge (hold to sprint), X heal, Y lock,
  // LB block, RB light, RT/LT heavy, D-pad weapon/spell/map,
  // R3 critical, L3 jump, View inventory, Menu pause.
  get attackLight() { return this.mouseWasPressed(0) || this.wasPressed('KeyJ') || this.wasPressed('GP5'); }
  get attackHeavy() { return this.mouseWasPressed(2) || this.wasPressed('KeyK') || this.wasPressed('GP7') || this.wasPressed('GP6'); }
  get blockHeld() { return this.mouseDown(2) || this.isDown('KeyQ') || this.isDown('GP4'); }
  get blockPressed() { return this.mouseWasPressed(2) || this.wasPressed('KeyQ') || this.wasPressed('GP4'); }
  get dodge() { return this.wasPressed('Space') || this.wasPressed('KeyL') || this.wasPressed('GP1'); }
  get jump() { return this.wasPressed('KeyF') || this.wasPressed('GP10'); }
  get sprintHeld() { return this.isDown('ShiftLeft') || this.isDown('ShiftRight') || this.isDown('GP1') || this.isDown('GP10'); }
  get lockPressed() { return this.wasPressed('Tab') || this.wasPressed('GP3') || this.mouseWasPressed(1); }
  get interact() { return this.wasPressed('KeyE') || this.wasPressed('GP0'); }
  get heal() { return this.wasPressed('KeyR') || this.wasPressed('GP2'); }
  get spell() { return this.wasPressed('KeyV') || this.wasPressed('GP12'); }
  get critical() { return this.wasPressed('KeyC') || this.wasPressed('GP11'); }
  get inventory() { return this.wasPressed('KeyI') || this.wasPressed('GP8'); }
  get map() { return this.wasPressed('KeyM') || this.wasPressed('GP13'); }
  get pause() { return this.wasPressed('Escape') || this.wasPressed('GP9'); }
  get weaponNext() { return this.wasPressed('KeyX') || this.wasPressed('GP15') || this.wheel > 0; }
  get weaponPrev() { return this.wasPressed('KeyZ') || this.wasPressed('GP14') || this.wheel < 0; }
  get confirm() { return this.wasPressed('Enter') || this.wasPressed('KeyE') || this.wasPressed('GP0'); }
  get skip() { return this.wasPressed('Escape') || this.wasPressed('Enter') || this.wasPressed('GP0') || this.wasPressed('GP1') || this.wasPressed('GP9'); }

  consumePressed(code) { this.pressed.delete(code); }
}
