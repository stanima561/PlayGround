import * as THREE from 'three';
import { mergeColored, material, emissive, makeGlowSprite, rand, seededRandom } from '../core/utils.js';

const BOX = new THREE.BoxGeometry(1, 1, 1);

function pushBox(arr, color, sx, sy, sz, x, y, z, ry = 0) {
  const m = new THREE.Matrix4().compose(new THREE.Vector3(x, y, z), new THREE.Quaternion().setFromEuler(new THREE.Euler(0, ry, 0)), new THREE.Vector3(sx, sy, sz));
  arr.push({ geometry: BOX, color, matrix: m });
}

export class IntroCinematic {
  constructor(game) {
    this.game = game;
    this.time = 0;
    this.duration = 24;
    this.done = false;
    this.shake = 0;
    this.flash = 0;
    this.scene = new THREE.Scene();
    this.scene.background = new THREE.Color(0x0b0d14);
    this.scene.fog = new THREE.FogExp2(0x0b0d15, .028);
    this.camera = new THREE.PerspectiveCamera(48, 16 / 9, .1, 300);
    this.camera.position.set(7, 2.6, 14);
    this.camera.lookAt(0, 1.8, 0);
    this.build();
    this.captions = [
      [1.2, 'November 14, 2026. 3:17 AM.'],
      [4.5, 'The city was asleep.'],
      [7.0, 'The sky was not.'],
      [11.0, 'Something on the other side had been waiting.'],
      [15.5, 'It knew his name.'],
      [19.0, 'Then the rain stopped.'],
    ];
    this.captionIndex = 0;
    this.lightning = 0;
  }

  build() {
    const S = 160;
    // wet asphalt
    const road = new THREE.Mesh(new THREE.PlaneGeometry(S, S), new THREE.MeshStandardMaterial({ color: 0x171a22, roughness: .3, metalness: .5 }));
    road.rotation.x = -Math.PI / 2; this.scene.add(road);
    // sidewalk patches
    const walkMat = material(0x1e2028, { roughness: .55, metalness: .2 });
    for (const [x, z, w, d] of [[0, 6, 18, 5], [0, -6, 18, 5], [12, 0, 5, 30], [-12, 0, 5, 30]]) {
      const m = new THREE.Mesh(new THREE.BoxGeometry(w, .22, d), walkMat); m.position.set(x, .11, z); this.scene.add(m);
    }
    // buildings both sides
    const parts = [], winParts = [];
    const rnd = seededRandom(2026);
    for (let i = 0; i < 26; i++) {
      const side = i % 2 === 0 ? -1 : 1;
      const z = -38 + (i / 26) * 82 + rnd() * 3;
      const x = side * (13 + rnd() * 16);
      const h = 12 + rnd() * 34;
      const w = 7 + rnd() * 9, d = 7 + rnd() * 9;
      pushBox(parts, new THREE.Color().setHSL(.6, .09, .1 + rnd() * .07), w, h, d, x, h / 2, z);
      // rooftop
      pushBox(parts, new THREE.Color(0x0c0d10), w * .3, 1.2, d * .3, x, h + .6, z);
      // windows
      const cols = Math.max(2, Math.floor(w / 2.2));
      const rows = Math.max(3, Math.floor(h / 3.2));
      for (let c = 0; c < cols; c++) {
        for (let r = 0; r < rows; r++) {
          if (rnd() < .62) continue;
          const col = rnd() < .18 ? 0xffd28a : rnd() < .5 ? 0x9fc8e8 : 0xd8b46a;
          pushBox(winParts, new THREE.Color(col), .5, .7, .06, x - w / 2 + 1.2 + c * (w - 2.4) / Math.max(1, cols - 1), 2 + r * 3, z - d / 2 - .04);
          pushBox(winParts, new THREE.Color(col), .5, .7, .06, x - w / 2 + 1.2 + c * (w - 2.4) / Math.max(1, cols - 1), 2 + r * 3, z + d / 2 + .04);
        }
      }
      // neon signs near street level
      if (rnd() < .45) {
        const neon = [0xff3d6e, 0x38d6ff, 0xffa23d, 0x9a5bff][Math.floor(rnd() * 4)];
        pushBox(winParts, new THREE.Color(neon), .12, 2.2, 1.1, x - side * (w / 2 + .1), 2.2 + rnd() * 2, z);
        const l = new THREE.PointLight(neon, 5.5, 22, 2); l.position.set(x - side * 3, 3.2, z); this.scene.add(l);
      }
    }
    // distant skyline
    for (let i = 0; i < 18; i++) {
      const x = (rnd() * 2 - 1) * 90, z = -80 - rnd() * 40;
      pushBox(parts, new THREE.Color(0x090a0e), 8 + rnd() * 14, 20 + rnd() * 60, 10, x, 10 + rnd() * 30, z);
    }
    const geo = mergeColored(parts);
    const mesh = new THREE.Mesh(geo, new THREE.MeshStandardMaterial({ vertexColors: true, roughness: .8, metalness: .15 }));
    this.scene.add(mesh);
    const winGeo = mergeColored(winParts);
    const winMesh = new THREE.Mesh(winGeo, new THREE.MeshBasicMaterial({ vertexColors: true }));
    this.scene.add(winMesh);
    this.winMesh = winMesh;

    // streetlights
    for (const [x, z] of [[-6, 5], [6, -5], [-6, -18], [6, 18]]) {
      const pole = new THREE.Mesh(new THREE.CylinderGeometry(.08, .12, 6, 5), material(0x1b1c20, { metalness: .6, roughness: .4 }));
      pole.position.set(x, 3, z); this.scene.add(pole);
      const arm = new THREE.Mesh(new THREE.BoxGeometry(1.5, .1, .1), pole.material); arm.position.set(x + (x < 0 ? .7 : -.7), 5.9, z); this.scene.add(arm);
      const lamp = new THREE.Mesh(new THREE.SphereGeometry(.16, 6), emissive(0xffc27a, 2.2)); lamp.position.set(x + (x < 0 ? 1.4 : -1.4), 5.85, z); this.scene.add(lamp);
      const l = new THREE.PointLight(0xffb168, 8, 24, 2); l.position.copy(lamp.position); this.scene.add(l);
    }
    // protagonist
    this.buildProtagonist();
    // rain
    const rainCount = 1800;
    const rainPos = new Float32Array(rainCount * 3);
    for (let i = 0; i < rainCount; i++) {
      rainPos[i * 3] = (rnd() * 2 - 1) * 60;
      rainPos[i * 3 + 1] = rnd() * 40;
      rainPos[i * 3 + 2] = (rnd() * 2 - 1) * 60;
    }
    const rainGeo = new THREE.BufferGeometry();
    rainGeo.setAttribute('position', new THREE.BufferAttribute(rainPos, 3));
    const rainMat = new THREE.PointsMaterial({ color: 0x9fb4c8, size: .045, transparent: true, opacity: .55, depthWrite: false });
    this.rain = new THREE.Points(rainGeo, rainMat); this.scene.add(this.rain);
    // ground puddles
    for (let i = 0; i < 12; i++) {
      const p = new THREE.Mesh(new THREE.CircleGeometry(rand(.8, 2.6), 12), new THREE.MeshBasicMaterial({ color: 0x1c2431, transparent: true, opacity: .4 }));
      p.rotation.x = -Math.PI / 2; p.position.set(rand(-9, 9), .235, rand(-15, 15)); this.scene.add(p);
    }
    // rift
    this.rift = new THREE.Group();
    const riftPlane = new THREE.Mesh(new THREE.PlaneGeometry(4, 7), new THREE.MeshBasicMaterial({ color: 0x8b4cff, transparent: true, opacity: .4, blending: THREE.AdditiveBlending, side: THREE.DoubleSide }));
    this.rift.add(riftPlane); this.riftPlane = riftPlane;
    const riftTorus = new THREE.Mesh(new THREE.TorusGeometry(2.6, .08, 6, 40), emissive(0xc48aff, 2.5));
    riftTorus.scale.set(1, 1.35, 1); this.rift.add(riftTorus); this.riftTorus = riftTorus;
    const riftGlow = makeGlowSprite(0x9a5bff, 18); this.rift.add(riftGlow); this.riftGlow = riftGlow;
    const riftLight = new THREE.PointLight(0x8b4cff, 0, 30, 2); this.rift.add(riftLight); this.riftLight = riftLight;
    this.rift.position.set(0, 4.5, -9); this.rift.scale.setScalar(.01); this.scene.add(this.rift);
    // debris
    this.debris = [];
    for (let i = 0; i < 20; i++) {
      const d = new THREE.Mesh(new THREE.BoxGeometry(rand(.1, .4), rand(.1, .4), rand(.1, .4)), material(0x2a2b30, { roughness: .8 }));
      d.position.set(rand(-3, 3), rand(1, 5), rand(-2, 2)); d.visible = false; this.scene.add(d);
      this.debris.push({ mesh: d, speed: rand(.3, 1.2), phase: rand(0, 6) });
    }
    // lights
    this.scene.add(new THREE.HemisphereLight(0x4b5f86, 0x141218, 1.15));
    this.dir = new THREE.DirectionalLight(0xa9c2e8, .95); this.dir.position.set(-10, 30, 20); this.scene.add(this.dir);
    this.street = new THREE.PointLight(0xffc07a, 7, 34, 2); this.street.position.set(0, 5, 2); this.scene.add(this.street);
  }

  buildProtagonist() {
    const root = new THREE.Group(); this.protagonist = root;
    const skin = material(0xb98b69);
    const hoodie = material(0x31465c, { roughness: .95 });
    const jeans = material(0x2a2f3a, { roughness: .95 });
    const shoe = material(0xd0c9bb);
    const hair = material(0x231b17);
    const torso = new THREE.Mesh(new THREE.BoxGeometry(.5, .62, .3), hoodie); torso.position.y = 1.2; root.add(torso);
    const hood = new THREE.Mesh(new THREE.TorusGeometry(.17, .08, 5, 10), hoodie); hood.position.y = 1.52; hood.rotation.x = Math.PI / 2; root.add(hood);
    const head = new THREE.Mesh(new THREE.SphereGeometry(.19, 10, 8), skin); head.position.y = 1.68; root.add(head);
    const hairM = new THREE.Mesh(new THREE.SphereGeometry(.2, 9, 7), hair); hairM.position.y = 1.75; hairM.scale.set(1, .65, 1); root.add(hairM);
    for (const sx of [-1, 1]) {
      const arm = new THREE.Mesh(new THREE.CylinderGeometry(.07, .06, .55, 6), hoodie); arm.position.set(sx * .32, 1.05, .02); arm.rotation.z = sx * .1; root.add(arm);
      const hand = new THREE.Mesh(new THREE.SphereGeometry(.07, 6), skin); hand.position.set(sx * .36, .76, .04); root.add(hand);
      const leg = new THREE.Mesh(new THREE.CylinderGeometry(.09, .075, .58, 6), jeans); leg.position.set(sx * .14, .5, 0); root.add(leg);
      const shoeM = new THREE.Mesh(new THREE.BoxGeometry(.16, .12, .3), shoe); shoeM.position.set(sx * .14, .17, .05); root.add(shoeM);
    }
    // phone in hand
    const phone = new THREE.Mesh(new THREE.BoxGeometry(.09, .17, .02), emissive(0x8fbcd8, 1.2)); phone.position.set(.36, .78, .1); phone.rotation.set(-.3, .3, 0); root.add(phone);
    const phoneGlow = makeGlowSprite(0x9fd6ff, 1.6); phoneGlow.position.set(.36, .8, .16); root.add(phoneGlow);
    const phoneLight = new THREE.PointLight(0x9fd6ff, .8, 4, 2); phoneLight.position.set(.36, .85, .3); root.add(phoneLight);
    root.position.set(0, 0, 0); root.rotation.y = Math.PI;
    this.scene.add(root);
    this.phoneGlow = phoneGlow; this.phoneLight = phoneLight;
  }

  update(dt) {
    if (this.done) return;
    this.time += dt;
    const t = this.time;

    // rain
    const rp = this.rain.geometry.attributes.position;
    for (let i = 0; i < rp.count; i++) {
      let y = rp.getY(i) - dt * (22 + (i % 7));
      if (y < 0) { y = 40; rp.setX(i, (Math.random() * 2 - 1) * 60); rp.setZ(i, (Math.random() * 2 - 1) * 60); }
      rp.setY(i, y);
    }
    rp.needsUpdate = true;

    // camera timeline
    const cam = this.camera;
    let pos, look;
    if (t < 5) {
      const k = t / 5;
      pos = new THREE.Vector3(8 - k * 1.5, 2.6 - k * .4, 15 - k * 3);
      look = new THREE.Vector3(0, 1.6, 0);
    } else if (t < 9) {
      const k = (t - 5) / 4;
      pos = new THREE.Vector3(6.5 - k * 4.5, 2.2 - k * .35, 12 - k * 6);
      look = new THREE.Vector3(0, 1.55 + k * .2, 0);
    } else if (t < 15) {
      const k = (t - 9) / 6;
      pos = new THREE.Vector3(2 - k * 1, 1.85 + k * .5, 6 - k * 3.5);
      look = new THREE.Vector3(0, 1.6 + k * .9, 0);
    } else {
      const k = Math.min(1, (t - 15) / 6);
      pos = new THREE.Vector3(1 - k * .2, 2.35 + k * 1.2, 2.5 + k * 5);
      look = new THREE.Vector3(0, 2.0 + k * 2.2, -1);
    }
    // shake
    this.shake = Math.max(0, this.shake - dt * 2);
    if (this.shake > 0) { pos.x += (Math.random() - .5) * this.shake; pos.y += (Math.random() - .5) * this.shake; }
    cam.position.lerp(pos, 1 - Math.exp(-3.2 * dt));
    cam.lookAt(look);

    // lightning
    this.lightning = Math.max(0, this.lightning - dt * 6);
    if (Math.random() < dt * .08) this.lightning = 1;
    if (this.lightning > 0) { this.dir.intensity = .95 + this.lightning * 4; }
    else this.dir.intensity = .95;

    // rift timeline
    if (t > 8) {
      const k = Math.min(1, (t - 8) / 5);
      this.rift.scale.setScalar(.01 + k * 1);
      this.rift.rotation.z = Math.sin(t * .3) * .1;
      this.riftPlane.material.opacity = .25 + k * .45 + Math.sin(t * 8) * .08;
      this.riftTorus.rotation.z += dt * .25;
      this.riftGlow.material.opacity = .2 + k * .5;
      this.riftLight.intensity = k * 5;
      this.rift.position.x = Math.sin(t * .7) * .2;
      if (t > 10) this.shake = Math.max(this.shake, .06 + k * .1);
    }
    // protagonist lift / turn
    if (t > 12) {
      const k = Math.min(1, (t - 12) / 5);
      this.protagonist.position.y = k * k * 2.4;
      this.protagonist.rotation.y = Math.PI + k * 1.2;
      this.protagonist.rotation.z = Math.sin(t * 2) * .1 * k;
      this.phoneGlow.material.opacity = 1 - k * .7;
      for (const d of this.debris) { d.mesh.visible = true; const a = t * d.speed + d.phase; d.mesh.position.set(Math.cos(a) * (2 + d.speed * 2), 1 + (a * .4 % 4), Math.sin(a) * (2 + d.speed * 2)); d.mesh.rotation.x += dt * 3; d.mesh.rotation.y += dt * 2; }
    }
    // whiteout
    if (t > 17 && t < 18.2) {
      const k = (t - 17) / 1.2;
      this.game.ui.el.fade.classList.add('flash');
      this.game.ui.el.fade.style.opacity = String(k);
    } else if (t >= 18.2 && t < 20.5) {
      this.game.ui.el.fade.classList.add('on');
      this.game.ui.el.fade.style.opacity = '1';
      this.game.ui.setCinematicLine('');
    } else if (t >= 20.5) {
      this.game.ui.el.fade.classList.remove('flash');
      this.game.ui.el.fade.classList.remove('on');
      this.game.ui.el.fade.style.opacity = '0';
    }

    // captions
    while (this.captionIndex < this.captions.length && t >= this.captions[this.captionIndex][0]) {
      const c = this.captions[this.captionIndex++];
      if (c[1] && t < 18.2) this.game.ui.setCinematicLine(c[1]);
      if (this.captionIndex === 4) this.game.ui.showCinematicTitle(false);
    }
    if (t > 18.2 && this.captionIndex < this.captions.length) { this.captionIndex = this.captions.length; this.game.ui.setCinematicLine(''); }

    if (t > this.duration) this.finish();
  }

  finish() {
    if (this.done) return;
    this.done = true;
    this.game.ui.el.fade.classList.remove('flash');
    this.game.ui.el.fade.classList.remove('on');
    this.game.ui.el.fade.style.opacity = '0';
    this.game.endIntro();
  }

  dispose() {
    this.scene.traverse(o => {
      if (o.geometry) o.geometry.dispose();
      if (o.material) {
        const ms = Array.isArray(o.material) ? o.material : [o.material];
        for (const m of ms) { m.map?.dispose(); m.dispose?.(); }
      }
    });
  }
}
