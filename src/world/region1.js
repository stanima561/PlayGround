import * as THREE from 'three';
import { heightAt, buildTerrain, distToPath, ARENA, PATH } from './terrain.js';
import {
  createSky, createLighting, createTrees, createMushrooms, createGroundCover, createRocks,
  createVillage, createHollowTree, createShrine, createBossArena, createPathDressing,
  createLoreObject, createChest, createMotePickup, createFogGate, createFireflies, createDriftingPetals,
  createLoreObject as loreObj,
} from './scenery.js';
import { rand } from '../core/utils.js';

export function buildRegion(scene) {
  const colliders = [];
  const interactables = [];
  const loreSpots = [];

  buildTerrain(scene);
  const sky = createSky(scene);
  const lights = createLighting(scene);
  createTrees(scene);
  const mushrooms = createMushrooms(scene);
  createGroundCover(scene);
  createRocks(scene, colliders);
  const village = createVillage(scene, colliders, loreSpots);
  createHollowTree(scene, colliders);

  // Shrines
  const shrines = [
    createShrine(scene, 'tree', 'Hollow Tree Shrine', 3.5, 81),
    createShrine(scene, 'village', 'Hollowmere Shrine', -12, 46),
    createShrine(scene, 'grove', 'First Grove Shrine', 9, -61),
  ];
  for (const s of shrines) colliders.push({ x: s.x, z: s.z, r: 2.9, type: 'shrine' });

  const arena = createBossArena(scene, colliders);
  const path = createPathDressing(scene);
  const fireflies = createFireflies(scene);
  const petals = createDriftingPetals(scene);

  // ---------------- interactables ----------------
  const shrinesI = shrines.map(s => ({ ...s, kind: 'shrine' }));
  interactables.push(...shrinesI);

  const lorePositions = [
    ['lore1', 18, 61], ['lore2', -28, 27], ['lore3', -48, 3],
    ['lore4', 7, -65], ['lore5', 13, 87], ['lore6', 50, -45],
  ];
  for (const [id, x, z] of lorePositions) {
    const o = createLoreObject(scene, x, z, id);
    interactables.push(o);
  }

  const chests = [
    createChest(scene, 'chest_sword', 30, 44.5),
    createChest(scene, 'chest_armor', -31, 30),
    createChest(scene, 'chest_greatsword', -59, 20),
    createChest(scene, 'chest_staff', 45, -47),
  ];
  interactables.push(...chests);

  const motes = [
    createMotePickup(scene, 14, 66, 90),
    createMotePickup(scene, -20, 32, 110),
    createMotePickup(scene, 24, 20, 120),
    createMotePickup(scene, -24, -26, 140),
    createMotePickup(scene, 16, -46, 130),
    createMotePickup(scene, -42, -18, 160),
    createMotePickup(scene, 36, 8, 100),
    createMotePickup(scene, -54, 40, 150),
  ];
  interactables.push(...motes);

  // Locket quest item (hidden near graveyard; only visible when quest active)
  const locket = createMotePickup(scene, -34, 24, 0);
  locket.kind = 'locket'; locket.taken = false; locket.group.visible = false;
  const locketSprite = locket.group.children[0];
  if (locketSprite) locketSprite.material.color.set(0x9be8ff);
  interactables.push(locket);

  // Seer echo (hidden until boss is dead)
  const echo = createMotePickup(scene, 0, -99, 0);
  echo.kind = 'echo'; echo.taken = false; echo.group.visible = false;
  echo.group.children.forEach(c => {
    if (c.material?.color) c.material.color.set(0xb58bff);
  });
  interactables.push(echo);

  // fog gate trigger at the arena entrance
  const gate = createFogGate(scene, 0, -72.5);
  gate.group.visible = false;

  // ---------------- npc spots ----------------
  const npcSpots = [
    { id: 'marrow', name: 'Marrow, the Ragpicker', x: 16, z: 49, yaw: -.6 },
    { id: 'wisp', name: 'The Wisp', x: -25, z: 14, yaw: .8 },
  ];

  // ---------------- enemies ----------------
  const spawns = [
    { type: 'villager', x: 9, z: 64, patrol: 7 },
    { type: 'villager', x: 15, z: 53, patrol: 6 },
    { type: 'villager', x: -7, z: 43, patrol: 7 },
    { type: 'villager', x: 26, z: 50, patrol: 5 },
    { type: 'villager', x: 6, z: 34, patrol: 7 },
    { type: 'villager', x: 22, z: 65, patrol: 6 },
    { type: 'goblin', x: -18, z: 31, patrol: 9 },
    { type: 'goblin', x: -31, z: 37, patrol: 8 },
    { type: 'goblin', x: -25, z: 16, patrol: 10 },
    { type: 'goblin', x: -8, z: 22, patrol: 8 },
    { type: 'hound', x: 12, z: 20, patrol: 9 },
    { type: 'hound', x: -15, z: -3, patrol: 10 },
    { type: 'hound', x: 18, z: 35, patrol: 8 },
    { type: 'knight', x: 2, z: -38, patrol: 5 },
    { type: 'knight', x: -5, z: -20, patrol: 4 },
    { type: 'knight', x: 29, z: 53, patrol: 5 },
    { type: 'archer', x: 13, z: 70, patrol: 4 },
    { type: 'archer', x: -27, z: -15, patrol: 5 },
    { type: 'briarWarden', x: -48, z: 5, patrol: 7, elite: true },
  ];

  const bossSpawn = { x: 0, z: -109 };

  const world = {
    colliders, interactables, shrines: shrinesI, chests, motes, locket, echo, gate, npcSpots, spawns, bossSpawn,
    arena, colliderVersion: 1,
  };

  const tmp = new THREE.Color();
  function update(t, dt) {
    sky.update(t);
    fireflies.update(t);
    petals.update(t);
    for (const s of shrines) {
      s.flame.position.y = 2.0 + Math.sin(t * 2.2 + s.phase) * .1;
      s.flame.scale.setScalar(3.2 + Math.sin(t * 4 + s.phase) * .25);
      s.light.intensity = 2.0 + Math.sin(t * 3.1 + s.phase) * .35;
      s.group.children.forEach(c => { if (c.material?.emissiveIntensity && c.geometry?.type === 'SphereGeometry') c.material.emissiveIntensity = 1.4 + Math.sin(t * 4 + s.phase) * .7; });
    }
    for (const ch of chests) if (!ch.opened) ch.glow.material.opacity = .75 + Math.sin(t * 2 + ch.x) * .2;
    for (const l of lorePositions) { /* glow handled by interactable refs */ }
    for (const it of interactables) {
      if (it.kind === 'lore' && !it.taken) { it.glow.scale.setScalar(1.8 + Math.sin(t * 2 + it.x) * .15); it.group.rotation.y = Math.sin(t * .5 + it.z) * .08; }
      if (it.kind === 'mote' && !it.taken) { it.core.rotation.y += dt * 1.6; it.core.position.y = .7 + Math.sin(t * 2 + it.x) * .1; it.group.children[0].position.y = it.core.position.y; }
      if (it.kind === 'echo') { it.group.rotation.y += dt * .5; it.group.children.forEach(c => { if (c.material) c.material.opacity = .7 + Math.sin(t * 2) * .2; }); }
      if (it.kind === 'locket') { it.group.rotation.y += dt * 1.2; }
    }
    // smoke drift
    village.smoke.forEach((sp, i) => {
      sp.position.y += dt * .12;
      sp.material.opacity = .22 + Math.sin(t * .7 + i) * .06;
      if (sp.position.y > heightAt(sp.position.x, sp.position.z) + 11) sp.position.y = heightAt(sp.position.x, sp.position.z) + 6.5;
    });
    // gate shimmer
    gate.disc.material.opacity = .22 + Math.sin(t * 1.4) * .08;
    gate.ring.rotation.z += dt * .25;
    arena.gate.material.opacity = .5 + Math.sin(t * .9) * .12;
    arena.ring.rotation.z += dt * .03;
    arena.ring2.rotation.z -= dt * .02;
    arena.flames.forEach((f, i) => { f.scale.setScalar(4.2 + Math.sin(t * 5 + i) * .35); });
    mushrooms.points.material.opacity = .55 + Math.sin(t * 1.4) * .2;
    path.lanterns.forEach((l, i) => { /* static glow */ });
  }

  world.update = update;
  return world;
}
