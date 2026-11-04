import * as THREE from 'three';
import { mergeColored, material, emissive, makeGlowSprite, canvasTexture, plasterTexture, woodTexture, roofTexture, stoneTexture, barkTexture, rand, randInt, choose, chance, clamp, smoothstep, seededRandom } from '../core/utils.js';
import { heightAt, distToPath, isInArena, ARENA, PATH } from './terrain.js';

const G = {
  box: new THREE.BoxGeometry(1, 1, 1),
  cyl: new THREE.CylinderGeometry(.5, .5, 1, 8),
  cyl6: new THREE.CylinderGeometry(.5, .5, 1, 6),
  cone: new THREE.ConeGeometry(.5, 1, 8),
  sphere: new THREE.SphereGeometry(.5, 10, 8),
  ico: new THREE.IcosahedronGeometry(.5, 1),
  dodec: new THREE.DodecahedronGeometry(.5, 0),
  tetra: new THREE.TetrahedronGeometry(.5),
  plane: new THREE.PlaneGeometry(1, 1),
};

function mat4(x, y, z, rx = 0, ry = 0, rz = 0, sx = 1, sy = 1, sz = 1) {
  return new THREE.Matrix4().compose(
    new THREE.Vector3(x, y, z),
    new THREE.Quaternion().setFromEuler(new THREE.Euler(rx, ry, rz)),
    new THREE.Vector3(sx, sy, sz)
  );
}
function push(arr, geo, color, matrix) { arr.push({ geometry: geo, color, matrix }); }
function addBox(arr, color, sx, sy, sz, x, y, z, ry = 0, parent = null, rx = 0, rz = 0) {
  let m = mat4(x, y, z, rx, ry, rz, sx, sy, sz);
  if (parent) m.premultiply(parent);
  push(arr, G.box, color, m);
}
function addGeo(arr, geo, color, x, y, z, rx = 0, ry = 0, rz = 0, sx = 1, sy = 1, sz = 1, parent = null) {
  let m = mat4(x, y, z, rx, ry, rz, sx, sy, sz);
  if (parent) m.premultiply(parent);
  push(arr, geo, color, m);
}
function finish(arr, mat, scene, name = 'merged') {
  if (!arr.length) return null;
  const geo = mergeColored(arr);
  const mesh = new THREE.Mesh(geo, mat);
  mesh.name = name;
  scene.add(mesh);
  return mesh;
}

/* ============================================================
   SKY & LIGHT
============================================================ */
export function createSky(scene) {
  const uniforms = {
    top: { value: new THREE.Color(0x263c55) },
    mid: { value: new THREE.Color(0x8c9aa0) },
    horizon: { value: new THREE.Color(0xe8c88e) },
    bottom: { value: new THREE.Color(0x5d6550) },
    sunDir: { value: new THREE.Vector3(-0.35, 0.23, -0.9).normalize() },
    sunColor: { value: new THREE.Color(0xffdda0) },
    time: { value: 0 },
  };
  const mat = new THREE.ShaderMaterial({
    side: THREE.BackSide, depthWrite: false, uniforms,
    vertexShader: `varying vec3 vWorld; void main(){ vWorld = (modelMatrix * vec4(position,1.0)).xyz; gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0); }`,
    fragmentShader: `
      varying vec3 vWorld;
      uniform vec3 top, mid, horizon, bottom, sunColor; uniform vec3 sunDir; uniform float time;
      float hash(vec2 p){ return fract(sin(dot(p, vec2(127.1,311.7)))*43758.5453); }
      void main(){
        vec3 dir = normalize(vWorld);
        float h = dir.y;
        vec3 col;
        if (h > 0.0) {
          float t = pow(clamp(h*1.25,0.0,1.0), 0.65);
          col = mix(horizon, mid, smoothstep(0.0,0.28,h));
          col = mix(col, top, smoothstep(0.18,0.85,h));
        } else {
          col = mix(horizon, bottom, smoothstep(0.0,0.35,-h));
        }
        float sd = max(dot(dir, sunDir), 0.0);
        col += sunColor * (pow(sd, 220.0)*1.8 + pow(sd, 16.0)*0.22 + pow(sd, 4.0)*0.05);
        // faint high cloud bands
        float band = sin(dir.x*5.0 + dir.z*3.0 + time*0.003) * sin(dir.z*7.0 - dir.x*2.0);
        col += vec3(0.08,0.07,0.06) * smoothstep(0.55,1.0,band) * smoothstep(0.05,0.5,h) * 0.3;
        // pale moon
        vec3 moonDir = normalize(vec3(0.55, 0.62, 0.55));
        float md = max(dot(dir, moonDir), 0.0);
        col += vec3(0.75,0.82,0.9) * pow(md, 800.0) * 1.5;
        col += vec3(0.28,0.33,0.4) * pow(md, 40.0) * 0.18;
        // stars
        float st = step(0.9975, hash(floor(dir.xz*640.0)));
        col += vec3(0.8,0.85,0.95) * st * smoothstep(0.2,0.7,h) * 0.7;
        gl_FragColor = vec4(col, 1.0);
      }`,
  });
  const sky = new THREE.Mesh(new THREE.SphereGeometry(380, 32, 20), mat);
  sky.frustumCulled = false;
  scene.add(sky);

  const sun = makeGlowSprite(0xffdda0, 90);
  sun.position.set(-130, 85, -260);
  sun.material.opacity = .9;
  scene.add(sun);

  // distant mountain silhouettes
  const parts = [];
  const rnd = seededRandom(77);
  for (let i = 0; i < 26; i++) {
    const a = (i / 26) * Math.PI * 2 + rnd() * .2;
    const r = 150 + rnd() * 60;
    const hgt = 24 + rnd() * 44;
    const wid = 30 + rnd() * 40;
    addGeo(parts, G.cone, new THREE.Color(0x2d3940), Math.cos(a) * r, hgt * .32 - 6, Math.sin(a) * r, 0, rnd() * 6, 0, wid, hgt, wid);
  }
  // giant distant tree
  addGeo(parts, G.cyl, new THREE.Color(0x252d2c), 120, 35, -120, 0, 0, 0, 5, 90, 5);
  addGeo(parts, G.ico, new THREE.Color(0x25332d), 120, 82, -120, 0, 0, 0, 40, 26, 40);
  const mGeo = mergeColored(parts);
  const mMat = new THREE.MeshBasicMaterial({ vertexColors: true, fog: true });
  const mountains = new THREE.Mesh(mGeo, mMat);
  mountains.renderOrder = -1;
  scene.add(mountains);

  return { update(t) { uniforms.time.value = t; } };
}

export function createLighting(scene) {
  const hemi = new THREE.HemisphereLight(0xb7c7d6, 0x3a3324, 1.05);
  scene.add(hemi);
  const sun = new THREE.DirectionalLight(0xffd7a0, 1.6);
  sun.position.set(-55, 60, -80);
  scene.add(sun);
  const rim = new THREE.DirectionalLight(0x567a94, .65);
  rim.position.set(50, 30, 60);
  scene.add(rim);
  const amb = new THREE.AmbientLight(0x414a57, .35);
  scene.add(amb);
  return { sun, hemi, rim };
}

/* ============================================================
   VEGETATION
============================================================ */
export function createTrees(scene) {
  const rnd = seededRandom(1201);
  const oak = [], pine = [], dead = [];
  for (let i = 0; i < 360; i++) {
    const x = (rnd() * 2 - 1) * 118;
    const z = (rnd() * 2 - 1) * 118;
    const dPath = distToPath(x, z).d;
    const dArena = Math.hypot(x - ARENA.x, z - ARENA.z);
    const dStart = Math.hypot(x - 7, z - 88);
    const inVillage = x > -32 && x < 40 && z > 28 && z < 76;
    if (dPath < 7.5 || dArena < ARENA.r + 6 || dStart < 12) continue;
    if (inVillage && rnd() > .2) continue;
    const y = heightAt(x, z);
    const rot = rnd() * Math.PI * 2;
    const s = .75 + rnd() * .8;
    const kind = x < -15 ? (rnd() < .45 ? 'pine' : 'oak') : rnd() < .26 ? 'pine' : 'oak';
    const item = { x, y, z, rot, s };
    if (kind === 'oak') oak.push(item);
    else if (rnd() < .78) pine.push(item);
    else dead.push(item);
  }
  // explicit giant trees
  const giants = [[-55, 55, 2.2], [42, 20, 1.9], [-70, -20, 2.0], [62, 62, 1.7], [48, -55, 1.8], [-38, 72, 1.6]];
  for (const [x, z, s] of giants) oak.push({ x, y: heightAt(x, z), z, rot: rand(0, 6), s });

  const trunkGeo = new THREE.CylinderGeometry(.32, .55, 5.6, 7); trunkGeo.translate(0, 2.8, 0);
  const trunkMat = material(0xffffff, { map: barkTexture(), roughness: 1 });
  const trunkMesh = new THREE.InstancedMesh(trunkGeo, trunkMat, oak.length + pine.length);
  const canopyGeo = new THREE.IcosahedronGeometry(1, 1);
  const canopyMat = material(0xffffff, { roughness: 1, flatShading: true });
  const canopyMesh = new THREE.InstancedMesh(canopyGeo, canopyMat, (oak.length + pine.length) * 2);
  const pineGeo = new THREE.ConeGeometry(1, 2.8, 7);
  const pineMesh = new THREE.InstancedMesh(pineGeo, canopyMat, pine.length * 3);
  let ti = 0, ci = 0, pi = 0;
  const c = new THREE.Color();
  const m = new THREE.Matrix4(), q = new THREE.Quaternion(), v = new THREE.Vector3(), sc = new THREE.Vector3();
  const place = (list, type) => {
    for (const t of list) {
      q.setFromEuler(new THREE.Euler(0, t.rot, 0));
      v.set(t.x, t.y, t.z); sc.set(t.s, t.s, t.s);
      m.compose(v, q, sc);
      trunkMesh.setMatrixAt(ti, m);
      c.setHSL(.08 + rnd() * .03, .33 + rnd() * .15, .24 + rnd() * .09);
      trunkMesh.setColorAt(ti, c); ti++;
      if (type === 'oak') {
        const n = 2;
        for (let k = 0; k < n; k++) {
          const ox = (k === 0 ? 0 : (rnd() - .5) * 1.8), oz = (k === 0 ? 0 : (rnd() - .5) * 1.8);
          const oy = 5.4 * t.s + (k === 0 ? .8 : .2);
          v.set(t.x + ox * t.s, t.y + oy, t.z + oz * t.s);
          sc.set((2.3 - k * .4) * t.s, (1.75 - k * .2) * t.s, (2.3 - k * .4) * t.s);
          m.compose(v, q, sc); canopyMesh.setMatrixAt(ci, m);
          c.setHSL(.23 + rnd() * .05, .26 + rnd() * .12, .16 + rnd() * .09);
          canopyMesh.setColorAt(ci, c); ci++;
        }
      } else {
        for (let k = 0; k < 3; k++) {
          v.set(t.x, t.y + (5.2 + k * 1.55) * t.s, t.z);
          const w = (1.9 - k * .42) * t.s;
          sc.set(w, (1.45 - k * .18) * t.s, w);
          m.compose(v, q, sc); pineMesh.setMatrixAt(pi, m);
          c.setHSL(.31 + rnd() * .04, .22, .105 + rnd() * .05);
          pineMesh.setColorAt(pi, c); pi++;
        }
      }
    }
  };
  place(oak, 'oak'); place(pine, 'pine');
  trunkMesh.count = ti; canopyMesh.count = ci; pineMesh.count = pi;
  trunkMesh.instanceMatrix.needsUpdate = true; canopyMesh.instanceMatrix.needsUpdate = true; pineMesh.instanceMatrix.needsUpdate = true;
  scene.add(trunkMesh, canopyMesh, pineMesh);

  // dead trees
  const parts = [];
  for (const t of dead) {
    addGeo(parts, G.cyl, new THREE.Color(0x3a332b), t.x, t.y + 2.4 * t.s, t.z, 0, 0, 0, .5 * t.s, 4.8 * t.s, .5 * t.s);
    for (let k = 0; k < 4; k++) {
      addGeo(parts, G.cyl, new THREE.Color(0x37302a), t.x, t.y + (3.4 + k * .5) * t.s, t.z, rand(-.9, .9), rand(0, 6), rand(-.6, .6), .16 * t.s, 2.2 * t.s, .16 * t.s);
    }
  }
  finish(parts, new THREE.MeshStandardMaterial({ vertexColors: true, roughness: 1 }), scene, 'deadTrees');
  return { count: oak.length + pine.length };
}

export function createMushrooms(scene) {
  const rnd = seededRandom(512);
  const caps = [], glowCaps = [], stems = [], spots = [];
  for (let i = 0; i < 42; i++) {
    let x = (rnd() * 2 - 1) * 110, z = (rnd() * 2 - 1) * 110;
    if (i < 26) { x = -78 + rnd() * 68; z = -28 + rnd() * 88; }
    if (Math.hypot(x - ARENA.x, z - ARENA.z) < 34 || distToPath(x, z).d < 4) continue;
    const y = heightAt(x, z);
    const s = i < 10 ? 2.2 + rnd() * 3.4 : .45 + rnd() * 1.5;
    const stemH = s * 2.6;
    addGeo(stems, G.cyl, new THREE.Color(0xd8cebb), x, y + stemH * .5, z, 0, 0, 0, s * .34, stemH, s * .34);
    addGeo(stems, G.cyl, new THREE.Color(0xc0b6a2), x, y + stemH * .9, z, 0, 0, 0, s * .48, s * .4, s * .48);
    const isGlow = rnd() < .42;
    const capGeo = G.sphere;
    const capY = y + stemH * .96;
    const col = isGlow ? (chance(.5) ? 0x6fd6c4 : 0xb480e0) : (chance(.5) ? 0xc75a4e : 0xd8c9a0);
    addGeo(isGlow ? glowCaps : caps, capGeo, new THREE.Color(col), x, capY, z, 0, rnd() * 6, 0, s * 2.1, s * .72, s * 2.1);
    addGeo(caps, G.cyl, new THREE.Color(0xe8dcc4), x, capY - s * .18, z, 0, 0, 0, s * 1.35, s * .12, s * 1.35);
    for (let k = 0; k < 4; k++) spots.push({ x: x + (rnd() - .5) * s * 1.4, y: capY + s * .28, z: z + (rnd() - .5) * s * 1.4, s: s * (.08 + rnd() * .08) });
  }
  finish(stems, new THREE.MeshStandardMaterial({ vertexColors: true, roughness: .95 }), scene, 'mushroomStems');
  finish(caps, new THREE.MeshStandardMaterial({ vertexColors: true, roughness: .85 }), scene, 'mushroomCaps');
  finish(glowCaps, new THREE.MeshStandardMaterial({ vertexColors: true, emissive: 0x4c7f84, emissiveIntensity: .55, roughness: .7 }), scene, 'glowCaps');
  const spotParts = spots.map(p => { const m = new THREE.Matrix4().compose(new THREE.Vector3(p.x, p.y, p.z), new THREE.Quaternion(), new THREE.Vector3(p.s, p.s, p.s)); return { geometry: G.sphere, color: 0x8fffe3, matrix: m }; });
  finish(spotParts, new THREE.MeshBasicMaterial({ vertexColors: true }), scene, 'mushroomSpots');

  // glowing spores
  const pos = [];
  for (let i = 0; i < 220; i++) {
    const x = -72 + rnd() * 58, z = -24 + rnd() * 84;
    pos.push(x, heightAt(x, z) + rnd() * 7 + .5, z);
  }
  const pgeo = new THREE.BufferGeometry();
  pgeo.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3));
  const pmat = new THREE.PointsMaterial({ color: 0x93ffe8, size: .1, transparent: true, opacity: .8, blending: THREE.AdditiveBlending, depthWrite: false });
  const points = new THREE.Points(pgeo, pmat); scene.add(points);
  return { points };
}

export function createGroundCover(scene) {
  const rnd = seededRandom(888);
  const flowerGeo = new THREE.ConeGeometry(.09, .42, 5);
  const flowerMat = new THREE.MeshStandardMaterial({ roughness: .9 });
  const flowers = new THREE.InstancedMesh(flowerGeo, flowerMat, 620);
  const grassGeo = new THREE.ConeGeometry(.14, 1.1, 3);
  const grassMat = new THREE.MeshStandardMaterial({ roughness: 1, flatShading: true });
  const grass = new THREE.InstancedMesh(grassGeo, grassMat, 1100);
  let fi = 0, gi = 0;
  const m = new THREE.Matrix4(), q = new THREE.Quaternion(), v = new THREE.Vector3(), s = new THREE.Vector3();
  const c = new THREE.Color();
  for (let i = 0; i < 1400; i++) {
    const x = (rnd() * 2 - 1) * 112, z = (rnd() * 2 - 1) * 112;
    if (Math.hypot(x - 7, z - 88) < 7) continue;
    if (isInArena(x, z, 2) && rnd() < .9) continue;
    const y = heightAt(x, z);
    const onPath = distToPath(x, z).d < 4.2;
    if (onPath) continue;
    q.setFromEuler(new THREE.Euler(0, rnd() * 6, 0));
    if (rnd() < .32 && fi < 620) {
      const sc = .6 + rnd() * 1.2;
      v.set(x, y + .25 * sc, z); s.set(sc, sc, sc);
      m.compose(v, q, s); flowers.setMatrixAt(fi, m);
      c.setHSL(choose([.95, .08, .13, .48, .68, .78]), .55, .55 + rnd() * .14);
      flowers.setColorAt(fi, c); fi++;
    } else if (gi < 1100) {
      const sc = .5 + rnd() * 1.1;
      v.set(x, y + .4 * sc, z); s.set(sc, sc, sc);
      m.compose(v, q, s); grass.setMatrixAt(gi, m);
      c.setHSL(.24 + rnd() * .06, .28 + rnd() * .15, .16 + rnd() * .1);
      grass.setColorAt(gi, c); gi++;
    }
  }
  flowers.count = fi; grass.count = gi;
  flowers.instanceMatrix.needsUpdate = true; grass.instanceMatrix.needsUpdate = true;
  scene.add(flowers, grass);
  return { flowers, grass };
}

export function createRocks(scene, colliders) {
  const rnd = seededRandom(404);
  const parts = [];
  for (let i = 0; i < 90; i++) {
    const x = (rnd() * 2 - 1) * 112, z = (rnd() * 2 - 1) * 112;
    if (distToPath(x, z).d < 5 || Math.hypot(x - ARENA.x, z - ARENA.z) < 34) continue;
    const y = heightAt(x, z);
    const s = .4 + rnd() * 2.4;
    addGeo(parts, G.dodec, new THREE.Color().setHSL(.1, .08, .28 + rnd() * .12), x, y + s * .25, z, rnd() * 3, rnd() * 3, rnd() * 3, s, s * .75, s);
    if (s > 1.6) colliders.push({ x, z, r: s * .75, type: 'rock' });
  }
  finish(parts, new THREE.MeshStandardMaterial({ vertexColors: true, roughness: .95 }), scene, 'rocks');
}

/* ============================================================
   COTTAGES & VILLAGE
============================================================ */
function buildCottage(parts, winParts, x, z, ry, scale = 1) {
  const y = heightAt(x, z);
  const root = mat4(x, y, z, 0, ry, 0, scale, scale, scale);
  const wallC = new THREE.Color(0xb8a688);
  const woodC = new THREE.Color(0x4b3423);
  const stoneC = new THREE.Color(0x6d6860);
  const roofC = new THREE.Color(0x49343a);
  addBox(parts, stoneC, 8.4, .7, 6.8, 0, .35, 0, 0, root);
  addBox(parts, wallC, 7.4, 3.4, 5.8, 0, 2.25, 0, 0, root);
  // timber frame
  for (const sx of [-3.55, 3.55]) for (const sz of [-2.8, 2.8]) addBox(parts, woodC, .22, 3.5, .22, sx, 2.25, sz, 0, root);
  for (const sz of [-2.82, 2.82]) {
    addBox(parts, woodC, 7.4, .18, .16, 0, 3.85, sz, 0, root);
    addBox(parts, woodC, 7.4, .16, .16, 0, .75, sz, 0, root);
    addBox(parts, woodC, .16, 3.4, .16, 0, 2.25, sz, 0, root);
    for (const sx of [-1.8, 1.8]) addBox(parts, woodC, .16, 3.4, .16, sx, 2.25, sz, 0, root);
  }
  for (const sx of [-3.57, 3.57]) {
    addBox(parts, woodC, .16, .18, 5.8, sx, 3.85, 0, 0, root);
    addBox(parts, woodC, .16, .16, 5.8, sx, .75, 0, 0, root);
  }
  // cross braces front
  addBox(parts, woodC, 3.4, .17, .12, -1.9, 1.55, 2.85, 0, root, 0, .55);
  addBox(parts, woodC, 3.4, .17, .12, 1.9, 1.55, 2.85, 0, root, 0, -.55);
  // roof slopes
  addBox(parts, roofC, 4.65, .22, 6.8, -2.05, 4.85, 0, 0, root, 0, .58);
  addBox(parts, roofC, 4.65, .22, 6.8, 2.05, 4.85, 0, 0, root, 0, -.58);
  addBox(parts, roofC, .25, .8, 6.9, 0, 5.6, 0, 0, root);
  // gable
  addGeo(parts, G.tetra, wallC, 0, 4.35, 0, 0, Math.PI / 4, 0, 4.2, 2.6, 4.2, root);
  // chimney
  addBox(parts, stoneC, .9, 2.4, .9, 2.2, 5.0, -1.4, 0, root);
  addBox(parts, new THREE.Color(0x3a3835), .5, .5, .5, 2.2, 6.3, -1.4, 0, root);
  // door
  addBox(parts, new THREE.Color(0x302116), 1.25, 2.3, .14, 0, 1.55, 2.93, 0, root);
  addBox(parts, new THREE.Color(0x6e5a3a), .18, .18, .1, .4, 1.45, 3.02, 0, root);
  // windows (emissive)
  for (const sx of [-2.1, 2.1]) {
    addBox(winParts, new THREE.Color(0xffc46a), 1.0, 1.1, .08, sx, 2.55, 2.94, 0, root);
    addBox(parts, woodC, 1.25, .13, .14, sx, 2.55, 2.99, 0, root);
    addBox(parts, woodC, .13, 1.3, .14, sx, 2.55, 2.99, 0, root);
  }
  // side windows
  for (const sx of [-3.72, 3.72]) {
    addBox(winParts, new THREE.Color(0xffb95f), .08, .95, 1.0, sx, 2.5, 0, 0, root);
  }
  // crooked extra room / lean-to
  if (scale > .9) {
    addBox(parts, wallC, 2.8, 2.2, 3.4, 4.6, 1.3, .7, 0, root);
    addBox(parts, roofC, 3.3, .18, 3.9, 4.6, 2.55, .7, 0, root, 0, -.22);
    addBox(winParts, new THREE.Color(0xffcb7a), .06, .65, .7, 6.02, 1.35, .7, 0, root);
  }
  return { x, z, r: 4.5 * scale };
}

export function createVillage(scene, colliders, loreSpots) {
  const parts = [], wins = [];
  const houses = [
    [21, 58, .2, 1.0], [-15, 63, -.4, .95], [28, 43, .5, .9], [-23, 43, -.2, 1.05],
    [14, 30, .1, .85], [-18, 31, .4, .9], [36, 55, -.5, .8], [9, 72, -.1, .72],
  ];
  for (const [x, z, ry, s] of houses) {
    const c = buildCottage(parts, wins, x, z, ry, s);
    colliders.push({ x, z, r: c.r, type: 'house' });
  }
  finish(parts, new THREE.MeshStandardMaterial({ vertexColors: true, roughness: .85, flatShading: false }), scene, 'cottages');
  finish(wins, new THREE.MeshBasicMaterial({ vertexColors: true }), scene, 'cottageWindows');

  // well
  const vp = [];
  const wx = 2, wz = 50, wy = heightAt(wx, wz);
  addGeo(vp, G.cyl, new THREE.Color(0x6b665e), wx, wy + .55, wz, 0, 0, 0, 3.0, 1.1, 3.0);
  addGeo(vp, G.cyl, new THREE.Color(0x1b2833), wx, wy + 1.06, wz, 0, 0, 0, 2.2, .12, 2.2);
  for (const [ox, oz] of [[-1.15, 0], [1.15, 0]]) addBox(vp, new THREE.Color(0x4b3626), .22, 3.2, .22, wx + ox, wy + 2.3, wz, 0, null);
  addBox(vp, new THREE.Color(0x4b3626), 2.5, .22, .22, wx, wy + 3.8, wz, 0, null);
  addGeo(vp, G.cyl, new THREE.Color(0x6b5b45), wx, wy + 3.2, wz, 0, 0, Math.PI / 2, .2, 2.2, .2);
  colliders.push({ x: wx, z: wz, r: 1.8, type: 'well' });

  // market stalls
  for (const [sx, sz, rot] of [[-7, 56, .2], [16, 52, -.4]]) {
    const sy = heightAt(sx, sz);
    addBox(vp, new THREE.Color(0x5a4028), 4.2, .16, 2.2, sx, sy + 2.2, sz, rot);
    for (const [ox, oz] of [[-1.8, -.8], [1.8, -.8], [-1.8, .8], [1.8, .8]]) addBox(vp, new THREE.Color(0x4a3320), .15, 2.2, .15, sx + ox, sy + 1.1, sz + oz, rot);
    addBox(vp, new THREE.Color(0x6a2f32), 4.4, .1, 2.5, sx, sy + 2.35, sz, rot);
    addBox(vp, new THREE.Color(0x8a3a3a), 4.0, .5, .06, sx, sy + 1.9, sz + 1.2, rot);
  }
  // barrels & crates
  const rnd = seededRandom(90);
  for (let i = 0; i < 18; i++) {
    const x = 4 + (rnd() * 2 - 1) * 24, z = 42 + (rnd() * 2 - 1) * 20;
    if (distToPath(x, z).d < 3.5) continue;
    const y = heightAt(x, z);
    if (rnd() < .5) addGeo(vp, G.cyl, new THREE.Color(0x5c4327), x, y + .55, z, 0, 0, 0, .85, 1.1, .85);
    else addBox(vp, new THREE.Color(0x6b4d2e), .9, .9, .9, x, y + .45, z, rnd() * 3);
  }
  // carts
  for (const [cx, cz, cr] of [[25, 47, .4], [-12, 36, -.9]]) {
    const cy = heightAt(cx, cz);
    addBox(vp, new THREE.Color(0x513922), 3.6, .3, 1.7, cx, cy + 1.0, cz, cr);
    addBox(vp, new THREE.Color(0x3c2a1a), .15, .9, 1.7, cx - 1.8, cy + 1.25, cz, cr);
    for (const [ox, oz] of [[-1.2, -.95], [1.2, -.95], [-1.2, .95], [1.2, .95]]) addGeo(vp, G.cyl, new THREE.Color(0x2d2b28), cx + ox, cy + .45, cz + oz, Math.PI / 2, 0, 0, .85, .16, .85);
    colliders.push({ x: cx, z: cz, r: 2.2, type: 'cart' });
  }
  // fences along path near village
  for (let i = 0; i < 12; i++) {
    const t = (i / 12) * (PATH.length - 2);
    const idx = Math.floor(t), f = t - idx;
    const ax = PATH[idx][0], az = PATH[idx][1], bx = PATH[idx + 1][0], bz = PATH[idx + 1][1];
    const x = ax + (bx - ax) * f + (i % 2 ? 5.2 : -5.2), z = az + (bz - az) * f;
    if (x > 20 || x < -20 || z < 25 || z > 75) continue;
    const y = heightAt(x, z);
    const a = Math.atan2(bx - ax, bz - az);
    addBox(vp, new THREE.Color(0x594027), .14, 1.15, .14, x, y + .58, z, a);
    addBox(vp, new THREE.Color(0x594027), 2.4, .1, .1, x + Math.sin(a) * 1.2, y + .75, z + Math.cos(a) * 1.2, a);
    addBox(vp, new THREE.Color(0x594027), 2.4, .1, .1, x + Math.sin(a) * 1.2, y + .45, z + Math.cos(a) * 1.2, a);
  }
  // banners
  for (const [bx, bz, col] of [[18, 54, 0x7e2f34], [-14, 61, 0x2e4d64], [24, 46, 0x6a5a26]]) {
    const y = heightAt(bx, bz);
    addGeo(vp, G.cyl, new THREE.Color(0x4a3522), bx, y + 2.6, bz, 0, 0, 0, .13, 5.2, .13);
    addBox(vp, new THREE.Color(col), .08, 2.2, 1.1, bx + .45, y + 4.1, bz);
  }
  // grave markers at the edge of the village
  for (let i = 0; i < 9; i++) {
    const x = -31 + rnd() * 11, z = 22 + rnd() * 16;
    const y = heightAt(x, z);
    addBox(vp, new THREE.Color(0x6d6a62), .65, 1.3 + rnd() * .6, .18, x, y + .7, z, rnd() * .4);
    if (rnd() < .5) addBox(vp, new THREE.Color(0x59564f), 1.1, .16, .22, x, y + .35, z, 0);
  }
  finish(vp, new THREE.MeshStandardMaterial({ vertexColors: true, roughness: .9 }), scene, 'villageProps');
  // smoke over chimneys
  const smokeTex = canvasTexture('smoke', 64, 64, (ctx, w, h) => {
    const g = ctx.createRadialGradient(32, 32, 0, 32, 32, 32);
    g.addColorStop(0, 'rgba(170,170,165,.4)'); g.addColorStop(1, 'rgba(120,120,115,0)');
    ctx.fillStyle = g; ctx.fillRect(0, 0, w, h);
  });
  const smoke = [];
  for (const [x, z, ry, s] of houses) {
    const sp = new THREE.Sprite(new THREE.SpriteMaterial({ map: smokeTex, transparent: true, opacity: .25, depthWrite: false }));
    const y = heightAt(x, z);
    sp.position.set(x + 2.2 * s, y + 7 * s, z - 1.4 * s);
    sp.scale.setScalar(2.4 * s); scene.add(sp); smoke.push(sp);
  }
  return { smoke };
}

/* ============================================================
   HOLLOW TREE + SHRINES
============================================================ */
export function createHollowTree(scene, colliders) {
  const x = -3, z = 74, y = heightAt(x, z);
  const parts = [];
  addGeo(parts, G.cyl, new THREE.Color(0x4a3a2a), x, y + 4, z, 0, 0, 0, 4.8, 12, 4.8);
  addGeo(parts, G.cyl, new THREE.Color(0x3a2d20), x, y + 8.2, z, 0, 0, 0, 3.2, 5, 3.2);
  // roots
  for (let i = 0; i < 9; i++) {
    const a = (i / 9) * Math.PI * 2;
    addGeo(parts, G.cyl, new THREE.Color(0x443425), x + Math.cos(a) * 2.6, y + .6, z + Math.sin(a) * 2.6, Math.PI / 2 + .25, -a, 0, .9, 4.4, .9);
  }
  // hollow opening (dark disc)
  const hole = new THREE.Mesh(new THREE.CircleGeometry(1.55, 16), new THREE.MeshBasicMaterial({ color: 0x080605 }));
  hole.position.set(x, y + 3.1, z + 2.42); scene.add(hole);
  // branches
  for (let i = 0; i < 7; i++) {
    const a = (i / 7) * Math.PI * 2 + .3;
    addGeo(parts, G.cyl, new THREE.Color(0x413225), x + Math.cos(a) * 2, y + 10.5, z + Math.sin(a) * 2, .6, -a, .3, .55, 7, .55);
    addGeo(parts, G.ico, new THREE.Color(0x33452f), x + Math.cos(a) * 5.6, y + 14.6, z + Math.sin(a) * 5.6, 0, 0, 0, 4.4, 2.6, 4.4);
  }
  finish(parts, new THREE.MeshStandardMaterial({ vertexColors: true, roughness: 1 }), scene, 'hollowTree');
  colliders.push({ x, z, r: 4.6, type: 'tree' });

  // lanterns & small mushrooms around it
  const glowParts = [];
  for (let i = 0; i < 7; i++) {
    const a = (i / 7) * Math.PI * 2;
    const lx = x + Math.cos(a) * 7, lz = z + Math.sin(a) * 7;
    addGeo(glowParts, G.sphere, new THREE.Color(0x8fffe3), lx, heightAt(lx, lz) + .25, lz, 0, 0, 0, .18, .18, .18);
  }
  finish(glowParts, new THREE.MeshBasicMaterial({ vertexColors: true }), scene, 'treeGlow');
}

export function createShrine(scene, id, name, x, z, loreSpots) {
  const y = heightAt(x, z);
  const group = new THREE.Group();
  const stone = material(0x8d8676, { roughness: .95 });
  const dark = material(0x4a453c, { roughness: 1 });
  const gold = material(0x9c7c3f, { metalness: .6, roughness: .4 });
  const base = new THREE.Mesh(new THREE.CylinderGeometry(2.5, 2.9, .5, 10), stone); base.position.y = .25; group.add(base);
  const base2 = new THREE.Mesh(new THREE.CylinderGeometry(1.7, 2.2, .5, 10), dark); base2.position.y = .7; group.add(base2);
  const bowl = new THREE.Mesh(new THREE.CylinderGeometry(.85, .6, .55, 10), gold); bowl.position.y = 1.2; group.add(bowl);
  const flame = makeGlowSprite(0xffb85e, 3.2); flame.position.y = 2.0; group.add(flame);
  const flameCore = new THREE.Mesh(new THREE.ConeGeometry(.25, .9, 6), emissive(0xffd68b, 2.5)); flameCore.position.y = 1.85; group.add(flameCore);
  // sword in stone
  const sword = new THREE.Group();
  const blade = new THREE.Mesh(new THREE.BoxGeometry(.12, 2.4, .04), material(0xaab0b2, { metalness: .8, roughness: .35 })); blade.position.y = 1.2; sword.add(blade);
  const guard = new THREE.Mesh(new THREE.BoxGeometry(1.0, .1, .14), gold); guard.position.y = 2.3; sword.add(guard);
  const hilt = new THREE.Mesh(new THREE.CylinderGeometry(.07, .07, .55, 6), dark); hilt.position.y = 2.62; sword.add(hilt);
  const pommel = new THREE.Mesh(new THREE.SphereGeometry(.12, 8, 6), gold); pommel.position.y = 2.92; sword.add(pommel);
  sword.position.set(2.0, 0, 0); sword.rotation.z = .18; group.add(sword);
  // candles
  for (let i = 0; i < 6; i++) {
    const a = (i / 6) * Math.PI * 2;
    const c = new THREE.Mesh(new THREE.CylinderGeometry(.06, .08, .3 + Math.random() * .3, 5), material(0xd6c9a9));
    c.position.set(Math.cos(a) * 2.3, .55, Math.sin(a) * 2.3); group.add(c);
    const f = new THREE.Mesh(new THREE.SphereGeometry(.05, 5), emissive(0xffb45e, 2)); f.position.set(Math.cos(a) * 2.3, .85, Math.sin(a) * 2.3); group.add(f);
  }
  const light = new THREE.PointLight(0xffb05e, 2.2, 18, 2);
  light.position.y = 2.4; group.add(light);
  group.position.set(x, y, z);
  scene.add(group);
  return { id, name, x, z, y, radius: 3.4, group, flame, light, base, phase: rand(0, 6) };
}

/* ============================================================
   BOSS ARENA
============================================================ */
export function createBossArena(scene, colliders) {
  const parts = [], glowParts = [];
  const cx = ARENA.x, cz = ARENA.z, r = ARENA.r;
  // ring of broken pillars and stones
  for (let i = 0; i < 16; i++) {
    const a = (i / 16) * Math.PI * 2 + .07;
    const rr = r - 1.4;
    const x = cx + Math.cos(a) * rr, z = cz + Math.sin(a) * rr;
    const y = heightAt(x, z);
    if (i % 3 === 0) {
      addGeo(parts, G.cyl, new THREE.Color(0x6b665c), x, y + 1.9, z, 0, a, .08, 1.6, 4.4, 1.6);
      addBox(parts, new THREE.Color(0x59544b), 2.2, .5, 2.2, x, y + 4.15, z, a);
      colliders.push({ x, z, r: 1.3, type: 'pillar' });
    } else {
      addGeo(parts, G.dodec, new THREE.Color(0x55514a), x, y + .5, z, rand(0, 3), rand(0, 3), 0, 1.8, 1.4, 1.8);
    }
  }
  // corruption roots reaching into the arena
  for (let i = 0; i < 20; i++) {
    const a = rand(0, Math.PI * 2), rr = rand(8, r - 3);
    const x = cx + Math.cos(a) * rr, z = cz + Math.sin(a) * rr;
    const y = heightAt(x, z);
    addGeo(parts, G.cyl, new THREE.Color(0x2a2020), x, y + .18, z, Math.PI / 2, a, .2, .35, rand(3, 8), .35);
    if (i % 4 === 0) addGeo(glowParts, G.sphere, new THREE.Color(0x9c5cff), x, y + .3, z, 0, 0, 0, .22, .22, .22);
  }
  // giant dead tree at the back
  const tx = 0, tz = -128, ty = heightAt(tx, tz);
  addGeo(parts, G.cyl, new THREE.Color(0x30251c), tx, ty + 9, tz, 0, 0, 0, 7, 26, 7);
  colliders.push({ x: tx, z: tz, r: 5.5, type: 'tree' });
  for (let i = 0; i < 11; i++) {
    const a = rand(0, Math.PI * 2);
    addGeo(parts, G.cyl, new THREE.Color(0x2b211a), tx + Math.cos(a) * 2.2, ty + 16 + rand(0, 6), tz + Math.sin(a) * 2.2, rand(.4, 1.2), -a, rand(-.3, .3), .6, rand(5, 12), .6);
  }
  // fog gate arch
  const gx = 0, gz = -70, gy = heightAt(gx, gz);
  for (const ox of [-2.6, 2.6]) {
    addBox(parts, new THREE.Color(0x5e5a50), 1.3, 6.2, 1.4, gx + ox, gy + 3.1, gz, 0);
    colliders.push({ x: gx + ox, z: gz, r: 1.0, type: 'arch' });
  }
  addBox(parts, new THREE.Color(0x4b473f), 7.2, 1.1, 1.7, gx, gy + 6.6, gz, 0);
  addGeo(parts, G.cone, new THREE.Color(0x504c43), gx, gy + 7.7, gz, 0, 0, 0, 7.8, 2.2, 1.8);
  finish(parts, new THREE.MeshStandardMaterial({ vertexColors: true, roughness: .92 }), scene, 'arenaProps');
  finish(glowParts, new THREE.MeshBasicMaterial({ vertexColors: true }), scene, 'arenaGlow');

  // fog gate plane
  const gateTex = canvasTexture('gate', 128, 128, (ctx, w, h) => {
    const g = ctx.createLinearGradient(0, 0, 0, h);
    g.addColorStop(0, 'rgba(210,190,230,0)'); g.addColorStop(.5, 'rgba(180,150,220,.55)'); g.addColorStop(1, 'rgba(120,90,160,.25)');
    ctx.fillStyle = g; ctx.fillRect(0, 0, w, h);
    for (let i = 0; i < 60; i++) { ctx.fillStyle = `rgba(220,210,255,${Math.random() * .25})`; ctx.fillRect(Math.random() * w, Math.random() * h, 1, 3 + Math.random() * 9); }
  });
  const gate = new THREE.Mesh(new THREE.PlaneGeometry(4.8, 6.0), new THREE.MeshBasicMaterial({ map: gateTex, transparent: true, side: THREE.DoubleSide, depthWrite: false, blending: THREE.AdditiveBlending }));
  gate.position.set(gx, gy + 3.1, gz); scene.add(gate);
  const gateLight = new THREE.PointLight(0x9c5cff, 1.4, 12, 2); gateLight.position.set(gx, gy + 3, gz); scene.add(gateLight);

  // arena central ritual circle
  const ring = new THREE.Mesh(new THREE.RingGeometry(6.8, 7.3, 48), new THREE.MeshBasicMaterial({ color: 0x5d3a72, transparent: true, opacity: .5, side: THREE.DoubleSide }));
  ring.rotation.x = -Math.PI / 2; ring.position.set(cx, heightAt(cx, cz) + .06, cz); scene.add(ring);
  const ring2 = new THREE.Mesh(new THREE.RingGeometry(11.2, 11.4, 48), new THREE.MeshBasicMaterial({ color: 0x6d447f, transparent: true, opacity: .25, side: THREE.DoubleSide }));
  ring2.rotation.x = -Math.PI / 2; ring2.position.set(cx, heightAt(cx, cz) + .05, cz); scene.add(ring2);

  // candles / braziers
  const flames = [];
  for (const [fx, fz] of [[-14, -84], [14, -84], [-19, -112], [19, -112]]) {
    const fy = heightAt(fx, fz);
    const pole = new THREE.Mesh(new THREE.CylinderGeometry(.12, .18, 3.2, 6), material(0x3e3a33)); pole.position.set(fx, fy + 1.6, fz); scene.add(pole);
    const bowl = new THREE.Mesh(new THREE.CylinderGeometry(.6, .35, .4, 8), material(0x51473a)); bowl.position.set(fx, fy + 3.2, fz); scene.add(bowl);
    const f = makeGlowSprite(0xff8b4a, 4.2); f.position.set(fx, fy + 3.9, fz); scene.add(f); flames.push(f);
    const l = new THREE.PointLight(0xff7a3d, 1.0, 12, 2); l.position.set(fx, fy + 3.8, fz); scene.add(l);
  }
  // purple ambient light at arena
  const purple = new THREE.PointLight(0x8a4cd9, 1.5, 55, 1.5); purple.position.set(cx, 14, cz + 6); scene.add(purple);

  return { gate, gateLight, ring, ring2, flames, gatePos: { x: gx, y: gy, z: gz } };
}

/* ============================================================
   PATH DRESSING & INTERACTABLES
============================================================ */
export function createPathDressing(scene) {
  const parts = [], glow = [];
  const rnd = seededRandom(300);
  // lantern posts along path
  const lanterns = [];
  for (let i = 3; i < PATH.length - 2; i += 2) {
    const [x, z] = PATH[i];
    const side = i % 4 === 1 ? 1 : -1;
    const ox = x + side * 4.2, oz = z + (rnd() - .5) * 2;
    const y = heightAt(ox, oz);
    addGeo(parts, G.cyl, new THREE.Color(0x463424), ox, y + 1.4, oz, 0, 0, 0, .14, 2.8, .14);
    addBox(parts, new THREE.Color(0x2e2922), .55, .7, .55, ox, y + 3.0, oz);
    addGeo(glow, G.sphere, new THREE.Color(0xffb35e), ox, y + 3.0, oz, 0, 0, 0, .3, .3, .3);
    lanterns.push({ x: ox, y: y + 3, z: oz });
  }
  // small stones bordering path
  for (let i = 0; i < 70; i++) {
    const t = rnd() * (PATH.length - 2);
    const idx = Math.floor(t), f = t - idx;
    const ax = PATH[idx][0], az = PATH[idx][1], bx = PATH[idx + 1][0], bz = PATH[idx + 1][1];
    const side = rnd() < .5 ? -1 : 1;
    const x = ax + (bx - ax) * f + side * (3.2 + rnd() * 1.4);
    const z = az + (bz - az) * f + (rnd() - .5) * 2;
    const y = heightAt(x, z);
    addGeo(parts, G.dodec, new THREE.Color().setHSL(.1, .06, .3 + rnd() * .12), x, y + .1, z, rnd(), rnd(), rnd(), .3 + rnd() * .35, .2, .3 + rnd() * .3);
  }
  // signposts
  const signs = [[8, 78, 0x7a6239], [0, 58, 0x6e5733], [-12, 10, 0x6d5633]];
  for (const [x, z, col] of signs) {
    const y = heightAt(x, z);
    addBox(parts, new THREE.Color(0x4a3522), .16, 2.6, .16, x, y + 1.3, z);
    addBox(parts, new THREE.Color(col), 1.8, .6, .1, x + .7, y + 2.2, z);
  }
  finish(parts, new THREE.MeshStandardMaterial({ vertexColors: true, roughness: .95 }), scene, 'pathDressing');
  finish(glow, new THREE.MeshBasicMaterial({ vertexColors: true }), scene, 'pathLanternGlow');
  return { lanterns };
}

export function createLoreObject(scene, x, z, loreId) {
  const y = heightAt(x, z);
  const group = new THREE.Group();
  const base = new THREE.Mesh(new THREE.CylinderGeometry(.35, .45, .18, 6), material(0x5a554a)); base.position.y = .09; group.add(base);
  const page = new THREE.Mesh(new THREE.BoxGeometry(.55, .04, .72), material(0xd9cfb3)); page.position.y = .24; page.rotation.y = rand(0, 3); group.add(page);
  const glow = makeGlowSprite(0xffd98a, 1.8); glow.position.y = .55; group.add(glow);
  group.position.set(x, y, z); scene.add(group);
  return { id: loreId, x, y, z, radius: 2.0, group, glow, kind: 'lore' };
}

export function createChest(scene, id, x, z, scale = 1) {
  const y = heightAt(x, z);
  const group = new THREE.Group();
  const wood = material(0x5a3b22, { roughness: .85 });
  const iron = material(0x49453d, { metalness: .6, roughness: .5 });
  const body = new THREE.Mesh(new THREE.BoxGeometry(1.5, .8, .9), wood); body.position.y = .4; group.add(body);
  const lid = new THREE.Mesh(new THREE.BoxGeometry(1.55, .3, .95), wood); lid.position.set(0, .9, -.05); lid.rotation.x = -.08; group.add(lid);
  for (const ox of [-.55, .55]) { const band = new THREE.Mesh(new THREE.BoxGeometry(.12, .85, .98), iron); band.position.set(ox, .42, 0); group.add(band); }
  const lock = new THREE.Mesh(new THREE.BoxGeometry(.22, .28, .1), iron); lock.position.set(0, .62, .47); group.add(lock);
  const glow = makeGlowSprite(0xffd06a, 1.1); glow.position.y = 1.1; group.add(glow);
  group.position.set(x, y, z); group.scale.setScalar(scale); scene.add(group);
  return { id, x, y, z, radius: 2.2, group, glow, kind: 'chest', opened: false, lid };
}

export function createMotePickup(scene, x, z, amount = 80) {
  const y = heightAt(x, z);
  const group = new THREE.Group();
  const s = makeGlowSprite(0xffcf6e, 2.0); s.position.y = .7; group.add(s);
  const core = new THREE.Mesh(new THREE.OctahedronGeometry(.16, 0), emissive(0xffdc8a, 2.4)); core.position.y = .7; group.add(core);
  group.position.set(x, y, z); scene.add(group);
  return { x, y, z, radius: 2.0, group, amount, kind: 'mote', taken: false, core };
}

export function createFogGate(scene, x, z) {
  const y = heightAt(x, z);
  const group = new THREE.Group();
  const ring = new THREE.Mesh(new THREE.TorusGeometry(2.4, .07, 6, 24), emissive(0xb9c8d4, .6));
  ring.position.set(0, 2.6, 0); group.add(ring);
  const disc = new THREE.Mesh(new THREE.CircleGeometry(2.35, 32), new THREE.MeshBasicMaterial({ color: 0xbfb1dc, transparent: true, opacity: .28, side: THREE.DoubleSide, blending: THREE.AdditiveBlending }));
  disc.position.y = 2.6; group.add(disc);
  const glow = makeGlowSprite(0xc7b6ff, 12); glow.position.y = 2.6; group.add(glow);
  group.position.set(x, y, z); scene.add(group);
  return { x, y, z, radius: 4.0, group, ring, disc, glow, kind: 'gate' };
}

export function createFireflies(scene) {
  const rnd = seededRandom(19);
  const count = 340;
  const base = [];
  const pos = new Float32Array(count * 3);
  const phase = new Float32Array(count);
  for (let i = 0; i < count; i++) {
    const x = (rnd() * 2 - 1) * 100, z = (rnd() * 2 - 1) * 100;
    base.push([x, heightAt(x, z), z]);
    pos[i * 3] = x; pos[i * 3 + 1] = heightAt(x, z) + 1 + rnd() * 9; pos[i * 3 + 2] = z;
    phase[i] = rnd() * 6.28;
  }
  const geo = new THREE.BufferGeometry();
  geo.setAttribute('position', new THREE.BufferAttribute(pos, 3));
  const mat = new THREE.PointsMaterial({ color: 0xffd98a, size: .11, transparent: true, opacity: .85, blending: THREE.AdditiveBlending, depthWrite: false });
  const pts = new THREE.Points(geo, mat); scene.add(pts);
  return { pts, phase, base, update(t) {
    const p = pts.geometry.attributes.position;
    for (let i = 0; i < count; i++) {
      const [x, y, z] = base[i];
      p.setX(i, x + Math.sin(t * .3 + phase[i]) * 2.2);
      p.setY(i, y + 1.4 + Math.sin(t * .55 + phase[i] * 1.7) * 1.2 + (i % 5) * 1.2);
      p.setZ(i, z + Math.cos(t * .27 + phase[i]) * 2.2);
    }
    p.needsUpdate = true;
  } };
}

export function createDriftingPetals(scene) {
  const rnd = seededRandom(44);
  const count = 180;
  const pos = new Float32Array(count * 3);
  const phase = new Float32Array(count);
  for (let i = 0; i < count; i++) {
    pos[i * 3] = (rnd() * 2 - 1) * 80;
    pos[i * 3 + 1] = 2 + rnd() * 14;
    pos[i * 3 + 2] = (rnd() * 2 - 1) * 80;
    phase[i] = rnd() * 100;
  }
  const geo = new THREE.BufferGeometry();
  geo.setAttribute('position', new THREE.BufferAttribute(pos, 3));
  const mat = new THREE.PointsMaterial({ color: 0xf3c7d9, size: .13, transparent: true, opacity: .55, depthWrite: false });
  const pts = new THREE.Points(geo, mat); scene.add(pts);
  return { pts, phase, update(t) {
    const p = pts.geometry.attributes.position;
    for (let i = 0; i < count; i++) {
      const x = pos[i * 3] + Math.sin(t * .18 + phase[i]) * 3;
      const z = pos[i * 3 + 2] + t * .22 % 160 - 80;
      p.setX(i, x); p.setZ(i, z); p.setY(i, 2 + ((pos[i * 3 + 1] + t * .35 + phase[i]) % 16));
    }
    p.needsUpdate = true;
  } };
}
