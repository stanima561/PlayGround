import * as THREE from 'three';
import { UI } from '../ui/ui.js';
import { Input } from '../core/input.js';
import { audio } from '../core/audio.js';
import { defaultState, loadState, saveState, hasSave, clearSave, saveSummary, loadSettings, saveSettings } from '../core/save.js';
import { buildRegion } from '../world/region1.js';
import { heightAt, ARENA, PATH } from '../world/terrain.js';
import { Player } from '../entities/player.js';
import { Enemy } from '../entities/enemy.js';
import { HollowWoodsman } from '../entities/boss.js';
import { NPC } from '../entities/npc.js';
import { IntroCinematic } from './intro.js';
import { Effects } from './effects.js';
import { WEAPONS, ARMOR, ITEMS, ENEMY_TYPES, ENDINGS, LORE, REGION_INFO } from './data.js';
import { clamp, lerp, damp, dampAngle, angleDelta, rand, choose, makeGlowSprite, formatTime } from '../core/utils.js';

export class Game {
  constructor(canvas) {
    this.canvas = canvas;
    this.audio = audio;
    this.input = new Input(canvas);
    this.ui = new UI(this);
    this.mode = 'loading';
    this.state = defaultState();
    this.uiBlocking = false;
    this.cinematic = false;
    this.bossIntro = null;
    this.bossIntroTime = 0;
    this.clock = new THREE.Clock();
    this.time = 0;
    this.playtime = 0;
    this.enemies = [];
    this.npcs = [];
    this.projectiles = [];
    this.lockTarget = null;
    this.lastInputX = 0; this.lastInputY = 0;
    this.hitstopTimer = 0;
    this.slowmoTimer = 0;
    this.slowmoScale = 1;
    this.shakeAmount = 0;
    this.combatLog = [];
    this.hasLocket = false;
    this.bloodstain = null;
    this.boss = null;
    this.intro = null;
    this.uiBlockingKind = null;
    this.attractTime = 0;
    this.settings = loadSettings();
    this.deathTimer = 0;
    this.deathScreenShown = false;
    this.rewardGiven = false;
    this.pendingRewards = [];
    this._lastPointerHint = 0;
    this.interactTarget = null;
    this.currentShrine = null;
    this.chapterEndingShown = false;
    this._hudHidden = false;
    this.resize = this.resize.bind(this);
    window.addEventListener('resize', this.resize);
    this.loop = this.loop.bind(this);
    this._lastTime = performance.now();
  }

  /* ============================================================
     INIT
  ============================================================ */
  async init() {
    this.renderer = new THREE.WebGLRenderer({ canvas: this.canvas, antialias: true, powerPreference: 'high-performance', alpha: false });
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.4));
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    this.renderer.outputColorSpace = THREE.SRGBColorSpace;
    this.renderer.toneMapping = THREE.ACESFilmicToneMapping;
    this.renderer.toneMappingExposure = 1.12;
    this.renderer.shadowMap.enabled = false;

    this.scene = new THREE.Scene();
    this.scene.fog = new THREE.FogExp2(0x9aa49a, .0068);
    this.camera = new THREE.PerspectiveCamera(58, window.innerWidth / window.innerHeight, .08, 600);
    this.camera.position.set(0, 5, 100);

    const step = async (p, text, fn) => { this.ui.setLoading(p, text); await new Promise(r => setTimeout(r, 30)); fn?.(); };
    await step(.08, 'The kingdom remembers its shape…');
    await step(.22, 'Growing the First Grove…', () => { this.world = buildRegion(this.scene); });
    await step(.48, 'Casting the first shadows…', () => { this.effects = new Effects(this, this.scene); });
    await step(.62, 'Waking the hollow things…');
    // choose saved state for attract mode, but keep a pristine copy
    const saved = loadState();
    if (saved) this.state = saved;
    this.applyStateToPlayer(true);
    await step(.76, 'Lighting the shrines…', () => { this.resetActors(); });
    await step(.9, 'Sharpening the pipe…');
    await step(1, 'The crown is waiting.');
    this.ui.updateTitleSlot(hasSave(), saveSummary());
    this.ui.finishLoading();
    this.ui.showTitle();
    this.ui.hideHUD();
    this.mode = 'title';
    this.attractCamera = true;
    this.audio.setTheme('none');
    // expose for debugging / automated verification
    window.__HOLLOW_CROWN__ = this;
    requestAnimationFrame(this.loop);
  }

  resize() {
    if (!this.renderer) return;
    this.camera.aspect = window.innerWidth / window.innerHeight;
    this.camera.updateProjectionMatrix();
    this.renderer.setSize(window.innerWidth, window.innerHeight);
  }

  /* ============================================================
     STATE / PLAYER
  ============================================================ */
  applyStateToPlayer(fullHeal = true) {
    if (!this.player) {
      this.player = new Player(this, this.scene);
    }
    this.player.stats = this.state.player;
    this.player.setWeapon(this.state.player.equippedWeapon);
    this.player.setArmorVisual();
    this.player.recalcStats(fullHeal);
    if (!fullHeal) {
      this.player.hp = clamp(this.player.maxHp * (this.state.player.hpRatio ?? 1), this.player.maxHp * .25, this.player.maxHp);
      this.player.focus = this.player.maxFocus;
    }
    this.player.flaskUses = this.state.player.flaskUses ?? this.state.player.maxFlask;
    const pos = this.state.player.pos || { x: 7, z: 92 };
    this.player.pos.set(pos.x, heightAt(pos.x, pos.z), pos.z);
    this.player.yaw = this.state.player.yaw ?? Math.PI;
    this.player.pivot.rotation.set(0, 0, 0);
    this.player.root.position.copy(this.player.pos);
    this.player.root.rotation.y = this.player.yaw;
    this.ui.setMotes(this.state.player.motes);
    this.ui.setWeapon(WEAPONS[this.state.player.equippedWeapon]?.name || 'Metal Pipe');
    this.ui.setArmor(ARMOR[this.state.player.equippedArmor]?.name || 'Modern Hoodie');
    this.ui.setRegion(REGION_INFO.name, REGION_INFO.sub);
    this.ui.setObjective(this.objectiveText());
  }

  resetActors() {
    for (const e of this.enemies) e.dispose?.();
    this.enemies = [];
    if (this.boss) { this.boss.dispose?.(); this.boss = null; }
    for (const n of this.npcs) if (n.root?.parent) n.root.parent.remove(n.root);
    this.npcs = [];
    for (const p of this.projectiles) if (p.mesh.parent) p.mesh.parent.remove(p.mesh);
    this.projectiles = [];
    if (this.bloodstain?.mesh?.parent) this.bloodstain.mesh.parent.remove(this.bloodstain.mesh);
    this.bloodstain = null;
    this.lockTarget = null;
    this.hasLocket = false;

    // interactable states
    for (const c of this.world.chests) {
      const opened = this.state.openedChests?.includes(c.id);
      c.opened = !!opened;
      c.lid.rotation.x = opened ? -1.1 : -.08;
      c.glow.visible = !opened;
      c.group.userData.opened = !!opened;
    }
    for (const it of this.world.interactables) {
      if (it.kind === 'lore') {
        it.taken = this.state.lore.includes(it.id);
        it.group.visible = !it.taken;
      }
      if (it.kind === 'mote') {
        const idx = this.world.motes.indexOf(it);
        it.taken = this.state.collectedMotes?.includes('mote_' + idx);
        it.group.visible = !it.taken;
      }
    }
    for (let i = 0; i < this.world.motes.length; i++) {
      const m = this.world.motes[i];
      m.taken = this.state.collectedMotes?.includes('mote_' + i);
      m.group.visible = !m.taken;
    }
    this.world.locket.taken = this.hasLocket;
    this.world.locket.group.visible = this.state.quests.merchantQuest === 1 && !this.hasLocket;
    this.world.echo.group.visible = false;
    this.world.echo.taken = true;

    // enemies
    for (const sp of this.world.spawns) {
      if (sp.elite && this.state.flags.eliteDefeated) continue;
      this.spawnEnemy(sp.type, sp);
    }
    // boss
    if (!this.state.flags.bossDefeated) {
      this.boss = new HollowWoodsman(this);
      this.ui.hideBossBar();
      this.world.gate.group.visible = true;
      this.setGateColor(0xc7b6ff);
    } else {
      this.world.gate.group.visible = true;
      this.setGateColor(0x9fffe4);
    }
    // npcs
    for (const spot of this.world.npcSpots) this.npcs.push(new NPC(this, spot.id, spot.name, spot.x, spot.z, spot.yaw));
    if (this.state.flags.bossDefeated) this.createEcho();
    this.ui.setMotes(this.state.player.motes);
    if (this.bossIntro) { this.bossIntro = null; this.cinematic = false; this.ui.hideCinematic(); }
  }

  createEcho() {
    const echo = new NPC(this, 'echo', 'Malgraven, the Last Seer', 0, -98, 0);
    this.npcs.push(echo);
    this.echoNpc = echo;
    this.world.echo.group.visible = true;
  }

  setGateColor(color) {
    const g = this.world.gate;
    g.ring.material.color.setHex(color);
    g.glow.material.color.setHex(color);
    g.disc.material.color.setHex(color);
    g.group.children.forEach(c => { if (c.material?.color && c !== g.ring && c !== g.disc) c.material.color.setHex(color); });
  }

  /* ============================================================
     FLOW
  ============================================================ */
  startNewGame() {
    this.audio.init();
    this.audio.setTheme('title');
    this.state = defaultState();
    this.applyStateToPlayer(true);
    this.resetActors();
    this.mode = 'intro';
    this.ui.hideTitle();
    this.ui.showCinematic();
    this.ui.showCinematicTitle(true);
    this.ui.el['cinematic-title'].querySelector('p').textContent = 'Chapter I · The Forgotten Shire';
    this.ui.setCinematicLine('');
    this.intro = new IntroCinematic(this);
    this.introTime = 0;
    this.ui.el.fade.classList.add('on');
    this.ui.el.fade.style.opacity = '1';
    setTimeout(() => {
      if (this.mode !== 'intro') return;
      this.ui.el.fade.classList.remove('on');
      this.ui.el.fade.style.opacity = '0';
    }, 140);
    this.ui.setObjective('Find the First Shrine beneath the hollow tree.');
    this.player.respawn({ x: 7, z: 92 });
    this.player.invuln = 999;
    this.input.releaseLock();
    this.uiBlocking = false;
    this.cinematic = true;
    // hide title music overlay after 4s
    clearTimeout(this._titleTimer);
    this._titleTimer = setTimeout(() => this.ui.showCinematicTitle(false), 4200);
  }

  endIntro() {
    if (this.mode !== 'intro') return;
    clearTimeout(this._titleTimer);
    this.intro?.dispose();
    this.intro = null;
    this.mode = 'play';
    this.cinematic = false;
    this.ui.hideCinematic();
    this.ui.showHUD();
    this.ui.el.fade.classList.add('on');
    setTimeout(() => { this.ui.el.fade.classList.remove('on'); this.ui.el.fade.style.opacity = ''; }, 50);
    this.audio.setTheme('explore');
    this.state.flags.introSeen = true;
    this.player.invuln = 1.5;
    this.player.pos.set(7, heightAt(7, 92), 92);
    this.player.yaw = Math.PI;
    this.player.root.position.copy(this.player.pos);
    this.player.root.rotation.y = this.player.yaw;
    this.cameraRig.yaw = 0;
    this.cameraRig.pitch = .2;
    this.setCameraImmediate();
    this.ui.banner('THE FORGOTTEN SHIRE', 'Chapter I · Eldoria', 5200);
    this.ui.subtitle('You wake beneath a tree that was not there a moment ago. The rain has followed you.', 5);
    this.ui.setObjective(this.objectiveText());
    this.ui.hint('WASD to move · Mouse to look · Space to roll · Click to capture the mouse', 9);
    this.saveGame();
    this.updateTitleSlot();
  }

  continueGame() {
    const loaded = loadState();
    this.audio.init();
    if (loaded) this.state = loaded;
    else this.state = defaultState();
    this.ui.hideTitle();
    this.ui.showHUD();
    this.ui.el.fade.classList.add('on');
    setTimeout(() => { this.ui.el.fade.classList.remove('on'); }, 60);
    this.applyStateToPlayer(false);
    this.resetActors();
    this.mode = 'play';
    this.cinematic = false;
    this.uiBlocking = false;
    this.audio.setTheme('explore');
    const shrine = this.world.shrines.find(s => s.id === this.state.lastShrine) || this.world.shrines[0];
    if (shrine) {
      this.player.pos.set(shrine.x, heightAt(shrine.x, shrine.z + 3), shrine.z + 3);
      this.player.root.position.copy(this.player.pos);
    }
    this.cameraRig.yaw = this.player.yaw + Math.PI;
    this.cameraRig.pitch = .2;
    this.setCameraImmediate();
    this.ui.setObjective(this.objectiveText());
    this.ui.banner('THE FORGOTTEN SHIRE', 'You return to the last flame.', 4000);
    this.ui.hint('Click to capture the mouse', 5);
    this.setCameraImmediate();
    this.updateTitleSlot();
  }

  returnToTitle() {
    this.saveGame();
    this.mode = 'title';
    this.attractCamera = true;
    this.ui.showTitle();
    this.ui.hideHUD();
    this.ui.closeMenuUI();
    this.ui.hideEnding();
    this.uiBlocking = false;
    this.cinematic = false;
    this.input.releaseLock();
    this.audio.setTheme('title');
    this.lockTarget = null;
    this.updateTitleSlot();
    this.mode = 'title';
    this.player.respawn({ x: 7, z: 92 });
    this.player.invuln = 0;
  }

  updateTitleSlot() {
    this.ui.updateTitleSlot(hasSave(), saveSummary());
  }

  saveGame() {
    if (!this.player || this.mode === 'intro') return;
    this.state.player.pos = { x: this.player.pos.x, z: this.player.pos.z };
    this.state.player.yaw = this.player.yaw;
    this.state.player.hpRatio = clamp(this.player.hp / this.player.maxHp, .05, 1);
    this.state.player.flaskUses = this.player.stats.flaskUses;
    this.state.playtime = (this.state.playtime || 0) + this.playtime;
    this.playtime = 0;
    if (this.currentShrine) this.state.lastShrine = this.currentShrine;
    saveState(this.state);
  }

  saveAndQuit() {
    this.saveGame();
    this.returnToTitle();
    this.audio.ui();
  }

  /* ============================================================
     MAIN LOOP
  ============================================================ */
  loop(now) {
    requestAnimationFrame(this.loop);
    const raw = Math.min(.05, (now - this._lastTime) / 1000 || .016);
    this._lastTime = now;
    this.input.update();
    this.lastInputX = this.input.moveX; this.lastInputY = this.input.moveY;

    // real-time timers
    if (this.hitstopTimer > 0) this.hitstopTimer = Math.max(0, this.hitstopTimer - raw);
    if (this.slowmoTimer > 0) this.slowmoTimer = Math.max(0, this.slowmoTimer - raw);
    let dt = raw;
    if (this.hitstopTimer > 0) dt = raw * .03;
    else if (this.slowmoTimer > 0) dt = raw * this.slowmoScale;
    this.time += raw;

    if (this.mode === 'intro' && this.intro) {
      const intro = this.intro;
      intro.update(raw);
      this.introTime += raw;
      if (this.input.skip && this.introTime > 1.2) intro.finish();
      this.ui.update(raw);
      if (this.mode === 'intro' && this.intro === intro) {
        this.renderer.render(intro.scene, intro.camera);
      }
      this.input.endFrame();
      return;
    }

    if (this.mode === 'title') {
      this.updateTitleScene(raw);
      this.ui.update(raw);
      this.renderer.render(this.scene, this.camera);
      this.input.endFrame();
      return;
    }

    if (this.mode === 'ending') {
      this.updateSceneAmbient(raw);
      this.ui.update(raw);
      this.renderer.render(this.scene, this.camera);
      this.input.endFrame();
      return;
    }

    if (this.mode === 'dead') {
      this.deathTimer += raw;
      this.updateSceneAmbient(raw);
      if (this.boss && this.boss.active) this.boss.update(dt, this.player);
      this.player.updateDeath(raw);
      this.updateProjectiles(dt);
      this.effects.update(dt);
      this.updateCamera(dt);
      this.ui.update(raw);
      this.ui.updateEnemyBars(this.enemies);
      if (!this.deathScreenShown && this.deathTimer > 1.4) {
        this.deathScreenShown = true;
        const lost = this._lostMotes || 0;
        this.ui.showDeath(lost, this.deathLine());
      }
      this.renderer.render(this.scene, this.camera);
      this.input.endFrame();
      return;
    }

    // play / boss intro
    if (this.uiBlocking) {
      if (this.ui.currentMenu && (this.input.pause || this.input.confirm)) {
        if (this.input.pause) this.closeMenu();
      }
      this.updateSceneAmbient(raw);
      this.ui.update(raw);
      this.ui.updateEnemyBars(this.enemies);
      this.renderer.render(this.scene, this.camera);
      this.input.endFrame();
      return;
    }

    if (this.bossIntro) {
      this.updateBossIntro(raw);
      this.updateSceneAmbient(raw);
      this.boss?.update(raw, this.player);
      this.player.animTime += raw; this.player.animate(raw);
      this.ui.update(raw);
      this.renderer.render(this.scene, this.camera);
      this.input.endFrame();
      return;
    }

    if (this.cinematic) {
      this.updateSceneAmbient(raw);
      this.ui.update(raw);
      this.renderer.render(this.scene, this.camera);
      this.input.endFrame();
      return;
    }

    // handle pause quickly (player also handles, but this is reliable)
    if (this.input.pause) { this.openPause(); this.input.endFrame(); return; }

    this.playtime += raw;
    this.player.update(dt, this.input, this.cameraRig.yaw, this.ui);
    this.updateLock();
    for (const e of this.enemies) if (e.alive || e.deathTimer < 5.2) e.update(dt, this.player);
    if (this.boss) this.boss.update(dt, this.player);
    this.updateProjectiles(dt);
    this.effects.update(dt);
    this.world.update(this.time, raw);
    this.updatePickups();
    this.updateInteract();
    this.updateCamera(dt);
    this.updateBossTriggers();
    this.ui.update(raw);
    this.ui.updateVitals(this.player);
    this.ui.updateEnemyBars(this.enemies);
    this.ui.updateFloatTexts(raw);
    if (this.boss && this.boss.active) this.ui.updateBossBar();
    if (this.ui.eliteRef) this.ui.updateEliteBar();
    if (this.lockTarget) this.ui.showLock(this.lockTarget.pos.clone().add(new THREE.Vector3(0, this.lockTarget.isBoss ? 4 : 1.4, 0)));
    else this.ui.showLock(null);
    this.updateContextual();
    this.renderer.render(this.scene, this.camera);
    this.input.endFrame();
  }

  updateSceneAmbient(raw) {
    this.world.update(this.time, raw);
    for (const e of this.enemies) if (!e.alive) e.updateDeath(raw);
    if (this.boss && this.boss.dead) this.boss.updateDeath(raw);
    for (const n of this.npcs) n.update(raw, this.time);
    this.player.animTime += raw;
    if (this.mode !== 'dead') this.player.animate(raw);
    this.effects.update(raw);
  }

  updateTitleScene(raw) {
    this.attractTime += raw;
    this.world.update(this.time, raw);
    for (const n of this.npcs) n.update(raw, this.time);
    if (this.player) { this.player.animTime += raw; this.player.animate(raw); }
    const a = .35 + Math.sin(this.attractTime * .04) * .3;
    const target = new THREE.Vector3(-2, 2.4, 76);
    const r = 16;
    const x = target.x + Math.cos(a) * r;
    const z = target.z + Math.sin(a) * r;
    const y = 4.8 + Math.sin(this.attractTime * .15) * .5;
    this.camera.position.set(x, y, z);
    this.camera.lookAt(target);
    this.camera.fov = 52;
    this.camera.updateProjectionMatrix();
  }

  /* ============================================================
     CAMERA
  ============================================================ */
  get cameraRig() {
    if (!this._rig) this._rig = { yaw: 0, pitch: .2, distance: 5.9 };
    return this._rig;
  }

  updateCamera(dt) {
    if (this.intro) return;
    if (this.bossIntro) return;
    const rig = this.cameraRig;
    const p = this.player;
    if (!p) return;
    // mouse / stick look
    if (this.input.pointerLocked) {
      rig.yaw -= this.input.mouseDX * this.input.sensitivity * (this.settings.sensitivity || 1);
      rig.pitch += this.input.mouseDY * this.input.sensitivity * (this.settings.sensitivity || 1) * 1.1;
    }
    if (this.input.lookX) rig.yaw -= this.input.lookX * dt * 2.6;
    if (this.input.lookY) rig.pitch += this.input.lookY * dt * 1.6;
    rig.pitch = clamp(rig.pitch, .03, .72);

    const target = p.pos.clone().add(new THREE.Vector3(0, 1.62, 0));
    let dist = rig.distance;
    if (this.input.sprintHeld && (p.vel.x || p.vel.z) && !this.lockTarget) dist += .35;

    if (this.lockTarget && this.lockTarget.alive) {
      const t = this.lockTarget;
      const desired = Math.atan2(t.pos.x - p.pos.x, t.pos.z - p.pos.z) + Math.PI;
      rig.yaw = dampAngle(rig.yaw, desired, 5, dt);
      rig.pitch = damp(rig.pitch, t.isBoss ? .18 : .22, 3, dt);
      const targetPos = t.pos.clone().add(new THREE.Vector3(0, t.isBoss ? 4.2 : 1.1, 0));
      target.lerp(targetPos, .22);
    } else if (!this.input.pointerLocked && !p.sprinting && !(this.input.moveX || this.input.moveY)) {
      // gentle auto follow when idle without pointer lock
    }
    const horiz = Math.cos(rig.pitch) * dist;
    const off = new THREE.Vector3(Math.sin(rig.yaw) * horiz, Math.sin(rig.pitch) * dist + .35, Math.cos(rig.yaw) * horiz);
    let desiredPos = target.clone().add(off);
    // camera collision-ish
    const ground = heightAt(desiredPos.x, desiredPos.z);
    if (desiredPos.y < ground + .7) desiredPos.y = ground + .7;
    for (const c of this.world.colliders) {
      const dx = desiredPos.x - c.x, dz = desiredPos.z - c.z;
      if (Math.hypot(dx, dz) < c.r + .35) {
        const d = Math.hypot(dx, dz) || 1;
        desiredPos.x = c.x + dx / d * (c.r + .4);
        desiredPos.z = c.z + dz / d * (c.r + .4);
        desiredPos.y = Math.max(desiredPos.y, ground + 1.2);
      }
    }
    this.shakeAmount = Math.max(0, this.shakeAmount - dt * 2.5);
    if (this.shakeAmount > 0) {
      desiredPos.x += (Math.random() - .5) * this.shakeAmount;
      desiredPos.y += (Math.random() - .5) * this.shakeAmount;
      desiredPos.z += (Math.random() - .5) * this.shakeAmount;
    }
    this.camera.position.lerp(desiredPos, 1 - Math.exp(-10 * dt));
    const look = target.clone();
    if (this.lockTarget && this.lockTarget.alive) {
      look.lerp(this.lockTarget.pos.clone().add(new THREE.Vector3(0, this.lockTarget.isBoss ? 4.2 : 1.2, 0)), .55);
    }
    this.camera.lookAt(look);
    this.camera.fov = lerp(this.camera.fov, 58, 1 - Math.exp(-4 * dt));
    this.camera.updateProjectionMatrix();
    this.cameraRig.yaw = rig.yaw;
  }

  setCameraImmediate() {
    const rig = this.cameraRig;
    const p = this.player;
    if (!p) return;
    const target = p.pos.clone().add(new THREE.Vector3(0, 1.62, 0));
    const horiz = Math.cos(rig.pitch) * rig.distance;
    const off = new THREE.Vector3(Math.sin(rig.yaw) * horiz, Math.sin(rig.pitch) * rig.distance + .35, Math.cos(rig.yaw) * horiz);
    this.camera.position.copy(target.clone().add(off));
    this.camera.lookAt(target);
    this.camera.fov = 58; this.camera.updateProjectionMatrix();
  }

  shake(a) { this.shakeAmount = Math.max(this.shakeAmount, a); }
  hitstop(t) { this.hitstopTimer = Math.max(this.hitstopTimer, t); }
  slowmo(scale, dur) { this.slowmoScale = scale; this.slowmoTimer = dur; }

  /* ============================================================
     BOSS ENCOUNTER
  ============================================================ */
  updateBossTriggers() {
    if (!this.boss || this.state.flags.bossDefeated || this.bossIntro) return;
    const d = Math.hypot(this.player.pos.x - ARENA.x, this.player.pos.z - ARENA.z);
    if (d < ARENA.r - 1 || this.player.pos.z < -74) this.beginBossEncounter();
  }

  beginBossEncounter() {
    if (!this.boss || this.state.flags.bossDefeated || this.bossIntro) return;
    this.bossIntro = { t: 0 };
    this.bossIntro.t = 0;
    this.cinematic = true;
    this.input.releaseLock();
    this.lockTarget = null;
    this.boss.beginIntro();
    this.ui.showCinematic();
    this.ui.setCinematicLine('<span style="font-family:var(--serif);font-size:30px;letter-spacing:.18em;font-style:normal;color:#e7cd92">THE HOLLOW WOODSMAN</span><br><span style="font-size:12px;letter-spacing:.28em;color:#9d917b">KEEPER OF THE FIRST GROVE</span>');
    this.ui.setObjective('Defeat the Hollow Woodsman.');
    this.audio.setTheme('boss');
    this.audio.roar();
    this.shake(.4);
  }

  updateBossIntro(raw) {
    const bi = this.bossIntro;
    if (!bi) return;
    bi.t += raw;
    this.bossIntroTime = bi.t;
    const boss = this.boss;
    // camera orbit around the boss
    const t = bi.t;
    const k = clamp(t / 7.5, 0, 1);
    const angle = -0.55 + k * 1.35;
    const radius = 19 - k * 8;
    const pos = boss.pos.clone().add(new THREE.Vector3(Math.sin(angle) * radius, 5.5 + Math.sin(k * Math.PI) * 3, Math.cos(angle) * radius));
    pos.y = Math.max(pos.y, heightAt(pos.x, pos.z) + 1.2);
    this.camera.position.lerp(pos, 1 - Math.exp(-2.5 * raw));
    this.camera.lookAt(boss.pos.clone().add(new THREE.Vector3(0, 4.4, 0)));
    this.camera.fov = lerp(this.camera.fov, 46, 1 - Math.exp(-2 * raw));
    this.camera.updateProjectionMatrix();
    if (t > 4.9 && !boss.active) {
      boss.activate();
      this.ui.setCinematicLine('<span style="font-family:var(--serif);font-size:22px;letter-spacing:.2em;font-style:normal;color:#e7cd92">THE GROVE HAS NOT FORGOTTEN YOU.</span>');
      this.audio.roar();
      this.shake(.7);
    }
    if (t > 7.4 || (this.input.skip && t > 1)) {
      if (!boss.active) boss.activate();
      this.endBossIntro();
    }
  }

  endBossIntro() {
    this.bossIntro = null;
    this.cinematic = false;
    this.ui.hideCinematic();
    this.ui.showHUD();
    this.ui.setObjective('Defeat the Hollow Woodsman.');
    this.ui.hint('Lock on with Tab · Roll through his attacks · Punish after the tree flares', 7);
    this.cameraRig.yaw = Math.atan2(this.boss.pos.x - this.player.pos.x, this.boss.pos.z - this.player.pos.z) + Math.PI;
    this.setCameraImmediate();
    this.audio.setTheme('boss');
    this.input.requestLock();
  }

  /* ============================================================
     INTERACTION / PICKUPS
  ============================================================ */
  updatePickups() {
    const p = this.player;
    for (let i = 0; i < this.world.motes.length; i++) {
      const m = this.world.motes[i];
      if (m.taken) continue;
      if (Math.hypot(p.pos.x - m.x, p.pos.z - m.z) < 2.2) {
        m.taken = true; m.group.visible = false;
        if (!this.state.collectedMotes) this.state.collectedMotes = [];
        this.state.collectedMotes.push('mote_' + i);
        this.addMotes(m.amount, m.group.position);
        this.audio.pickup();
      }
    }
    if (this.world.locket && !this.world.locket.taken && this.state.quests.merchantQuest === 1) {
      const l = this.world.locket;
      if (Math.hypot(p.pos.x - l.x, p.pos.z - l.z) < 2.4) {
        l.taken = true; l.group.visible = false; this.hasLocket = true;
        this.state.quests.merchantQuest = 2;
        this.ui.toast('Wren\'s Locket recovered', 'gold');
        this.ui.floatText(l.group.position, 'WREN\'S LOCKET', 'item');
        this.audio.pickup();
      }
    }
    if (this.bloodstain) {
      const b = this.bloodstain;
      if (Math.hypot(p.pos.x - b.x, p.pos.z - b.z) < 2.4) {
        this.addMotes(b.amount, b.mesh.position);
        this.ui.toast(`Recovered ${b.amount} motes`, 'gold');
        this.audio.souls();
        if (b.mesh.parent) b.mesh.parent.remove(b.mesh);
        this.bloodstain = null;
      }
    }
  }

  updateInteract() {
    const p = this.player;
    let best = null, bd = 1e9;
    const consider = (obj, radius, text, action) => {
      const d = Math.hypot(p.pos.x - obj.x, p.pos.z - obj.z);
      if (d < radius && d < bd) { bd = d; best = { obj, text, action }; }
    };
    for (const n of this.npcs) consider(n, 3.2, `Speak with ${n.id === 'marrow' ? 'Marrow' : n.id === 'wisp' ? 'the Wisp' : 'the Seer\'s Echo'}`, () => this.openDialogue(n));
    for (const s of this.world.shrines) consider(s, 4.4, `Rest at ${s.name}`, () => this.openShrine(s));
    for (const c of this.world.chests) if (!c.opened) consider(c, 2.9, 'Open the chest', () => this.openChest(c));
    for (const l of this.world.interactables) if (l.kind === 'lore' && !l.taken) consider(l, 2.7, 'Read the recovered page', () => this.readLore(l));
    if (this.world.gate.group.visible) {
      const g = this.world.gate;
      consider(g, 4.8, this.state.flags.bossDefeated ? 'Touch the Weeping Gate' : 'Enter the First Grove', () => this.useGate());
    }
    if (this.bloodstain) consider(this.bloodstain, 2.8, 'Recover your lost motes', () => {
      this.addMotes(this.bloodstain.amount, this.bloodstain.mesh.position);
      this.audio.souls();
      if (this.bloodstain.mesh.parent) this.bloodstain.mesh.parent.remove(this.bloodstain.mesh);
      this.bloodstain = null;
    });
    this.interactTarget = best;
    this.ui.setInteract(best ? best.text : null);
    if (this.input.interact && best) { best.action(); this.input.consumePressed('KeyE'); this.input.consumePressed('GP2'); }
  }

  tryInteract() {
    if (this.interactTarget) this.interactTarget.action();
  }

  openChest(chest) {
    if (chest.opened) return;
    chest.opened = true;
    chest.lid.rotation.x = -1.1;
    chest.glow.visible = false;
    if (!this.state.openedChests) this.state.openedChests = [];
    this.state.openedChests.push(chest.id);
    this.audio.pickup();
    this.ui.toast('Chest opened', 'gold');
    const loot = {
      chest_sword: () => { this.addWeapon('rustySword'); this.addMotes(160); },
      chest_armor: () => { this.addArmor('leather'); this.addItem('emberBomb', 2); },
      chest_greatsword: () => { this.addWeapon('greatsword'); },
      chest_staff: () => { this.addWeapon('staff'); this.unlockSpell(); this.addItem('emberBomb', 1); },
    }[chest.id];
    loot?.();
  }

  readLore(obj) {
    if (obj.taken) return;
    obj.taken = true; obj.group.visible = false;
    if (!this.state.lore.includes(obj.id)) this.state.lore.push(obj.id);
    this.audio.pickup();
    const lore = LORE.find(l => l.id === obj.id);
    this.ui.toast(`Recovered: ${lore?.title || 'a torn page'}`, 'gold');
    this.ui.floatText(obj.group.position, 'PAGE RECOVERED', 'item');
    if (this.state.lore.length === 3) {
      this.ui.toast('The truth stirs. The Wisp will want to speak with you.', 'gold');
      this.ui.banner('THE VEIL THINS', 'Three pages of Eldoria\'s truth recovered. A third path is now visible.', 5000);
    }
    this.openLoreUI(obj.id);
  }

  openLoreUI(id) {
    this.uiBlocking = true;
    this.uiBlockingKind = 'menu';
    this.input.releaseLock();
    this.ui.showLore(id);
    this.ui.currentMenu = { title: 'LORE', lore: true };
  }

  openDialogue(npc) {
    this.uiBlocking = true;
    this.uiBlockingKind = 'dialogue';
    this.input.releaseLock();
    this.ui.openDialogue(npc);
    this.audio.ui();
  }
  closeDialogue() {
    this.uiBlocking = false;
    this.uiBlockingKind = null;
    this.ui.dialogueState = null;
    this.ui.el.dialogue.classList.add('hidden');
  }
  dialogueAction(action, npc) {
    if (action === 'close') { this.ui.closeDialogue(); return; }
    if (action === 'shop') { this.ui.closeDialogue(); this.openShop(); return; }
    if (action === 'quest_accept') {
      this.state.quests.merchantQuest = 1;
      this.world.locket.group.visible = true;
      this.ui.toast('Quest accepted: A Silver Bird', 'gold');
      this.ui.setObjective('Find Wren\'s locket by the graves west of the village.');
      this.saveGame();
      this.ui.closeDialogue(); return;
    }
    if (action === 'quest_complete') {
      if (!this.hasLocket) { this.ui.closeDialogue(); return; }
      this.state.quests.merchantQuest = 3;
      this.addMotes(600);
      this.addArmor('leather');
      this.ui.toast('Quest complete: A Silver Bird', 'gold');
      this.ui.toast('Received Traveler\'s Jerkin', 'gold');
      this.ui.banner('A SMALL KINDNESS', 'Marrow will remember this.', 4000);
      this.ui.setObjective(this.objectiveText());
      this.saveGame();
      this.ui.closeDialogue(); return;
    }
    if (action === 'endings') {
      this.ui.closeDialogue();
      this.openEndings();
      return;
    }
  }

  openShrine(shrine) {
    this.uiBlocking = true;
    this.uiBlockingKind = 'menu';
    this.input.releaseLock();
    this.currentShrine = shrine.id;
    const body = `
      <div class="menu-columns">
        <div>
          <div class="panel-title">${shrine.name.toUpperCase()}</div>
          <p style="font-size:14px;line-height:1.65;color:#a99e88;font-style:italic">The flame bends toward you. Somewhere beneath the ash, something old is listening.</p>
          <div class="stat-row" style="margin-top:16px"><span>Level</span><b>${this.state.player.level}</b></div>
          <div class="stat-row"><span>Motes</span><b>${Math.floor(this.state.player.motes).toLocaleString('en-US')}</b></div>
          <div class="stat-row"><span>Flask</span><b>${this.player?.stats.flaskUses ?? 0} / ${this.state.player.maxFlask}</b></div>
          <div class="stat-row"><span>Deaths</span><b>${this.state.deaths}</b></div>
          <div class="panel-title" style="margin-top:22px">REST</div>
          <p style="font-size:12px;line-height:1.6;color:#857d6d;font-style:italic">Resting restores health and flask charges, and calls the hollow things back to their places. All ordinary enemies will return.</p>
        </div>
        <div>
          <div class="panel-title">THE FLAME</div>
          <div class="shrine-actions">
            <button class="menu-btn primary" data-sh="rest">REST &amp; SAVE</button>
            <button class="menu-btn" data-sh="level">LEVEL UP</button>
            <button class="menu-btn" data-sh="leave">LEAVE</button>
          </div>
          <p class="shrine-note">“The shrine remembers. That is all a shrine can do.”</p>
        </div>
      </div>`;
    this.ui.openMenu(shrine.name.toUpperCase(), body, `<span>${this.objectiveText()}</span><span>E to close</span>`, true);
    this.ui.el['menu-body'].querySelector('[data-sh="rest"]').addEventListener('click', () => this.restAtShrine(shrine));
    this.ui.el['menu-body'].querySelector('[data-sh="level"]').addEventListener('click', () => { this.ui.showLevelUp(); });
    this.ui.el['menu-body'].querySelector('[data-sh="leave"]').addEventListener('click', () => this.closeMenu());
    this.audio.ui();
  }

  restAtShrine(shrine) {
    this.currentShrine = shrine.id;
    this.state.lastShrine = shrine.id;
    this.state.flags.firstShrine = true;
    this.player.hp = this.player.maxHp;
    this.player.stamina = this.player.maxStamina;
    this.player.focus = this.player.maxFocus;
    this.player.stats.flaskUses = this.state.player.maxFlask;
    this.state.player.hpRatio = 1;
    this.player.pos.set(shrine.x, heightAt(shrine.x, shrine.z + 3.3), shrine.z + 3.3);
    this.player.root.position.copy(this.player.pos);
    this.player.vel.set(0, 0, 0);
    this.resetEnemiesOnly();
    if (this.boss && !this.state.flags.bossDefeated) this.resetBoss();
    this.state.player.pos = { x: this.player.pos.x, z: this.player.pos.z };
    this.saveGame();
    this.ui.closeMenuUI();
    this.uiBlocking = false;
    this.uiBlockingKind = null;
    this.ui.banner(shrine.name.toUpperCase(), 'The flame is lit. You are restored.', 4000);
    this.ui.toast('Game saved', 'gold');
    this.audio.levelup();
    this.ui.setObjective(this.objectiveText());
    this.input.requestLock();
  }

  resetEnemiesOnly() {
    for (const e of this.enemies) e.dispose?.();
    this.enemies = [];
    for (const sp of this.world.spawns) {
      if (sp.elite && this.state.flags.eliteDefeated) continue;
      this.spawnEnemy(sp.type, sp);
    }
    this.ui.hideEliteBar();
  }

  levelUp(attr) {
    const cost = this.levelCost();
    const s = this.state.player;
    if (s.motes < cost) { this.ui.toast('Not enough motes', 'blood'); return false; }
    s.motes -= cost;
    s[attr]++;
    s.level++;
    this.player.recalcStats(false);
    this.player.hp = Math.min(this.player.maxHp, this.player.hp + this.player.maxHp * .18);
    this.ui.setMotes(s.motes);
    this.audio.levelup();
    this.ui.toast(`Level ${s.level} · ${attr.toUpperCase()} increased`, 'gold');
    this.saveGame();
    return true;
  }
  levelCost() {
    const l = this.state.player.level;
    return Math.round(70 + l * 44 + Math.pow(l, 1.45) * 4);
  }

  openShop() {
    this.uiBlocking = true;
    this.uiBlockingKind = 'menu';
    this.input.releaseLock();
    this.ui.showShop();
  }

  shopStock() {
    return [
      { id: 'rustySword', type: 'weapon', name: 'Rusted Longsword', desc: 'Straight sword · reliable · 31 damage', price: 420 },
      { id: 'spear', type: 'weapon', name: 'Briar Spear', desc: 'Spear · long reach · 26 damage', price: 520 },
      { id: 'bow', type: 'weapon', name: 'Weeping Shortbow', desc: 'Bow · ranged · 22 damage', price: 700 },
      { id: 'staff', type: 'weapon', name: 'Seer\'s Ember Staff', desc: 'Staff · casts Ember Bolt · 18 damage', price: 1100 },
      { id: 'leather', type: 'armor', name: 'Traveler\'s Jerkin', desc: 'Light armor · 7 defense · 12 poise', price: 380 },
      { id: 'veil', type: 'armor', name: 'Ashen Veil', desc: 'Medium armor · 11 defense · 18 poise', price: 640 },
      { id: 'emberBomb', type: 'item', name: 'Ember Bomb', desc: 'A clay vessel of sleeping fire.', price: 180 },
      { id: 'goldenEmber', type: 'item', name: 'Golden Ember', desc: 'Permanently adds one flask charge.', price: 1200 },
    ];
  }

  buy(id, kind) {
    const s = this.state.player;
    const stock = this.shopStock().find(i => i.id === id && i.type === kind);
    if (!stock || s.motes < stock.price) return false;
    if (kind === 'weapon' && s.weapons.includes(id)) return false;
    if (kind === 'armor' && s.armor.includes(id)) return false;
    if (id === 'goldenEmber' && s.maxFlask >= 6) { this.ui.toast('The flask cannot hold more fire', 'blood'); return false; }
    s.motes -= stock.price;
    if (kind === 'weapon') this.addWeapon(id);
    else if (kind === 'armor') this.addArmor(id);
    else if (id === 'goldenEmber') { s.maxFlask++; s.flaskUses = s.maxFlask; this.ui.toast('The Ashen Flask has grown', 'gold'); }
    else this.addItem(id, 1);
    this.ui.setMotes(s.motes);
    this.audio.pickup();
    this.ui.toast(`${stock.name} acquired`, 'gold');
    this.saveGame();
    return true;
  }

  openInventory() {
    this.uiBlocking = true; this.uiBlockingKind = 'menu'; this.input.releaseLock();
    this.ui.showInventory();
  }
  openMap() {
    this.uiBlocking = true; this.uiBlockingKind = 'menu'; this.input.releaseLock();
    this.ui.showMap();
  }
  openPause() {
    if (this.mode !== 'play' || this.cinematic) return;
    this.uiBlocking = true; this.uiBlockingKind = 'menu';
    this.input.releaseLock();
    this.state.playtime = (this.state.playtime || 0) + this.playtime;
    this.playtime = 0;
    this.ui.showPause(`Last shrine: ${this.world.shrines.find(s => s.id === this.state.lastShrine)?.name || 'None'} · ${this.state.deaths} deaths`);
    this.audio.ui();
  }
  menuAction(act) {
    this.audio.ui();
    if (act === 'resume') this.closeMenu();
    else if (act === 'inventory') this.ui.showInventory();
    else if (act === 'map') this.ui.showMap();
    else if (act === 'controls') this.ui.showControls();
    else if (act === 'savequit') this.saveAndQuit();
  }
  closeMenu() {
    this.ui.closeMenuUI();
    this.ui.hideControls();
    this.uiBlocking = false;
    this.uiBlockingKind = null;
    this.currentShrine = null;
    if (this.mode === 'play' && !this.cinematic) this.input.requestLock();
  }

  openEndings() {
    this.closeDialogueSilently();
    this.uiBlocking = true; this.uiBlockingKind = 'menu';
    this.input.releaseLock();
    this.state.flags.seerEchoSeen = true;
    this.ui.showEndings({ veil: this.state.lore.length >= 3 });
  }

  closeDialogueSilently() {
    this.ui.dialogueState = null;
    this.ui.el.dialogue.classList.add('hidden');
  }

  chooseEnding(id) {
    const ending = ENDINGS[id];
    if (!ending) return;
    if (id === 'veil' && this.state.lore.length < 3) return;
    this.state.ending = id;
    if (!this.state.seenEndings) this.state.seenEndings = [];
    if (!this.state.seenEndings.includes(id)) this.state.seenEndings.push(id);
    this.uiBlocking = false;
    this.uiBlockingKind = null;
    this.ui.closeMenuUI();
    this.ui.hideHUD();
    this.mode = 'ending';
    this.cinematic = false;
    this.input.releaseLock();
    this.audio.setTheme('victory');
    this.audio.levelup();
    this.ui.showEnding(ending);
    this.saveGame();
  }

  returnToThreshold() {
    this.ui.hideEnding();
    this.returnToTitle();
  }

  openChapterEnd() {
    this.uiBlocking = true; this.uiBlockingKind = 'menu';
    this.input.releaseLock();
    const body = `
      <div style="text-align:center;padding:12px 6px 4px">
        <div class="ending-kicker">CHAPTER I COMPLETE</div>
        <h1 style="font-family:var(--serif);font-weight:400;font-size:42px;letter-spacing:.12em;color:#e7cd92;margin:8px 0">THE WEEPING WILDS</h1>
        <div class="ending-rule"></div>
        <p style="font-size:16px;line-height:1.7;color:#b9ae9a;font-style:italic;max-width:560px;margin:0 auto">
          Beyond the gate, the shire gives way to a forest of enormous mushrooms, glowing spores, and a queen who loves her children very much. The road to Ashenveil lies deeper still — and beneath it all, the Devourer turns in its sleep.
        </p>
        <p style="font-size:12px;line-height:1.6;color:#7d7567;font-style:italic;margin-top:22px">
          This is the end of the playable vertical slice. Regions II–VI, the final boss, and the full campaign are sealed beyond the gate.
        </p>
      </div>`;
    this.ui.openMenu('THE WEEPING WILDS', body, '<span>Chapter II awaits.</span><span>“Do not let the forest eat your name.”</span>', true);
    const footer = this.ui.el['menu-footer'];
    const actions = document.createElement('div');
    actions.style.cssText = 'display:flex;gap:8px;flex-wrap:wrap;width:100%;margin-top:8px';
    const b1 = document.createElement('button'); b1.className = 'menu-btn'; b1.textContent = 'WITNESS THE THREE THREADS'; b1.onclick = () => this.openEndings();
    const b2 = document.createElement('button'); b2.className = 'menu-btn'; b2.textContent = 'REMAIN IN THE SHIRE'; b2.onclick = () => this.closeMenu();
    const b3 = document.createElement('button'); b3.className = 'menu-btn'; b3.textContent = 'RETURN TO TITLE'; b3.onclick = () => this.returnToTitle();
    actions.append(b1, b2, b3);
    this.ui.el['menu-body'].appendChild(actions);
  }

  useGate() {
    if (!this.state.flags.bossDefeated) {
      this.beginBossEncounter();
    } else {
      this.openChapterEnd();
      this.audio.gate();
    }
  }

  objectiveText() {
    if (this.state.flags.bossDefeated) return 'The First Grove is free. Touch the Weeping Gate and leave the Shire behind.';
    if (this.boss && (this.boss.active || this.bossIntro)) return 'Defeat the Hollow Woodsman.';
    if (this.state.quests.merchantQuest === 1) return 'Find Wren\'s locket by the graves west of the village.';
    if (!this.state.flags.firstShrine) return 'Find the First Shrine beneath the hollow tree.';
    return 'Follow the road north. The Hollow Woodsman waits in the First Grove.';
  }

  /* ============================================================
     SPAWNING
  ============================================================ */
  spawnEnemy(type, sp) {
    const e = new Enemy(this, type, sp);
    this.enemies.push(e);
    return e;
  }

  /* ============================================================
     COMBAT
  ============================================================ */
  playerMeleeHit(player, heavy, weapon) {
    const dmgBase = heavy ? player.heavyPower : player.attackPower;
    const range = weapon.range;
    const poise = heavy ? weapon.poise * 1.35 : weapon.poise;
    let hit = false;
    for (const e of this.enemies) {
      if (!e.alive || player.hasHitThisSwing.has(e)) continue;
      const dx = e.pos.x - player.pos.x, dz = e.pos.z - player.pos.z;
      const d = Math.hypot(dx, dz);
      if (d > range + e.radius) continue;
      const ang = Math.abs(angleDelta(player.yaw, Math.atan2(dx, dz)));
      if (ang > (heavy ? 1.35 : 1.0)) continue;
      player.hasHitThisSwing.add(e);
      // backstab
      const behind = Math.abs(angleDelta(e.yaw, Math.atan2(player.pos.x - e.pos.x, player.pos.z - e.pos.z))) > 2.0;
      const backstab = behind && !e.aggro;
      let dmg = dmgBase * (heavy ? 1 : (player.combo === 3 ? 1.35 : 1));
      if (backstab) { dmg *= (weapon.crit || 1.5) * 1.4; }
      e.takeDamage(dmg, player.pos, { poise, source: player, critical: backstab });
      if (backstab) { this.ui.toast('BACKSTAB', 'gold'); this.hitstop(.08); this.slowmo(.7, .25); }
      hit = true;
    }
    if (this.boss && this.boss.active && !this.boss.dead && !player.hasHitThisSwing.has('boss')) {
      const b = this.boss;
      const dx = b.pos.x - player.pos.x, dz = b.pos.z - player.pos.z;
      const d = Math.hypot(dx, dz);
      if (d < range + 2.4) {
        const ang = Math.abs(angleDelta(player.yaw, Math.atan2(dx, dz)));
        if (ang < 1.1) {
          player.hasHitThisSwing.add('boss');
          b.takeDamage(dmgBase * (heavy ? 1.05 : 1), player.pos, { poise, source: player });
          hit = true;
        }
      }
    }
    if (hit) {
      this.hitstop(.055);
      this.shake(heavy ? .32 : .16);
      this.audio.hit(false);
    }
  }

  tryCritical() {
    let target = null, best = 1e9;
    for (const e of this.enemies) {
      if (!e.alive || !e.canBeCrit) continue;
      const d = Math.hypot(e.pos.x - this.player.pos.x, e.pos.z - this.player.pos.z);
      if (d < 3.3 && d < best) { best = d; target = e; }
    }
    if (this.boss && this.boss.canCrit?.()) {
      const d = Math.hypot(this.boss.pos.x - this.player.pos.x, this.boss.pos.z - this.player.pos.z);
      if (d < 7 && d < best) { target = this.boss; }
    }
    if (target) { this.player.startCritical(target); this.ui.hideContextual(); }
  }

  updateContextual() {
    if (this.player.busy) { this.ui.hideContextual(); return; }
    let near = null, bd = 1e9;
    for (const e of this.enemies) {
      if (!e.alive || !e.canBeCrit) continue;
      const d = Math.hypot(e.pos.x - this.player.pos.x, e.pos.z - this.player.pos.z);
      if (d < 3.2 && d < bd) { bd = d; near = e; }
    }
    if (this.boss && this.boss.canCrit?.()) {
      const d = Math.hypot(this.boss.pos.x - this.player.pos.x, this.boss.pos.z - this.player.pos.z);
      if (d < 7) near = this.boss;
    }
    if (near) this.ui.contextual('C — CRITICAL BLOW'); else this.ui.hideContextual();
  }

  onPerfectDodge() {
    this.slowmo(.3, .45);
    this.ui.toast('PERFECT DODGE', 'gold');
    this.ui.contextual('PERFECT DODGE');
    setTimeout(() => this.ui.hideContextual(), 900);
    this.audio.parry();
    this.input.rumble?.(0.15, 0.45, 90);
  }

  onParry(source) {
    this.slowmo(.25, .5);
    this.ui.toast('PARRY', 'gold');
    if (source && source.stagger) source.stagger(1.9, this.player);
    if (source === this.boss) this.boss.stagger?.();
    this.spawnSparkBurst(this.player.pos.clone().add(new THREE.Vector3(0, 1.3, 0)), 18);
    this.hitstop(.08);
    this.shake(.25);
    this.input.rumble?.(0.55, 0.35, 150);
  }

  onPlayerHurt(amount, fromPos) {
    this.ui.damageFlash();
    this.shake(.26);
    this.audio.hit(false);
    this.hitstop(.04);
    this.input.rumble?.(Math.min(0.9, 0.35 + amount / 120), 0.3, 170);
  }

  onEnemyKilled(enemy) {
    if (enemy.def.elite) {
      this.state.flags.eliteDefeated = true;
      this.ui.toast('The Briar Warden has fallen', 'gold');
      this.saveGame();
    }
  }

  onPlayerDeath() {
    this.state.deaths++;
    const lost = Math.floor(this.state.player.motes);
    this._lostMotes = lost;
    this.state.player.motes = 0;
    this.ui.setMotes(0);
    this.mode = 'dead';
    this.deathTimer = 0;
    this.deathScreenShown = false;
    this.lockTarget = null;
    this.input.releaseLock();
    // drop bloodstain
    if (lost > 0) {
      this.dropBloodstain(lost);
    }
    this.audio.setTheme('none');
  }

  dropBloodstain(amount) {
    if (this.bloodstain?.mesh?.parent) this.bloodstain.mesh.parent.remove(this.bloodstain.mesh);
    const group = new THREE.Group();
    const glow = makeGlowSprite(0xffcf6e, 3.2); glow.position.y = .8; group.add(glow);
    const core = new THREE.Mesh(new THREE.OctahedronGeometry(.22), new THREE.MeshBasicMaterial({ color: 0xffe6a8 }));
    core.position.y = .8; group.add(core);
    const point = new THREE.PointLight(0xffb44a, 1.4, 8, 2); point.position.y = 1; group.add(point);
    group.position.set(this.player.pos.x, heightAt(this.player.pos.x, this.player.pos.z), this.player.pos.z);
    this.scene.add(group);
    this.bloodstain = { mesh: group, x: this.player.pos.x, z: this.player.pos.z, amount, core };
  }

  deathLine() {
    const lines = [
      'The shire remembers your name. It will not remember your face.',
      'The roots drink deep. They are always thirsty.',
      'You were not the first traveler. You will not be the last.',
      'The crown is hollow. So is the ground beneath it.',
    ];
    return choose(lines);
  }

  respawn() {
    this.ui.hideDeath();
    this.deathScreenShown = false;
    this.deathTimer = 0;
    const shrine = this.world.shrines.find(s => s.id === this.state.lastShrine) || this.world.shrines[0];
    const pos = shrine ? { x: shrine.x, z: shrine.z + 3.3 } : { x: 7, z: 92 };
    this.player.respawn(pos, shrine);
    this.player.invuln = 2;
    this.state.player.hpRatio = 1;
    this.state.player.flaskUses = this.state.player.maxFlask;
    this.mode = 'play';
    this.cinematic = false;
    this.ui.showHUD();
    this.ui.el.fade.classList.add('on');
    setTimeout(() => this.ui.el.fade.classList.remove('on'), 80);
    this.resetEnemiesOnly();
    if (this.boss && !this.state.flags.bossDefeated) {
      this.resetBoss();
    }
    this.audio.setTheme('explore');
    this.cameraRig.yaw = this.player.yaw + Math.PI;
    this.setCameraImmediate();
    this.ui.setObjective(this.objectiveText());
    this.saveGame();
    this.input.requestLock();
    this.audio.levelup();
  }

  resetBoss() {
    if (this.boss) { this.boss.dispose?.(); this.boss = null; }
    this.boss = new HollowWoodsman(this);
    this.bossIntro = null;
    this.cinematic = false;
    this.ui.hideCinematic();
    this.ui.hideBossBar();
    this.world.gate.group.visible = true;
    this.setGateColor(0xc7b6ff);
  }

  onBossDeath(boss) {
    if (this.rewardGiven) return;
    this.rewardGiven = true;
    this.state.flags.bossDefeated = true;
    this.state.flags.gateOpened = true;
    this.state.player.motes += 3000;
    this.ui.setMotes(this.state.player.motes);
    this.addWeapon('woodsmanAxe');
    this.addArmor('mantle');
    this.addItem('sigil', 1);
    this.ui.toast('The Hollow Woodsman has fallen', 'gold');
    this.ui.toast('Woodsman\'s Axe acquired', 'gold');
    this.ui.toast('Heartwood Mantle acquired', 'gold');
    this.ui.toast('3,000 motes absorbed', 'gold');
    this.ui.setObjective('Return to the gate. The Weeping Wilds await.');
    this.ui.banner('GREAT ENEMY FELLED', 'The Hollow Woodsman has fallen. The First Grove is free.', 7000);
    this.setGateColor(0x9fffe4);
    this.world.gate.group.visible = true;
    this.createEcho();
    this.audio.setTheme('victory');
    this.saveGame();
    this.updateTitleSlot();
    setTimeout(() => {
      if (this.mode === 'play') this.ui.subtitle('The gate opens. Something on the other side is singing.', 6);
    }, 3500);
    this.input.releaseLock();
  }

  showBanner(t, s) { this.ui.banner(t, s); }
  showBossBar(boss) { this.ui.showBossBar(boss); }
  updateBossBar() { if (this.boss) this.ui.updateBossBar(); else this.ui.updateEliteBar(); }
  setBossPhase(n) { this.ui.setBossPhase(n); }
  hideBossBar() { this.ui.hideBossBar(); }
  showEliteBar(e) { this.ui.showEliteBar(e); }
  hideEliteBar() { this.ui.hideEliteBar(); }
  showContextual(t) { this.ui.contextual(t); }
  hideContextual() { this.ui.hideContextual(); }
  toast(t, type) { this.ui.toast(t, type); }
  floatText(pos, text, type) { this.ui.floatText(pos, text, type); }
  spawnHealBurst(pos) { this.effects.heal(pos); }
  spawnBloodBurst(pos, n, c) { this.effects.blood(pos, n, c); }
  spawnSparkBurst(pos, n) { this.effects.sparks(pos, n); }
  spawnSoulBurst(pos, n) { this.effects.souls(pos, n); }
  spawnAttackArc(enemy, range, color) { this.effects.arc(enemy.pos, enemy.yaw, range, color); }
  bossTelegraph(boss, kind) {
    if (kind === 'slam') this.effects.telegraph(boss.pos, 7, 1.25, 0xff4a2a, () => {});
    else if (kind === 'roots') this.effects.swirl(boss.pos, 0x9c5cff, 5);
  }
  bossArcEffect(pos, yaw, range, color) { this.effects.arc(pos, yaw, range, color); }
  bossShockwave(pos) { this.effects.ring(pos, 0xff7a3a, { radius: 15, duration: .8 }); }
  bossRootRing(pos, color) { this.effects.rootRing(pos, color); }
  bossRootEruption(origin, target, count, damage) {
    for (let i = 0; i < count; i++) {
      const a = rand(0, Math.PI * 2), r = rand(0, 5);
      const p = new THREE.Vector3(target.x + Math.cos(a) * r, 0, target.z + Math.sin(a) * r);
      this.effects.telegraph(p, 2.3, 1.0 + i * .14, 0x9c5cff, () => {
        this.effects.spikes(p, 0x9c5cff, 2.2);
        if (Math.hypot(this.player.pos.x - p.x, this.player.pos.z - p.z) < 2.4 && !this.player.dead) {
          this.player.takeDamage(damage, p, { source: this.boss, aoe: true });
        }
      });
    }
  }
  bossSummon(boss, n) {
    for (let i = 0; i < n; i++) {
      const a = rand(0, Math.PI * 2), r = rand(4, 8);
      const sp = { x: boss.pos.x + Math.cos(a) * r, z: boss.pos.z + Math.sin(a) * r, patrol: 2 };
      const e = this.spawnEnemy('villager', sp);
      e.aggro = true; e.setState('chase');
      this.effects.spikes(new THREE.Vector3(sp.x, 0, sp.z), 0x9c5cff, 2);
    }
    this.ui.toast('The grove sends its children', 'blood');
  }
  enemyAoe(enemy, atk) {
    this.effects.ring(enemy.pos, 0xb44cff, { radius: atk.range, duration: .6 });
    this.effects.rootRing(enemy.pos, 0xb44cff);
    const d = Math.hypot(this.player.pos.x - enemy.pos.x, this.player.pos.z - enemy.pos.z);
    if (d < atk.range && !this.player.dead) this.player.takeDamage(atk.damage, enemy.pos, { source: enemy, aoe: true });
  }
  canEnemyAttack(enemy) {
    if (enemy.def.elite) return true;
    let count = 0;
    for (const e of this.enemies) {
      if (e !== enemy && e.alive && e.state === 'attack' && e.stateTime < .8) count++;
    }
    return count < 2;
  }

  /* ============================================================
     PROJECTILES
  ============================================================ */
  fireArrow() {
    const p = this.player;
    const dir = this.getAimDir(p);
    const start = p.pos.clone().add(new THREE.Vector3(0, 1.35, 0)).add(dir.clone().multiplyScalar(.5));
    const dmg = p.attackPower * 1.15;
    this.spawnProjectile({ pos: start, dir, speed: 26, damage: dmg, owner: 'player', type: 'arrow', color: 0xd8c9a0 });
    this.audio.arrow();
  }
  fireSpell(fromCast = false) {
    const p = this.player;
    const dir = this.getAimDir(p);
    const start = p.pos.clone().add(new THREE.Vector3(0, 1.45, 0)).add(dir.clone().multiplyScalar(.6));
    const dmg = 28 + this.state.player.faith * 5.2 + (fromCast ? 14 : 0);
    this.spawnProjectile({ pos: start, dir, speed: 19, damage: dmg, owner: 'player', type: 'spell', color: 0xff9a3c });
    this.audio.spell();
  }
  getAimDir(p) {
    if (this.lockTarget && this.lockTarget.alive) {
      const t = this.lockTarget.pos.clone(); t.y += this.lockTarget.isBoss ? 3.6 : 1.0;
      return t.sub(p.pos.clone().add(new THREE.Vector3(0, 1.3, 0))).normalize();
    }
    return new THREE.Vector3(Math.sin(p.yaw), .02, Math.cos(p.yaw)).normalize();
  }
  spawnProjectile({ pos, dir, speed, damage, owner, type, color }) {
    const group = new THREE.Group();
    if (type === 'arrow') {
      const shaft = new THREE.Mesh(new THREE.CylinderGeometry(.018, .018, .8, 4), new THREE.MeshBasicMaterial({ color: 0x5a4428 }));
      shaft.rotation.x = Math.PI / 2; group.add(shaft);
      const head = new THREE.Mesh(new THREE.ConeGeometry(.045, .16, 4), new THREE.MeshBasicMaterial({ color: 0xb9c3c6 }));
      head.rotation.x = Math.PI / 2; head.position.z = .45; group.add(head);
      const fletch = new THREE.Mesh(new THREE.BoxGeometry(.09, .01, .14), new THREE.MeshBasicMaterial({ color })); fletch.position.z = -.38; group.add(fletch);
    } else {
      const orb = new THREE.Mesh(new THREE.SphereGeometry(.16, 8, 6), new THREE.MeshBasicMaterial({ color, blending: THREE.AdditiveBlending, transparent: true, opacity: .95 }));
      group.add(orb);
      const glow = makeGlowSprite(color, 1.6); group.add(glow);
    }
    group.position.copy(pos);
    group.quaternion.setFromUnitVectors(new THREE.Vector3(0, 0, 1), dir.clone().normalize());
    this.scene.add(group);
    this.projectiles.push({ mesh: group, vel: dir.clone().normalize().multiplyScalar(speed), damage, owner, type, life: 3, color });
  }

  updateProjectiles(dt) {
    for (let i = this.projectiles.length - 1; i >= 0; i--) {
      const p = this.projectiles[i];
      p.life -= dt;
      p.mesh.position.addScaledVector(p.vel, dt);
      const pos = p.mesh.position;
      if (p.type === 'spell') this.effects.spawnParticles(pos, 1, p.color, { speed: .4, life: .35, gravity: 0, size: .7, glow: true });
      let remove = p.life <= 0;
      if (!remove && pos.y < heightAt(pos.x, pos.z) + .1) {
        remove = true;
        this.effects.sparks(pos, 6);
      }
      if (!remove) {
        if (p.owner === 'player') {
          for (const e of this.enemies) {
            if (!e.alive) continue;
            const c = e.pos.clone(); c.y += .9 * (e.def.scale || 1);
            if (pos.distanceTo(c) < e.radius + .35) {
              e.takeDamage(p.damage, this.player.pos, { poise: 14, source: this.player });
              this.effects.sparks(pos, 8);
              remove = true; break;
            }
          }
          if (!remove && this.boss && this.boss.active && !this.boss.dead) {
            const c = this.boss.pos.clone(); c.y += 4;
            if (pos.distanceTo(c) < 3.2) {
              this.boss.takeDamage(p.damage, this.player.pos, { poise: 12, source: this.player });
              this.effects.sparks(pos, 10);
              remove = true;
            }
          }
        } else {
          const c = this.player.pos.clone(); c.y += 1.0;
          if (pos.distanceTo(c) < .8) {
            this.player.takeDamage(p.damage, this.player.pos, { source: null });
            this.effects.sparks(pos, 5);
            remove = true;
          }
        }
      }
      if (remove) { this.scene.remove(p.mesh); this.projectiles.splice(i, 1); }
    }
  }

  enemyFireArrow(enemy, player) {
    const start = enemy.pos.clone().add(new THREE.Vector3(0, 1.5 * (enemy.def.scale || 1), 0));
    const target = player.pos.clone().add(new THREE.Vector3(0, 1.1, 0));
    const dir = target.sub(start).normalize();
    // slight inaccuracy
    dir.x += rand(-.04, .04); dir.z += rand(-.04, .04); dir.normalize();
    this.spawnProjectile({ pos: start, dir, speed: 22, damage: enemy.def.damage * 1.15, owner: 'enemy', type: 'arrow', color: 0x9fa48f });
    this.audio.arrow();
  }

  /* ============================================================
     ITEMS / PROGRESSION
  ============================================================ */
  addMotes(n, pos) {
    this.state.player.motes += Math.round(n);
    this.ui.setMotes(this.state.player.motes);
    if (pos) this.ui.floatText(pos, `+${Math.round(n)} ✦`, 'motes');
  }
  addXP(n) { this.state.xp = (this.state.xp || 0) + n; }
  addWeapon(id) {
    if (!this.state.player.weapons.includes(id)) {
      this.state.player.weapons.push(id);
      this.ui.toast(`Weapon acquired: ${WEAPONS[id]?.name || id}`, 'gold');
    }
    if (id === 'staff') this.unlockSpell();
  }
  addArmor(id) {
    if (!this.state.player.armor.includes(id)) {
      this.state.player.armor.push(id);
      this.ui.toast(`Armor acquired: ${ARMOR[id]?.name || id}`, 'gold');
    }
  }
  addItem(id, n = 1) {
    this.state.player.items[id] = (this.state.player.items[id] || 0) + n;
    if (ITEMS[id]) this.ui.toast(`${ITEMS[id].name} ×${n}`, 'gold');
  }
  giveLoot(id, name, pos, kind = 'weapon') {
    if (kind === 'armor') this.addArmor(id); else this.addWeapon(id);
    if (pos) this.ui.floatText(pos, name.toUpperCase(), 'item');
  }
  giveItem(id, n) { this.addItem(id, n); }
  unlockSpell() {
    if (!this.state.player.spellUnlocked) {
      this.state.player.spellUnlocked = true;
      this.ui.toast('Incantation learned: Ember Bolt', 'gold');
      this.ui.banner('AN OLD WORD', 'Press V to cast Ember Bolt. It costs focus.', 4200);
    }
  }
  equipWeapon(id) {
    if (!this.state.player.weapons.includes(id)) return;
    this.state.player.equippedWeapon = id;
    this.player.setWeapon(id);
    this.ui.setWeapon(WEAPONS[id].name);
    this.audio.ui();
  }
  equipArmor(id) {
    if (!this.state.player.armor.includes(id)) return;
    this.state.player.equippedArmor = id;
    this.player.setArmorVisual();
    this.player.recalcStats(false);
    this.ui.setArmor(ARMOR[id].name);
    this.audio.ui();
  }
  cycleWeapon(dir) {
    const list = this.state.player.weapons;
    if (list.length <= 1) return;
    let idx = list.indexOf(this.state.player.equippedWeapon);
    idx = (idx + dir + list.length) % list.length;
    this.equipWeapon(list[idx]);
    this.ui.toast(WEAPONS[list[idx]].name, '');
  }

  /* ============================================================
     LOCK-ON
  ============================================================ */
  toggleLock() {
    if (this.lockTarget) { this.lockTarget = null; this.audio.ui(); return; }
    let best = null, bd = 1e9;
    const candidates = [...this.enemies.filter(e => e.alive)];
    if (this.boss && this.boss.active && !this.boss.dead) candidates.push(this.boss);
    for (const e of candidates) {
      const dx = e.pos.x - this.player.pos.x, dz = e.pos.z - this.player.pos.z;
      const d = Math.hypot(dx, dz);
      if (d > 34) continue;
      const ang = Math.abs(angleDelta(this.cameraRig.yaw, Math.atan2(dx, dz) + Math.PI));
      if (d < 4 || ang < 1.2) {
        if (d < bd) { bd = d; best = e; }
      }
    }
    this.lockTarget = best;
    if (best) { this.audio.ui(); this.ui.toast(best.isBoss ? 'LOCKED: THE HOLLOW WOODSMAN' : `LOCKED: ${best.def.name.toUpperCase()}`, ''); }
    else this.ui.toast('No target', 'blood');
  }
  updateLock() {
    if (this.lockTarget && (!this.lockTarget.alive || (this.lockTarget.isBoss && !this.lockTarget.active))) this.lockTarget = null;
    if (this.lockTarget) {
      const d = Math.hypot(this.lockTarget.pos.x - this.player.pos.x, this.lockTarget.pos.z - this.player.pos.z);
      if (d > 40) this.lockTarget = null;
    }
  }
}
