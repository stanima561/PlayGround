import * as THREE from 'three';
import { material, emissive, makeGlowSprite, rand, chance } from '../core/utils.js';
import { heightAt } from '../world/terrain.js';

export class NPC {
  constructor(game, id, name, x, z, yaw) {
    this.game = game;
    this.id = id;
    this.name = name;
    this.x = x; this.z = z; this.y = heightAt(x, z);
    this.yaw = yaw;
    this.radius = 2.8;
    this.scene = game.scene;
    this.bob = rand(0, 6);
    this.buildModel();
    this.root.position.set(x, this.y, z);
    this.root.rotation.y = yaw;
    game.scene.add(this.root);
  }

  buildModel() {
    this.root = new THREE.Group();
    const mk = (c, o = {}) => material(c, o);
    if (this.id === 'marrow') {
      const cloak = mk(0x40382e, { roughness: 1 });
      const scarf = mk(0x6b3a2e);
      const skin = mk(0x9c8164);
      const dark = mk(0x25231f);
      const wood = mk(0x4c3923);
      const brass = mk(0x9b7b3c, { metalness: .6, roughness: .4 });
      const body = new THREE.Mesh(new THREE.CylinderGeometry(.32, .46, 1.15, 7), cloak); body.position.y = .58; this.root.add(body);
      const shoulders = new THREE.Mesh(new THREE.SphereGeometry(.34, 8, 7), cloak); shoulders.position.y = 1.12; shoulders.scale.set(1.25, .55, .9); this.root.add(shoulders);
      const neck = new THREE.Mesh(new THREE.CylinderGeometry(.07, .09, .12, 5), skin); neck.position.y = 1.24; this.root.add(neck);
      const head = new THREE.Mesh(new THREE.SphereGeometry(.2, 9, 8), skin); head.position.y = 1.43; this.root.add(head);
      const nose = new THREE.Mesh(new THREE.ConeGeometry(.045, .13, 4), skin); nose.position.set(0, 1.41, .18); nose.rotation.x = Math.PI / 2; this.root.add(nose);
      for (const ex of [-.07, .07]) { const e = new THREE.Mesh(new THREE.SphereGeometry(.018, 5), dark); e.position.set(ex, 1.47, .18); this.root.add(e); }
      const brim = new THREE.Mesh(new THREE.CylinderGeometry(.42, .45, .045, 9), wood); brim.position.y = 1.57; brim.rotation.z = .08; this.root.add(brim);
      const cap = new THREE.Mesh(new THREE.CylinderGeometry(.17, .2, .28, 8), wood); cap.position.set(.02, 1.72, 0); cap.rotation.z = .08; this.root.add(cap);
      const beard = new THREE.Mesh(new THREE.ConeGeometry(.13, .35, 5), mk(0x7a6c56)); beard.position.set(0, 1.28, .12); beard.rotation.x = Math.PI; this.root.add(beard);
      const scarfM = new THREE.Mesh(new THREE.TorusGeometry(.19, .06, 5, 10), scarf); scarfM.position.y = 1.26; scarfM.rotation.x = Math.PI / 2; this.root.add(scarfM);
      // arms
      for (const sx of [-1, 1]) {
        const arm = new THREE.Mesh(new THREE.CylinderGeometry(.06, .05, .55, 5), cloak);
        arm.position.set(sx * .32, .85, .05); arm.rotation.z = sx * .25; this.root.add(arm);
      }
      // lantern
      const lg = new THREE.Group(); lg.position.set(.54, .55, .12); this.root.add(lg);
      const handle = new THREE.Mesh(new THREE.TorusGeometry(.11, .012, 4, 8), brass); handle.position.y = .2; lg.add(handle);
      const cage = new THREE.Mesh(new THREE.CylinderGeometry(.14, .14, .25, 6), brass); cage.position.y = .02; lg.add(cage);
      const light = makeGlowSprite(0xffb154, 1.8); light.position.y = .02; lg.add(light); this.lantern = light;
      const lpoint = new THREE.PointLight(0xffa94f, 1.2, 7, 2); lpoint.position.y = .02; lg.add(lpoint);
      // staff
      const staff = new THREE.Mesh(new THREE.CylinderGeometry(.025, .035, 1.8, 5), wood); staff.position.set(-.52, .8, .12); staff.rotation.z = -.08; this.root.add(staff);
      const orb = new THREE.Mesh(new THREE.SphereGeometry(.1, 7), emissive(0xffcf7a, 1.8)); orb.position.set(-.6, 1.68, .12); this.root.add(orb);
    } else if (this.id === 'wisp') {
      const cloak = mk(0x2d3f42, { roughness: 1, transparent: true, opacity: .75, side: THREE.DoubleSide });
      const body = new THREE.Mesh(new THREE.ConeGeometry(.38, 1.2, 7, 1, true), cloak); body.position.y = .65; this.root.add(body);
      const hood = new THREE.Mesh(new THREE.SphereGeometry(.26, 8, 7, 0, Math.PI * 2, 0, Math.PI * .6), cloak); hood.position.y = 1.24; this.root.add(hood);
      const core = new THREE.Mesh(new THREE.SphereGeometry(.13, 8, 7), emissive(0xa6ffec, 2.4)); core.position.y = 1.12; this.root.add(core); this.core = core;
      const glow = makeGlowSprite(0x89ffe0, 3.4); glow.position.y = 1.1; this.root.add(glow); this.glow = glow;
      const l = new THREE.PointLight(0x72ffd6, 1.2, 9, 2); l.position.y = 1.1; this.root.add(l);
      const tatters = [];
      for (let i = 0; i < 5; i++) { const t = new THREE.Mesh(new THREE.ConeGeometry(.08, rand(.4, .8), 4), cloak); t.position.set(rand(-.3, .3), rand(.25, .6), rand(-.2, .2)); t.rotation.z = rand(-.4, .4); this.root.add(t); tatters.push(t); }
      this.tatters = tatters;
      this.light = l;
    } else if (this.id === 'echo') {
      const cloak = mk(0x3a2550, { roughness: .7, transparent: true, opacity: .7, side: THREE.DoubleSide });
      const body = new THREE.Mesh(new THREE.ConeGeometry(.55, 2.2, 8, 1, true), cloak); body.position.y = 1.1; this.root.add(body);
      const hood = new THREE.Mesh(new THREE.SphereGeometry(.4, 9, 8, 0, Math.PI * 2, 0, Math.PI * .62), cloak); hood.position.y = 2.2; this.root.add(hood);
      for (const ex of [-.12, .12]) { const e = new THREE.Mesh(new THREE.SphereGeometry(.045, 6), emissive(0xc58aff, 2.5)); e.position.set(ex, 2.18, .3); this.root.add(e); }
      const staff = new THREE.Mesh(new THREE.CylinderGeometry(.035, .05, 2.6, 6), mk(0x271d30)); staff.position.set(.55, 1.3, .1); this.root.add(staff);
      const orb = new THREE.Mesh(new THREE.OctahedronGeometry(.2), emissive(0xbf8aff, 2.2)); orb.position.set(.55, 2.7, .1); this.root.add(orb); this.orb = orb;
      const glow = makeGlowSprite(0x9f6aff, 7); glow.position.y = 1.6; this.root.add(glow); this.glow = glow;
      const l = new THREE.PointLight(0x9d68ff, 1.6, 14, 2); l.position.y = 1.8; this.root.add(l);
    }
  }

  update(dt, t) {
    this.bob += dt;
    if (this.id === 'wisp' || this.id === 'echo') {
      this.root.position.y = this.y + .25 + Math.sin(t * .9 + (this.id === 'wisp' ? 0 : 2)) * .15;
      if (this.core) this.core.rotation.y += dt * 1.4;
      if (this.orb) { this.orb.rotation.y += dt * 1.6; this.orb.position.y = 2.7 + Math.sin(t * 1.3) * .1; }
      if (this.glow) this.glow.material.opacity = .6 + Math.sin(t * 1.6) * .2;
      if (this.tatters) this.tatters.forEach((tt, i) => { tt.rotation.z = Math.sin(t * 1.2 + i) * .3; });
    } else {
      this.root.position.y = this.y;
      if (this.lantern) this.lantern.material.opacity = .7 + Math.sin(t * 3.4) * .15;
      this.headBob = Math.sin(t * .8) * .01;
    }
    if (this.id === 'marrow') {
      // face the player when close, otherwise idle
      const p = this.game.player;
      if (p && p.pos.distanceTo(this.root.position) < 6) {
        const yaw = Math.atan2(p.pos.x - this.x, p.pos.z - this.z);
        this.root.rotation.y += (yaw - this.root.rotation.y) * Math.min(1, dt * 2.5);
      }
    }
  }

  dialogue() {
    const g = this.game;
    const s = g.state;
    if (this.id === 'marrow') {
      if (!s.flags.merchantMet) {
        return {
          nodes: {
            start: {
              text: 'You came out of the hill with a metal stick and a dead phone. I have seen a great many things in this shire, stranger, but never a man dressed like a folded bedsheet. Sit. Sit, before the woods notice you.',
              options: [
                { label: 'Where am I?', next: 'where' },
                { label: 'What happened to these people?', next: 'corruption' },
                { label: 'I need supplies.', action: 'shop' },
                { label: 'Not now.', action: 'close' },
              ],
            },
            where: {
              text: 'Eldoria. The Forgotten Shire, if you want the local name. It was a fairytale once. Probably still is, from a distance. The woodsman at the north end has a tree where his heart should be, and the tree is the least frightening thing in this valley.',
              options: [{ label: 'Who is the woodsman?', next: 'woodsman' }, { label: 'I need supplies.', action: 'shop' }, { label: 'I have to go.', action: 'close' }],
            },
            woodsman: {
              text: 'The Hollow Woodsman. He kept the First Grove before the rot came. Now he keeps the gate to the Weeping Wilds, and he does not distinguish between travelers and saplings. If you mean to leave this valley, you will have to put him down. I am sorry. He was kind, once.',
              options: [{ label: 'How do I kill him?', next: 'advice' }, { label: 'I need supplies.', action: 'shop' }, { label: 'I have to go.', action: 'close' }],
            },
            advice: {
              text: 'He is slow. Be patient. When the tree in his chest blazes orange, he is about to call the roots — that is when you should be somewhere else. And when you stagger him, strike the heartwood. That is the only honest part of him left.',
              options: [{ label: 'I need supplies.', action: 'shop' }, { label: 'Thank you.', action: 'close' }],
            },
            corruption: {
              text: 'The soil went sour seven winters ago. Then the knights came to collect the seed. Then the children stopped singing. It is not a plague, stranger. It is a hunger. It starts in the roots and ends in the teeth. Some of my neighbors still remember their names. Most do not.',
              options: [{ label: 'Is there a cure?', next: 'cure' }, { label: 'I need supplies.', action: 'shop' }, { label: 'I have to go.', action: 'close' }],
            },
            cure: {
              text: 'The old stories say seven crowns hold something under the kingdom. A mouth. A hunger with a name nobody says aloud. If the crowns fail, there is no cure — only a witness. Perhaps that is what you are. A witness with a metal stick.',
              options: [{ label: 'I need supplies.', action: 'shop' }, { label: 'I will find the woodsman.', action: 'close' }],
            },
          },
          startNode: 'start',
          onOpen: () => { s.flags.merchantMet = true; },
        };
      }
      if (s.quests.merchantQuest === 0) {
        return {
          nodes: {
            start: {
              text: 'Still breathing. Good. The woods have been quieter since you went up the road, and I do not trust quiet. Listen — I have a favor. My sister lived by the old graveyard west of the village. She wore a little silver locket, shaped like a bird. If you find it, bring it back. I will make it worth your while.',
              options: [
                { label: 'I will look for the locket.', action: 'quest_accept' },
                { label: 'Show me your wares.', action: 'shop' },
                { label: 'Not now.', action: 'close' },
              ],
            },
          },
          startNode: 'start',
        };
      }
      if (s.quests.merchantQuest === 1) {
        return {
          nodes: {
            start: {
              text: 'The locket was by the graves, near the leaning stone. Silver bird. My sister\'s name was Wren. She would have liked you, I think. You have the same look — like you are not sure whether you are lost or exactly where you are meant to be.',
              options: [
                { label: 'I found the locket.', action: 'quest_complete', condition: () => g.hasLocket },
                { label: 'Still looking.', action: 'close' },
                { label: 'Show me your wares.', action: 'shop' },
              ],
            },
          },
          startNode: 'start',
        };
      }
      if (s.flags.bossDefeated) {
        return {
          nodes: {
            start: {
              text: 'The grove is quiet. I walked up to the gate this morning, and the fog was gone. You did that. I do not know what you are, stranger, but the shire owes you a debt it can never pay. Take the road north. The Weeping Wilds are waiting, and they are worse.',
              options: [{ label: 'Show me your wares.', action: 'shop' }, { label: 'What waits in the Wilds?', next: 'wilds' }, { label: 'Goodbye, Marrow.', action: 'close' }],
            },
            wilds: {
              text: 'Mushrooms the size of houses. Spiders that weave their webs out of dreams. A queen in the roots who loves her children very much. Keep your blade close and your torch closer. And stranger — if you find a woman made of mycelium, do not let her touch your face.',
              options: [{ label: 'Show me your wares.', action: 'shop' }, { label: 'I will be careful.', action: 'close' }],
            },
          },
          startNode: 'start',
        };
      }
      return {
        nodes: {
          start: {
            text: 'The road north is still closed. The woodsman waits in the old grove. If you are going to face him, spend your motes first — the dead do not need shopping money.',
            options: [{ label: 'Show me your wares.', action: 'shop' }, { label: 'Tell me about the locket.', action: 'locket_hint' }, { label: 'I will return.', action: 'close' }],
          },
          locket_hint: {
            text: 'West of the village. Past the well, past the flowers, into the leaning stones. Look for a bird made of silver. My sister would have wanted it found by someone who still remembers how to be gentle.',
            options: [{ label: 'I will find it.', action: 'close' }, { label: 'Show me your wares.', action: 'shop' }],
          },
        },
        startNode: 'start',
      };
    }

    if (this.id === 'wisp') {
      const loreCount = s.lore.length;
      if (s.flags.bossDefeated && loreCount >= 3) {
        return {
          nodes: {
            start: {
              text: 'You found the pages. The ones the wizard tried to burn. Then you already know what waits at the end of the road — and what he means to do with you. There is a third door, hollow one. It is not on any map. When the time comes, look for the seam in the world.',
              options: [{ label: 'Who are you?', next: 'who' }, { label: 'I understand.', action: 'close' }],
            },
            who: {
              text: 'I was the first thing Malgraven summoned. He was younger then, and kinder, and he still believed he could save everyone. I am what is left of that belief. Go north. The Weeping Wilds will try to eat your name. Do not let them.',
              options: [{ label: 'I will remember.', action: 'close' }],
            },
          },
          startNode: 'start',
        };
      }
      return {
        nodes: {
          start: {
            text: 'A little flame in a dead wood. You are colder than the others. Cleaner. The wizard\'s summoning left no rot on you — that is why the trees are afraid. Find the scattered pages, hollow one. Three truths will open the third door.',
            options: [
              { label: 'Who is Malgraven?', next: 'malgraven' },
              { label: 'What is the Devourer?', next: 'devourer' },
              { label: 'I have pages to find.', action: 'close' },
            ],
          },
          malgraven: {
            text: 'The Last Seer of Eldoria. He pulled you across the veil because your soul is untouched by the curse. He will call it salvation. It is a ritual, and you are the final ingredient. Do not trust the voice that sounds like help.',
            options: [{ label: 'What is the Devourer?', next: 'devourer' }, { label: 'I will be careful.', action: 'close' }],
          },
          devourer: {
            text: 'The thing beneath the seven crowns. Not a demon — a wound. The kings stitched it shut with their kingdoms, and the stitches are failing one by one. Malgraven thinks he can use you to cut it out. The demon thinks it can use you to open wider. Both of them are wrong about what you are.',
            options: [{ label: 'What am I?', next: 'whatami' }, { label: 'I have pages to find.', action: 'close' }],
          },
          whatami: {
            text: 'A person from a place with no magic, standing in a fairytale with a piece of pipe. That is the most dangerous thing in Eldoria. Now go and find the pages before the forest forgets how to whisper.',
            options: [{ label: 'I will find them.', action: 'close' }],
          },
        },
        startNode: 'start',
      };
    }

    if (this.id === 'echo') {
      return {
        nodes: {
          start: {
            text: 'You killed the woodsman. Good. The gate will open now, and the Weeping Wilds will sing to you with a thousand wet mouths. But before you go — look. I left a thread of fate in the grove. Touch it, and see the three endings that wait at the bottom of the world. Consider it a courtesy. I am not often courteous.',
            options: [
              { label: 'Show me the threads of fate.', action: 'endings' },
              { label: 'Why did you bring me here?', next: 'why' },
              { label: 'I am not ready.', action: 'close' },
            ],
          },
          why: {
            text: 'Because you are unbroken. Because every soul in this kingdom is already food, and you are still a knife. Because I am old, and frightened, and I have run out of better ideas. That is the truth, hero. I hope you can forgive me. I doubt it.',
            options: [{ label: 'Show me the threads of fate.', action: 'endings' }, { label: 'I will never forgive you.', action: 'close' }],
          },
        },
        startNode: 'start',
      };
    }
    return null;
  }
}
