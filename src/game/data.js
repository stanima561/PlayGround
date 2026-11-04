// Static game data: weapons, armor, consumables, enemies, lore, endings.
export const WEAPONS = {
  pipe: {
    id: 'pipe', name: 'Metal Pipe', category: 'Mace', icon: '⌁',
    damage: 24, heavy: 42, stamina: 15, heavyStamina: 24, range: 2.55, speed: 1.0,
    poise: 22, crit: 1.5, scaling: { str: 0.55, dex: 0.15 }, type: 'strike', weight: 'Medium',
    desc: 'A length of scavenged plumbing. Heavy enough to break bone. Familiar enough to feel like home.',
    price: 0, ranged: false,
  },
  rustySword: {
    id: 'rustySword', name: 'Rusted Longsword', category: 'Straight Sword', icon: '†',
    damage: 31, heavy: 50, stamina: 16, heavyStamina: 25, range: 2.9, speed: 1.12,
    poise: 20, crit: 1.7, scaling: { str: 0.35, dex: 0.6 }, type: 'slash', weight: 'Medium',
    desc: 'A soldier\'s blade, left in the mud when its owner fled. The edge still remembers duty.',
    price: 420, ranged: false,
  },
  woodsmanAxe: {
    id: 'woodsmanAxe', name: 'Woodsman\'s Axe', category: 'Greataxe', icon: '⚒',
    damage: 68, heavy: 112, stamina: 27, heavyStamina: 39, range: 3.25, speed: 0.74,
    poise: 48, crit: 1.9, scaling: { str: 0.9, dex: 0.1 }, type: 'slash', weight: 'Heavy',
    desc: 'The axe that felled the First Grove. A tree still grows from the haft, warm to the touch.',
    price: 0, ranged: false, bleed: 18,
  },
  greatsword: {
    id: 'greatsword', name: 'Ashen Greatsword', category: 'Greatsword', icon: '✝',
    damage: 56, heavy: 92, stamina: 30, heavyStamina: 42, range: 3.45, speed: 0.7,
    poise: 44, crit: 1.6, scaling: { str: 0.85, dex: 0.2 }, type: 'slash', weight: 'Heavy',
    desc: 'Pulled from the ashes of a cathedral. The soot never washes off, and the steel never cools.',
    price: 900, ranged: false,
  },
  spear: {
    id: 'spear', name: 'Briar Spear', category: 'Spear', icon: '↟',
    damage: 26, heavy: 41, stamina: 13, heavyStamina: 22, range: 4.05, speed: 1.22,
    poise: 16, crit: 1.5, scaling: { str: 0.25, dex: 0.7 }, type: 'pierce', weight: 'Light',
    desc: 'A hunting spear wrapped in thorn-vine. It keeps the world at a polite distance.',
    price: 0, ranged: false,
  },
  dagger: {
    id: 'dagger', name: 'Glimmer Dagger', category: 'Dagger', icon: '‡',
    damage: 15, heavy: 24, stamina: 8, heavyStamina: 14, range: 2.15, speed: 1.75,
    poise: 8, crit: 2.6, scaling: { str: 0.1, dex: 0.85 }, type: 'pierce', weight: 'Light',
    desc: 'A shard of goblin-glass. It giggles when it draws blood.',
    price: 0, ranged: false,
  },
  bow: {
    id: 'bow', name: 'Weeping Shortbow', category: 'Bow', icon: '⌒',
    damage: 22, heavy: 34, stamina: 12, heavyStamina: 18, range: 32, speed: 1.0,
    poise: 10, crit: 1.2, scaling: { str: 0.15, dex: 0.75 }, type: 'pierce', weight: 'Light',
    desc: 'The string is made from something that still weeps. Arrows fly true.',
    price: 700, ranged: true,
  },
  staff: {
    id: 'staff', name: 'Seer\'s Ember Staff', category: 'Magical Staff', icon: '✦',
    damage: 18, heavy: 22, stamina: 14, heavyStamina: 20, range: 2.6, speed: 1.0,
    poise: 10, crit: 1.3, scaling: { faith: 0.9 }, type: 'magic', weight: 'Light',
    desc: 'A staff of blackened yew. It whispers the names of stars that no longer exist.',
    price: 1100, ranged: true, spell: 'emberBolt',
  },
};

export const ARMOR = {
  hoodie: {
    id: 'hoodie', name: 'Modern Hoodie', slot: 'Body', defense: 0, weight: 0, poise: 4,
    desc: '2026 cotton blend. Not remotely designed for this. Still smells faintly of rain and bus exhaust.',
    price: 0,
  },
  leather: {
    id: 'leather', name: 'Traveler\'s Jerkin', slot: 'Body', defense: 7, weight: 1, poise: 12,
    desc: 'Boiled leather softened with tallow. The stitching is in the shape of a small, protective rune.',
    price: 380,
  },
  knight: {
    id: 'knight', name: 'Rotten Knight Plate', slot: 'Body', defense: 17, weight: 3, poise: 34,
    desc: 'The plate is pitted with rot, but the steel beneath remembers every blow it ever turned aside.',
    price: 850,
  },
  veil: {
    id: 'veil', name: 'Ashen Veil', slot: 'Body', defense: 11, weight: 1, poise: 18,
    desc: 'A burial shroud woven with silver thread. It hums when the dead draw near.',
    price: 640,
  },
  mantle: {
    id: 'mantle', name: 'Heartwood Mantle', slot: 'Body', defense: 24, weight: 3, poise: 42,
    desc: 'Living bark and old leaves. The Hollow Woodsman\'s last gift. It still grows.',
    price: 0,
  },
};

export const ITEMS = {
  flask: { id: 'flask', name: 'Ashen Flask', type: 'heal', desc: 'Restores health. Refills at shrines.', icon: '⚗' },
  emberBomb: { id: 'emberBomb', name: 'Ember Bomb', type: 'throw', desc: 'A clay vessel of sleeping fire. Thrown at enemies.', icon: '◉', price: 180 },
  goldenEmber: { id: 'goldenEmber', name: 'Golden Ember', type: 'upgrade', desc: 'Permanently adds one flask charge.', icon: '✧', price: 1200 },
  sigil: { id: 'sigil', name: 'Heartwood Sigil', type: 'key', desc: 'Proof that the First Grove is free. It opens the way to the Weeping Wilds.', icon: '❖' },
  seerEye: { id: 'seerEye', name: 'Seer\'s Eye', type: 'key', desc: 'A glass eye that watches when you are not looking. Malgraven left it here for you.', icon: '◉' },
};

export const ENEMY_TYPES = {
  villager: {
    id: 'villager', name: 'Infected Villager', hp: 95, damage: 15, speed: 2.15, aggro: 15,
    attackRange: 2.3, poise: 38, motes: 30, xp: 30, armorType: 'flesh', hitRadius: 0.55,
    scale: 1.0, attackCooldown: 1.5, elite: false,
    lines: ['The soil… the soil is in my teeth…', 'You left the door open. You left it open.'],
  },
  goblin: {
    id: 'goblin', name: 'Glimmer Goblin', hp: 64, damage: 11, speed: 3.45, aggro: 17,
    attackRange: 1.95, poise: 20, motes: 24, xp: 24, armorType: 'flesh', hitRadius: 0.42,
    scale: 0.72, attackCooldown: 1.05, elite: false,
    lines: ['Shiny! Shiny teeth!', 'Glimmer glimmer, little knife!'],
  },
  hound: {
    id: 'hound', name: 'Hollow Hound', hp: 82, damage: 17, speed: 4.35, aggro: 19,
    attackRange: 2.5, poise: 28, motes: 34, xp: 34, armorType: 'flesh', hitRadius: 0.55,
    scale: 1.0, attackCooldown: 1.15, elite: false, quadruped: true,
    lines: ['…', 'A wet, hollow bark.'],
  },
  knight: {
    id: 'knight', name: 'Rotten Knight', hp: 245, damage: 27, speed: 1.55, aggro: 16,
    attackRange: 3.0, poise: 95, motes: 85, xp: 90, armorType: 'metal', hitRadius: 0.72,
    scale: 1.12, attackCooldown: 2.0, elite: false, shield: true,
    lines: ['For the crown. For the hollow crown.', 'Kneel. Kneel and be forgiven.'],
  },
  archer: {
    id: 'archer', name: 'Hollow Archer', hp: 75, damage: 13, speed: 2.05, aggro: 22,
    attackRange: 17, poise: 22, motes: 48, xp: 48, armorType: 'flesh', hitRadius: 0.48,
    scale: 0.98, attackCooldown: 2.4, elite: false, ranged: true,
    lines: ['The wind is wrong today.', 'I see you through the trees.'],
  },
  briarWarden: {
    id: 'briarWarden', name: 'The Briar Warden', hp: 560, damage: 34, speed: 1.75, aggro: 15,
    attackRange: 3.5, poise: 150, motes: 420, xp: 400, armorType: 'bark', hitRadius: 0.85,
    scale: 1.45, attackCooldown: 1.8, elite: true, bossBar: true,
    lines: ['The grove is not yours to take.', 'Root and bone. Root and bone.'],
  },
};

export const LORE = [
  {
    id: 'lore1', title: 'A Letter, Never Sent', found: false,
    text: '“Dear Elowen — the fields are gold again, but the birds have stopped singing. The king\'s men came at dusk and took the seed store. They said it was for the seals. What seals? The children are hungry. I am not afraid of the dark anymore. I am afraid of the light going out.” — Tomas, of Hollowmere',
    summary: 'A farmer\'s unsent letter. The kingdom was already starving before the corruption.',
  },
  {
    id: 'lore2', title: 'The Seven Seals', found: false,
    text: '“Seven kings stood at the edge of the world and bound the Devourer Below with seven crowns. Each crown was a kingdom. Each kingdom was a promise. When the last promise is broken, the mouth opens. We have broken six.” — fragment of a stained-glass inscription, Ashenveil Cathedral',
    summary: 'The demon was bound by seven crowns. Six are already broken.',
  },
  {
    id: 'lore3', title: 'Malgraven\'s Journal', found: false,
    text: '“The summoning works. A soul from beyond the veil — untouched by the curse, unclaimed by the Devourer. I will call it a hero. I will give it a sword. It will walk where I cannot. When the moment comes, its untainted soul will be the final key. I am sorry. I have always been sorry. That has never stopped me.” — Malgraven, the Last Seer',
    summary: 'Malgraven summoned you deliberately. Your soul is the final key to his ritual.',
  },
  {
    id: 'lore4', title: 'The Woodsman\'s Vow', found: false,
    text: '“I was the first to kneel. I cut the First Grove to build the first crown. The tree that grows through me now is the forest\'s answer. It is not punishment. It is memory. When I fall, let the roots take the road south. Let the green things have their revenge.” — carved into the Hollow Woodsman\'s heartwood',
    summary: 'The Woodsman helped build the crown. The tree in his chest is the forest\'s revenge.',
  },
  {
    id: 'lore5', title: 'A Modern Relic', found: false,
    text: '“His phone survived the crossing. The screen is cracked, but for one moment it lit up: 03:17, 14 NOV 2026, NO SIGNAL. He stared at it for a long time. Then he put it in his pocket, and went to find a weapon. Some people need a reason. Some people only need a direction.” — recovered field note, author unknown',
    summary: 'Your phone still works, barely. The date has not changed since you arrived.',
  },
  {
    id: 'lore6', title: 'The Hollow Crown', found: false,
    text: '“The crown was never gold. It was a ring of seven teeth, pulled from the Devourer\'s first mouth. Whoever wears it rules what remains. Whoever breaks it lets the thing below decide. There is a third way, but no king has ever been brave enough to walk it.” — the Last Page of the Seer\'s Codex',
    summary: 'A third path exists — beyond the crown and beyond the demon.',
  },
];

export const ENDINGS = {
  dawn: {
    id: 'dawn', kicker: 'ENDING A', title: 'A NEW DAWN',
    text: 'You drive the last ember of the Devourer into the earth. The seven crowns shatter like glass, and the sky — the real sky, the one you remember — tears open above Eldoria. The corruption drains from the fields in long black rivers. The villagers do not remember you. The children will grow up believing the hollow tree was only a story. You step through the portal and the rain of 2026 hits your face. Somewhere behind you, a kingdom begins, very slowly, to breathe.',
    flavor: 'You saved a world that will never know your name. That is enough.',
  },
  crown: {
    id: 'crown', kicker: 'ENDING B', title: 'THE HOLLOW CROWN',
    text: 'You take the Devourer\'s power into your chest. It does not hurt. That is the terrible part. The corrupted kneel. The knights rise. The trees bow their heavy heads. You sit upon a throne of roots and teeth, and for a hundred years you are a good king — just, quiet, beloved. Then the first villager disappears. Then the second. You tell yourself it is necessary. The crown is very heavy. It has begun to grow into your skull.',
    flavor: 'You became the thing you were summoned to destroy. Eldoria calls it peace.',
  },
  veil: {
    id: 'veil', kicker: 'ENDING C', title: 'BEYOND THE VEIL',
    text: 'You find the truth hidden in Malgraven\'s last journal: the Devourer is not a demon. It is a wound in the world, and the crowns are stitches. You refuse the wizard\'s ritual. You refuse the demon\'s offer. Instead you cut the last thread — and step sideways, through a door that was never meant to open. Behind you, Eldoria folds into a single bright point. Ahead: a country with no name, no kings, and no hunger. You do not know if it is a home. You walk anyway.',
    flavor: 'You rejected both endings offered to you. The unknown is not a curse. It is a door.',
  },
};

export const CONTROLS = [
  ['Move', 'W A S D / Left Stick'],
  ['Look / Camera', 'Mouse / Right Stick'],
  ['Sprint', 'Shift / Hold B'],
  ['Dodge Roll', 'Space / B'],
  ['Jump', 'F / L3'],
  ['Light Attack', 'Left Click / RB'],
  ['Heavy Attack', 'Right Click / RT'],
  ['Block / Parry', 'Q / LB'],
  ['Lock On', 'Tab / Y'],
  ['Interact / Confirm', 'E / A'],
  ['Heal (Flask)', 'R / X'],
  ['Cast Spell', 'V / D-Pad Up'],
  ['Critical / Riposte', 'C / R3'],
  ['Swap Weapon', 'X / Z / D-Pad Left-Right'],
  ['Inventory', 'I / View'],
  ['Map', 'M / D-Pad Down'],
  ['Pause', 'Esc / Start'],
  ['Menus', 'D-Pad or L-Stick · A select · B back'],
];

export const REGION_INFO = {
  name: 'THE FORGOTTEN SHIRE',
  sub: 'Eldoria · Region I',
  objective: 'Find the First Shrine beneath the hollow tree.',
};
