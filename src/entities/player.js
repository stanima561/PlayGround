import * as THREE from 'three';
import { clamp, lerp, damp, dampAngle, angleDelta, material, emissive, makeGlowSprite } from '../core/utils.js';
import { heightAt, PLAY_RADIUS } from '../world/terrain.js';
import { WEAPONS, ARMOR } from '../game/data.js';

const _v = new THREE.Vector3();
const _v2 = new THREE.Vector3();

export class Player {
  constructor(game, scene) {
    this.game = game;
    this.scene = scene;
    this.stats = game.state.player;

    this.pos = new THREE.Vector3(this.stats.pos.x, heightAt(this.stats.pos.x, this.stats.pos.z), this.stats.pos.z);
    this.yaw = this.stats.yaw ?? Math.PI;
    this.vel = new THREE.Vector3();
    this.vy = 0;
    this.grounded = true;

    this.maxHp = 100; this.hp = 100;
    this.maxStamina = 100; this.stamina = 100;
    this.maxFocus = 50; this.focus = 50;
    this.poise = 40; this.poiseBuildup = 0;

    this.state = 'idle';
    this.stateTime = 0;
    this.busy = false;
    this.attack = null;
    this.combo = 0;
    this.comboTimer = 0;
    this.rollDir = new THREE.Vector3();
    this.invuln = 0;
    this.parryWindow = 0;
    this.blocking = false;
    this.staminaDelay = 0;
    this.healUsed = false;
    this.hasHitThisSwing = new Set();
    this.sprinting = false;
    this.locked = null;
    this.dead = false;
    this.deathTime = 0;
    this.footTimer = 0;
    this.animTime = 0;
    this.hitFlash = 0;
    this.staggerTime = 0;
    this.castTime = 0;
    this.weapon = WEAPONS[this.stats.equippedWeapon] || WEAPONS.pipe;
    this.armor = ARMOR[this.stats.equippedArmor] || ARMOR.hoodie;
    this.speedMult = 1;
    this.guardBreak = 0;
    this.perfectDodges = 0;
    this.attackMoveSpeed = 0;
    this.lockTarget = null;

    this.recalcStats(true);
    this.buildModel();
    this.setWeapon(this.weapon.id);
    this.setArmorVisual();
    this.scene.add(this.root);
  }

  /* ================= STATS ================= */
  recalcStats(fill = false) {
    const s = this.stats;
    this.maxHp = Math.round(94 + s.vigor * 8.5 + s.level * 2.2 + s.maxHpBonus);
    this.maxStamina = Math.round(78 + s.endurance * 5.6);
    this.maxFocus = Math.round(36 + s.faith * 5.2);
    const hpRatio = this.hp ? this.hp / this.maxHp : (s.hpRatio ?? 1);
    const stRatio = this.stamina ? this.stamina / this.maxStamina : 1;
    if (fill) { this.hp = this.maxHp; this.stamina = this.maxStamina; this.focus = this.maxFocus; }
    else { this.hp = clamp(this.maxHp * hpRatio, 1, this.maxHp); this.stamina = clamp(this.maxStamina * stRatio, 0, this.maxStamina); this.focus = Math.min(this.focus, this.maxFocus); }
    this.armor = ARMOR[s.equippedArmor] || ARMOR.hoodie;
    this.poise = 24 + this.armor.poise;
    this.speedMult = 1 - (this.armor.weight || 0) * .025;
    this.syncStats();
  }
  syncStats() {
    this.stats.hpRatio = this.hp / this.maxHp;
    this.stats.flaskUses = this.flaskUses ?? this.stats.flaskUses;
  }
  get flaskUses() { return this.stats.flaskUses; }
  set flaskUses(v) { this.stats.flaskUses = clamp(v, 0, this.stats.maxFlask); }

  get attackPower() {
    const w = this.weapon, s = this.stats;
    const scale = 1 + (w.scaling.str || 0) * s.strength * .026 + (w.scaling.dex || 0) * s.dexterity * .026 + (w.scaling.faith || 0) * s.faith * .03;
    return w.damage * scale * (1 + s.level * .006);
  }
  get heavyPower() {
    const w = this.weapon, s = this.stats;
    const scale = 1 + (w.scaling.str || 0) * s.strength * .026 + (w.scaling.dex || 0) * s.dexterity * .026 + (w.scaling.faith || 0) * s.faith * .03;
    return w.heavy * scale * (1 + s.level * .006);
  }
  get critPower() {
    return this.attackPower * (this.weapon.crit || 1.5) * 2.1;
  }
  get defense() { return this.armor.defense || 0; }

  /* ================= MODEL ================= */
  buildModel() {
    const skin = material(0xbb8c6a, { roughness: .8 });
    const hoodie = material(0x2c3d50, { roughness: .95 });
    const hoodie2 = material(0x233141, { roughness: .95 });
    const denim = material(0x2a2f3a, { roughness: .95 });
    const sneaker = material(0xcfc8b8, { roughness: .75 });
    const sole = material(0x8d2f31, { roughness: .7 });
    const hair = material(0x241b16, { roughness: 1 });
    const metal = material(0x777d81, { metalness: .75, roughness: .38 });
    const leather = material(0x4b3726, { roughness: .9 });
    this.mats = [skin, hoodie, hoodie2, denim, sneaker, sole, hair, metal, leather];

    const root = new THREE.Group();
    const pivot = new THREE.Group();
    root.add(pivot);
    this.root = root; this.pivot = pivot;

    // torso
    const torso = new THREE.Group(); torso.position.y = 1.03; pivot.add(torso); this.torso = torso;
    const chest = new THREE.Mesh(new THREE.BoxGeometry(.58, .66, .36), hoodie); chest.position.y = .25; torso.add(chest);
    const belly = new THREE.Mesh(new THREE.BoxGeometry(.5, .22, .33), hoodie2); belly.position.y = -.13; torso.add(belly);
    const pocket = new THREE.Mesh(new THREE.BoxGeometry(.34, .17, .03), hoodie2); pocket.position.set(0, .1, .19); torso.add(pocket);
    // hood bunched at neck
    const hood = new THREE.Mesh(new THREE.TorusGeometry(.2, .09, 6, 12), hoodie2); hood.rotation.x = Math.PI / 2; hood.position.y = .58; torso.add(hood);
    // neck + head
    const neck = new THREE.Mesh(new THREE.CylinderGeometry(.085, .1, .16, 6), skin); neck.position.y = .63; torso.add(neck);
    const head = new THREE.Group(); head.position.y = .82; torso.add(head); this.head = head;
    const face = new THREE.Mesh(new THREE.SphereGeometry(.205, 12, 10), skin); face.scale.set(1, 1.08, .95); head.add(face);
    const hairM = new THREE.Mesh(new THREE.SphereGeometry(.213, 10, 8), hair); hairM.scale.set(1, .7, 1); hairM.position.y = .07; head.add(hairM);
    const fringe = new THREE.Mesh(new THREE.BoxGeometry(.33, .1, .12), hair); fringe.position.set(0, .16, .12); fringe.rotation.x = -.18; head.add(fringe);
    for (const ex of [-.075, .075]) {
      const eye = new THREE.Mesh(new THREE.SphereGeometry(.022, 6, 5), material(0x151515)); eye.position.set(ex, .02, .18); head.add(eye);
    }
    // headphones around neck
    const hp = new THREE.Mesh(new THREE.TorusGeometry(.13, .025, 4, 10, Math.PI), material(0x1b1b1f)); hp.position.set(0, .6, 0); hp.rotation.z = Math.PI; torso.add(hp);
    // backpack
    const bag = new THREE.Mesh(new THREE.BoxGeometry(.36, .46, .17), leather); bag.position.set(0, .22, -.23); torso.add(bag);
    const strap = new THREE.Mesh(new THREE.BoxGeometry(.05, .62, .04), leather); strap.position.set(.22, .25, .1); strap.rotation.z = .15; torso.add(strap);
    const strap2 = strap.clone(); strap2.position.x = -.22; strap2.rotation.z = -.15; torso.add(strap2);

    // arms
    const mkArm = (side) => {
      const shoulder = new THREE.Group(); shoulder.position.set(side * .36, .48, 0); torso.add(shoulder);
      const upper = new THREE.Mesh(new THREE.CylinderGeometry(.092, .078, .42, 7), hoodie); upper.position.y = -.21; shoulder.add(upper);
      const elbow = new THREE.Group(); elbow.position.y = -.42; shoulder.add(elbow);
      const fore = new THREE.Mesh(new THREE.CylinderGeometry(.075, .065, .38, 7), hoodie2); fore.position.y = -.19; elbow.add(fore);
      const hand = new THREE.Mesh(new THREE.SphereGeometry(.082, 8, 6), skin); hand.position.y = -.4; elbow.add(hand);
      return { shoulder, elbow, hand };
    };
    this.armL = mkArm(-1); this.armR = mkArm(1);
    // left forearm sleeve pushed up
    const cuff = new THREE.Mesh(new THREE.CylinderGeometry(.083, .075, .12, 7), hoodie); cuff.position.y = -.33; this.armL.elbow.add(cuff);

    // legs
    const mkLeg = (side) => {
      const hip = new THREE.Group(); hip.position.set(side * .155, .94, 0); pivot.add(hip);
      const thigh = new THREE.Mesh(new THREE.CylinderGeometry(.115, .095, .44, 7), denim); thigh.position.y = -.22; hip.add(thigh);
      const knee = new THREE.Group(); knee.position.y = -.44; hip.add(knee);
      const shin = new THREE.Mesh(new THREE.CylinderGeometry(.09, .075, .42, 7), denim); shin.position.y = -.21; knee.add(shin);
      const foot = new THREE.Group(); foot.position.y = -.43; knee.add(foot);
      const shoe = new THREE.Mesh(new THREE.BoxGeometry(.19, .13, .34), sneaker); shoe.position.set(0, .0, .07); foot.add(shoe);
      const soleM = new THREE.Mesh(new THREE.BoxGeometry(.2, .05, .35), sole); soleM.position.set(0, -.07, .07); foot.add(soleM);
      const laces = new THREE.Mesh(new THREE.BoxGeometry(.12, .03, .06), material(0xeeeae0)); laces.position.set(0, .045, .2); foot.add(laces);
      return { hip, knee, foot };
    };
    this.legL = mkLeg(-1); this.legR = mkLeg(1);

    // weapon mount on right hand
    const wm = new THREE.Group(); wm.position.y = -.38; this.armR.elbow.add(wm); this.weaponMount = wm;
    this.weaponMeshes = {};

    // phone in left pocket
    const phone = new THREE.Mesh(new THREE.BoxGeometry(.11, .2, .02), material(0x1a1a1d, { emissive: 0x13202a, emissiveIntensity: .5 })); phone.position.set(-.16, .02, .2); torso.add(phone); this.phone = phone;

    // blob shadow
    const shadowTex = makeGlowSprite(0x000000, 2);
    // use a translucent circle instead
    const sh = new THREE.Mesh(new THREE.CircleGeometry(.55, 18), new THREE.MeshBasicMaterial({ color: 0x000000, transparent: true, opacity: .28, depthWrite: false }));
    sh.rotation.x = -Math.PI / 2; sh.position.y = .03; root.add(sh); this.shadow = sh;

    // dirt / dust ring for running
    this.dust = [];
    const dustMat = new THREE.MeshBasicMaterial({ color: 0x9b8a6c, transparent: true, opacity: 0, depthWrite: false });
    for (let i = 0; i < 3; i++) {
      const d = new THREE.Mesh(new THREE.CircleGeometry(.28, 8), dustMat.clone());
      d.rotation.x = -Math.PI / 2; d.position.y = .02; root.add(d); this.dust.push(d);
    }

    this.buildWeaponModels();
    root.position.copy(this.pos);
    root.rotation.y = this.yaw;
  }

  buildWeaponModels() {
    this.weaponMeshes = {};
    const metal = material(0xa8aeb0, { metalness: .8, roughness: .3 });
    const darkMetal = material(0x55595c, { metalness: .7, roughness: .4 });
    const wood = material(0x4b3320, { roughness: .9 });
    const gold = material(0xa18448, { metalness: .7, roughness: .35 });
    const make = (id, group) => { group.visible = false; group.position.set(0, 0, 0); this.weaponMount.add(group); this.weaponMeshes[id] = group; return group; };

    // pipe
    let g = new THREE.Group();
    let m = new THREE.Mesh(new THREE.CylinderGeometry(.045, .05, 1.25, 7), darkMetal); m.position.y = .46; g.add(m);
    let joint = new THREE.Mesh(new THREE.CylinderGeometry(.07, .07, .09, 7), material(0x6e6a5e)); joint.position.y = -.16; g.add(joint);
    make('pipe', g);

    // rusty sword
    g = new THREE.Group();
    m = new THREE.Mesh(new THREE.BoxGeometry(.075, 1.0, .025), material(0x8b8273, { metalness: .6, roughness: .6 })); m.position.y = .58; g.add(m);
    const tip = new THREE.Mesh(new THREE.ConeGeometry(.055, .14, 4), m.material); tip.position.y = 1.14; g.add(tip);
    g.add(new THREE.Mesh(new THREE.BoxGeometry(.28, .055, .06), gold));
    m = new THREE.Mesh(new THREE.CylinderGeometry(.028, .028, .24, 6), wood); m.position.y = -.14; g.add(m);
    const pom = new THREE.Mesh(new THREE.SphereGeometry(.045, 6), gold); pom.position.y = -.27; g.add(pom);
    make('rustySword', g);

    // axes
    g = new THREE.Group();
    m = new THREE.Mesh(new THREE.CylinderGeometry(.042, .05, 1.55, 7), wood); m.position.y = .32; g.add(m);
    const axeHead = new THREE.Mesh(new THREE.BoxGeometry(.55, .38, .09), darkMetal); axeHead.position.set(.27, .92, 0); axeHead.rotation.z = -.1; g.add(axeHead);
    const bladeEdge = new THREE.Mesh(new THREE.BoxGeometry(.12, .44, .11), metal); bladeEdge.position.set(.51, .92, 0); g.add(bladeEdge);
    const leaf = new THREE.Mesh(new THREE.IcosahedronGeometry(.09, 0), material(0x4a6b3d)); leaf.position.set(.1, .62, .06); g.add(leaf);
    make('woodsmanAxe', g);

    // greatsword
    g = new THREE.Group();
    m = new THREE.Mesh(new THREE.BoxGeometry(.13, 1.5, .04), material(0x71767a, { metalness: .8, roughness: .3 })); m.position.y = .82; g.add(m);
    const tip2 = new THREE.Mesh(new THREE.ConeGeometry(.09, .2, 4), m.material); tip2.position.y = 1.68; g.add(tip2);
    g.add(new THREE.Mesh(new THREE.BoxGeometry(.46, .075, .08), gold));
    m = new THREE.Mesh(new THREE.CylinderGeometry(.035, .035, .34, 6), wood); m.position.y = -.2; g.add(m);
    make('greatsword', g);

    // spear
    g = new THREE.Group();
    m = new THREE.Mesh(new THREE.CylinderGeometry(.028, .032, 2.3, 6), wood); m.position.y = .55; g.add(m);
    const sp = new THREE.Mesh(new THREE.ConeGeometry(.06, .35, 5), metal); sp.position.y = 1.85; g.add(sp);
    const wrap = new THREE.Mesh(new THREE.CylinderGeometry(.045, .045, .22, 6), material(0x3d5a2f)); wrap.position.y = 1.55; g.add(wrap);
    make('spear', g);

    // dagger
    g = new THREE.Group();
    m = new THREE.Mesh(new THREE.BoxGeometry(.055, .44, .02), material(0xb9c9d6, { metalness: .8, roughness: .25 })); m.position.y = .3; g.add(m);
    const dt = new THREE.Mesh(new THREE.ConeGeometry(.04, .12, 4), m.material); dt.position.y = .58; g.add(dt);
    g.add(new THREE.Mesh(new THREE.BoxGeometry(.17, .04, .04), gold));
    m = new THREE.Mesh(new THREE.CylinderGeometry(.025, .025, .16, 5), wood); m.position.y = -.08; g.add(m);
    make('dagger', g);

    // bow
    g = new THREE.Group();
    const bowArc = new THREE.Mesh(new THREE.TorusGeometry(.52, .022, 4, 14, Math.PI * 1.15), wood); bowArc.rotation.z = -Math.PI * .075; bowArc.position.y = .5; g.add(bowArc);
    const string = new THREE.Mesh(new THREE.CylinderGeometry(.004, .004, 1.0, 3), material(0xd8cdb0)); string.position.set(-.02, .5, 0); g.add(string);
    make('bow', g);

    // staff
    g = new THREE.Group();
    m = new THREE.Mesh(new THREE.CylinderGeometry(.035, .045, 1.9, 6), material(0x322a26)); m.position.y = .6; g.add(m);
    const crystal = new THREE.Mesh(new THREE.OctahedronGeometry(.16), emissive(0xd98a4a, 2.0)); crystal.position.y = 1.65; g.add(crystal);
    const ring = new THREE.Mesh(new THREE.TorusGeometry(.18, .02, 4, 10), gold); ring.position.y = 1.65; ring.rotation.x = .6; g.add(ring);
    make('staff', g);
  }

  setWeapon(id) {
    this.weapon = WEAPONS[id] || WEAPONS.pipe;
    this.stats.equippedWeapon = this.weapon.id;
    for (const k in this.weaponMeshes) this.weaponMeshes[k].visible = k === this.weapon.id;
    this.updateWeaponPose();
  }
  setArmorVisual() {
    if (!this.mats) return;
    const armorId = this.stats.equippedArmor;
    const col = { hoodie: 0x2c3d50, leather: 0x4f3a28, knight: 0x62636a, veil: 0x3d3b45, mantle: 0x3f4a2f }[armorId] ?? 0x2c3d50;
    this.mats[1].color.setHex(col);
    this.mats[2].color.setHex(new THREE.Color(col).multiplyScalar(.8));
  }
  updateWeaponPose() {
    if (!this.weaponMeshes) return;
    const w = this.weapon;
    const g = this.weaponMeshes[w.id];
    if (!g) return;
    if (w.id === 'pipe') { g.rotation.set(-.25, 0, -.35); g.position.set(.02, -.36, .05); }
    else if (w.id === 'woodsmanAxe') { g.rotation.set(-.2, 0, -.28); g.position.set(.02, -.34, 0); }
    else if (w.id === 'spear') { g.rotation.set(-.26, 0, -.26); }
    else if (w.id === 'bow') { g.rotation.set(0, 0, .2); }
    else { g.rotation.set(-.15, 0, -.2); }
  }

  /* ================= UPDATE ================= */
  update(dt, input, cameraYaw, ui) {
    this.animTime += dt;
    if (this.dead) { this.updateDeath(dt); return; }
    this.stateTime += dt;
    this.comboTimer = Math.max(0, this.comboTimer - dt);
    if (this.comboTimer === 0) this.combo = 0;
    this.hitFlash = Math.max(0, this.hitFlash - dt);
    this.parryWindow = Math.max(0, this.parryWindow - dt);
    this.invuln = Math.max(0, this.invuln - dt);
    this.guardBreak = Math.max(0, this.guardBreak - dt);
    this.staggerTime = Math.max(0, this.staggerTime - dt);
    this.poiseBuildup = Math.max(0, this.poiseBuildup - dt * 8);

    const controls = !this.game.uiBlocking && !this.game.cinematic;
    this.blocking = false;

    if (this.staggerTime > 0) {
      this.state = 'stagger';
      this.applyPhysics(dt, 0, 0);
      this.animate(dt);
      this.updateMaterialFlash();
      return;
    }

    // actions
    if (controls) {
      if (input.pause) this.game.openPause();
      if (input.lockPressed) this.game.toggleLock();
      if (input.weaponNext) this.game.cycleWeapon(1);
      if (input.weaponPrev) this.game.cycleWeapon(-1);
      if (input.inventory) this.game.openInventory();
      if (input.map) this.game.openMap();
      if (input.interact) this.game.tryInteract();
      if (input.heal) this.tryHeal();
      if (input.spell) this.trySpell();
    }

    const canAct = !this.busy && this.state !== 'roll' && this.state !== 'heal' && this.state !== 'cast' && this.state !== 'crit' && this.state !== 'hit';

    if (controls && canAct) {
      if (input.attackLight) this.beginAttack('light');
      else if (input.attackHeavy) this.beginAttack('heavy');
      else if (input.critical) this.game.tryCritical();
      else if (input.dodge) this.beginRoll();
      else if (input.jump && this.grounded) this.jump();
      if (input.blockHeld) { this.blocking = true; if (input.blockPressed) this.parryWindow = .3; }
    } else if (controls && input.blockHeld && !this.busy) {
      this.blocking = true;
    }

    // movement
    let mx = input.moveX, my = input.moveY;
    let moveSpeed = 4.35 * this.speedMult;
    this.sprinting = false;
    if (input.sprintHeld && (mx || my) && this.stamina > 4 && !this.blocking && this.grounded) { moveSpeed = 7.75 * this.speedMult; this.sprinting = true; }

    if (this.state === 'idle' || this.state === 'move' || this.state === 'block') {
      this.state = (Math.abs(mx) + Math.abs(my) > .05) ? 'move' : 'idle';
    }

    if (this.state === 'attack') {
      this.updateAttack(dt);
      moveSpeed *= .18;
    } else if (this.state === 'roll') {
      this.updateRoll(dt);
      mx = 0; my = 0;
    } else if (this.state === 'heal') {
      this.updateHeal(dt);
      moveSpeed *= .25;
    } else if (this.state === 'cast') {
      this.updateCast(dt);
      moveSpeed *= .2;
    } else if (this.state === 'crit') {
      this.updateCrit(dt);
      moveSpeed *= .1;
    }
    if (this.blocking) moveSpeed *= .48;

    // sprint stamina
    if (this.sprinting && (mx || my)) {
      this.stamina = Math.max(0, this.stamina - 12 * dt);
      this.staminaDelay = .7;
    } else if (this.state !== 'roll' && this.state !== 'attack') {
      this.staminaDelay = Math.max(0, this.staminaDelay - dt);
      if (this.staminaDelay <= 0) {
        const regen = (16 + this.stats.endurance * .35) * (this.blocking ? .55 : 1) * (this.armor.weight > 2 ? .8 : 1);
        this.stamina = Math.min(this.maxStamina, this.stamina + regen * dt);
      }
    }
    // focus regen slowly
    this.focus = Math.min(this.maxFocus, this.focus + .6 * dt);

    // turning / movement direction
    let dirX = 0, dirZ = 0;
    if (mx || my) {
      const fwdX = -Math.sin(cameraYaw), fwdZ = -Math.cos(cameraYaw);
      const rightX = Math.cos(cameraYaw), rightZ = -Math.sin(cameraYaw);
      dirX = fwdX * my + rightX * mx;
      dirZ = fwdZ * my + rightZ * mx;
      const l = Math.hypot(dirX, dirZ) || 1; dirX /= l; dirZ /= l;
    }
    const lock = this.game.lockTarget;
    if (lock && lock.alive && !lock.isBoss) {
      const dx = lock.pos.x - this.pos.x, dz = lock.pos.z - this.pos.z;
      const targetYaw = Math.atan2(dx, dz);
      this.yaw = dampAngle(this.yaw, targetYaw, 8, dt);
    } else if ((mx || my) && this.state !== 'attack' && this.state !== 'roll' && this.state !== 'crit') {
      this.yaw = dampAngle(this.yaw, Math.atan2(dirX, dirZ), 12, dt);
    } else if (this.game.lockTarget && this.game.lockTarget.alive && !this.game.lockTarget.isBoss) {
      const dx = this.game.lockTarget.pos.x - this.pos.x, dz = this.game.lockTarget.pos.z - this.pos.z;
      this.yaw = dampAngle(this.yaw, Math.atan2(dx, dz), 8, dt);
    }

    if (this.state === 'roll') { dirX = this.rollDir.x; dirZ = this.rollDir.z; }
    this.applyPhysics(dt, dirX * moveSpeed, dirZ * moveSpeed);
    this.updateShadow();
    this.animate(dt);

    // footsteps
    const speed = Math.hypot(this.vel.x, this.vel.z);
    if (this.grounded && speed > 1.2) {
      this.footTimer -= dt * (this.sprinting ? 1.8 : 1);
      if (this.footTimer <= 0) { this.footTimer = .38; this.game.audio.step(); this.puffDust(); }
    }
    this.syncStats();
    this.updateMaterialFlash();
  }

  applyPhysics(dt, desiredX, desiredZ) {
    if (this.state === 'roll') {
      const speed = 11.5 * (1 - Math.min(1, this.stateTime / .52) * .75);
      this.vel.x = this.rollDir.x * speed;
      this.vel.z = this.rollDir.z * speed;
    } else {
      const accel = this.grounded ? 14 : 4;
      this.vel.x = damp(this.vel.x, desiredX, accel, dt);
      this.vel.z = damp(this.vel.z, desiredZ, accel, dt);
    }
    this.pos.x += this.vel.x * dt;
    this.pos.z += this.vel.z * dt;

    // world bounds
    const r = Math.hypot(this.pos.x, this.pos.z);
    if (r > PLAY_RADIUS) { this.pos.x *= PLAY_RADIUS / r; this.pos.z *= PLAY_RADIUS / r; }

    // colliders
    const pr = .38;
    for (const c of this.game.world.colliders) {
      const dx = this.pos.x - c.x, dz = this.pos.z - c.z;
      const d = Math.hypot(dx, dz);
      const min = pr + c.r;
      if (d < min && d > .0001) {
        const push = (min - d);
        this.pos.x += (dx / d) * push;
        this.pos.z += (dz / d) * push;
      }
    }
    // arena boundary during boss
    if (this.game.boss && this.game.boss.active && !this.game.boss.dead) {
      const dx = this.pos.x - this.game.boss.center.x, dz = this.pos.z - this.game.boss.center.z;
      const d = Math.hypot(dx, dz);
      const max = this.game.boss.arenaRadius - .5;
      if (d > max) { this.pos.x = this.game.boss.center.x + dx / d * max; this.pos.z = this.game.boss.center.z + dz / d * max; }
    }

    const ground = heightAt(this.pos.x, this.pos.z);
    if (!this.grounded) {
      this.vy -= 20 * dt;
      this.pos.y += this.vy * dt;
      if (this.pos.y <= ground) { this.pos.y = ground; this.vy = 0; this.grounded = true; this.game.audio.step(); this.game.shake(.1); }
    } else {
      this.pos.y = ground;
    }
    this.root.position.copy(this.pos);
    this.root.rotation.y = this.yaw;
  }

  updateShadow() {
    const ground = heightAt(this.pos.x, this.pos.z);
    this.shadow.position.y = ground - this.pos.y + .035;
    const h = clamp((this.pos.y - ground) / 3, 0, 1);
    this.shadow.material.opacity = .3 * (1 - h);
    this.shadow.scale.setScalar(1 - h * .5);
  }
  puffDust() {
    for (const d of this.dust) {
      if (d.material.opacity < .03) {
        d.material.opacity = .28;
        d.position.set((Math.random() - .5) * .4, .05, (Math.random() - .5) * .4);
        d.scale.setScalar(.5 + Math.random() * .5);
        d.userData.life = .35;
        break;
      }
    }
  }
  updateDust(dt) {
    for (const d of this.dust) {
      if (d.material.opacity > .01) {
        d.material.opacity -= dt * 1.2;
        d.scale.multiplyScalar(1 + dt * 1.8);
        d.position.y += dt * .3;
      }
    }
  }

  /* ================= ACTIONS ================= */
  beginAttack(kind) {
    if (this.busy || this.stamina <= 0) return;
    if (this.weapon.ranged) {
      if (kind === 'heavy') return;
      if (this.stamina < this.weapon.stamina) return;
      this.stamina -= this.weapon.stamina; this.staminaDelay = .8;
      this.state = 'attack'; this.stateTime = 0; this.busy = true;
      this.attack = { kind: 'ranged', duration: 1.05, fired: false, heavy: false };
      this.game.audio.swing(false);
      return;
    }
    const heavy = kind === 'heavy';
    const cost = heavy ? this.weapon.heavyStamina : this.weapon.stamina;
    if (this.stamina < cost * .6) { this.game.toast('Not enough stamina', 'blood'); return; }
    this.stamina = Math.max(0, this.stamina - cost); this.staminaDelay = .9;
    this.combo = heavy ? 0 : (this.combo % 3) + 1;
    this.comboTimer = 1.4;
    const speed = this.weapon.speed || 1;
    const duration = (heavy ? 1.1 : .72) / speed;
    this.state = 'attack'; this.stateTime = 0; this.busy = true;
    this.attack = { kind, duration, hit: false, heavy, dir: this.yaw, step: this.combo };
    this.hasHitThisSwing.clear();
    this.game.audio.swing(heavy || this.weapon.weight === 'Heavy');
    // small forward lunge
    const stepSpeed = heavy ? 2.4 : 1.4;
    this.vel.x += Math.sin(this.yaw) * stepSpeed;
    this.vel.z += Math.cos(this.yaw) * stepSpeed;
  }

  updateAttack(dt) {
    const a = this.attack;
    if (!a) { this.busy = false; this.state = 'idle'; return; }
    const p = this.stateTime / a.duration;
    if (!a.hit && p > (a.heavy ? .5 : .4)) {
      a.hit = true;
      if (a.kind === 'ranged') {
        if (this.weapon.spell) this.game.fireSpell();
        else this.game.fireArrow();
        a.fired = true;
      } else {
        this.game.playerMeleeHit(this, a.heavy, this.weapon);
      }
    }
    if (p >= 1) { this.busy = false; this.attack = null; this.state = 'idle'; }
  }
  updateRoll(dt) {
    if (this.stateTime > .55) { this.state = 'idle'; this.busy = false; this.vel.multiplyScalar(.5); }
  }
  beginRoll() {
    if (this.busy || this.stamina < 18 || !this.grounded) return;
    this.stamina -= 22; this.staminaDelay = .8;
    this.state = 'roll'; this.stateTime = 0; this.busy = true;
    this.invuln = .36;
    const mx = this.game.lastInputX || 0, my = this.game.lastInputY || 0;
    let dx = Math.sin(this.yaw), dz = Math.cos(this.yaw);
    if (mx || my) {
      const yaw = this.game.cameraRig.yaw;
      dx = -Math.sin(yaw) * my + Math.cos(yaw) * mx;
      dz = -Math.cos(yaw) * my - Math.sin(yaw) * mx;
      const l = Math.hypot(dx, dz); dx /= l; dz /= l;
      this.yaw = Math.atan2(dx, dz);
    }
    this.rollDir.set(dx, 0, dz);
    this.game.audio.dodge();
  }
  jump() {
    if (this.busy || this.stamina < 8) return;
    this.stamina -= 8; this.staminaDelay = .6;
    this.vy = 6.9; this.grounded = false;
    this.state = 'jump'; this.busy = false;
    this.game.audio.jump();
    setTimeout(() => { if (this.state === 'jump') this.state = 'idle'; }, 300);
  }
  tryHeal() {
    if (this.busy || this.stats.flaskUses <= 0 || this.hp >= this.maxHp) {
      if (this.stats.flaskUses <= 0) this.game.toast('The Ashen Flask is empty', 'blood');
      return;
    }
    this.stats.flaskUses--;
    this.state = 'heal'; this.stateTime = 0; this.busy = true; this.healUsed = false;
    this.game.audio.heal();
  }
  updateHeal(dt) {
    if (!this.healUsed && this.stateTime > .55) {
      this.healUsed = true;
      const amt = Math.round(this.maxHp * .46);
      this.hp = Math.min(this.maxHp, this.hp + amt);
      this.game.spawnHealBurst(this.pos);
      this.game.floatText(this.pos, `+${amt}`, 'heal');
      this.game.audio.souls();
    }
    if (this.stateTime > 1.15) { this.state = 'idle'; this.busy = false; }
  }
  trySpell() {
    if (!this.stats.spellUnlocked) { this.game.toast('You have not learned any incantations', 'blood'); return; }
    if (this.busy || this.focus < 25) { if (this.focus < 25) this.game.toast('Not enough focus', 'blood'); return; }
    this.focus -= 25;
    this.state = 'cast'; this.stateTime = 0; this.busy = true; this.castFired = false;
    this.game.audio.spell();
  }
  updateCast(dt) {
    if (!this.castFired && this.stateTime > .45) {
      this.castFired = true;
      this.game.fireSpell(true);
    }
    if (this.stateTime > .95) { this.state = 'idle'; this.busy = false; }
  }
  startCritical(target) {
    if (this.busy || !target) return;
    this.state = 'crit'; this.stateTime = 0; this.busy = true;
    this.critTarget = target;
    this.game.audio.swing(true);
  }
  updateCrit(dt) {
    if (!this.critApplied && this.stateTime > .45 && this.critTarget) {
      this.critApplied = true;
      const t = this.critTarget;
      if (t && t.alive) {
        const dmg = this.critPower;
        t.takeDamage(dmg, this.pos, { critical: true, source: this });
        this.game.spawnBloodBurst(t.pos, 18);
        this.game.audio.hit(t.armorType === 'metal');
        this.game.shake(.35);
        this.game.hitstop(.09);
      }
    }
    if (this.stateTime > 1.15) { this.state = 'idle'; this.busy = false; this.critApplied = false; this.critTarget = null; }
  }

  /* ================= DAMAGE ================= */
  takeDamage(amount, fromPos, opts = {}) {
    if (this.dead) return false;
    if (this.invuln > 0) {
      if (this.state === 'roll' && this.stateTime > .04 && this.stateTime < .38 && !opts.aoe) {
        this.perfectDodges++;
        this.focus = Math.min(this.maxFocus, this.focus + 12);
        this.game.onPerfectDodge();
      }
      return false;
    }
    const dx = fromPos ? this.pos.x - fromPos.x : 0;
    const dz = fromPos ? this.pos.z - fromPos.z : 0;
    const facing = Math.sin(this.yaw) * dx + Math.cos(this.yaw) * dz;
    const front = facing >= -0.25;

    if (this.blocking && front && !opts.unblockable) {
      if (this.parryWindow > 0 && !opts.aoe) {
        this.parryWindow = 0;
        this.game.onParry(opts.source);
        this.game.audio.parry();
        this.stamina = Math.min(this.maxStamina, this.stamina + 15);
        return false;
      }
      const staminaCost = amount * (this.weapon.category === 'Greatsword' ? 1.05 : .9) / (1 + this.stats.endurance * .015);
      if (this.stamina >= staminaCost * .5) {
        this.stamina = Math.max(0, this.stamina - staminaCost);
        this.staminaDelay = 1.1;
        const chip = amount * .12;
        this.hp -= chip;
        this.game.audio.block();
        this.game.shake(.16);
        this.game.spawnSparkBurst(fromPos || this.pos, 6);
        this.game.floatText(this.pos, 'BLOCKED', 'block');
        if (this.stamina <= 0) { this.staggerTime = .6; this.game.toast('GUARD BROKEN', 'blood'); }
        if (this.hp <= 0) this.die();
        return false;
      } else {
        this.stamina = 0; this.staggerTime = .8;
        this.game.toast('GUARD BROKEN', 'blood');
        amount *= .7;
      }
    }

    const reduced = amount * (1 - Math.min(.55, this.defense * .018));
    this.hp -= reduced;
    this.poiseBuildup += amount * .7;
    this.hitFlash = .2;
    this.game.onPlayerHurt(reduced, fromPos);
    this.game.audio.hit(false);
    this.game.floatText(this.pos, Math.round(reduced), 'damage');
    if (this.poiseBuildup > this.poise) { this.staggerTime = .5; this.poiseBuildup = 0; }
    else if (!opts.noStun) { this.staggerTime = .22; this.state = 'hit'; }
    if (this.hp <= 0) { this.hp = 0; this.die(); return true; }
    return true;
  }

  die() {
    if (this.dead) return;
    this.dead = true; this.deathTime = 0; this.state = 'dead'; this.busy = true;
    this.game.onPlayerDeath();
    this.game.audio.death();
  }
  updateDeath(dt) {
    this.deathTime += dt;
    const p = Math.min(1, this.deathTime / 1.0);
    this.pivot.rotation.z = lerp(0, -1.35, p);
    this.pivot.position.y = lerp(0, -.45, p);
    this.armR.shoulder.rotation.x = lerp(this.armR.shoulder.rotation.x, -.4, p);
  }
  respawn(pos, shrine) {
    this.dead = false; this.hp = this.maxHp; this.stamina = this.maxStamina; this.focus = this.maxFocus;
    this.stats.flaskUses = this.stats.maxFlask;
    this.poiseBuildup = 0; this.staggerTime = 0; this.invuln = 1.0;
    this.pivot.rotation.set(0, 0, 0); this.pivot.position.y = 0;
    const p = pos || { x: 3.5, z: 81 };
    this.pos.set(p.x, heightAt(p.x, p.z), p.z);
    this.vel.set(0, 0, 0); this.vy = 0; this.grounded = true;
    this.root.position.copy(this.pos);
    this.state = 'idle'; this.busy = false; this.attack = null;
    this.syncStats();
  }

  /* ================= ANIMATION ================= */
  animate(dt) {
    const t = this.animTime;
    const speed = Math.hypot(this.vel.x, this.vel.z);
    const moving = speed > .5 && this.grounded;
    const run = clamp(speed / 7.5, 0, 1.2);
    let legSwing = 0, armSwing = 0, bob = 0;

    // reset base every frame toward neutral
    const neutral = (obj, x, y, z, lambda = 12) => {
      obj.rotation.x = damp(obj.rotation.x, x, lambda, dt);
      obj.rotation.y = damp(obj.rotation.y, y, lambda, dt);
      obj.rotation.z = damp(obj.rotation.z, z, lambda, dt);
    };

    if (this.state === 'roll') {
      const p = clamp(this.stateTime / .55, 0, 1);
      this.pivot.rotation.x = p * Math.PI * 2;
      this.pivot.position.y = Math.sin(p * Math.PI) * .38;
      this.armL.shoulder.rotation.x = -1.4; this.armR.shoulder.rotation.x = -1.2;
      this.legL.hip.rotation.x = -1.5; this.legR.hip.rotation.x = -1.3;
      this.legL.knee.rotation.x = 1.8; this.legR.knee.rotation.x = 1.6;
      this.torso.rotation.x = .5;
      return;
    } else {
      this.pivot.rotation.x = damp(this.pivot.rotation.x, 0, 14, dt);
      this.pivot.position.y = damp(this.pivot.position.y, 0, 14, dt);
    }

    if (this.state === 'attack' && this.attack) {
      const a = this.attack;
      const p = clamp(this.stateTime / a.duration, 0, 1);
      const wind = a.heavy ? .42 : .32;
      let sw = 0;
      if (p < wind) sw = p / wind;
      else sw = 1 - (p - wind) / (1 - wind);
      if (a.step === 2) {
        // rising diagonal
        this.armR.shoulder.rotation.x = damp(this.armR.shoulder.rotation.x, -1.9 + p * 1.0, 22, dt);
        this.armR.shoulder.rotation.z = damp(this.armR.shoulder.rotation.z, .5 - p * .4, 22, dt);
        this.torso.rotation.y = damp(this.torso.rotation.y, .5 - p * .9, 18, dt);
        this.torso.rotation.x = damp(this.torso.rotation.x, -.1, 12, dt);
      } else if (a.step === 3) {
        // overhead slam
        this.armR.shoulder.rotation.x = damp(this.armR.shoulder.rotation.x, p < .45 ? -2.7 : (p < .6 ? .6 : .55), 20, dt);
        this.torso.rotation.x = damp(this.torso.rotation.x, p < .45 ? -.25 : .35, 15, dt);
        this.torso.rotation.y = damp(this.torso.rotation.y, 0, 15, dt);
      } else if (a.heavy) {
        this.armR.shoulder.rotation.x = damp(this.armR.shoulder.rotation.x, p < .5 ? -2.9 : .75, 17, dt);
        this.armR.shoulder.rotation.z = damp(this.armR.shoulder.rotation.z, -.15, 12, dt);
        this.torso.rotation.x = damp(this.torso.rotation.x, p < .5 ? -.3 : .4, 14, dt);
        this.torso.rotation.y = damp(this.torso.rotation.y, p < .5 ? .5 : -.4, 14, dt);
      } else {
        // horizontal slash
        const from = this.combo === 2 ? .8 : -.9;
        const to = this.combo === 2 ? -1.0 : 1.0;
        const k = p < wind ? p / wind : 1;
        const val = from + (to - from) * (p < wind ? easeInOut(p / wind) * .35 : easeInOut((p - wind) / (1 - wind)) * .65 + .35);
        this.torso.rotation.y = damp(this.torso.rotation.y, val * .9, 28, dt);
        this.armR.shoulder.rotation.x = damp(this.armR.shoulder.rotation.x, -.55, 18, dt);
        this.armR.shoulder.rotation.z = damp(this.armR.shoulder.rotation.z, this.combo === 2 ? -.9 : 1.1, 22, dt);
        this.armR.elbow.rotation.x = damp(this.armR.elbow.rotation.x, -.45, 18, dt);
      }
      this.armL.shoulder.rotation.x = damp(this.armL.shoulder.rotation.x, -.6, 12, dt);
      this.legL.hip.rotation.x = damp(this.legL.hip.rotation.x, .18, 10, dt);
      this.legR.hip.rotation.x = damp(this.legR.hip.rotation.x, -.18, 10, dt);
      return;
    }

    if (this.state === 'heal') {
      this.armL.shoulder.rotation.x = damp(this.armL.shoulder.rotation.x, -2.3, 12, dt);
      this.armL.elbow.rotation.x = damp(this.armL.elbow.rotation.x, -.9, 12, dt);
      this.head.rotation.x = damp(this.head.rotation.x, -.35, 8, dt);
      this.armR.shoulder.rotation.x = damp(this.armR.shoulder.rotation.x, -.2, 8, dt);
      this.torso.rotation.x = damp(this.torso.rotation.x, -.08, 8, dt);
      return;
    }
    if (this.state === 'cast') {
      this.armR.shoulder.rotation.x = damp(this.armR.shoulder.rotation.x, -2.2, 12, dt);
      this.armR.shoulder.rotation.z = damp(this.armR.shoulder.rotation.z, -.35, 12, dt);
      this.armL.shoulder.rotation.x = damp(this.armL.shoulder.rotation.x, -1.1, 12, dt);
      this.torso.rotation.x = damp(this.torso.rotation.x, -.1, 8, dt);
      return;
    }
    if (this.blocking) {
      this.armL.shoulder.rotation.x = damp(this.armL.shoulder.rotation.x, -1.9, 18, dt);
      this.armL.shoulder.rotation.z = damp(this.armL.shoulder.rotation.z, -.25, 18, dt);
      this.armL.elbow.rotation.x = damp(this.armL.elbow.rotation.x, -1.1, 18, dt);
      this.armR.shoulder.rotation.x = damp(this.armR.shoulder.rotation.x, -.85, 16, dt);
      this.armR.shoulder.rotation.z = damp(this.armR.shoulder.rotation.z, .4, 16, dt);
      this.armR.elbow.rotation.x = damp(this.armR.elbow.rotation.x, -.6, 16, dt);
      this.torso.rotation.y = damp(this.torso.rotation.y, -.15, 10, dt);
    } else if (moving) {
      const cycle = t * (this.sprinting ? 13 : 8.5);
      legSwing = Math.sin(cycle) * (this.sprinting ? .9 : .58) * (0.5 + run * .5);
      armSwing = Math.sin(cycle) * .45;
      bob = Math.abs(Math.cos(cycle)) * .05 * (this.sprinting ? 2 : 1);
      this.legL.hip.rotation.x = damp(this.legL.hip.rotation.x, legSwing, 18, dt);
      this.legR.hip.rotation.x = damp(this.legR.hip.rotation.x, -legSwing, 18, dt);
      this.legL.knee.rotation.x = damp(this.legL.knee.rotation.x, Math.max(0, -legSwing) * 1.2, 18, dt);
      this.legR.knee.rotation.x = damp(this.legR.knee.rotation.x, Math.max(0, legSwing) * 1.2, 18, dt);
      this.armL.shoulder.rotation.x = damp(this.armL.shoulder.rotation.x, armSwing, 14, dt);
      this.armR.shoulder.rotation.x = damp(this.armR.shoulder.rotation.x, -armSwing * .7 - .12, 14, dt);
      this.armR.shoulder.rotation.z = damp(this.armR.shoulder.rotation.z, -.25, 12, dt);
      this.torso.rotation.x = damp(this.torso.rotation.x, this.sprinting ? .18 : .06, 8, dt);
      this.torso.rotation.y = damp(this.torso.rotation.y, -armSwing * .22, 10, dt);
    } else {
      const breathe = Math.sin(t * 2.1) * .018;
      this.legL.hip.rotation.x = damp(this.legL.hip.rotation.x, .02, 8, dt);
      this.legR.hip.rotation.x = damp(this.legR.hip.rotation.x, -.02, 8, dt);
      this.legL.knee.rotation.x = damp(this.legL.knee.rotation.x, .03, 8, dt);
      this.legR.knee.rotation.x = damp(this.legR.knee.rotation.x, .03, 8, dt);
      this.armL.shoulder.rotation.x = damp(this.armL.shoulder.rotation.x, .06 + breathe, 8, dt);
      this.armR.shoulder.rotation.x = damp(this.armR.shoulder.rotation.x, -.16 + breathe, 8, dt);
      this.armR.shoulder.rotation.z = damp(this.armR.shoulder.rotation.z, -.18, 8, dt);
      this.armL.shoulder.rotation.z = damp(this.armL.shoulder.rotation.z, .08, 8, dt);
      this.torso.rotation.x = damp(this.torso.rotation.x, breathe, 6, dt);
      this.torso.rotation.y = damp(this.torso.rotation.y, 0, 6, dt);
      this.head.rotation.x = damp(this.head.rotation.x, 0, 6, dt);
    }
    if (this.state !== 'heal') this.head.rotation.x = damp(this.head.rotation.x, 0, 6, dt);

    // jump pose
    if (!this.grounded) {
      this.legL.hip.rotation.x = damp(this.legL.hip.rotation.x, -.55, 10, dt);
      this.legR.hip.rotation.x = damp(this.legR.hip.rotation.x, -.2, 10, dt);
      this.legL.knee.rotation.x = damp(this.legL.knee.rotation.x, .9, 10, dt);
      this.legR.knee.rotation.x = damp(this.legR.knee.rotation.x, .5, 10, dt);
      this.armL.shoulder.rotation.x = damp(this.armL.shoulder.rotation.x, -.6, 10, dt);
    }
    this.pivot.position.y = damp(this.pivot.position.y, bob, 16, dt);
    this.phone.material.emissiveIntensity = .35 + Math.sin(t * 1.3) * .2;
    this.updateDust(dt);
  }

  updateMaterialFlash() {
    const flash = this.hitFlash > 0;
    for (const m of this.mats) {
      if (!m.emissive) continue;
      if (flash) { m.emissive.setHex(0x7a1414); m.emissiveIntensity = .55; }
      else if (m.userData.baseEmissive) { m.emissive.setHex(m.userData.baseEmissive); m.emissiveIntensity = m.userData.baseIntensity; }
      else { m.emissive.setHex(0x000000); m.emissiveIntensity = 0; }
    }
  }
}

function easeInOut(t) { return t < .5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2; }
