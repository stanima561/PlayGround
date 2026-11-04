import * as THREE from 'three';
import { rand, choose, makeGlowSprite } from '../core/utils.js';
import { heightAt } from '../world/terrain.js';

const SPHERE = new THREE.SphereGeometry(.09, 5, 4);
const SHARD = new THREE.TetrahedronGeometry(.1);
const CUBE = new THREE.BoxGeometry(.12, .12, .12);

export class Effects {
  constructor(game, scene) {
    this.game = game;
    this.scene = scene;
    this.particles = [];
    this.rings = [];
    this.arcs = [];
    this.telegraphs = [];
    this.spikes = [];
  }

  spawnParticles(pos, count, color, opts = {}) {
    const { speed = 3, life = .7, size = 1, gravity = 6, spread = 1, shape = 'sphere', glow = false } = opts;
    if (this.particles.length > 380) {
      for (let i = 0; i < count; i++) { const old = this.particles.shift(); if (old) this.scene.remove(old.mesh); }
    }
    for (let i = 0; i < count; i++) {
      const geo = shape === 'shard' ? SHARD : shape === 'cube' ? CUBE : SPHERE;
      const mat = new THREE.MeshBasicMaterial({ color, transparent: true, opacity: 1, blending: glow ? THREE.AdditiveBlending : THREE.NormalBlending, depthWrite: false });
      const m = new THREE.Mesh(geo, mat);
      m.position.set(pos.x + rand(-.3, .3), pos.y + rand(-.2, .4), pos.z + rand(-.3, .3));
      const s = (0.4 + Math.random() * .9) * size;
      m.scale.setScalar(s);
      this.scene.add(m);
      const a = rand(0, Math.PI * 2), up = rand(.2, 1.4) * speed;
      const v = new THREE.Vector3(Math.cos(a) * rand(.2, 1) * speed * spread, up, Math.sin(a) * rand(.2, 1) * speed * spread);
      this.particles.push({ mesh: m, mat, v, life: life * rand(.7, 1.3), maxLife: life, gravity, size: s });
    }
  }
  blood(pos, count = 10, color = 0x7a1f1f) { this.spawnParticles(pos, count, color, { speed: 3.2, life: .65, gravity: 12, shape: 'sphere' }); }
  sparks(pos, count = 8) { this.spawnParticles(pos, count, 0xffd88a, { speed: 4.4, life: .35, gravity: 8, size: .8, glow: true, shape: 'cube' }); }
  souls(pos, count = 18) { this.spawnParticles(pos, count, 0x9fe8d0, { speed: 1.6, life: 1.3, gravity: -1.5, size: 1.1, glow: true, shape: 'sphere' }); }
  heal(pos) { this.spawnParticles(pos.clone().add(new THREE.Vector3(0, 1, 0)), 18, 0xffc46a, { speed: 1.2, life: 1.1, gravity: -2, glow: true }); }

  ring(pos, color = 0xff7a3a, opts = {}) {
    const { radius = 8, duration = .7, height = .08, width = .18, inner = 0 } = opts;
    const geo = new THREE.RingGeometry(.7, 1, 48);
    const mat = new THREE.MeshBasicMaterial({ color, transparent: true, opacity: .85, side: THREE.DoubleSide, depthWrite: false, blending: THREE.AdditiveBlending });
    const m = new THREE.Mesh(geo, mat);
    m.rotation.x = -Math.PI / 2;
    m.position.set(pos.x, heightAt(pos.x, pos.z) + height, pos.z);
    this.scene.add(m);
    this.rings.push({ mesh: m, mat, t: 0, duration, radius });
  }
  swirl(pos, color = 0x9c5cff, radius = 7) {
    this.ring(pos, color, { radius, duration: 1.1, width: .35 });
  }

  arc(pos, yaw, range = 8, color = 0xff4a2a) {
    const geo = new THREE.RingGeometry(.8, 1, 32, 1, 0, Math.PI * 1.15);
    const mat = new THREE.MeshBasicMaterial({ color, transparent: true, opacity: .8, side: THREE.DoubleSide, depthWrite: false, blending: THREE.AdditiveBlending });
    const m = new THREE.Mesh(geo, mat);
    m.rotation.x = -Math.PI / 2;
    m.rotation.z = -yaw - Math.PI * .575 + Math.PI / 2;
    m.position.set(pos.x, heightAt(pos.x, pos.z) + .1, pos.z);
    m.scale.setScalar(range);
    this.scene.add(m);
    this.arcs.push({ mesh: m, mat, t: 0, duration: .45, range });
  }

  telegraph(pos, radius, duration, color, onDone) {
    const y = heightAt(pos.x, pos.z) + .07;
    const disc = new THREE.Mesh(new THREE.CircleGeometry(radius, 30), new THREE.MeshBasicMaterial({ color, transparent: true, opacity: .18, side: THREE.DoubleSide, depthWrite: false, blending: THREE.AdditiveBlending }));
    disc.rotation.x = -Math.PI / 2; disc.position.set(pos.x, y, pos.z); this.scene.add(disc);
    const ring = new THREE.Mesh(new THREE.RingGeometry(radius * .9, radius, 32), new THREE.MeshBasicMaterial({ color, transparent: true, opacity: .8, side: THREE.DoubleSide, depthWrite: false }));
    ring.rotation.x = -Math.PI / 2; ring.position.set(pos.x, y + .01, pos.z); this.scene.add(ring);
    this.telegraphs.push({ disc, ring, t: 0, duration, radius, color, onDone, pos: pos.clone() });
  }
  spikes(pos, color = 0x9c5cff, radius = 2.1) {
    const y = heightAt(pos.x, pos.z);
    for (let i = 0; i < 7; i++) {
      const a = (i / 7) * Math.PI * 2 + rand(-.3, .3);
      const r = rand(.2, radius * .7);
      const h = rand(1.4, 3.4);
      const spike = new THREE.Mesh(new THREE.ConeGeometry(rand(.14, .32), h, 5), new THREE.MeshStandardMaterial({ color: 0x3b2d3e, emissive: color, emissiveIntensity: .5, roughness: .8 }));
      spike.position.set(pos.x + Math.cos(a) * r, y + h / 2, pos.z + Math.sin(a) * r);
      spike.rotation.z = rand(-.2, .2);
      spike.scale.y = .02;
      this.scene.add(spike);
      this.spikes.push({ mesh: spike, t: 0, duration: .9, targetScale: 1 });
      this.sparks(new THREE.Vector3(spike.position.x, y + .4, spike.position.z), 3);
    }
  }
  rootRing(pos, color = 0xff7a3a) {
    const y = heightAt(pos.x, pos.z);
    for (let i = 0; i < 14; i++) {
      const a = (i / 14) * Math.PI * 2;
      const r = rand(4, 9);
      const spike = new THREE.Mesh(new THREE.ConeGeometry(.18, rand(1.2, 2.8), 4), new THREE.MeshStandardMaterial({ color: 0x3c2b20, emissive: color, emissiveIntensity: .25, roughness: 1 }));
      spike.position.set(pos.x + Math.cos(a) * r, y + .8, pos.z + Math.sin(a) * r);
      spike.rotation.z = rand(-.6, .6); spike.scale.y = .02;
      this.scene.add(spike); this.spikes.push({ mesh: spike, t: 0, duration: 1.0, targetScale: 1 });
    }
  }

  update(dt) {
    for (let i = this.particles.length - 1; i >= 0; i--) {
      const p = this.particles[i];
      p.life -= dt;
      p.v.y -= p.gravity * dt;
      p.mesh.position.addScaledVector(p.v, dt);
      p.v.multiplyScalar(1 - dt * .8);
      p.mat.opacity = Math.max(0, p.life / p.maxLife);
      p.mesh.scale.setScalar(p.size * Math.max(.2, p.life / p.maxLife));
      if (p.life <= 0) { this.scene.remove(p.mesh); p.mat.dispose(); this.particles.splice(i, 1); }
    }
    for (let i = this.rings.length - 1; i >= 0; i--) {
      const r = this.rings[i]; r.t += dt;
      const p = r.t / r.duration;
      r.mesh.scale.setScalar(1 + p * r.radius);
      r.mat.opacity = Math.max(0, .85 * (1 - p));
      if (p >= 1) { this.scene.remove(r.mesh); r.mat.dispose(); this.rings.splice(i, 1); }
    }
    for (let i = this.arcs.length - 1; i >= 0; i--) {
      const a = this.arcs[i]; a.t += dt;
      const p = a.t / a.duration;
      a.mat.opacity = Math.max(0, .75 * (1 - p));
      a.mesh.scale.setScalar(a.range * (0.6 + p * .4));
      if (p >= 1) { this.scene.remove(a.mesh); a.mat.dispose(); this.arcs.splice(i, 1); }
    }
    for (let i = this.telegraphs.length - 1; i >= 0; i--) {
      const t = this.telegraphs[i]; t.t += dt;
      const p = Math.min(1, t.t / t.duration);
      t.disc.material.opacity = .12 + p * .22;
      t.ring.scale.setScalar(.86 + Math.sin(t.t * 12) * .03);
      t.ring.material.opacity = .5 + Math.sin(t.t * 10) * .3;
      if (p >= 1) {
        t.onDone?.();
        this.scene.remove(t.disc); this.scene.remove(t.ring);
        t.disc.geometry.dispose(); t.disc.material.dispose(); t.ring.geometry.dispose(); t.ring.material.dispose();
        this.telegraphs.splice(i, 1);
      }
    }
    for (let i = this.spikes.length - 1; i >= 0; i--) {
      const s = this.spikes[i]; s.t += dt;
      const p = Math.min(1, s.t / .2);
      s.mesh.scale.y = p * s.targetScale;
      if (s.t > s.duration) {
        s.mesh.position.y -= dt * 5;
        if (s.t > s.duration + .4) { this.scene.remove(s.mesh); s.mesh.geometry.dispose(); s.mesh.material.dispose(); this.spikes.splice(i, 1); }
      }
    }
  }
}
