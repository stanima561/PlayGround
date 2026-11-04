import * as THREE from 'three';

export const clamp = (v, a, b) => (v < a ? a : v > b ? b : v);
export const lerp = (a, b, t) => a + (b - a) * t;
export const invLerp = (a, b, v) => clamp((v - a) / (b - a), 0, 1);
export const smoothstep = (a, b, t) => { const x = invLerp(a, b, t); return x * x * (3 - 2 * x); };
export const damp = (a, b, lambda, dt) => lerp(a, b, 1 - Math.exp(-lambda * dt));
export const rand = (a = 0, b = 1) => a + Math.random() * (b - a);
export const randInt = (a, b) => Math.floor(rand(a, b + 1));
export const chance = (p) => Math.random() < p;
export const choose = (arr) => arr[Math.floor(Math.random() * arr.length)];
export const TAU = Math.PI * 2;

export function angleDelta(a, b) {
  let d = (b - a) % TAU;
  if (d > Math.PI) d -= TAU;
  if (d < -Math.PI) d += TAU;
  return d;
}
export function dampAngle(a, b, lambda, dt) {
  return a + angleDelta(a, b) * (1 - Math.exp(-lambda * dt));
}
export function dist2D(a, b) { const dx = a.x - b.x, dz = a.z - b.z; return Math.hypot(dx, dz); }

// deterministic hash-based value noise
function hash2(x, y) {
  let h = Math.sin(x * 127.1 + y * 311.7) * 43758.5453123;
  return h - Math.floor(h);
}
export function valueNoise(x, y) {
  const ix = Math.floor(x), iy = Math.floor(y);
  const fx = x - ix, fy = y - iy;
  const ux = fx * fx * (3 - 2 * fx), uy = fy * fy * (3 - 2 * fy);
  const a = hash2(ix, iy), b = hash2(ix + 1, iy), c = hash2(ix, iy + 1), d = hash2(ix + 1, iy + 1);
  return lerp(lerp(a, b, ux), lerp(c, d, ux), uy);
}
export function fbm(x, y, oct = 4) {
  let v = 0, amp = 0.5, f = 1;
  for (let i = 0; i < oct; i++) { v += valueNoise(x * f, y * f) * amp; f *= 2.03; amp *= 0.5; }
  return v;
}
export function seededRandom(seed = 1337) {
  let s = seed >>> 0;
  return () => { s = (s * 1664525 + 1013904223) >>> 0; return s / 4294967296; };
}

// ---- material / canvas helpers ----
const texCache = new Map();
export function canvasTexture(name, w, h, draw, repeat = 1) {
  const key = name + ':' + repeat;
  if (texCache.has(key)) return texCache.get(key);
  const c = document.createElement('canvas');
  c.width = w; c.height = h;
  const ctx = c.getContext('2d');
  draw(ctx, w, h);
  const t = new THREE.CanvasTexture(c);
  t.wrapS = t.wrapT = THREE.RepeatWrapping;
  t.repeat.set(repeat, repeat);
  t.colorSpace = THREE.SRGBColorSpace;
  t.anisotropy = 2;
  texCache.set(key, t);
  return t;
}

export function plasterTexture() {
  return canvasTexture('plaster', 128, 128, (ctx, w, h) => {
    ctx.fillStyle = '#b9a887'; ctx.fillRect(0, 0, w, h);
    for (let i = 0; i < 900; i++) {
      ctx.fillStyle = `rgba(${60 + Math.random() * 50},${50 + Math.random() * 40},${38 + Math.random() * 30},${Math.random() * .12})`;
      ctx.fillRect(Math.random() * w, Math.random() * h, Math.random() * 8 + 1, Math.random() * 8 + 1);
    }
    for (let i = 0; i < 7; i++) {
      ctx.strokeStyle = 'rgba(50,40,30,.16)'; ctx.lineWidth = 1;
      ctx.beginPath(); let x = Math.random() * w, y = 0;
      while (y < h) { y += 10; x += (Math.random() - .5) * 8; ctx.lineTo(x, y); }
      ctx.stroke();
    }
  }, 1);
}
export function woodTexture() {
  return canvasTexture('wood', 128, 128, (ctx, w, h) => {
    ctx.fillStyle = '#5a4128'; ctx.fillRect(0, 0, w, h);
    for (let i = 0; i < 45; i++) {
      ctx.strokeStyle = `rgba(${25 + Math.random() * 30},${18 + Math.random() * 20},${10 + Math.random() * 12},${.15 + Math.random() * .3})`;
      ctx.lineWidth = Math.random() * 3 + .5;
      ctx.beginPath();
      const y = Math.random() * h;
      ctx.moveTo(0, y);
      for (let x = 0; x <= w; x += 8) ctx.lineTo(x, y + Math.sin(x * .15 + i) * 2);
      ctx.stroke();
    }
  }, 1);
}
export function roofTexture() {
  return canvasTexture('roof', 128, 128, (ctx, w, h) => {
    ctx.fillStyle = '#3c2e30'; ctx.fillRect(0, 0, w, h);
    for (let y = 0; y < h; y += 12) {
      for (let x = 0; x < w; x += 16) {
        ctx.fillStyle = `rgba(${50 + Math.random() * 30},${36 + Math.random() * 20},${38 + Math.random() * 18},.8)`;
        ctx.fillRect(x + (y / 12 % 2) * 8, y, 14, 10);
        ctx.strokeStyle = 'rgba(15,10,12,.35)'; ctx.strokeRect(x + (y / 12 % 2) * 8, y, 14, 10);
      }
    }
  }, 2);
}
export function stoneTexture() {
  return canvasTexture('stone', 128, 128, (ctx, w, h) => {
    ctx.fillStyle = '#6b6760'; ctx.fillRect(0, 0, w, h);
    for (let i = 0; i < 120; i++) {
      const g = 70 + Math.random() * 50;
      ctx.fillStyle = `rgba(${g},${g - 4},${g - 10},${.25 + Math.random() * .3})`;
      const s = Math.random() * 18 + 4;
      ctx.fillRect(Math.random() * w, Math.random() * h, s, s * .7);
    }
    for (let i = 0; i < 10; i++) { ctx.strokeStyle = 'rgba(25,25,22,.22)'; ctx.beginPath(); ctx.moveTo(Math.random() * w, 0); ctx.lineTo(Math.random() * w, h); ctx.stroke(); }
  }, 2);
}
export function barkTexture() {
  return canvasTexture('bark', 128, 128, (ctx, w, h) => {
    ctx.fillStyle = '#4a3829'; ctx.fillRect(0, 0, w, h);
    for (let i = 0; i < 70; i++) {
      ctx.fillStyle = `rgba(${20 + Math.random() * 25},${15 + Math.random() * 18},${10 + Math.random() * 12},${.25 + Math.random() * .35})`;
      ctx.fillRect(Math.random() * w, Math.random() * h, 2 + Math.random() * 5, 12 + Math.random() * 40);
    }
  }, 1);
}

export function material(color, opts = {}) {
  return new THREE.MeshStandardMaterial({ color, roughness: 0.85, metalness: 0.08, ...opts });
}
export function emissive(color, intensity = 1, opts = {}) {
  return new THREE.MeshStandardMaterial({ color, emissive: color, emissiveIntensity: intensity, roughness: .5, ...opts });
}

// Merge a list of {geometry, matrix, color} into one BufferGeometry with vertex colors
export function mergeColored(parts) {
  const geos = [];
  for (const p of parts) {
    const g = p.geometry.clone();
    if (p.matrix) g.applyMatrix4(p.matrix);
    const color = new THREE.Color(p.color ?? 0xffffff);
    const count = g.attributes.position.count;
    const arr = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) { arr[i * 3] = color.r; arr[i * 3 + 1] = color.g; arr[i * 3 + 2] = color.b; }
    g.setAttribute('color', new THREE.BufferAttribute(arr, 3));
    g.deleteAttribute('uv');
    geos.push(g);
  }
  // manual merge to avoid importing BufferGeometryUtils for every call
  let total = 0;
  for (const g of geos) total += g.attributes.position.count;
  const pos = new Float32Array(total * 3), nor = new Float32Array(total * 3), col = new Float32Array(total * 3);
  const idx = [];
  let offset = 0;
  for (const g of geos) {
    const p = g.attributes.position.array, n = g.attributes.normal.array, c = g.attributes.color.array;
    pos.set(p, offset * 3); nor.set(n, offset * 3); col.set(c, offset * 3);
    if (g.index) { for (let i = 0; i < g.index.count; i++) idx.push(g.index.array[i] + offset); }
    else { for (let i = 0; i < g.attributes.position.count; i++) idx.push(offset + i); }
    offset += g.attributes.position.count;
  }
  const m = new THREE.BufferGeometry();
  m.setAttribute('position', new THREE.BufferAttribute(pos, 3));
  m.setAttribute('normal', new THREE.BufferAttribute(nor, 3));
  m.setAttribute('color', new THREE.BufferAttribute(col, 3));
  m.setIndex(idx);
  return m;
}

export function makeGlowSprite(color = 0xffcc77, scale = 1) {
  const c = document.createElement('canvas'); c.width = c.height = 64;
  const ctx = c.getContext('2d');
  const g = ctx.createRadialGradient(32, 32, 0, 32, 32, 32);
  g.addColorStop(0, 'rgba(255,255,255,1)');
  g.addColorStop(.25, `rgba(${(color >> 16) & 255},${(color >> 8) & 255},${color & 255},.95)`);
  g.addColorStop(1, 'rgba(0,0,0,0)');
  ctx.fillStyle = g; ctx.fillRect(0, 0, 64, 64);
  const tex = new THREE.CanvasTexture(c);
  const mat = new THREE.SpriteMaterial({ map: tex, color, transparent: true, blending: THREE.AdditiveBlending, depthWrite: false });
  const s = new THREE.Sprite(mat); s.scale.setScalar(scale);
  return s;
}

export function disposeObject(obj) {
  obj.traverse(o => {
    if (o.geometry) o.geometry.dispose();
    if (o.material) {
      const mats = Array.isArray(o.material) ? o.material : [o.material];
      for (const m of mats) { if (m.map) m.map.dispose(); m.dispose?.(); }
    }
  });
}

export function formatTime(sec) {
  const s = Math.floor(sec % 60), m = Math.floor(sec / 60);
  return `${m}:${String(s).padStart(2, '0')}`;
}
