import * as THREE from 'three';
import { clamp, lerp, damp, dampAngle, angleDelta, material, emissive, makeGlowSprite, rand, chance, choose } from '../core/utils.js';
import { heightAt } from '../world/terrain.js';
import { ARENA } from '../world/terrain.js';

export class HollowWoodsman {
  constructor(game) {
    this.game = game;
    this.name = 'THE HOLLOW WOODSMAN';
    this.sub = 'Keeper of the First Grove';
    this.center = new THREE.Vector3(ARENA.x, 0, ARENA.z);
    this.arenaRadius = ARENA.r - 1;
    this.spawn = new THREE.Vector3(0, 0, -111);
    this.pos = this.spawn.clone();
    this.yaw = Math.PI; // facing south toward the player
    this.radius = 2.0;
    this.maxHealth = 1500;
    this.health = this.maxHealth;
    this.maxPoise = 260;
    this.poise = this.maxPoise;
    this.active = false;
    this.dead = false;
    this.isBoss = true;
    this.state = 'dormant';
    this.stateTime = 0;
    this.cooldown = 2.5;
    this.phase = 1;
    this.attack = null;
    this.introActive = false;
    this.vel = new THREE.Vector3();
    this.hitFlash = 0;
    this.poiseBuildup = 0;
    this.staggerTimer = 0;
    this.deathTimer = 0;
    this.deathCinematic = false;
    this.alerted = false;
    this.rootHitOnce = false;
    this.armorType = 'bark';
    this.barEl = null;
    this.buildModel();
    this.root.position.copy(this.pos);
    this.scene = game.scene;
    this.scene.add(this.root);
  }

  buildModel() {
    const root = new THREE.Group();
    this.root = root;
    const body = new THREE.Group(); root.add(body); this.body = body;
    this.mats = [];
    const mk = (c, o = {}) => { const m = material(c, o); this.mats.push(m); return m; };
    const flannel = mk(0x6a2f2f, { roughness: .95 });
    const flannel2 = mk(0x4a2424, { roughness: .95 });
    const denim = mk(0x2e3440, { roughness: 1 });
    const leather = mk(0x4b3524, { roughness: .95 });
    const skin = mk(0x9b8b6d, { roughness: 1 });
    const bark = mk(0x4b3a27, { roughness: 1 });
    const bark2 = mk(0x3a2d1e, { roughness: 1 });
    const steel = mk(0x6c7075, { metalness: .7, roughness: .42 });
    const darkSteel = mk(0x3e4145, { metalness: .65, roughness: .5 });
    const leaf = mk(0x476b39, { roughness: 1 });
    const leaf2 = mk(0x5d7f45, { roughness: 1 });
    const eyeM = emissive(0xffb02e, 2.3);
    const heartM = emissive(0xff9a2e, 1.8);
    this.eyeMats = [eyeM, heartM];

    // legs
    const mkLeg = (side) => {
      const hip = new THREE.Group(); hip.position.set(side * .75, 3.0, 0); body.add(hip);
      const thigh = new THREE.Mesh(new THREE.CylinderGeometry(.46, .38, 1.55, 7), denim); thigh.position.y = -.75; hip.add(thigh);
      const knee = new THREE.Group(); knee.position.y = -1.5; hip.add(knee);
      const shin = new THREE.Mesh(new THREE.CylinderGeometry(.35, .3, 1.4, 7), denim); shin.position.y = -.7; knee.add(shin);
      const boot = new THREE.Mesh(new THREE.BoxGeometry(.75, .5, 1.25), leather); boot.position.set(0, -1.45, .28); knee.add(boot);
      const toe = new THREE.Mesh(new THREE.BoxGeometry(.72, .22, .35), darkSteel); toe.position.set(0, -1.6, .85); knee.add(toe);
      return { hip, knee };
    };
    this.legL = mkLeg(-1); this.legR = mkLeg(1);

    // torso
    const torso = new THREE.Group(); torso.position.y = 3.4; body.add(torso); this.torso = torso;
    const chest = new THREE.Mesh(new THREE.BoxGeometry(2.55, 2.5, 1.35), flannel); chest.position.y = .9; torso.add(chest);
    const belly = new THREE.Mesh(new THREE.BoxGeometry(2.2, .8, 1.2), flannel2); belly.position.y = -.35; torso.add(belly);
    const apron = new THREE.Mesh(new THREE.BoxGeometry(1.8, 1.9, .08), leather); apron.position.set(0, .1, .7); torso.add(apron);
    const belt = new THREE.Mesh(new THREE.BoxGeometry(2.45, .35, 1.32), leather); belt.position.y = -.55; torso.add(belt);
    const buckle = new THREE.Mesh(new THREE.BoxGeometry(.45, .45, .1), steel); buckle.position.set(0, -.55, .68); torso.add(buckle);
    // shoulder pads of bark
    for (const sx of [-1.35, 1.35]) {
      const pad = new THREE.Mesh(new THREE.DodecahedronGeometry(.48, 0), bark); pad.position.set(sx, 1.7, 0); pad.scale.set(1.1, .7, 1); torso.add(pad);
      for (let i = 0; i < 3; i++) { const sp = new THREE.Mesh(new THREE.ConeGeometry(.1, .5, 4), bark2); sp.position.set(sx + rand(-.25, .25), 1.95, rand(-.2, .2)); sp.rotation.z = rand(-.6, .6); torso.add(sp); }
    }
    // neck/head
    const head = new THREE.Group(); head.position.y = 2.35; torso.add(head); this.head = head;
    const skull = new THREE.Mesh(new THREE.BoxGeometry(.9, .9, .85), skin); head.add(skull);
    const brow = new THREE.Mesh(new THREE.BoxGeometry(.98, .2, .12), bark2); brow.position.set(0, .15, .44); head.add(brow);
    for (const ex of [-.22, .22]) {
      const eye = new THREE.Mesh(new THREE.SphereGeometry(.08, 6, 5), eyeM); eye.position.set(ex, .04, .44); head.add(eye);
      const gl = makeGlowSprite(0xffb02e, .7); gl.position.set(ex, .04, .5); head.add(gl); this.eyeMats.push(gl.material);
    }
    // beard of roots
    for (let i = 0; i < 9; i++) {
      const b = new THREE.Mesh(new THREE.ConeGeometry(.07, rand(.5, 1.0), 4), bark); b.position.set(rand(-.35, .35), -.45, rand(.25, .45)); b.rotation.x = Math.PI + rand(-.2, .2); head.add(b);
    }
    // huge antler-like branches
    for (const sx of [-1, 1]) {
      const ant = new THREE.Mesh(new THREE.CylinderGeometry(.06, .13, 1.5, 5), bark); ant.position.set(sx * .35, .65, 0); ant.rotation.z = sx * -.55; head.add(ant);
      const ant2 = new THREE.Mesh(new THREE.CylinderGeometry(.04, .07, .9, 4), bark); ant2.position.set(sx * .8, 1.15, 0); ant2.rotation.z = sx * .25; head.add(ant2);
    }
    // tree growing through chest
    const tree = new THREE.Group(); tree.position.set(.15, 1.2, -.1); torso.add(tree); this.tree = tree;
    const trunk = new THREE.Mesh(new THREE.CylinderGeometry(.3, .5, 3.0, 7), bark); trunk.position.y = 1.2; trunk.rotation.z = -.14; tree.add(trunk);
    for (let i = 0; i < 7; i++) {
      const a = (i / 7) * Math.PI * 2;
      const br = new THREE.Mesh(new THREE.CylinderGeometry(.07, .14, 1.7, 5), bark2);
      br.position.set(Math.cos(a) * .45, 2.2 + rand(-.4, .7), Math.sin(a) * .45);
      br.rotation.set(Math.cos(a) * .9, 0, Math.sin(a) * -.9);
      tree.add(br);
    }
    for (let i = 0; i < 9; i++) {
      const lf = new THREE.Mesh(new THREE.IcosahedronGeometry(rand(.35, .7), 0), chance(.5) ? leaf : leaf2);
      lf.position.set(rand(-1.4, 1.4), 2.4 + rand(0, 1.4), rand(-1.2, 1.2)); tree.add(lf);
    }
    const heart = new THREE.Mesh(new THREE.OctahedronGeometry(.26), heartM); heart.position.set(.15, 1.35, .35); torso.add(heart); this.heart = heart;
    const heartGlow = makeGlowSprite(0xff8a2e, 4.5); heartGlow.position.copy(heart.position); torso.add(heartGlow); this.heartGlow = heartGlow;

    // arms
    const mkArm = (side) => {
      const sh = new THREE.Group(); sh.position.set(side * 1.45, 1.55, 0); torso.add(sh);
      const upper = new THREE.Mesh(new THREE.CylinderGeometry(.3, .27, 1.45, 7), flannel); upper.position.y = -.72; sh.add(upper);
      const el = new THREE.Group(); el.position.y = -1.45; sh.add(el);
      const fore = new THREE.Mesh(new THREE.CylinderGeometry(.26, .23, 1.35, 7), skin); fore.position.y = -.68; el.add(fore);
      const hand = new THREE.Mesh(new THREE.SphereGeometry(.32, 8, 7), skin); hand.position.y = -1.4; el.add(hand);
      return { sh, el, hand };
    };
    this.armL = mkArm(-1); this.armR = mkArm(1);
    // axe mount
    const wm = new THREE.Group(); wm.position.y = -1.4; this.armR.el.add(wm); this.weaponMount = wm;
    const handle = new THREE.Mesh(new THREE.CylinderGeometry(.12, .17, 5.6, 7), bark); handle.position.y = 1.2; wm.add(handle);
    const axeHead = new THREE.Mesh(new THREE.BoxGeometry(2.4, 1.6, .3), darkSteel); axeHead.position.set(1.0, 3.6, 0); wm.add(axeHead);
    const blade = new THREE.Mesh(new THREE.BoxGeometry(.5, 1.9, .16), steel); blade.position.set(2.15, 3.6, 0); wm.add(blade);
    const beard = new THREE.Mesh(new THREE.BoxGeometry(.7, 1.9, .18), steel); beard.position.set(2.0, 3.6, 0); beard.rotation.z = .3; wm.add(beard);
    const rune = new THREE.Mesh(new THREE.TorusGeometry(.45, .05, 4, 10), heartM); rune.position.set(1.1, 3.6, .18); wm.add(rune);
    wm.rotation.set(-.4, 0, -.35);

    // roots around feet
    for (let i = 0; i < 8; i++) {
      const a = (i / 8) * Math.PI * 2;
      const r = new THREE.Mesh(new THREE.CylinderGeometry(.08, .2, rand(1.2, 2.2), 4), bark2);
      r.position.set(Math.cos(a) * 1.1, .1, Math.sin(a) * 1.1); r.rotation.set(Math.PI / 2, a, 0); root.add(r);
    }

    // aura (phase 2)
    const aura = new THREE.Mesh(new THREE.SphereGeometry(3.4, 16, 12), new THREE.MeshBasicMaterial({ color: 0xff7a2e, transparent: true, opacity: 0, blending: THREE.AdditiveBlending, side: THREE.BackSide, depthWrite: false }));
    aura.position.y = 3.4; root.add(aura); this.aura = aura;
    const glow = makeGlowSprite(0xff6a2e, 12); glow.position.y = 3.6; glow.material.opacity = .12; root.add(glow); this.auraGlow = glow;

    // telegraph ring
    const tg = new THREE.Mesh(new THREE.RingGeometry(.8, 1.0, 32), new THREE.MeshBasicMaterial({ color: 0xff4a2a, transparent: true, opacity: 0, side: THREE.DoubleSide, depthWrite: false, blending: THREE.AdditiveBlending }));
    tg.rotation.x = -Math.PI / 2; tg.position.y = .06; root.add(tg); this.telegraph = tg;

    root.traverse(o => { if (o.isMesh && o.material) o.frustumCulled = false; });
  }

  /* ================= INTRO / ACTIVATION ================= */
  beginIntro() {
    this.introActive = true;
    this.state = 'intro';
    this.stateTime = 0;
    this.alerted = true;
    this.game.audio.roar();
    this.game.showBossBar(this);
  }
  activate() {
    this.active = true;
    this.introActive = false;
    this.state = 'idle';
    this.stateTime = 0;
    this.cooldown = 1.6;
    this.game.audio.setTheme('boss');
  }

  /* ================= UPDATE ================= */
  update(dt, player) {
    if (this.dead) { this.updateDeath(dt); return; }
    this.stateTime += dt;
    this.hitFlash = Math.max(0, this.hitFlash - dt);
    this.poise = Math.min(this.maxPoise, this.poise + dt * 7);

    if (!this.active) {
      this.idleAnim(dt);
      return;
    }
    if (this.introActive) {
      this.introAnim(dt);
      return;
    }
    if (this.state === 'phaseChange') {
      this.phaseChangeUpdate(dt);
      return;
    }
    if (this.state === 'stagger') {
      this.staggerTimer -= dt;
      this.body.rotation.x = damp(this.body.rotation.x, -.55, 8, dt);
      this.body.rotation.z = damp(this.body.rotation.z, .18, 8, dt);
      if (this.staggerTimer <= 0) { this.state = 'idle'; this.body.rotation.x = 0; this.body.rotation.z = 0; this.poise = this.maxPoise; this.game.hideContextual(); }
      this.root.position.copy(this.pos);
      return;
    }
    if (this.state === 'dead') return;

    const dx = player.pos.x - this.pos.x, dz = player.pos.z - this.pos.z;
    const dist = Math.hypot(dx, dz);
    const ang = Math.atan2(dx, dz);
    this.yaw = dampAngle(this.yaw, ang, 2.6, dt);
    this.cooldown = Math.max(0, this.cooldown - dt);
    this.dist = dist;

    if (this.attack) { this.updateAttack(dt, player, dist, ang); }
    else if (this.state !== 'charge') {
      if (this.attackCooldown !== undefined && this.state === 'attack') return;
      // reposition
      if (dist > 7.5) {
        const sp = (this.phase === 2 ? 2.6 : 1.8);
        this.vel.x = Math.sin(ang) * sp;
        this.vel.z = Math.cos(ang) * sp;
      } else if (dist < 4.2) {
        this.vel.x = -Math.sin(ang) * 1.1;
        this.vel.z = -Math.cos(ang) * 1.1;
      } else {
        const side = Math.sin(this.game.time * .6) > 0 ? 1 : -1;
        this.vel.x = Math.cos(ang) * .8 * side;
        this.vel.z = -Math.sin(ang) * .8 * side;
      }
      if (this.cooldown <= 0 && dist < 18) this.chooseAttack(dist);
    }

    // movement
    this.pos.x += this.vel.x * dt;
    this.pos.z += this.vel.z * dt;
    this.vel.x = damp(this.vel.x, 0, 4, dt);
    this.vel.z = damp(this.vel.z, 0, 4, dt);
    // arena clamp
    const cdx = this.pos.x - this.center.x, cdz = this.pos.z - this.center.z;
    const cd = Math.hypot(cdx, cdz);
    if (cd > this.arenaRadius - 2) { const k = (this.arenaRadius - 2) / cd; this.pos.x = this.center.x + cdx * k; this.pos.z = this.center.z + cdz * k; }
    this.pos.y = heightAt(this.pos.x, this.pos.z);
    this.root.position.copy(this.pos);
    this.root.rotation.y = this.yaw;
    this.walkAnim(dt, dist);
    this.updateAura(dt);

    if (this.health <= this.maxHealth * .5 && this.phase === 1) this.enterPhase2();
  }

  chooseAttack(dist) {
    const r = Math.random();
    if (this.phase === 1) {
      if (dist < 7) this.startAttack(r < .55 ? 'sweep' : 'slam');
      else this.startAttack(r < .6 ? 'charge' : 'sweep');
    } else {
      if (dist < 7) this.startAttack(r < .32 ? 'sweep' : r < .58 ? 'slam' : r < .8 ? 'roots' : 'summon');
      else this.startAttack(r < .42 ? 'charge' : r < .72 ? 'roots' : 'slam');
    }
  }

  startAttack(kind) {
    this.state = 'attack';
    this.attack = { kind, t: 0, hit: false, phase: 'windup' };
    this.attack.t = 0;
    const wind = {
      sweep: 1.05, slam: 1.25, charge: .8, roots: 1.15, summon: 1.1,
    }[kind] || 1;
    this.attack.windup = wind; this.attack.recover = kind === 'charge' ? .9 : .85;
    this.attack.range = kind === 'sweep' ? 8.2 : kind === 'slam' ? 6.8 : kind === 'roots' ? 30 : 8;
    this.attack.damage = { sweep: 34, slam: 42, charge: 30, roots: 27, summon: 0 }[kind] || 30;
    this.attack.kind = kind;
    this.attack.hit = false;
    this.cooldown = kind === 'summon' ? 5 : (this.phase === 2 ? 1.8 : 2.6);
    this.game.audio.swing(true);
    this.telegraph.visible = true;
    this.telegraph.material.opacity = 0;
    if (kind === 'roots' || kind === 'summon') this.telegraph.material.color.setHex(0x9c5cff);
    else this.telegraph.material.color.setHex(0xff4a2a);
    this.game.bossTelegraph(this, kind);
  }

  updateAttack(dt, player, dist, ang) {
    const a = this.attack;
    if (!a) return;
    a.t += dt;
    const t = a.t;
    if (t < a.windup) {
      const p = t / a.windup;
      this.telegraph.material.opacity = .2 + p * .5;
      this.telegraph.scale.setScalar(.8 + p * 8);
      this.telegraph.rotation.z += dt * (a.kind === 'roots' ? 2 : .6);
      // face player slowly during windup
      this.yaw = dampAngle(this.yaw, ang, 1.7, dt);
      this.windupAnim(dt, a, p);
    } else if (!a.hit) {
      a.hit = true;
      this.telegraph.visible = false;
      this.impact(a, player);
      this.impactAnim(a);
    } else if (t > a.windup + a.recover) {
      this.attack = null;
      this.state = 'idle';
      this.body.rotation.x = 0;
      this.body.rotation.z = 0;
      this.game.hideContextual();
    }
    if (a.kind === 'charge') {
      // charge state handled through velocity
      if (t > a.windup && t < a.windup + .85) {
        const sp = this.phase === 2 ? 14 : 10;
        this.vel.x = Math.sin(this.yaw) * sp;
        this.vel.z = Math.cos(this.yaw) * sp;
        if (!a.chargeHit && dist < 4.6) {
          a.chargeHit = true;
          player.takeDamage(a.damage, this.pos, { source: this });
          this.game.shake(.35);
        }
      }
    }
    this.root.position.copy(this.pos);
    this.root.rotation.y = this.yaw;
  }

  impact(a, player) {
    const dx = player.pos.x - this.pos.x, dz = player.pos.z - this.pos.z;
    const dist = Math.hypot(dx, dz);
    const facing = Math.cos(angleDelta(this.yaw, Math.atan2(dx, dz)));
    this.game.shake(a.kind === 'slam' ? .6 : .35);
    this.game.audio.hit(true);
    if (a.kind === 'sweep') {
      this.game.bossArcEffect(this.pos, this.yaw, 8, 0xff4a2a);
      if (dist < 8.2 && facing > .1) player.takeDamage(a.damage, this.pos, { source: this });
    } else if (a.kind === 'slam') {
      this.game.bossShockwave(this.pos, 0);
      if (dist < 7) player.takeDamage(a.damage, this.pos, { source: this });
      this.game.bossRootRing(this.pos, 0xff6a2a);
    } else if (a.kind === 'charge') {
      this.game.shake(.3);
    } else if (a.kind === 'roots') {
      this.game.bossRootEruption(this.pos, player.pos, this.phase === 2 ? 5 : 3, a.damage);
    } else if (a.kind === 'summon') {
      this.game.bossSummon(this, this.phase === 2 ? 3 : 2);
    }
  }

  windupAnim(dt, a, p) {
    if (a.kind === 'sweep') {
      this.torso.rotation.y = damp(this.torso.rotation.y, -1.0, 6, dt);
      this.armR.sh.rotation.x = damp(this.armR.sh.rotation.x, -.5, 6, dt);
      this.armR.sh.rotation.z = damp(this.armR.sh.rotation.z, -.7, 6, dt);
      this.body.rotation.z = damp(this.body.rotation.z, -.08, 5, dt);
    } else if (a.kind === 'slam') {
      this.armR.sh.rotation.x = damp(this.armR.sh.rotation.x, -2.9, 6, dt);
      this.torso.rotation.x = damp(this.torso.rotation.x, -.2, 6, dt);
      this.body.position.y = damp(this.body.position.y, -.2, 4, dt);
    } else if (a.kind === 'charge') {
      this.body.rotation.x = damp(this.body.rotation.x, .3, 6, dt);
      this.armR.sh.rotation.x = damp(this.armR.sh.rotation.x, -.9, 6, dt);
    } else if (a.kind === 'roots' || a.kind === 'summon') {
      this.armR.sh.rotation.x = damp(this.armR.sh.rotation.x, -2.6, 5, dt);
      this.armL.sh.rotation.x = damp(this.armL.sh.rotation.x, -2.2, 5, dt);
      this.torso.rotation.x = damp(this.torso.rotation.x, -.25, 5, dt);
      this.heartGlow.material.opacity = .5 + p * .5;
    }
  }
  impactAnim(a) {
    if (a.kind === 'sweep') {
      this.torso.rotation.y = 1.15;
      this.armR.sh.rotation.x = 0.4; this.armR.sh.rotation.z = 1.0;
    } else if (a.kind === 'slam') {
      this.armR.sh.rotation.x = .9;
      this.body.position.y = -.4;
    } else if (a.kind === 'roots' || a.kind === 'summon') {
      this.armR.sh.rotation.x = 0.2; this.armL.sh.rotation.x = 0.2;
    }
  }

  enterPhase2() {
    this.phase = 2;
    this.state = 'phaseChange';
    this.stateTime = 0;
    this.attack = null;
    this.telegraph.visible = false;
    this.game.audio.roar();
    this.game.shake(1.2);
    this.game.showBanner('THE GROVE REMEMBERS', 'The Hollow Woodsman has entered his second phase.');
    this.game.audio.setTheme('boss');
    this.game.setBossPhase(2);
    this.game.spawnSoulBurst(this.pos.clone().add(new THREE.Vector3(0, 4, 0)), 60);
  }
  phaseChangeUpdate(dt) {
    const p = clamp(this.stateTime / 2.4, 0, 1);
    this.body.position.y = -Math.sin(p * Math.PI) * .4;
    this.aura.material.opacity = .04 + p * .12;
    this.heartGlow.material.opacity = p;
    this.heartGlow.scale.setScalar(3 + p * 4);
    if (this.stateTime > 2.4) {
      this.state = 'idle';
      this.cooldown = .8;
    }
    this.root.position.copy(this.pos);
  }

  walkAnim(dt, dist) {
    const t = this.game.time;
    const speed = Math.hypot(this.vel.x, this.vel.z);
    const amount = clamp(speed / 2.4, 0, 1);
    const cycle = t * 2.4;
    const sw = Math.sin(cycle) * .4 * amount;
    this.legL.hip.rotation.x = damp(this.legL.hip.rotation.x, sw, 5, dt);
    this.legR.hip.rotation.x = damp(this.legR.hip.rotation.x, -sw, 5, dt);
    this.legL.knee.rotation.x = damp(this.legL.knee.rotation.x, Math.max(0, -sw) * .8, 5, dt);
    this.legR.knee.rotation.x = damp(this.legR.knee.rotation.x, Math.max(0, sw) * .8, 5, dt);
    this.body.position.y = damp(this.body.position.y, Math.abs(Math.cos(cycle)) * .07 * amount + Math.sin(t * 1.1) * .02, 4, dt);
    if (!this.attack) {
      this.torso.rotation.x = damp(this.torso.rotation.x, 0, 5, dt);
      this.torso.rotation.y = damp(this.torso.rotation.y, 0, 5, dt);
      this.body.rotation.z = damp(this.body.rotation.z, 0, 5, dt);
      this.body.rotation.x = damp(this.body.rotation.x, 0, 5, dt);
      this.armR.sh.rotation.x = damp(this.armR.sh.rotation.x, -sw * .3 - .2, 4, dt);
      this.armR.sh.rotation.z = damp(this.armR.sh.rotation.z, -.35, 4, dt);
      this.armL.sh.rotation.x = damp(this.armL.sh.rotation.x, sw * .25 - .1, 4, dt);
      this.heartGlow.material.opacity = .55 + Math.sin(t * 1.4) * .15;
    }
    for (const m of this.mats) {
      if (this.hitFlash > 0) { m.emissive?.setHex(0x7a1a0a); if (m.emissiveIntensity !== undefined) m.emissiveIntensity = .6; }
      else { m.emissive?.setHex(0x000000); if (m.emissiveIntensity !== undefined) m.emissiveIntensity = 0; }
    }
  }
  idleAnim(dt) {
    const t = this.game.time;
    this.body.position.y = Math.sin(t * .8) * .03;
    this.torso.rotation.x = Math.sin(t * .6) * .015;
    this.heartGlow.material.opacity = .5 + Math.sin(t * 1.6) * .15;
    this.aura.material.opacity = 0;
    this.root.position.copy(this.pos);
  }
  introAnim(dt) {
    const t = this.stateTime;
    this.body.position.y = Math.sin(t * 4) * .08;
    this.torso.rotation.x = damp(this.torso.rotation.x, t < 2.2 ? -.2 : 0, 4, dt);
    if (t > .6 && t < .9) this.game.shake(.4);
    this.root.position.copy(this.pos);
  }
  updateAura(dt) {
    if (this.phase === 2) {
      this.aura.material.opacity = .08 + Math.sin(this.game.time * 2.2) * .04;
      this.aura.rotation.y += dt * .2;
      this.auraGlow.material.opacity = .18 + Math.sin(this.game.time * 2.6) * .05;
    }
  }

  /* ================= DAMAGE ================= */
  takeDamage(amount, fromPos, opts = {}) {
    if (!this.active || this.dead || this.introActive) return;
    if (this.state === 'phaseChange') return;
    this.health -= amount;
    this.poiseBuildup += amount * .55;
    this.hitFlash = .15;
    this.game.updateBossBar();
    this.game.floatText(this.pos.clone().add(new THREE.Vector3(0, 6.2, 0)), Math.round(amount), 'enemy');
    this.game.spawnBloodBurst(this.pos.clone().add(new THREE.Vector3(0, 4.4, 0)), 10, 0xffb02e);
    this.game.spawnSparkBurst(this.pos.clone().add(new THREE.Vector3(0, 4.2, 0)), 6);
    this.game.audio.hit(true);
    if (this.poiseBuildup > this.maxPoise) {
      this.poiseBuildup = 0;
      this.stagger();
    }
    if (this.health <= 0) { this.health = 0; this.die(); }
  }
  stagger() {
    this.state = 'stagger';
    this.staggerTimer = 1.9;
    this.attack = null;
    this.telegraph.visible = false;
    this.game.showContextual('Press C to deliver a critical blow');
    this.game.audio.parry();
    this.game.floatText(this.pos.clone().add(new THREE.Vector3(0, 6.6, 0)), 'STAGGERED', 'crit');
  }
  canCrit() { return this.state === 'stagger'; }

  die() {
    this.dead = true;
    this.active = false;
    this.state = 'dead';
    this.deathTimer = 0;
    this.attack = null;
    this.telegraph.visible = false;
    this.game.audio.bossDeath();
    this.game.audio.setTheme('victory');
    this.game.slowmo(.45, 3.2);
    this.game.shake(1.4);
    this.game.hideBossBar();
    this.game.hideContextual();
    this.game.onBossDeath(this);
  }
  updateDeath(dt) {
    this.deathTimer += dt;
    const p = clamp(this.deathTimer / 2.8, 0, 1);
    this.body.rotation.z = lerp(0, 1.25, Math.min(1, p * 1.4));
    this.body.position.y = -p * .8;
    this.aura.material.opacity = Math.max(0, .2 - p * .2);
    this.heartGlow.material.opacity = Math.max(0, 1 - p);
  }

  dispose() {
    if (this.root?.parent) this.root.parent.remove(this.root);
  }
}
