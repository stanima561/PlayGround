import * as THREE from 'three';
import { clamp, lerp, smoothstep, fbm, valueNoise } from '../core/utils.js';

export const WORLD_SIZE = 250;
export const PLAY_RADIUS = 108;
export const ARENA = { x: 0, z: -102, r: 31 };

export const PATH = [
  [8, 112], [7, 96], [6, 84], [2, 74], [0, 64], [4, 54], [10, 44], [8, 33],
  [2, 24], [-6, 14], [-12, 4], [-11, -8], [-4, -22], [2, -36], [4, -52], [1, -68], [0, -82],
];

export function distToPath(x, z) {
  let best = 999, bx = 0, bz = 0, bt = 0;
  for (let i = 0; i < PATH.length - 1; i++) {
    const [ax, az] = PATH[i], [ex, ez] = PATH[i + 1];
    const dx = ex - ax, dz = ez - az;
    const l2 = dx * dx + dz * dz;
    let t = ((x - ax) * dx + (z - az) * dz) / l2;
    t = clamp(t, 0, 1);
    const px = ax + dx * t, pz = az + dz * t;
    const d = Math.hypot(x - px, z - pz);
    if (d < best) { best = d; bx = px; bz = pz; bt = i + t; }
  }
  return { d: best, x: bx, z: bz, t: bt };
}

function flatten(h, target, x, z, cx, cz, radius) {
  const d = Math.hypot(x - cx, z - cz);
  const w = 1 - smoothstep(radius * .55, radius, d);
  return lerp(h, target, w);
}

export function heightAt(x, z) {
  let h = 1.5 * Math.sin(x * 0.045) * Math.cos(z * 0.038)
    + 0.9 * Math.sin((x + z) * 0.072)
    + 0.55 * Math.sin(x * 0.16 + 1.2) * Math.sin(z * 0.13 + 0.4)
    + (fbm(x * 0.018 + 2, z * 0.018 - 3, 3) - .5) * 1.6;
  // raised rim of the bowl
  const edge = Math.max(0, Math.max(Math.abs(x), Math.abs(z)) - 88);
  h += Math.pow(edge, 1.7) * 0.08;
  // flattened play spaces
  h = flatten(h, 1.15, x, z, 7, 88, 18);
  h = flatten(h, 1.55, x, z, 3, 53, 25);
  h = flatten(h, 0.5, x, z, ARENA.x, ARENA.z, ARENA.r + 10);
  h = flatten(h, 1.0, x, z, -2, 72, 12);
  h = flatten(h, 1.0, x, z, 1, -68, 10);
  // path is slightly sunken and smooth
  const p = distToPath(x, z);
  if (p.d < 8) {
    const w = 1 - smoothstep(2.2, 8, p.d);
    const target = 1.25 + Math.sin(p.t * 1.7) * .25;
    h = lerp(h, target, w * .72);
  }
  return h;
}

export function buildTerrain(scene) {
  const seg = 150;
  const geo = new THREE.PlaneGeometry(WORLD_SIZE, WORLD_SIZE, seg, seg);
  geo.rotateX(-Math.PI / 2);
  const pos = geo.attributes.position;
  const colors = new Float32Array(pos.count * 3);
  const c = new THREE.Color();
  for (let i = 0; i < pos.count; i++) {
    const x = pos.getX(i), z = pos.getZ(i);
    const y = heightAt(x, z);
    pos.setY(i, y);
    const p = distToPath(x, z);
    const n = fbm(x * .08, z * .08, 3);
    const n2 = valueNoise(x * .35, z * .35);
    // base mossy grass
    let r = .21 + n * .10, g = .30 + n * .10, b = .145 + n * .05;
    // darker under forest
    if (x < -18 && z > -45 && z < 64) { r *= .72; g *= .78; b *= .8; }
    // corruption near arena
    const ad = Math.hypot(x - ARENA.x, z - ARENA.z);
    if (ad < ARENA.r + 8) { const k = 1 - smoothstep(ARENA.r - 10, ARENA.r + 8, ad); r = lerp(r, .17, k * .65); g = lerp(g, .13, k * .65); b = lerp(b, .15, k * .5); }
    // path dirt
    if (p.d < 5.4) {
      const k = 1 - smoothstep(1.4, 5.4, p.d);
      r = lerp(r, .48 + n2 * .1, k); g = lerp(g, .36 + n2 * .07, k); b = lerp(b, .22 + n2 * .04, k);
    }
    // rim rock
    if (Math.max(Math.abs(x), Math.abs(z)) > 96) { r = lerp(r, .28, .7); g = lerp(g, .27, .7); b = lerp(b, .26, .7); }
    colors[i * 3] = r; colors[i * 3 + 1] = g; colors[i * 3 + 2] = b;
  }
  geo.setAttribute('color', new THREE.BufferAttribute(colors, 3));
  geo.computeVertexNormals();
  const mat = new THREE.MeshStandardMaterial({ vertexColors: true, roughness: 1, metalness: 0, flatShading: false });
  const mesh = new THREE.Mesh(geo, mat);
  mesh.receiveShadow = false;
  scene.add(mesh);

  // A darker, painterly under-layer to hide gaps at the horizon
  const under = new THREE.Mesh(new THREE.CircleGeometry(240, 48), new THREE.MeshBasicMaterial({ color: 0x11130f }));
  under.rotation.x = -Math.PI / 2; under.position.y = -8; scene.add(under);

  return mesh;
}

export function isInArena(x, z, pad = 0) {
  return Math.hypot(x - ARENA.x, z - ARENA.z) < ARENA.r + pad;
}
export function isOnPath(x, z, width = 7) {
  return distToPath(x, z).d < width;
}
