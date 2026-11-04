const KEY = 'hollow_crown_save_v1';
const SETTINGS_KEY = 'hollow_crown_settings_v1';

export function defaultState() {
  return {
    version: 1,
    createdAt: Date.now(),
    playtime: 0,
    player: {
      level: 7,
      vigor: 10, endurance: 10, strength: 10, dexterity: 10, faith: 8,
      motes: 0,
      pos: { x: 7, z: 92 },
      yaw: Math.PI,
      hpRatio: 1,
      flaskUses: 3,
      maxFlask: 3,
      weapons: ['pipe'],
      armor: ['hoodie'],
      equippedWeapon: 'pipe',
      equippedArmor: 'hoodie',
      items: { emberBomb: 1 },
      spellUnlocked: false,
      maxHpBonus: 0,
    },
    openedChests: [],
    collectedMotes: [],
    xp: 0,
    flags: {
      introSeen: false,
      bossDefeated: false,
      eliteDefeated: false,
      gateOpened: false,
      merchantMet: false,
      wispMet: false,
      firstShrine: false,
      foundSword: false,
      foundGreatsword: false,
      seerEchoSeen: false,
      blessingUsed: false,
    },
    lore: [],
    quests: { mainStage: 0, merchantQuest: 0, wispQuest: 0 },
    lastShrine: 'tree',
    deaths: 0,
    ending: null,
    seenEndings: [],
    discovered: ['shire'],
  };
}

export function hasSave() {
  try { return !!localStorage.getItem(KEY); } catch { return false; }
}

export function loadState() {
  try {
    const raw = localStorage.getItem(KEY);
    if (!raw) return null;
    const data = JSON.parse(raw);
    if (!data || data.version !== 1) return null;
    const base = defaultState();
    return { ...base, ...data, player: { ...base.player, ...data.player, items: { ...base.player.items, ...(data.player?.items || {}) } }, flags: { ...base.flags, ...data.flags }, quests: { ...base.quests, ...data.quests } };
  } catch { return null; }
}

export function saveState(state) {
  try {
    localStorage.setItem(KEY, JSON.stringify(state));
    return true;
  } catch { return false; }
}

export function clearSave() {
  try { localStorage.removeItem(KEY); } catch {}
}

export function loadSettings() {
  try { return JSON.parse(localStorage.getItem(SETTINGS_KEY)) || { muted: false, sensitivity: 1, quality: 'high' }; } catch { return { muted: false, sensitivity: 1, quality: 'high' }; }
}
export function saveSettings(s) {
  try { localStorage.setItem(SETTINGS_KEY, JSON.stringify(s)); } catch {}
}

export function saveSummary() {
  const s = loadState();
  if (!s) return null;
  return { level: s.player.level, motes: s.player.motes, deaths: s.deaths, playtime: s.playtime, boss: s.flags.bossDefeated, ending: s.ending };
}
