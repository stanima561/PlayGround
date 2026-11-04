import * as THREE from 'three';
import { ENDINGS, CONTROLS, LORE, WEAPONS, ARMOR, ITEMS, REGION_INFO } from '../game/data.js';
import { PATH, ARENA } from '../world/terrain.js';
import { formatTime } from '../core/utils.js';

const _v = new THREE.Vector3();

export class UI {
  constructor(game) {
    this.game = game;
    this.el = {};
    const ids = [
      'hud', 'hp-fill', 'hp-lag', 'st-fill', 'fp-fill', 'flask-count', 'flask-icon', 'buff-icons', 'motes-count', 'objective-text',
      'weapon-name', 'armor-name', 'lock-reticle', 'enemy-bars', 'interact-prompt', 'interact-text', 'interact-key',
      'boss-bar', 'boss-name', 'boss-sub', 'boss-fill', 'boss-lag', 'boss-phase', 'subtitle', 'toasts',
      'damage-flash', 'hint', 'contextual', 'cinematic', 'cinematic-title', 'cinematic-lines',
      'title-screen', 'btn-new', 'btn-continue', 'btn-controls', 'btn-credits', 'title-saveinfo',
      'loading', 'load-fill', 'load-status', 'menu-overlay', 'menu-title', 'menu-body', 'menu-footer', 'menu-close',
      'dialogue', 'dialogue-name', 'dialogue-text', 'dialogue-options', 'dialogue-portrait', 'dialogue-hint',
      'death-screen', 'death-line', 'death-motes', 'btn-respawn', 'victory-banner', 'victory-title', 'victory-sub',
      'ending-screen', 'ending-kicker', 'ending-title', 'ending-text', 'ending-flavor', 'btn-ending-continue',
      'controls-screen', 'controls-grid', 'controls-close', 'fade', 'lowhp', 'region-name', 'region-sub',
      'gamepad-hint',
    ];
    for (const id of ids) this.el[id] = document.getElementById(id);
    this.toastQueue = [];
    this.dialogueState = null;
    this.currentMenu = null;
    this.subtitleTimer = 0;
    this.floatPool = [];
    this.bossRef = null;
    this.eliteRef = null;
    this.deathShown = false;
    this._lastEnemyBars = new Map();
    this.gpFocusEls = [];
    this.gpFocusIndex = 0;
    this.gpContextKey = '';
    this.gpContextSig = '';
    this.gpNavDir = 0;
    this.gpRepeatTimer = 0;
    this.gpConfirmLocked = false;
    this.lastDevice = 'keyboard';
    this.bind();
    this.buildControls();
  }

  bind() {
    this.el['btn-new'].addEventListener('click', () => { this.game.audio.init(); this.game.audio.ui(); this.game.startNewGame(); });
    this.el['btn-continue'].addEventListener('click', () => { this.game.audio.init(); this.game.audio.ui(); this.game.continueGame(); });
    this.el['btn-controls'].addEventListener('click', () => { this.game.audio.ui(); this.showControls(); });
    this.el['btn-credits'].addEventListener('click', () => { this.game.audio.ui(); this.showCredits(); });
    this.el['controls-close'].addEventListener('click', () => { this.hideControls(); });
    this.el['menu-close'].addEventListener('click', () => { this.game.closeMenu(); });
    this.el['btn-respawn'].addEventListener('click', () => { this.game.respawn(); });
    this.el['btn-ending-continue'].addEventListener('click', () => { this.game.returnToThreshold(); });
    window.addEventListener('keydown', (e) => this.onKeyDown(e));
    document.getElementById('game-canvas').addEventListener('click', () => { if (!this.game.uiBlocking && !this.game.cinematic) this.game.audio.resume(); });
    window.addEventListener('gpadchange', (e) => {
      const hint = this.el['gamepad-hint'];
      if (!hint) return;
      clearTimeout(this._gpHintTimer);
      if (e.detail) {
        hint.textContent = 'XBOX CONTROLLER CONNECTED · A SELECT · B BACK';
        hint.classList.remove('hidden');
        this._gpHintTimer = setTimeout(() => hint.classList.add('hidden'), 4500);
        this.game.input.rumble?.(0.35, 0.2, 140);
      } else {
        hint.classList.add('hidden');
      }
    });
  }

  buildControls() {
    this.el['controls-grid'].innerHTML = CONTROLS.map(([a, b]) => `<div class="control-row"><span>${a}</span><span class="control-key">${b}</span></div>`).join('');
  }

  onKeyDown(e) {
    if (this.dialogueState) {
      if (e.code === 'Escape') { e.preventDefault(); this.closeDialogue(); return; }
      if (/^Digit[1-9]$/.test(e.code)) {
        const idx = +e.code.slice(5) - 1;
        const btn = this.el['dialogue-options'].children[idx];
        if (btn) { e.preventDefault(); btn.click(); }
        return;
      }
      if (e.code === 'KeyE' || e.code === 'Enter') {
        e.preventDefault();
        if (this.dialogueState.node.options?.length) {
          const first = this.el['dialogue-options'].querySelector('.dialogue-option');
          if (first) first.click();
        } else this.closeDialogue();
      }
    }
  }

  /* ==================== TITLE / LOADING ==================== */
  setLoading(p, text) {
    this.el['load-fill'].style.width = `${Math.round(p * 100)}%`;
    if (text) this.el['load-status'].textContent = text;
  }
  finishLoading() {
    this.el.loading.classList.add('done');
    setTimeout(() => this.el.loading.classList.add('hidden'), 800);
  }
  updateTitleSlot(hasSave, summary) {
    this.el['btn-continue'].classList.toggle('hidden', !hasSave);
    if (hasSave && summary) {
      this.el['title-saveinfo'].textContent = `Level ${summary.level} · ${summary.motes} motes · ${summary.deaths} deaths · ${formatTime(summary.playtime)}`;
    } else if (hasSave) this.el['title-saveinfo'].textContent = 'A journey awaits.';
    else this.el['title-saveinfo'].textContent = '';
  }
  showTitle() {
    this.el['title-screen'].classList.remove('hidden');
    this.el.hud.classList.add('hidden');
    this.el['menu-overlay'].classList.add('hidden');
    this.el['ending-screen'].classList.add('hidden');
    this.el['death-screen'].classList.add('hidden');
    this.el['dialogue'].classList.add('hidden');
    this.el.dialogue.classList.add('hidden');
  }
  hideTitle() { this.el['title-screen'].classList.add('hidden'); }
  showHUD() { this.el.hud.classList.remove('hidden'); }
  hideHUD() { this.el.hud.classList.add('hidden'); }

  /* ==================== CINEMATIC ==================== */
  showCinematic() { this.el.cinematic.classList.remove('hidden'); this.hideHUD(); }
  hideCinematic() { this.el.cinematic.classList.add('hidden'); this.el['cinematic-lines'].innerHTML = ''; this.el['cinematic-title'].classList.add('hidden'); }
  showCinematicTitle(show = true) { this.el['cinematic-title'].classList.toggle('hidden', !show); }
  setCinematicLine(text) {
    this.el['cinematic-lines'].innerHTML = text ? `<div class="cine-line">${text}</div>` : '';
  }
  subtitle(text, dur = 4) {
    this.el.subtitle.textContent = text;
    this.el.subtitle.classList.remove('hidden');
    this.subtitleTimer = dur;
  }
  update(dt) {
    if (this.subtitleTimer > 0) {
      this.subtitleTimer -= dt;
      if (this.subtitleTimer <= 0) this.el.subtitle.classList.add('hidden');
    }
    this.updateGamepadUI(dt);
  }

  /* ==================== HUD ==================== */
  setRegion(name, sub) { this.el['region-name'].textContent = name; this.el['region-sub'].textContent = sub; }
  setObjective(text) { this.el['objective-text'].textContent = text; }
  setMotes(v) { this.el['motes-count'].textContent = Math.floor(v).toLocaleString('en-US'); }
  setWeapon(name) { this.el['weapon-name'].textContent = name; }
  setArmor(name) { this.el['armor-name'].textContent = name; }
  updateVitals(player) {
    const hp = Math.max(0, player.hp / player.maxHp);
    const st = Math.max(0, player.stamina / player.maxStamina);
    const fp = Math.max(0, player.focus / player.maxFocus);
    this.el['hp-fill'].style.transform = `scaleX(${hp})`;
    this.el['hp-lag'].style.transform = `scaleX(${hp})`;
    this.el['st-fill'].style.transform = `scaleX(${st})`;
    this.el['fp-fill'].style.transform = `scaleX(${fp})`;
    this.el['flask-count'].textContent = player.stats.flaskUses;
    this.el.lowhp.classList.toggle('on', hp < .3 && !player.dead);
    this.el['flask-icon'].style.opacity = player.stats.flaskUses > 0 ? 1 : .35;
  }
  setInteract(text) {
    if (!text) { this.el['interact-prompt'].classList.add('hidden'); return; }
    this.el['interact-text'].textContent = text;
    this.el['interact-key'].textContent = this.lastDevice === 'gamepad' ? 'A' : 'E';
    this.el['interact-prompt'].classList.remove('hidden');
  }
  contextual(text) {
    if (!text) { this.el.contextual.classList.add('hidden'); return; }
    this.el.contextual.textContent = text;
    this.el.contextual.classList.remove('hidden');
  }
  hideContextual() { this.el.contextual.classList.add('hidden'); }
  hint(text, dur = 5) {
    if (!text) { this.el.hint.classList.add('hidden'); return; }
    this.el.hint.textContent = text;
    this.el.hint.classList.remove('hidden');
    clearTimeout(this._hintTimer);
    this._hintTimer = setTimeout(() => this.el.hint.classList.add('hidden'), dur * 1000);
  }
  toast(text, type = '') {
    const d = document.createElement('div');
    d.className = 'toast ' + type;
    d.textContent = text;
    this.el.toasts.appendChild(d);
    setTimeout(() => d.remove(), 3200);
  }
  floatText(worldPos, text, type = 'enemy') {
    let el = this.floatPool.find(f => !f._active);
    if (!el) {
      el = document.createElement('div');
      el.className = 'float-text';
      this.el.hud.appendChild(el);
      this.floatPool.push(el);
    }
    el._active = true;
    el._life = 0.9;
    el._pos = worldPos.clone ? worldPos.clone() : new THREE.Vector3(worldPos.x, worldPos.y, worldPos.z);
    el.textContent = text;
    el.className = 'float-text ' + type;
    el.style.opacity = '1';
    if (this.floatPool.length > 30) { const old = this.floatPool.shift(); old.remove(); }
  }
  updateFloatTexts(dt) {
    const cam = this.game.camera;
    for (const el of this.floatPool) {
      if (!el._active) continue;
      el._life -= dt;
      el._pos.y += dt * 1.5;
      if (el._life <= 0) { el._active = false; el.style.opacity = '0'; continue; }
      _v.copy(el._pos).project(cam);
      if (_v.z > 1) { el.style.opacity = '0'; continue; }
      const x = (_v.x * .5 + .5) * window.innerWidth;
      const y = (-_v.y * .5 + .5) * window.innerHeight;
      el.style.transform = `translate(-50%,-50%) translate(${x}px,${y}px)`;
      el.style.opacity = String(Math.min(1, el._life * 2));
    }
  }
  damageFlash() {
    this.el['damage-flash'].classList.add('on');
    clearTimeout(this._damageTimer);
    this._damageTimer = setTimeout(() => this.el['damage-flash'].classList.remove('on'), 130);
  }
  showLock(pos) {
    if (!pos) { this.el['lock-reticle'].classList.add('hidden'); return; }
    _v.copy(pos).project(this.game.camera);
    if (_v.z > 1) { this.el['lock-reticle'].classList.add('hidden'); return; }
    this.el['lock-reticle'].classList.remove('hidden');
    this.el['lock-reticle'].style.left = ((_v.x * .5 + .5) * window.innerWidth) + 'px';
    this.el['lock-reticle'].style.top = ((-_v.y * .5 + .5) * window.innerHeight) + 'px';
  }

  /* ==================== ENEMY / BOSS BARS ==================== */
  updateEnemyBars(enemies) {
    const cam = this.game.camera;
    const W = window.innerWidth, H = window.innerHeight;
    const seen = new Set();
    for (const e of enemies) {
      if (!e.alive || e.isBoss) continue;
      const d = e.pos.distanceTo(this.game.player.pos);
      const should = d < 30 && (e.aggro || e.health < e.maxHealth);
      if (!should) { if (e.barEl) e.barEl.style.display = 'none'; continue; }
      if (!e.barEl) {
        const d2 = document.createElement('div'); d2.className = 'enemy-bar';
        d2.innerHTML = `<div class="name">${e.def.name}</div><div class="fill"></div>`;
        this.el['enemy-bars'].appendChild(d2); e.barEl = d2;
      }
      seen.add(e);
      const head = e.pos.clone(); head.y += 2.0 * (e.def.scale || 1) + .4;
      _v.copy(head).project(cam);
      if (_v.z > 1) { e.barEl.style.display = 'none'; continue; }
      e.barEl.style.display = 'block';
      e.barEl.style.left = ((_v.x * .5 + .5) * W) + 'px';
      e.barEl.style.top = ((-_v.y * .5 + .5) * H) + 'px';
      const fill = e.barEl.querySelector('.fill');
      fill.style.width = Math.max(0, e.health / e.maxHealth * 100) + '%';
    }
    for (const [e, bar] of this._lastEnemyBars) {
      if (!seen.has(e)) { bar.remove(); if (e.barEl === bar) e.barEl = null; }
    }
    this._lastEnemyBars = new Map(enemies.filter(e => e.barEl).map(e => [e, e.barEl]));
  }
  showBossBar(boss) {
    this.bossRef = boss;
    this.eliteRef = null;
    this.el['boss-name'].textContent = boss.name;
    this.el['boss-sub'].textContent = boss.sub;
    this.el['boss-phase'].textContent = 'I';
    this.el['boss-bar'].classList.remove('hidden');
    this.updateBossBar();
  }
  updateBossBar() {
    if (!this.bossRef) return;
    const p = Math.max(0, this.bossRef.health / this.bossRef.maxHealth);
    this.el['boss-fill'].style.width = (p * 100) + '%';
    this.el['boss-lag'].style.width = (p * 100) + '%';
  }
  setBossPhase(n) { this.el['boss-phase'].textContent = n === 1 ? 'I' : 'II'; }
  hideBossBar() { this.el['boss-bar'].classList.add('hidden'); this.bossRef = null; }
  showEliteBar(e) {
    if (this.bossRef && this.bossRef.active) return;
    this.eliteRef = e;
    this.el['boss-name'].textContent = e.def.name.toUpperCase();
    this.el['boss-sub'].textContent = 'Hidden Mini-Boss';
    this.el['boss-phase'].textContent = '';
    this.el['boss-bar'].classList.remove('hidden');
    this.el['boss-fill'].style.width = (e.health / e.maxHealth * 100) + '%';
    this.el['boss-lag'].style.width = (e.health / e.maxHealth * 100) + '%';
  }
  updateEliteBar() {
    if (!this.eliteRef) return;
    const p = Math.max(0, this.eliteRef.health / this.eliteRef.maxHealth);
    this.el['boss-fill'].style.width = (p * 100) + '%';
    this.el['boss-lag'].style.width = (p * 100) + '%';
  }
  hideEliteBar() { if (!this.bossRef) { this.el['boss-bar'].classList.add('hidden'); this.eliteRef = null; } }

  /* ==================== DEATH / VICTORY ==================== */
  showDeath(motes, line) {
    this.deathShown = true;
    this.hideHUD();
    this.el['death-screen'].classList.remove('hidden');
    this.el['death-line'].textContent = line || 'The shire remembers your name. It will not remember your face.';
    this.el['death-motes'].textContent = motes > 0 ? `${motes} motes remain where you fell.` : 'No motes were lost.';
    this.game.input.releaseLock();
  }
  hideDeath() { this.deathShown = false; this.el['death-screen'].classList.add('hidden'); this.showHUD(); }
  banner(title, sub, dur = 4200) {
    this.el['victory-title'].textContent = title;
    this.el['victory-sub'].textContent = sub || '';
    this.el['victory-banner'].classList.remove('hidden');
    clearTimeout(this._bannerTimer);
    this._bannerTimer = setTimeout(() => this.el['victory-banner'].classList.add('hidden'), dur);
  }

  /* ==================== MENUS ==================== */
  openMenu(title, bodyHTML, footerHTML = '', wide = false) {
    this.currentMenu = { title, bodyHTML };
    this.el['menu-title'].textContent = title;
    this.el['menu-body'].innerHTML = bodyHTML;
    this.el['menu-footer'].innerHTML = footerHTML;
    this.el['menu-overlay'].classList.remove('hidden');
    document.querySelector('.menu-frame').classList.toggle('wide', wide);
    this.game.input.releaseLock();
  }
  closeMenuUI() {
    this.el['menu-overlay'].classList.add('hidden');
    this.currentMenu = null;
  }

  showPause(saveInfo) {
    const body = `
      <div class="pause-menu">
        <button class="menu-btn primary" data-act="resume">RESUME</button>
        <button class="menu-btn" data-act="inventory">INVENTORY &amp; EQUIPMENT</button>
        <button class="menu-btn" data-act="map">MAP OF THE SHIRE</button>
        <button class="menu-btn" data-act="controls">CONTROLS</button>
        <button class="menu-btn" data-act="savequit">SAVE &amp; RETURN TO TITLE</button>
      </div>
      <p class="shrine-note" style="margin-top:22px">${saveInfo || ''}</p>`;
    this.openMenu('PAUSED', body, `<span>“The crown is hollow. So is the king.”</span><span>${formatTime(this.game.state.playtime)} · A select · B close</span>`);
    this.el['menu-body'].querySelectorAll('[data-act]').forEach(b => b.addEventListener('click', () => this.game.menuAction(b.dataset.act)));
  }

  showInventory() {
    const g = this.game, s = g.state.player;
    const w = WEAPONS[s.equippedWeapon];
    const a = ARMOR[s.equippedArmor];
    const weapons = s.weapons.map(id => {
      const ww = WEAPONS[id];
      return `<div class="inv-item ${id === s.equippedWeapon ? 'equipped' : ''}" data-weapon="${id}">
        <div class="item-name">${ww.icon} ${ww.name}</div>
        <div class="item-meta">${ww.category} · ${Math.round(g.player.attackPower * (ww.damage / g.player.weapon.damage))} AR · ${ww.weight}</div>
        ${id === s.equippedWeapon ? '<span class="item-tag">EQUIPPED</span>' : ''}
      </div>`;
    }).join('');
    const armors = s.armor.map(id => {
      const aa = ARMOR[id];
      return `<div class="inv-item ${id === s.equippedArmor ? 'equipped' : ''}" data-armor="${id}">
        <div class="item-name">${aa.name}</div>
        <div class="item-meta">Defense ${aa.defense} · Poise ${aa.poise}</div>
        ${id === s.equippedArmor ? '<span class="item-tag">EQUIPPED</span>' : ''}
      </div>`;
    }).join('');
    const items = Object.entries(s.items).filter(([, n]) => n > 0).map(([id, n]) => {
      const it = ITEMS[id] || { name: id, desc: '', icon: '·' };
      return `<div class="inv-item"><div class="item-name">${it.icon || '·'} ${it.name} ×${n}</div><div class="item-meta">${it.desc}</div></div>`;
    }).join('') || '<div class="inv-item"><div class="item-meta">No consumables.</div></div>';
    const lore = LORE.map(l => {
      const found = g.state.lore.includes(l.id);
      if (!found) return `<div class="lore-entry locked"><h4>???</h4><p>An undiscovered page.</p></div>`;
      return `<div class="lore-entry" data-lore="${l.id}"><h4>${l.title}</h4><p>${l.summary}</p></div>`;
    }).join('');
    const body = `
      <div class="menu-columns">
        <div>
          <div class="panel-title">ATTRIBUTES</div>
          <div class="stat-row"><span>Level</span><b>${s.level}</b></div>
          <div class="stat-row"><span>Vigor</span><b>${s.vigor}</b></div>
          <div class="stat-row"><span>Endurance</span><b>${s.endurance}</b></div>
          <div class="stat-row"><span>Strength</span><b>${s.strength}</b></div>
          <div class="stat-row"><span>Dexterity</span><b>${s.dexterity}</b></div>
          <div class="stat-row"><span>Faith</span><b>${s.faith}</b></div>
          <div class="stat-row"><span>Health</span><b>${Math.round(g.player.hp)} / ${g.player.maxHp}</b></div>
          <div class="stat-row"><span>Stamina</span><b>${Math.round(g.player.maxStamina)}</b></div>
          <div class="stat-row"><span>Attack Power</span><b>${Math.round(g.player.attackPower)}</b></div>
          <div class="stat-row"><span>Defense</span><b>${g.player.defense}</b></div>
          <div class="stat-row"><span>Motes</span><b>${Math.floor(s.motes).toLocaleString('en-US')}</b></div>
          <div class="stat-row"><span>Deaths</span><b>${g.state.deaths}</b></div>
          <div class="panel-title" style="margin-top:22px">ARMOR</div>
          <div class="inv-grid">${armors}</div>
        </div>
        <div>
          <div class="panel-title">EQUIPPED</div>
          <div class="stat-row"><span>Weapon</span><b>${w.name}</b></div>
          <div class="stat-row"><span>Armor</span><b>${a.name}</b></div>
          <div class="stat-row"><span>Flask</span><b>${s.flaskUses} / ${s.maxFlask}</b></div>
          <div class="panel-title" style="margin-top:22px">WEAPONS</div>
          <div class="inv-grid" style="grid-template-columns:1fr">${weapons}</div>
          <div class="panel-title" style="margin-top:22px">ITEMS</div>
          <div class="inv-grid" style="grid-template-columns:1fr">${items}</div>
        </div>
      </div>
      <div class="panel-title" style="margin-top:24px">LOR E · PAGES OF ELDORIA</div>
      <div>${lore}</div>`;
    this.openMenu('INVENTORY', body, '<span>Select a weapon or armor to equip it.</span><span>I / B to close</span>', true);
    this.el['menu-body'].querySelectorAll('[data-weapon]').forEach(el => el.addEventListener('click', () => { g.equipWeapon(el.dataset.weapon); this.showInventory(); }));
    this.el['menu-body'].querySelectorAll('[data-armor]').forEach(el => el.addEventListener('click', () => { g.equipArmor(el.dataset.armor); this.showInventory(); }));
    this.el['menu-body'].querySelectorAll('[data-lore]').forEach(el => el.addEventListener('click', () => this.showLore(el.dataset.lore)));
  }

  showLore(id) {
    const l = LORE.find(x => x.id === id);
    if (!l) return;
    this.openMenu(l.title.toUpperCase(), `<p style="font-size:16px;line-height:1.75;font-style:italic;color:#c9bca4;white-space:pre-wrap">${l.text}</p>`, '<span>Recovered page</span><span>ESC / B to close</span>');
    this.currentMenu = { title: l.title, lore: true };
  }

  showLevelUp() {
    const g = this.game, s = g.state.player;
    const cost = g.levelCost();
    const attrs = [['vigor', 'Vigor', 'Increases maximum health.'], ['endurance', 'Endurance', 'Increases stamina and resistance.'], ['strength', 'Strength', 'Improves heavy weapon damage.'], ['dexterity', 'Dexterity', 'Improves fast weapon damage.'], ['faith', 'Faith', 'Improves focus and spells.']];
    const body = `
      <div class="menu-columns">
        <div>
          <div class="panel-title">THE HOLLOW TREE SHRINE</div>
          <p style="font-size:14px;line-height:1.65;color:#a99e88;font-style:italic">The flame accepts what the world has taken. Spend motes to deepen your body and sharpen your soul.</p>
          <div class="stat-row" style="margin-top:16px"><span>Level</span><b>${s.level}</b></div>
          <div class="stat-row"><span>Motes</span><b>${Math.floor(s.motes).toLocaleString('en-US')}</b></div>
          <div class="stat-row"><span>Next level</span><b>${cost} motes</b></div>
          <div class="stat-row"><span>Health</span><b>${g.player.maxHp}</b></div>
          <div class="stat-row"><span>Stamina</span><b>${g.player.maxStamina}</b></div>
          <div class="stat-row"><span>Focus</span><b>${g.player.maxFocus}</b></div>
        </div>
        <div>
          <div class="panel-title">RAISE ATTRIBUTE</div>
          <div class="level-attrs">
            ${attrs.map(([k, n, d]) => `<button class="attr-btn" data-attr="${k}" ${s.motes < cost ? 'disabled' : ''}><span>${n}</span><span><span class="attr-val">${s[k]}</span> <span class="plus">+</span></span></button><div class="attr-desc">${d}</div>`).join('')}
          </div>
        </div>
      </div>`;
    this.openMenu('LEVEL UP', body, `<span>Each level grants one attribute point.</span><span>${s.motes < cost ? 'Not enough motes' : 'Choose wisely'}</span>`, true);
    this.el['menu-body'].querySelectorAll('[data-attr]').forEach(b => b.addEventListener('click', () => { if (g.levelUp(b.dataset.attr)) this.showLevelUp(); }));
  }

  showShop() {
    const g = this.game, s = g.state.player;
    const stock = g.shopStock();
    const body = stock.map(item => {
      const owned = item.type === 'weapon' ? s.weapons.includes(item.id) : item.type === 'armor' ? s.armor.includes(item.id) : false;
      return `<div class="shop-item">
        <div><div class="si-name">${item.name}</div><div class="si-desc">${item.desc}</div></div>
        <button class="menu-btn" data-buy="${item.id}" data-kind="${item.type}" ${owned || s.motes < item.price ? 'disabled' : ''}>${owned ? 'OWNED' : `${item.price} ✦`}</button>
      </div>`;
    }).join('');
    this.openMenu('MARROW\'S WARES', body, `<span>Motes: ${Math.floor(s.motes).toLocaleString('en-US')}</span><span>“No refunds. The dead are poor customers.”</span>`, true);
    this.el['menu-body'].querySelectorAll('[data-buy]').forEach(b => b.addEventListener('click', () => { if (g.buy(b.dataset.buy, b.dataset.kind)) this.showShop(); }));
  }

  showMap() {
    const g = this.game;
    const body = `
      <div class="map-wrap">
        <div class="map-canvas"><canvas id="map-cv"></canvas></div>
        <div>
          <div class="panel-title">THE FORGOTTEN SHIRE</div>
          <div class="map-legend">
            <div class="lg"><span class="dot" style="background:#c9a45c"></span> Shrine</div>
            <div class="lg"><span class="dot" style="background:#8fb0d8"></span> Survivor</div>
            <div class="lg"><span class="dot" style="background:#b0733d"></span> Chest</div>
            <div class="lg"><span class="dot" style="background:#a44c9c"></span> Corruption</div>
            <div class="lg"><span class="dot" style="background:#e7cd92"></span> You</div>
          </div>
          <div class="panel-title" style="margin-top:22px">THREAD OF FATE</div>
          <p style="font-size:13px;line-height:1.6;color:#a99e88;font-style:italic">${g.objectiveText()}</p>
          <div class="panel-title" style="margin-top:22px">REGIONS OF ELDORIA</div>
          <div style="font-size:12px;line-height:1.9;color:#7d7567;font-style:italic">
            I. The Forgotten Shire<br/>
            <span style="opacity:.35">II. The Weeping Wilds · sealed</span><br/>
            <span style="opacity:.35">III. The Kingdom of Ashenveil · sealed</span><br/>
            <span style="opacity:.35">IV. The Frostbitten Reach · sealed</span><br/>
            <span style="opacity:.35">V. The Shattered Heavens · sealed</span><br/>
            <span style="opacity:.35">VI. The Black Spire · sealed</span>
          </div>
        </div>
      </div>`;
    this.openMenu('MAP', body, '<span>The world is not finished. It is waiting.</span><span>M / B to close</span>', true);
    const cv = document.getElementById('map-cv');
    if (cv) this.drawMap(cv);
  }

  drawMap(cv) {
    const g = this.game;
    const rect = cv.getBoundingClientRect();
    const dpr = Math.min(2, window.devicePixelRatio || 1);
    cv.width = rect.width * dpr; cv.height = rect.height * dpr;
    const ctx = cv.getContext('2d');
    ctx.scale(dpr, dpr);
    const w = rect.width, h = rect.height;
    const toMap = (x, z) => [w * .5 + x / 250 * w * .9, h * .5 + z / 250 * h * .9];
    // parchment bg
    const grad = ctx.createRadialGradient(w * .45, h * .4, 10, w * .5, h * .5, w * .7);
    grad.addColorStop(0, '#231f18'); grad.addColorStop(1, '#0c0b0d');
    ctx.fillStyle = grad; ctx.fillRect(0, 0, w, h);
    // noise
    for (let i = 0; i < 240; i++) { ctx.fillStyle = `rgba(201,164,92,${Math.random() * .035})`; ctx.fillRect(Math.random() * w, Math.random() * h, 1, 1); }
    // forest blobs
    ctx.fillStyle = 'rgba(52,68,45,.5)';
    for (const [cx, cz, r] of [[-48, 25, 36], [-60, -20, 32], [40, 10, 30], [55, 55, 26], [-40, 70, 22], [48, -45, 30]]) {
      const [x, y] = toMap(cx, cz);
      ctx.beginPath(); ctx.arc(x, y, r / 250 * w, 0, Math.PI * 2); ctx.fill();
    }
    // arena
    const [ax, ay] = toMap(ARENA.x, ARENA.z);
    ctx.strokeStyle = 'rgba(156,92,255,.4)'; ctx.lineWidth = 1;
    ctx.beginPath(); ctx.arc(ax, ay, ARENA.r / 250 * w, 0, Math.PI * 2); ctx.stroke();
    ctx.fillStyle = 'rgba(90,44,120,.18)'; ctx.fill();
    // path
    ctx.strokeStyle = 'rgba(201,164,92,.5)'; ctx.lineWidth = 2.2; ctx.setLineDash([5, 7]);
    ctx.beginPath();
    PATH.forEach(([x, z], i) => { const [mx, my] = toMap(x, z); i ? ctx.lineTo(mx, my) : ctx.moveTo(mx, my); });
    ctx.stroke(); ctx.setLineDash([]);
    // landmarks
    const dot = (x, z, color, r = 3, label = '') => {
      const [mx, my] = toMap(x, z);
      ctx.fillStyle = color; ctx.beginPath(); ctx.arc(mx, my, r, 0, Math.PI * 2); ctx.fill();
      if (label) { ctx.font = '9px Georgia'; ctx.fillStyle = 'rgba(220,210,190,.6)'; ctx.textAlign = 'center'; ctx.fillText(label, mx, my - 7); }
    };
    for (const sh of g.world.shrines) dot(sh.x, sh.z, '#c9a45c', 3.5, sh.id === 'tree' ? 'SHRINE' : '');
    for (const ch of g.world.chests) { const [mx, my] = toMap(ch.x, ch.z); ctx.fillStyle = '#b0733d'; ctx.fillRect(mx - 2, my - 2, 4, 4); }
    for (const npc of g.npcs) dot(npc.x, npc.z, '#8fb0d8', 2.5, npc.id === 'marrow' ? 'MARROW' : '');
    const [gx, gy] = toMap(0, -102); ctx.fillStyle = 'rgba(160,60,60,.9)'; ctx.font = '13px Georgia'; ctx.textAlign = 'center'; ctx.fillText('☠', gx, gy);
    // player
    const [px, py] = toMap(g.player.pos.x, g.player.pos.z);
    ctx.save(); ctx.translate(px, py); ctx.rotate(-g.player.yaw);
    ctx.fillStyle = '#f0e6d0'; ctx.beginPath(); ctx.moveTo(0, -7); ctx.lineTo(4.5, 5); ctx.lineTo(0, 3); ctx.lineTo(-4.5, 5); ctx.closePath(); ctx.fill();
    ctx.restore();
    ctx.strokeStyle = 'rgba(231,205,146,.35)'; ctx.beginPath(); ctx.arc(px, py, 10, 0, Math.PI * 2); ctx.stroke();
    // compass
    ctx.fillStyle = 'rgba(201,164,92,.65)'; ctx.font = '10px Georgia'; ctx.textAlign = 'center'; ctx.fillText('N', w / 2, 16);
    ctx.beginPath(); ctx.moveTo(w / 2, 20); ctx.lineTo(w / 2 - 3, 28); ctx.lineTo(w / 2 + 3, 28); ctx.closePath(); ctx.fill();
  }

  showEndings(available) {
    const body = `
      <p style="font-size:15px;line-height:1.7;color:#b9ae9a;font-style:italic;margin-top:0">The seer's echo splits into three threads. Each is a choice you have not yet made — a shape the future might take if you reach the bottom of the world.</p>
      <div class="ending-choice">
        <button class="menu-btn" data-ending="dawn">A NEW DAWN<small>Destroy the Devourer. Open the way home. Save Eldoria.</small></button>
        <button class="menu-btn" data-ending="crown">THE HOLLOW CROWN<small>Take the Devourer's power. Rule what remains.</small></button>
        <button class="menu-btn" data-ending="veil" ${available.veil ? '' : 'disabled'}>BEYOND THE VEIL ${available.veil ? '' : '<small style="color:#6d6558">Locked — find three pages of Eldoria\'s truth.</small>'}<small>Reject both. Walk through the door that was never meant to open.</small></button>
      </div>`;
    this.openMenu('THE THREE THREADS', body, `<span>An echo is not a promise.</span><span>${available.veil ? 'All threads visible' : `Pages recovered: ${this.game.state.lore.length} / 3`} · A select · B close</span>`, true);
    this.el['menu-body'].querySelectorAll('[data-ending]').forEach(b => b.addEventListener('click', () => { if (b.disabled) return; this.game.chooseEnding(b.dataset.ending); }));
  }

  showEnding(ending) {
    this.closeMenuUI();
    this.hideHUD();
    this.el['ending-screen'].classList.remove('hidden');
    this.el['ending-kicker'].textContent = ending.kicker;
    this.el['ending-title'].textContent = ending.title;
    this.el['ending-text'].textContent = ending.text;
    this.el['ending-flavor'].textContent = ending.flavor;
  }
  hideEnding() { this.el['ending-screen'].classList.add('hidden'); }

  showControls() {
    this.el['controls-screen'].classList.remove('hidden');
    this.game.audio.ui();
  }
  hideControls() { this.el['controls-screen'].classList.add('hidden'); }
  showCredits() {
    this.openMenu('CREDITS', `
      <div style="line-height:1.9;font-size:14px;color:#b7ac97">
        <p style="font-style:italic;color:#d8cdb6">THE HOLLOW CROWN</p>
        <p>A playable dark-fairytale vertical slice.</p>
        <p style="margin-top:18px;font-size:12px;color:#8c8373">Design, code, procedural world, characters, animation, music and sound — generated for this build.<br/>
        Built with Three.js and the Web Audio API. No external art assets.<br/>
        Keyboard + mouse and Xbox-style controller supported.</p>
        <p style="margin-top:18px;font-size:12px;color:#6f685b">“An ordinary human. A kingdom devoured from within. The only way home is through the dark.”</p>
      </div>`, '<span>Thank you for playing.</span><span>ESC to close</span>');
  }

  /* ==================== DIALOGUE ==================== */
  openDialogue(npc) {
    const data = npc.dialogue();
    if (!data) return;
    data.onOpen?.();
    this.dialogueState = { npc, data, node: data.nodes[data.startNode] };
    this.el.dialogue.classList.remove('hidden');
    this.el['dialogue-name'].textContent = npc.name;
    this.el['dialogue-portrait'].textContent = npc.id === 'marrow' ? '☾' : npc.id === 'wisp' ? '✦' : '◉';
    this.refreshInputHints();
    this.renderDialogue();
  }
  renderDialogue() {
    const st = this.dialogueState;
    if (!st) return;
    const node = st.node;
    this.el['dialogue-text'].textContent = node.text;
    const opts = this.el['dialogue-options'];
    opts.innerHTML = '';
    if (node.options && node.options.length) {
      node.options.forEach((o, i) => {
        if (o.condition && !o.condition()) return;
        const b = document.createElement('button');
        b.className = 'dialogue-option';
        b.textContent = `${i + 1}. ${o.label}`;
        b.addEventListener('click', () => this.chooseDialogue(o));
        opts.appendChild(b);
      });
    } else {
      const b = document.createElement('button');
      b.className = 'dialogue-option';
      b.textContent = 'Continue';
      b.addEventListener('click', () => this.closeDialogue());
      opts.appendChild(b);
    }
  }
  chooseDialogue(option) {
    const st = this.dialogueState;
    if (!st) return;
    this.game.audio.ui();
    if (option.next) { const n = st.data.nodes[option.next]; if (n) { st.node = n; this.renderDialogue(); return; } }
    if (option.action) { this.game.dialogueAction(option.action, st.npc); return; }
  }
  closeDialogue() {
    this.dialogueState = null;
    this.el.dialogue.classList.add('hidden');
    this.game.closeDialogue();
  }

  /* ==================== CONTROLLER UI ==================== */
  updateGamepadUI(dt) {
    const input = this.game.input;
    if (!input) return;
    if (input.lastDevice !== this.lastDevice) {
      this.lastDevice = input.lastDevice;
      this.refreshInputHints();
    }
    if (input.lastDevice !== 'gamepad') { this.clearGpFocus(); return; }

    const ctx = this.gpContext();
    if (!ctx) { this.clearGpFocus(); return; }

    const changed = ctx.key !== this.gpContextKey;
    if (changed) {
      this.gpContextKey = ctx.key;
      this.gpContextSig = ctx.sig;
      this.gpFocusEls = this.gpCollect(ctx.el, ctx.selector, ctx.extra);
      this.gpFocusIndex = 0;
      this.gpNavDir = 0;
      this.gpRepeatTimer = .35;
      this.applyGpFocus();
      // The A press that opened a shrine or dialogue must not also activate
      // its first option. On the title screen A is expected to start.
      this.gpConfirmLocked = ctx.key !== 'title' && !!(this.game.uiBlocking || this.dialogueState);
      if (this.gpConfirmLocked) return;
    } else if (this.gpFocusEls.length === 0) {
      this.gpFocusEls = this.gpCollect(ctx.el, ctx.selector, ctx.extra);
      this.gpFocusIndex = 0;
      this.applyGpFocus();
    } else if (ctx.sig !== this.gpContextSig) {
      // Menus re-render after buying, equipping, levelling, etc.
      this.gpContextSig = ctx.sig;
      const old = this.gpFocusEls[this.gpFocusIndex];
      this.gpFocusEls = this.gpCollect(ctx.el, ctx.selector, ctx.extra);
      const keep = this.gpFocusEls.indexOf(old);
      this.gpFocusIndex = keep >= 0 ? keep : Math.min(this.gpFocusIndex, this.gpFocusEls.length - 1);
      if (this.gpFocusIndex < 0) this.gpFocusIndex = 0;
      this.applyGpFocus();
    }

    if (this.gpConfirmLocked) { this.gpConfirmLocked = false; return; }

    if (input.navCancel && ctx.cancel) {
      ctx.cancel();
      this.clearGpFocus(true);
      return;
    }
    if (input.navConfirm) {
      this.activateGpFocus();
      return;
    }

    // D-pad or left stick navigation, with hold-to-repeat.
    const y = input.navY, x = input.navX;
    let dir = 0;
    if (input.wasPressed('GP12') || input.wasPressed('GP14')) dir = -1;
    else if (input.wasPressed('GP13') || input.wasPressed('GP15')) dir = 1;
    else if (Math.abs(y) > .55) dir = y < 0 ? -1 : 1;
    else if (Math.abs(x) > .55) dir = x < 0 ? -1 : 1;

    if (dir !== this.gpNavDir) {
      this.gpNavDir = dir;
      if (dir) { this.moveGpFocus(dir); this.gpRepeatTimer = .42; }
    } else if (dir) {
      this.gpRepeatTimer -= dt;
      if (this.gpRepeatTimer <= 0) { this.moveGpFocus(dir); this.gpRepeatTimer = .14; }
    } else {
      this.gpRepeatTimer = .42;
    }
  }

  gpContext() {
    const visible = (el) => !!el && !el.classList.contains('hidden') && el.getClientRects().length > 0;
    if (this.dialogueState && visible(this.el.dialogue)) {
      return {
        key: 'dialogue', el: this.el.dialogue, selector: '.dialogue-option',
        sig: `${this.dialogueState.node?.text?.length || 0}:${this.el['dialogue-options'].children.length}`,
        cancel: () => this.closeDialogue(),
      };
    }
    if (visible(this.el['controls-screen'])) {
      return { key: 'controls', el: this.el['controls-screen'], selector: '#controls-close', sig: 'controls', cancel: () => this.hideControls() };
    }
    if (visible(this.el['death-screen'])) {
      return { key: 'death', el: this.el['death-screen'], selector: '#btn-respawn', sig: 'death', cancel: null };
    }
    if (visible(this.el['ending-screen'])) {
      return { key: 'ending', el: this.el['ending-screen'], selector: '#btn-ending-continue', sig: 'ending', cancel: () => this.game.returnToThreshold() };
    }
    if (visible(this.el['menu-overlay'])) {
      return {
        key: 'menu', el: this.el['menu-overlay'],
        selector: '#menu-body button:not([disabled]), #menu-body [data-weapon], #menu-body [data-armor], #menu-body [data-lore]',
        extra: '#menu-close',
        sig: `${this.el['menu-title'].textContent}:${this.el['menu-body'].innerHTML.length}`,
        cancel: () => this.game.closeMenu(),
      };
    }
    if (visible(this.el['title-screen'])) {
      return {
        key: 'title', el: this.el['title-screen'], selector: '.title-menu .menu-btn:not(.hidden)',
        sig: `${this.el['btn-new'].classList.contains('hidden')}:${this.el['btn-continue'].classList.contains('hidden')}`,
        cancel: null,
      };
    }
    return null;
  }

  gpCollect(root, selector, extra) {
    if (!root) return [];
    const valid = (el) => !el.disabled && !el.classList.contains('hidden') && el.getClientRects().length > 0;
    const els = Array.from(root.querySelectorAll(selector)).filter(valid);
    if (extra) {
      const tail = Array.from(root.querySelectorAll(extra)).filter(valid);
      for (const el of tail) if (!els.includes(el)) els.push(el);
    }
    return els;
  }

  applyGpFocus() {
    for (const el of this.gpFocusEls) el.classList.remove('gp-focused');
    const el = this.gpFocusEls[this.gpFocusIndex];
    if (!el) return;
    el.classList.add('gp-focused');
    el.scrollIntoView?.({ block: 'nearest', inline: 'nearest' });
  }

  clearGpFocus(resetContext = false) {
    for (const el of this.gpFocusEls) el.classList.remove('gp-focused');
    this.gpFocusEls = [];
    this.gpFocusIndex = 0;
    this.gpNavDir = 0;
    if (resetContext) { this.gpContextKey = ''; this.gpContextSig = ''; }
  }

  moveGpFocus(dir) {
    if (!this.gpFocusEls.length) return;
    this.gpFocusIndex = (this.gpFocusIndex + dir + this.gpFocusEls.length) % this.gpFocusEls.length;
    this.applyGpFocus();
    this.game.audio.ui();
  }

  activateGpFocus() {
    const el = this.gpFocusEls[this.gpFocusIndex];
    if (!el || el.disabled) return;
    this.game.audio.ui();
    el.click();
  }

  refreshInputHints() {
    const pad = this.lastDevice === 'gamepad';
    if (this.el['interact-key']) this.el['interact-key'].textContent = pad ? 'A' : 'E';
    if (this.el['dialogue-hint']) {
      this.el['dialogue-hint'].textContent = pad
        ? '[A] choose · [B] leave · D-pad / L-stick select'
        : '[E] continue · [1-4] choose · [ESC] leave';
    }
  }

  /* ==================== misc ==================== */
  setBossVisible(v) { this.el['boss-bar'].classList.toggle('hidden', !v); }
}

const ENDING_TITLES = { dawn: 'A NEW DAWN', crown: 'THE HOLLOW CROWN', veil: 'BEYOND THE VEIL' };
