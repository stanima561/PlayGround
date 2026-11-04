import * as THREE from 'three';
import { clamp, lerp, damp, dampAngle, angleDelta, material, emissive, makeGlowSprite, rand, chance, choose } from '../core/utils.js';
import { ENEMY_TYPES } from '../game/data.js';
import { heightAt } from '../world/terrain.js';

const _v = new THREE.Vector3();

export class Enemy {
  constructor(game, defId, spawn) {
    this.game = game;
    this.def = ENEMY_TYPES[defId];
    this.defId = defId;
    this.spawn = new THREE.Vector3(spawn.x, heightAt(spawn.x, spawn.z), spawn.z);
    this.pos = this.spawn.clone();
    this.yaw = rand(0, Math.PI * 2);
    this.alive = true;
    this.scene = game.scene;
    this.patrolR = spawn.patrol || 6;
    this.state = 'patrol';
    this.stateTime = 0;
    this.attackCooldown = rand(.4, 1.6);
    this.alertLevel = 0;
    this.attack = null;
    this.staggerTimer = 0;
    this.returnTimer = 0;
    this.patrolTarget = this.pickPatrol();
    this.patrolWait = rand(.5, 2);
    this.speed = this.def.speed;
    this.walk = 0;
    this.hitFlash = 0;
    this.deathTimer = 0;
    this.health = this.def.hp;
    this.maxHealth = this.def.hp;
    this.poise = this.def.poise;
    this.maxPoise = this.def.poise;
    this.canBeCrit = false;
    this.vel = new THREE.Vector3();
    this.aggro = false;
    this.leash = 30;
    this.radius = .55;
    this.attackToken = 0;
    this.rangedCooldown = 0;
    this.deadDrop = false;
    this.buildModel();
    this.root.position.copy(this.pos);
    this.scene.add(this.root);
    this.barEl = null;
    this.isBoss = false;
    this.isElite = !!this.def.elite;
    if (this.isElite) this.radius = .85;
  }

  pickPatrol() {
    const a = rand(0, Math.PI * 2), r = rand(2, this.patrolR || 6);
    return new THREE.Vector3(this.spawn.x + Math.cos(a) * r, 0, this.spawn.z + Math.sin(a) * r);
  }

  /* ==================== MODELS ==================== */
  buildModel() {
    this.root = new THREE.Group();
    this.body = new THREE.Group(); this.root.add(this.body);
    this.mats = [];
    this.eyeMats = [];
    this.armL = this.armR = this.legL = this.legR = this.head = this.torso = null;
    this.weaponMount = null;
    const mkMat = (c, o = {}) => { const m = material(c, o); this.mats.push(m); m.userData.baseEmissive = 0x000000; return m; };
    const eye = (c = 0xff5b3a) => { const m = emissive(c, 2.2); this.eyeMats.push(m); return m; };

    if (this.def.quadruped) {
      this.buildHound(mkMat, eye);
    } else {
      switch (this.defId) {
        case 'villager': this.buildHumanoid({ skin: 0x8b9a78, tunic: 0x574b37, pants: 0x3a342b, eye: 0xff5b3a, hat: true, weapon: 'pitchfork' }, mkMat, eye); break;
        case 'goblin': this.buildHumanoid({ skin: 0x77a86a, tunic: 0x4a3c54, pants: 0x2e2933, eye: 0x66f0d0, bigHead: true, bigEars: true, weapon: 'dagger', scale: .76 }, mkMat, eye); break;
        case 'knight': this.buildHumanoid({ skin: 0x3c3c40, tunic: 0x5c5e63, pants: 0x45474c, eye: 0xff7a3a, armored: true, cape: true, weapon: 'sword', shield: true, scale: 1.12 }, mkMat, eye); break;
        case 'archer': this.buildHumanoid({ skin: 0x7d8468, tunic: 0x39452f, pants: 0x2d3528, eye: 0xd8ff7a, hood: true, weapon: 'bow', scale: .98 }, mkMat, eye); break;
        case 'briarWarden': this.buildHumanoid({ skin: 0x5a5038, tunic: 0x3f4a2c, pants: 0x33351f, eye: 0xa8ff6a, armored: true, bark: true, weapon: 'club', scale: 1.5 }, mkMat, eye); break;
        default: this.buildHumanoid({ skin: 0x8b9a78, tunic: 0x574b37, pants: 0x3a342b, eye: 0xff5b3a, weapon: 'pitchfork' }, mkMat, eye);
      }
    }
    this.addTelegraph();
    this.addAlertIcon();
  }

  buildHumanoid(cfg, mkMat, eye) {
    const sc = cfg.scale || 1;
    this.body.scale.setScalar(sc);
    const skin = mkMat(cfg.skin, { roughness: .9 });
    const tunic = mkMat(cfg.tunic, { roughness: .95 });
    const pants = mkMat(cfg.pants, { roughness: .95 });
    const metal = mkMat(0x8e8f94, { metalness: .75, roughness: .35 });
    const dark = mkMat(0x2a2927, { roughness: .9 });
    const eyeM = eye(cfg.eye);
    const scale = sc;

    const torso = new THREE.Group(); torso.position.y = 1.0; this.body.add(torso); this.torso = torso;
    const chest = new THREE.Mesh(new THREE.BoxGeometry(.55, .7, .33), cfg.armored ? metal : tunic);
    chest.position.y = .22; torso.add(chest);
    if (cfg.bark) {
      for (let i = 0; i < 7; i++) {
        const bark = new THREE.Mesh(new THREE.CylinderGeometry(.04, .07, .5, 4), dark); bark.position.set(rand(-.3, .3), rand(-.1, .5), rand(-.18, .18)); bark.rotation.set(rand(-.5, .5), rand(0, 3), rand(-.5, .5)); torso.add(bark);
      }
    }
    if (cfg.cape) {
      const cape = new THREE.Mesh(new THREE.PlaneGeometry(.7, 1.0, 1, 3), mkMat(0x4c2426, { side: THREE.DoubleSide, roughness: 1 }));
      cape.position.set(0, -.02, -.22); cape.rotation.x = .1; torso.add(cape);
    }
    if (cfg.hat) {
      const brim = new THREE.Mesh(new THREE.CylinderGeometry(.42, .44, .04, 8), mkMat(0x5f5534)); brim.position.y = .6; torso.add(brim);
      const top = new THREE.Mesh(new THREE.CylinderGeometry(.2, .23, .26, 8), brim.material); top.position.y = .73; torso.add(top);
    }
    if (cfg.armored) {
      for (const sx of [-.32, .32]) { const pa = new THREE.Mesh(new THREE.SphereGeometry(.18, 7, 6), metal); pa.position.set(sx, .42, 0); pa.scale.set(1, .7, .9); torso.add(pa); }
      const belt = new THREE.Mesh(new THREE.CylinderGeometry(.32, .33, .1, 8), dark); belt.position.y = -.15; torso.add(belt);
    }
    const neck = new THREE.Mesh(new THREE.CylinderGeometry(.07, .09, .12, 5), skin); neck.position.y = .62; torso.add(neck);
    const head = new THREE.Group(); head.position.y = cfg.bigHead ? .82 : .76; torso.add(head); this.head = head;
    if (cfg.armored) {
      const helm = new THREE.Mesh(new THREE.BoxGeometry(.34, .38, .34), metal); head.add(helm);
      const visor = new THREE.Mesh(new THREE.BoxGeometry(.28, .1, .03), dark); visor.position.set(0, -.02, .18); head.add(visor);
      const plume = new THREE.Mesh(new THREE.ConeGeometry(.05, .32, 5), mkMat(0x6b2b2b)); plume.position.y = .27; head.add(plume);
      for (const ex of [-.07, .07]) { const e = new THREE.Mesh(new THREE.SphereGeometry(.03, 6, 5), eyeM); e.position.set(ex, .02, .19); head.add(e); }
      const horns = new THREE.Mesh(new THREE.TorusGeometry(.19, .025, 4, 8, Math.PI), metal); horns.rotation.z = Math.PI; horns.position.y = .16; head.add(horns);
    } else {
      const skull = new THREE.Mesh(new THREE.SphereGeometry(cfg.bigHead ? .29 : .23, 10, 8), skin); skull.scale.set(1, .95, .92); head.add(skull);
      const jaw = new THREE.Mesh(new THREE.BoxGeometry(.2, .08, .16), mkMat(0x5b5445)); jaw.position.set(0, -.13, .08); head.add(jaw);
      for (const ex of [-.08, .08]) {
        const e = new THREE.Mesh(new THREE.SphereGeometry(cfg.bigHead ? .042 : .028, 6, 5), eyeM); e.position.set(ex, .02, cfg.bigHead ? .25 : .2); head.add(e);
        const glow = makeGlowSprite(cfg.eye, .28); glow.position.copy(e.position); head.add(glow); this.eyeMats.push(glow.material);
      }
      if (cfg.bigEars) {
        for (const sx of [-1, 1]) { const ear = new THREE.Mesh(new THREE.ConeGeometry(.12, .5, 4), skin); ear.position.set(sx * .25, .08, 0); ear.rotation.z = sx * -1.1; head.add(ear); }
      }
      if (cfg.hood) {
        const hood = new THREE.Mesh(new THREE.SphereGeometry(.32, 8, 7, 0, Math.PI * 2, 0, Math.PI * .66), tunic); hood.position.y = .02; head.add(hood);
      }
      if (cfg.weapon === 'pitchfork') {
        const hat2 = new THREE.Mesh(new THREE.CylinderGeometry(.28, .3, .03, 7), mkMat(0x4a4128)); hat2.position.y = .18; head.add(hat2);
      }
    }
    // hair/ragged tufts
    if (!cfg.armored && !cfg.hood) {
      for (let i = 0; i < 4; i++) { const t = new THREE.Mesh(new THREE.ConeGeometry(.035, .18, 4), dark); t.position.set(rand(-.16, .16), .2, rand(-.1, .1)); t.rotation.z = rand(-.4, .4); head.add(t); }
    }

    // arms
    const mkArm = (side) => {
      const sh = new THREE.Group(); sh.position.set(side * .34, .45, 0); torso.add(sh);
      const up = new THREE.Mesh(new THREE.CylinderGeometry(.085, .072, .4, 6), cfg.armored ? metal : skin); up.position.y = -.2; sh.add(up);
      const el = new THREE.Group(); el.position.y = -.4; sh.add(el);
      const fore = new THREE.Mesh(new THREE.CylinderGeometry(.07, .06, .36, 6), cfg.armored ? metal : skin); fore.position.y = -.18; el.add(fore);
      const hand = new THREE.Mesh(new THREE.SphereGeometry(.075, 7, 5), skin); hand.position.y = -.37; el.add(hand);
      return { sh, el };
    };
    this.armL = mkArm(-1); this.armR = mkArm(1);
    if (cfg.shield) {
      const sh = new THREE.Mesh(new THREE.CylinderGeometry(.32, .32, .07, 8), mkMat(0x5d5a50, { metalness: .5, roughness: .5 }));
      sh.rotation.x = Math.PI / 2; sh.position.set(-.08, -.3, .05); this.armL.el.add(sh);
      const boss = new THREE.Mesh(new THREE.BoxGeometry(.16, .16, .03), mkMat(0x6b2b2b)); boss.position.set(-.08, -.3, .1); this.armL.el.add(boss);
    }

    // legs
    const mkLeg = (side) => {
      const hip = new THREE.Group(); hip.position.set(side * .16, .95, 0); this.body.add(hip);
      const thigh = new THREE.Mesh(new THREE.CylinderGeometry(.105, .085, .44, 6), cfg.armored ? metal : pants); thigh.position.y = -.22; hip.add(thigh);
      const knee = new THREE.Group(); knee.position.y = -.44; hip.add(knee);
      const shin = new THREE.Mesh(new THREE.CylinderGeometry(.085, .07, .4, 6), cfg.armored ? metal : pants); shin.position.y = -.2; knee.add(shin);
      const foot = new THREE.Mesh(new THREE.BoxGeometry(.18, .12, .3), dark); foot.position.set(0, -.42, .06); knee.add(foot);
      return { hip, knee };
    };
    this.legL = mkLeg(-1); this.legR = mkLeg(1);

    // weapons
    const wm = new THREE.Group(); wm.position.y = -.36; this.armR.el.add(wm); this.weaponMount = wm;
    const wood = mkMat(0x4b3322, { roughness: .9 });
    if (cfg.weapon === 'pitchfork') {
      const shaft = new THREE.Mesh(new THREE.CylinderGeometry(.028, .035, 1.55, 5), wood); shaft.position.y = .55; wm.add(shaft);
      for (const ox of [-.09, 0, .09]) { const tine = new THREE.Mesh(new THREE.CylinderGeometry(.018, .022, .32, 4), metal); tine.position.set(ox, 1.45, 0); wm.add(tine); }
      wm.rotation.set(-.2, 0, -.2);
    } else if (cfg.weapon === 'dagger') {
      const blade = new THREE.Mesh(new THREE.BoxGeometry(.05, .34, .02), metal); blade.position.y = .22; wm.add(blade);
      wm.rotation.set(-.3, 0, -.3);
    } else if (cfg.weapon === 'sword') {
      const blade = new THREE.Mesh(new THREE.BoxGeometry(.07, 1.05, .03), metal); blade.position.y = .62; wm.add(blade);
      const tip = new THREE.Mesh(new THREE.ConeGeometry(.045, .16, 4), metal); tip.position.y = 1.22; wm.add(tip);
      const guard = new THREE.Mesh(new THREE.BoxGeometry(.32, .06, .08), dark); wm.add(guard);
      const grip = new THREE.Mesh(new THREE.CylinderGeometry(.03, .03, .24, 5), wood); grip.position.y = -.16; wm.add(grip);
      wm.rotation.set(-.25, 0, -.2);
    } else if (cfg.weapon === 'bow') {
      const arc = new THREE.Mesh(new THREE.TorusGeometry(.55, .022, 4, 14, Math.PI * 1.1), wood); arc.rotation.z = -.08; wm.add(arc);
      const string = new THREE.Mesh(new THREE.CylinderGeometry(.004, .004, 1.02, 3), mkMat(0xd8cdb0)); string.position.set(-.02, .02, 0); wm.add(string);
      wm.rotation.set(0, 0, .2);
    } else if (cfg.weapon === 'club') {
      const shaft = new THREE.Mesh(new THREE.CylinderGeometry(.06, .08, 1.9, 5), wood); shaft.position.y = .7; wm.add(shaft);
      const head = new THREE.Mesh(new THREE.DodecahedronGeometry(.28), mkMat(0x463a25)); head.position.y = 1.7; wm.add(head);
      for (let i = 0; i < 5; i++) { const thorn = new THREE.Mesh(new THREE.ConeGeometry(.05, .3, 4), mkMat(0x5d5133)); thorn.position.set(rand(-.25, .25), 1.7 + rand(-.2, .2), rand(-.25, .25)); thorn.rotation.set(rand(-1, 1), 0, rand(-1, 1)); wm.add(thorn); }
      wm.rotation.set(-.2, 0, -.25);
    }
    // briar crown / antlers
    if (this.defId === 'briarWarden') {
      for (const sx of [-1, 1]) {
        const antler = new THREE.Mesh(new THREE.CylinderGeometry(.03, .05, .7, 4), mkMat(0x3d3322)); antler.position.set(sx * .18, .27, 0); antler.rotation.z = sx * -.5; head.add(antler);
        const branch = new THREE.Mesh(new THREE.CylinderGeometry(.02, .03, .35, 4), antler.material); branch.position.set(sx * .3, .5, 0); branch.rotation.z = sx * .5; head.add(branch);
      }
      const crownGlow = new THREE.Mesh(new THREE.TorusGeometry(.25, .025, 4, 10), emissive(0x9dff5a, 1.6)); crownGlow.rotation.x = Math.PI / 2; crownGlow.position.y = .32; head.add(crownGlow);
    }
  }

  buildHound(mkMat, eye) {
    const bodyM = mkMat(0x3e3a30, { roughness: .95 });
    const furM = mkMat(0x2e2a24, { roughness: 1 });
    const boneM = mkMat(0x99917c, { roughness: .8 });
    const eyeM = eye(0xff3a2e);
    const body = new THREE.Mesh(new THREE.BoxGeometry(.52, .48, 1.15), bodyM); body.position.y = .82; this.body.add(body);
    const chest = new THREE.Mesh(new THREE.BoxGeometry(.6, .56, .5), bodyM); chest.position.set(0, .88, .35); this.body.add(chest);
    const head = new THREE.Group(); head.position.set(0, .94, .72); this.body.add(head); this.head = head;
    const skull = new THREE.Mesh(new THREE.BoxGeometry(.34, .32, .45), furM); head.add(skull);
    const snout = new THREE.Mesh(new THREE.BoxGeometry(.2, .16, .35), boneM); snout.position.set(0, -.05, .32); head.add(snout);
    const jaw = new THREE.Mesh(new THREE.BoxGeometry(.19, .08, .3), boneM); jaw.position.set(0, -.17, .28); jaw.name = 'jaw'; head.add(jaw);
    for (const ex of [-.09, .09]) { const e = new THREE.Mesh(new THREE.SphereGeometry(.035, 6, 5), eyeM); e.position.set(ex, .06, .2); head.add(e); const gl = makeGlowSprite(0xff3a2e, .3); gl.position.set(ex, .06, .24); head.add(gl); this.eyeMats.push(gl.material); }
    for (let i = 0; i < 4; i++) { const spike = new THREE.Mesh(new THREE.ConeGeometry(.06, .25, 4), boneM); spike.position.set(rand(-.15, .15), .32, -.2 + i * .18); head.parent.add(spike); }
    // tail
    const tail = new THREE.Mesh(new THREE.CylinderGeometry(.03, .07, .8, 4), furM); tail.position.set(0, 1.0, -.7); tail.rotation.x = .8; this.body.add(tail);
    // legs
    const mk = (x, z) => {
      const g = new THREE.Group(); g.position.set(x, .68, z); this.body.add(g);
      const up = new THREE.Mesh(new THREE.CylinderGeometry(.07, .055, .4, 5), furM); up.position.y = -.2; g.add(up);
      const low = new THREE.Group(); low.position.y = -.4; g.add(low);
      const l2 = new THREE.Mesh(new THREE.CylinderGeometry(.05, .04, .34, 5), bodyM); l2.position.y = -.17; low.add(l2);
      const foot = new THREE.Mesh(new THREE.BoxGeometry(.12, .08, .22), boneM); foot.position.set(0, -.34, .05); low.add(foot);
      return { hip: g, knee: low };
    };
    this.legL = mk(-.2, .38); this.legR = mk(.2, .38);
    this.legL2 = mk(-.2, -.42); this.legR2 = mk(.2, -.42);
  }

  addTelegraph() {
    const mat = new THREE.MeshBasicMaterial({ color: 0xff4a2a, transparent: true, opacity: 0, side: THREE.DoubleSide, depthWrite: false, blending: THREE.AdditiveBlending });
    const ring = new THREE.Mesh(new THREE.RingGeometry(.55, .72, 24), mat);
    ring.rotation.x = -Math.PI / 2; ring.position.y = .04; this.root.add(ring); this.telegraph = ring;
  }
  addAlertIcon() {
    const c = document.createElement('canvas'); c.width = 64; c.height = 64;
    const ctx = c.getContext('2d');
    ctx.fillStyle = '#e8cf92'; ctx.font = 'bold 52px Georgia'; ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
    ctx.fillText('!', 32, 34);
    const tex = new THREE.CanvasTexture(c);
    const mat = new THREE.SpriteMaterial({ map: tex, transparent: true, depthWrite: false });
    const s = new THREE.Sprite(mat); s.position.y = 2.4; s.scale.setScalar(.45); s.visible = false; this.root.add(s); this.alertIcon = s;
  }

  /* ==================== UPDATE ==================== */
  update(dt, player) {
    if (!this.alive) { this.updateDeath(dt); return; }
    this.stateTime += dt;
    this.attackCooldown = Math.max(0, this.attackCooldown - dt);
    this.rangedCooldown = Math.max(0, this.rangedCooldown - dt);
    this.hitFlash = Math.max(0, this.hitFlash - dt);
    this.poise = Math.min(this.maxPoise, this.poise + dt * 9);
    if (this.alertIcon.visible && this.stateTime > 1.1) this.alertIcon.visible = false;

    const dist = Math.hypot(player.pos.x - this.pos.x, player.pos.z - this.pos.z);
    const dx = player.pos.x - this.pos.x, dz = player.pos.z - this.pos.z;
    const angToPlayer = Math.atan2(dx, dz);
    this.distToPlayer = dist;

    if (player.dead) { this.aggro = false; if (this.state !== 'return' && this.state !== 'patrol') this.setState('return'); }

    // detection
    if (!this.aggro && !player.dead && this.state !== 'stagger') {
      const facing = Math.cos(angleDelta(this.yaw, angToPlayer));
      const heard = player.sprinting && dist < 24;
      if ((dist < this.def.aggro && (dist < 4.5 || facing > .15 || player.sprinting)) || heard) {
        this.alert(player);
      }
    }
    this.alertLevel = this.aggro ? 1 : 0;

    switch (this.state) {
      case 'patrol': this.updatePatrol(dt); break;
      case 'idle': this.updateIdle(dt); break;
      case 'chase': this.updateChase(dt, player, dist, angToPlayer); break;
      case 'attack': this.updateAttack(dt, player, dist, angToPlayer); break;
      case 'stagger': this.updateStagger(dt); break;
      case 'return': this.updateReturn(dt); break;
    }

    // physics / collisions / ground
    this.pos.x += this.vel.x * dt;
    this.pos.z += this.vel.z * dt;
    this.vel.x = damp(this.vel.x, 0, 6, dt); this.vel.z = damp(this.vel.z, 0, 6, dt);
    this.resolveCollisions();
    this.pos.y = heightAt(this.pos.x, this.pos.z);
    this.root.position.copy(this.pos);
    this.root.rotation.y = this.yaw;
    this.updateAnimation(dt);
  }

  setState(s) { this.state = s; this.stateTime = 0; }

  alert(player) {
    if (this.aggro) return;
    this.aggro = true;
    this.setState('chase');
    this.alertIcon.visible = true;
    this.stateTime = 0;
    this.game.audio.roar?.(); // maybe not for all; use soft sting
    if (!this.def.elite) this.game.audio.tone?.({ freq: 180, type: 'triangle', dur: .25, gain: .025 });
    else this.game.audio.roar();
    if (this.isElite) this.game.showEliteBar(this);
    // alert nearby allies
    for (const e of this.game.enemies) {
      if (e === this || !e.alive || e.aggro) continue;
      if (e.pos.distanceTo(this.pos) < 12) { e.aggro = true; e.setState('chase'); }
    }
  }

  updatePatrol(dt) {
    if (this.patrolWait > 0) { this.patrolWait -= dt; return; }
    const dx = this.patrolTarget.x - this.pos.x, dz = this.patrolTarget.z - this.pos.z;
    const d = Math.hypot(dx, dz);
    if (d < .7) {
      this.patrolWait = rand(1.2, 3.4);
      this.patrolTarget = this.pickPatrol();
      return;
    }
    const sp = this.def.speed * .34;
    this.vel.x = (dx / d) * sp; this.vel.z = (dz / d) * sp;
    this.yaw = dampAngle(this.yaw, Math.atan2(dx, dz), 5, dt);
  }
  updateIdle(dt) {
    if (this.stateTime > 2) { this.setState('patrol'); this.patrolTarget = this.pickPatrol(); }
  }
  updateChase(dt, player, dist, angToPlayer) {
    const leashD = Math.hypot(this.pos.x - this.spawn.x, this.pos.z - this.spawn.z);
    if (leashD > this.leash || player.dead) { this.aggro = false; this.setState('return'); if (this.isElite) this.game.hideEliteBar(); return; }
    if (this.def.ranged) { this.updateArcherChase(dt, player, dist, angToPlayer); return; }
    this.yaw = dampAngle(this.yaw, angToPlayer, 6, dt);
    const attackRange = this.def.attackRange;
    if (dist > attackRange * .9) {
      const sp = this.def.speed * (dist > 8 ? 1.15 : 1);
      this.vel.x = (Math.sin(angToPlayer) * sp);
      this.vel.z = (Math.cos(angToPlayer) * sp);
    } else {
      // circle strafe / wait for opening
      const side = Math.sin(this.game.time * .8 + this.spawn.x) > 0 ? 1 : -1;
      this.vel.x = Math.cos(angToPlayer) * this.def.speed * .28 * side;
      this.vel.z = -Math.sin(angToPlayer) * this.def.speed * .28 * side;
      if (this.attackCooldown <= 0 && this.game.canEnemyAttack(this)) this.startAttack();
    }
    // separation
    this.separation();
  }
  updateArcherChase(dt, player, dist, angToPlayer) {
    this.yaw = dampAngle(this.yaw, angToPlayer, 6, dt);
    if (dist < 5) {
      this.vel.x = -Math.sin(angToPlayer) * this.def.speed; this.vel.z = -Math.cos(angToPlayer) * this.def.speed;
    } else if (dist > 16) {
      this.vel.x = Math.sin(angToPlayer) * this.def.speed; this.vel.z = Math.cos(angToPlayer) * this.def.speed;
    } else if (this.rangedCooldown <= 0 && this.game.canEnemyAttack(this)) {
      this.startAttack('ranged');
    }
    this.separation();
  }
  separation() {
    for (const e of this.game.enemies) {
      if (e === this || !e.alive) continue;
      const dx = this.pos.x - e.pos.x, dz = this.pos.z - e.pos.z;
      const d = Math.hypot(dx, dz);
      if (d < 1.3 && d > .01) { this.vel.x += dx / d * .8; this.vel.z += dz / d * .8; }
    }
  }

  startAttack(kind = 'melee') {
    this.state = 'attack'; this.stateTime = 0;
    this.attackCooldown = this.def.attackCooldown + rand(0, .5);
    const ranged = kind === 'ranged';
    const elite = this.def.elite;
    const atk = {
      kind,
      windup: ranged ? 1.15 : (elite ? .85 : (this.defId === 'knight' ? .9 : this.defId === 'goblin' ? .35 : .55)),
      active: ranged ? .1 : .18,
      recover: ranged ? .7 : (elite ? .75 : .55),
      damage: this.def.damage * (elite ? 1.15 : 1),
      range: ranged ? 30 : (elite ? 4.2 : this.def.attackRange + .55),
      cone: ranged ? .9 : (elite ? .95 : .72),
      fired: false,
      lunging: this.defId === 'hound' || (elite && kind === 'melee'),
    };
    if (elite && chance(.4)) { atk.kind = 'aoe'; atk.windup = 1.0; atk.damage = this.def.damage * 1.3; atk.range = 5.0; }
    this.attack = atk;
    this.faceLocked = this.yaw;
    this.game.audio.swing?.(elite);
    this.telegraph.visible = true;
    this.telegraph.material.opacity = 0;
    this.telegraph.scale.setScalar(.6);
    this.alertIcon.visible = false;
  }

  updateAttack(dt, player, dist, angToPlayer) {
    const a = this.attack;
    if (!a) { this.setState('chase'); return; }
    const t = this.stateTime;
    if (a.kind !== 'ranged') this.yaw = dampAngle(this.yaw, angToPlayer, 3.2, dt);
    // telegraph build
    if (t < a.windup) {
      const p = t / a.windup;
      this.telegraph.material.opacity = .18 + p * .55;
      const sc = .5 + p * (a.range / 1.4);
      this.telegraph.scale.setScalar(sc);
      this.telegraph.material.color.setHex(a.kind === 'aoe' ? 0xb44cff : 0xff4a2a);
      if (a.lunging) this.attackLunge = true;
    } else if (!a.fired) {
      a.fired = true;
      this.telegraph.material.opacity = 0;
      this.telegraph.visible = false;
      if (a.kind === 'ranged') {
        this.game.enemyFireArrow(this, player);
      } else if (a.kind === 'aoe') {
        this.game.enemyAoe(this, a);
      } else {
        const d = Math.hypot(player.pos.x - this.pos.x, player.pos.z - this.pos.z);
        const facing = Math.cos(angleDelta(this.yaw, Math.atan2(player.pos.x - this.pos.x, player.pos.z - this.pos.z)));
        if (d <= a.range + .6 && facing > (a.cone - .5) && !player.dead) {
          player.takeDamage(a.damage, this.pos, { source: this });
        }
        if (a.lunging) {
          const lunge = this.defId === 'hound' ? 7 : 4;
          this.vel.x += Math.sin(this.yaw) * lunge; this.vel.z += Math.cos(this.yaw) * lunge;
        }
      }
      this.game.spawnAttackArc(this, a.range, a.kind === 'aoe' ? 0xb44cff : 0xff6a3a);
    }
    if (t > a.windup + a.active + a.recover) {
      this.attack = null;
      this.setState('chase');
    }
  }

  updateStagger(dt) {
    if (this.stateTime > this.staggerTimer) {
      this.canBeCrit = false;
      this.setState('chase');
    }
  }
  updateReturn(dt) {
    const dx = this.spawn.x - this.pos.x, dz = this.spawn.z - this.pos.z;
    const d = Math.hypot(dx, dz);
    if (d < .8) {
      this.health = this.maxHealth; this.poise = this.maxPoise;
      this.setState('patrol'); this.patrolTarget = this.pickPatrol(); this.patrolWait = rand(.5, 2);
      this.root.visible = true;
      return;
    }
    const sp = this.def.speed * 1.3;
    this.vel.x = (dx / d) * sp; this.vel.z = (dz / d) * sp;
    this.yaw = dampAngle(this.yaw, Math.atan2(dx, dz), 8, dt);
  }

  resolveCollisions() {
    for (const c of this.game.world.colliders) {
      const dx = this.pos.x - c.x, dz = this.pos.z - c.z;
      const d = Math.hypot(dx, dz), min = this.radius + c.r;
      if (d < min && d > .001) { const p = min - d; this.pos.x += dx / d * p; this.pos.z += dz / d * p; }
    }
    // don't stack on player
    const pl = this.game.player;
    if (pl && !pl.dead) {
      const dx = this.pos.x - pl.pos.x, dz = this.pos.z - pl.pos.z;
      const d = Math.hypot(dx, dz), min = this.radius + .42;
      if (d < min && d > .001) { const p = min - d; this.pos.x += dx / d * p; this.pos.z += dz / d * p; }
    }
  }

  /* ==================== COMBAT ==================== */
  takeDamage(amount, fromPos, opts = {}) {
    if (!this.alive) return;
    let dmg = amount;
    const dx = fromPos ? this.pos.x - fromPos.x : 0;
    const dz = fromPos ? this.pos.z - fromPos.z : 0;
    const facing = Math.sin(this.yaw) * dx + Math.cos(this.yaw) * dz;
    const front = facing > -.1;
    if (this.def.shield && front && this.state !== 'stagger' && this.state !== 'attack' && !opts.critical) {
      dmg *= .4;
      this.game.spawnSparkBurst(this.pos.clone().add(new THREE.Vector3(0, 1.1, 0)), 8);
      this.game.audio.block();
      this.game.floatText(this.pos, 'GUARD', 'block');
    }
    if (opts.critical) dmg *= 1;
    this.health -= dmg;
    this.poise -= opts.poise ?? 18;
    this.hitFlash = .18;
    this.aggro = true;
    if (this.state === 'patrol' || this.state === 'idle') { this.alert(this.game.player); }
    this.game.floatText(this.pos, Math.round(dmg), 'enemy');
    this.game.audio.hit(this.def.armorType === 'metal');
    this.game.spawnBloodBurst(this.pos.clone().add(new THREE.Vector3(0, .9 * (this.def.scale || 1), 0)), Math.min(14, 4 + dmg * .15), this.def.armorType === 'metal' ? 0xffd27a : 0x7a1f1f);
    if (!opts.critical) this.game.shake(.1);
    // knockback
    if (!opts.noKnock && dmg > 20) {
      const l = Math.hypot(dx, dz) || 1;
      this.vel.x += dx / l * 2.2; this.vel.z += dz / l * 2.2;
    }
    if (this.isElite) this.game.showEliteBar(this);
    if (this.health <= 0) { this.die(opts); return; }
    if (this.poise <= 0) {
      this.poise = this.maxPoise;
      this.stagger(opts.critical ? 2.2 : 1.35, opts.source);
    }
  }

  stagger(duration, source) {
    if (!this.alive) return;
    this.setState('stagger');
    this.staggerTimer = duration;
    this.canBeCrit = true;
    this.attack = null;
    this.telegraph.visible = false;
    this.vel.set(0, 0, 0);
    this.game.floatText(this.pos, 'STAGGERED', 'crit');
    if (this.isElite) this.game.showEliteBar(this);
    this.game.audio.parry?.();
  }

  die(opts = {}) {
    if (!this.alive) return;
    this.alive = false;
    this.state = 'dead';
    this.deathTimer = 0;
    this.root.rotation.y = this.yaw;
    this.telegraph.visible = false;
    this.attack = null;
    this.game.audio.hit(false);
    this.game.audio.tone?.({ freq: 120, type: 'sawtooth', dur: .8, gain: .06, slide: 40 });
    this.game.spawnBloodBurst(this.pos.clone().add(new THREE.Vector3(0, .8, 0)), 22, 0x6e1515);
    this.game.spawnSoulBurst(this.pos.clone().add(new THREE.Vector3(0, .8, 0)), this.def.elite ? 36 : 14);
    const motes = Math.round(this.def.motes * rand(.85, 1.25));
    this.game.addMotes(motes, this.pos);
    this.game.addXP(this.def.xp);
    this.game.onEnemyKilled(this);
    if (this.isElite) { this.game.hideEliteBar(); this.game.showBanner('ELITE VANQUISHED', 'The Briar Warden has fallen.'); }
    // loot
    if (this.defId === 'briarWarden') this.game.giveLoot('spear', 'Briar Spear', this.pos);
    else if (this.defId === 'goblin' && chance(.09)) this.game.giveLoot('dagger', 'Glimmer Dagger', this.pos);
    else if (this.defId === 'archer' && chance(.12)) this.game.giveLoot('bow', 'Weeping Shortbow', this.pos);
    else if (this.defId === 'knight' && chance(.2)) this.game.giveLoot('knight', 'Rotten Knight Plate', this.pos, 'armor');
    else if (chance(.12)) this.game.giveItem('emberBomb', 1);
    // remove after animation
    setTimeout(() => {
      if (this.root && this.root.parent) this.root.parent.remove(this.root);
    }, 5200);
  }

  updateDeath(dt) {
    this.deathTimer += dt;
    const p = Math.min(1, this.deathTimer / .5);
    if (this.def.quadruped) this.root.rotation.z = lerp(0, 1.2, p);
    else this.root.rotation.x = lerp(0, -1.35, p);
    if (this.deathTimer > 3.8) this.root.position.y -= dt * .4;
  }

  /* ==================== ANIMATION ==================== */
  updateAnimation(dt) {
    const t = this.game.time;
    const speed = Math.hypot(this.vel.x, this.vel.z);
    const moving = speed > .25;
    const cycle = t * (5 + speed * 1.5) + this.spawn.x;
    const amount = clamp(speed / (this.def.speed || 1), 0, 1);
    this.walk += dt * (moving ? 6 + speed : 2);
    const sw = Math.sin(cycle) * (.45 + amount * .35);

    if (this.state === 'stagger') {
      this.body.rotation.x = damp(this.body.rotation.x, -.55, 10, dt);
      this.body.rotation.z = damp(this.body.rotation.z, .2, 10, dt);
      if (this.armL) { this.armL.sh.rotation.x = damp(this.armL.sh.rotation.x, .6, 8, dt); this.armR.sh.rotation.x = damp(this.armR.sh.rotation.x, .6, 8, dt); }
      if (this.legL) { this.legL.hip.rotation.x = damp(this.legL.hip.rotation.x, .3, 8, dt); this.legR.hip.rotation.x = damp(this.legR.hip.rotation.x, -.3, 8, dt); }
      return;
    }
    this.body.rotation.x = damp(this.body.rotation.x, 0, 8, dt);
    this.body.rotation.z = damp(this.body.rotation.z, 0, 8, dt);

    if (this.def.quadruped) {
      const legs = [this.legL, this.legR, this.legL2, this.legR2];
      legs.forEach((l, i) => {
        if (!l) return;
        const phase = sw * (i % 2 === 0 ? 1 : -1) * (i > 1 ? -1 : 1);
        l.hip.rotation.x = damp(l.hip.rotation.x, phase, 14, dt);
        l.knee.rotation.x = damp(l.knee.rotation.x, Math.max(0, -phase) * .8, 14, dt);
      });
      this.head.rotation.x = damp(this.head.rotation.x, this.state === 'attack' ? -.35 : Math.sin(t * 2) * .06, 8, dt);
      const jaw = this.head.getObjectByName('jaw');
      if (jaw) jaw.rotation.x = this.state === 'attack' ? damp(jaw.rotation.x, .55, 12, dt) : damp(jaw.rotation.x, 0, 8, dt);
      return;
    }

    // humanoid walk
    if (this.legL) {
      this.legL.hip.rotation.x = damp(this.legL.hip.rotation.x, sw, 12, dt);
      this.legR.hip.rotation.x = damp(this.legR.hip.rotation.x, -sw, 12, dt);
      this.legL.knee.rotation.x = damp(this.legL.knee.rotation.x, Math.max(0, -sw) * 1.1, 12, dt);
      this.legR.knee.rotation.x = damp(this.legR.knee.rotation.x, Math.max(0, sw) * 1.1, 12, dt);
    }
    if (this.armL) {
      if (this.state === 'attack' && this.attack) {
        const a = this.attack;
        const t2 = this.stateTime;
        const wind = a.windup;
        if (t2 < wind) {
          this.armR.sh.rotation.x = damp(this.armR.sh.rotation.x, -2.5, 9, dt);
          this.armR.sh.rotation.z = damp(this.armR.sh.rotation.z, -.4, 9, dt);
          this.torso.rotation.x = damp(this.torso.rotation.x, -.18, 8, dt);
          this.torso.rotation.y = damp(this.torso.rotation.y, .35, 8, dt);
          if (this.defId === 'archer') {
            this.armL.sh.rotation.x = damp(this.armL.sh.rotation.x, -1.5, 9, dt);
            this.armR.el.rotation.x = damp(this.armR.el.rotation.x, -.6, 9, dt);
          }
        } else {
          this.armR.sh.rotation.x = damp(this.armR.sh.rotation.x, .7, 18, dt);
          this.armR.sh.rotation.z = damp(this.armR.sh.rotation.z, .5, 18, dt);
          this.torso.rotation.x = damp(this.torso.rotation.x, .3, 14, dt);
          this.torso.rotation.y = damp(this.torso.rotation.y, -.4, 14, dt);
        }
        this.armL.sh.rotation.x = damp(this.armL.sh.rotation.x, -.4, 8, dt);
      } else {
        this.armL.sh.rotation.x = damp(this.armL.sh.rotation.x, -sw * .6, 10, dt);
        this.armR.sh.rotation.x = damp(this.armR.sh.rotation.x, sw * .5 - .18, 10, dt);
        this.armR.sh.rotation.z = damp(this.armR.sh.rotation.z, -.18, 8, dt);
        this.torso.rotation.x = damp(this.torso.rotation.x, 0, 6, dt);
        this.torso.rotation.y = damp(this.torso.rotation.y, -sw * .15, 8, dt);
      }
    }
    if (this.head) this.head.rotation.y = damp(this.head.rotation.y, Math.sin(t * .7 + this.spawn.z) * .15, 5, dt);
    this.body.position.y = moving ? Math.abs(Math.cos(cycle)) * .045 * amount : Math.sin(t * 2 + this.spawn.x) * .015;
    this.updateFlash();
  }

  updateFlash() {
    for (const m of this.mats) {
      if (this.hitFlash > 0) { m.emissive?.setHex(0x8a1a10); if (m.emissiveIntensity !== undefined) m.emissiveIntensity = .55; }
      else { m.emissive?.setHex(0x000000); if (m.emissiveIntensity !== undefined) m.emissiveIntensity = 0; }
    }
  }

  dispose() {
    if (this.root?.parent) this.root.parent.remove(this.root);
    if (this.barEl?.parentNode) this.barEl.parentNode.removeChild(this.barEl);
  }
}
