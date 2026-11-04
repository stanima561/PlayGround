// Procedural audio engine — all music and SFX are synthesized at runtime.
import { rand, choose, clamp } from './utils.js';

const SCALE = [0, 2, 3, 5, 7, 8, 10]; // natural minor
const NOTE = (semi, base = 146.83) => base * Math.pow(2, semi / 12);

export class AudioEngine {
  constructor() {
    this.ctx = null;
    this.ready = false;
    this.theme = 'none';
    this.muted = false;
    this.timers = [];
    this.musicStep = 0;
    this.beat = 0;
    this.volume = 0.7;
    this.intensity = 0;
  }

  init() {
    if (this.ready) return;
    const AC = window.AudioContext || window.webkitAudioContext;
    if (!AC) return;
    const ctx = new AC();
    this.ctx = ctx;
    const comp = ctx.createDynamicsCompressor();
    comp.threshold.value = -16; comp.knee.value = 18; comp.ratio.value = 5; comp.attack.value = .004; comp.release.value = .22;
    comp.connect(ctx.destination);
    this.master = ctx.createGain(); this.master.gain.value = this.muted ? 0 : this.volume; this.master.connect(comp);
    this.musicBus = ctx.createGain(); this.musicBus.gain.value = .55; this.musicBus.connect(this.master);
    this.sfxBus = ctx.createGain(); this.sfxBus.gain.value = .9; this.sfxBus.connect(this.master);
    this.ambBus = ctx.createGain(); this.ambBus.gain.value = .5; this.ambBus.connect(this.master);
    // reverb-ish delay
    this.delay = ctx.createDelay(1.2); this.delay.delayTime.value = .42;
    this.delayFb = ctx.createGain(); this.delayFb.gain.value = .28;
    this.delay.connect(this.delayFb); this.delayFb.connect(this.delay);
    this.delayWet = ctx.createGain(); this.delayWet.gain.value = .26; this.delay.connect(this.delayWet); this.delayWet.connect(this.master);

    const len = ctx.sampleRate * 2;
    this.noiseBuf = ctx.createBuffer(1, len, ctx.sampleRate);
    const d = this.noiseBuf.getChannelData(0);
    for (let i = 0; i < len; i++) d[i] = Math.random() * 2 - 1;
    this.ready = true;
    this.startAmbient();
    if (ctx.state === 'suspended') ctx.resume();
  }

  resume() { if (this.ctx?.state === 'suspended') this.ctx.resume(); }
  setMuted(m) { this.muted = m; if (this.master) this.master.gain.linearRampToValueAtTime(m ? 0 : this.volume, this.ctx.currentTime + .2); }

  noiseSource(loop = false) {
    const src = this.ctx.createBufferSource(); src.buffer = this.noiseBuf; src.loop = loop; return src;
  }

  startAmbient() {
    if (!this.ready) return;
    const ctx = this.ctx;
    // Wind
    const wind = this.noiseSource(true);
    const windFilter = ctx.createBiquadFilter(); windFilter.type = 'bandpass'; windFilter.frequency.value = 420; windFilter.Q.value = .6;
    const windGain = ctx.createGain(); windGain.gain.value = .055;
    const lfo = ctx.createOscillator(); lfo.frequency.value = .07;
    const lfoGain = ctx.createGain(); lfoGain.gain.value = 180;
    lfo.connect(lfoGain); lfoGain.connect(windFilter.frequency);
    wind.connect(windFilter); windFilter.connect(windGain); windGain.connect(this.ambBus);
    wind.start(); lfo.start();
    // Low drone
    const drone = ctx.createOscillator(); drone.type = 'sine'; drone.frequency.value = 48;
    const droneG = ctx.createGain(); droneG.gain.value = .028;
    drone.connect(droneG); droneG.connect(this.ambBus); drone.start();
    const drone2 = ctx.createOscillator(); drone2.type = 'triangle'; drone2.frequency.value = 72.5;
    const drone2g = ctx.createGain(); drone2g.gain.value = .012; drone2.connect(drone2g); drone2g.connect(this.ambBus); drone2.start();
    // bird chirps
    this.timers.push(setInterval(() => {
      if (this.theme === 'boss' || Math.random() < .35) return;
      this.chirp(); this.chirpDelay = setTimeout(() => this.chirp(), rand(120, 380));
    }, rand(4200, 9000)));
    // distant creaks
    this.timers.push(setInterval(() => { if (Math.random() < .3) this.creak(); }, 11000));
  }

  chirp() {
    if (!this.ready) return;
    const ctx = this.ctx, t = ctx.currentTime;
    const o = ctx.createOscillator(); o.type = 'sine';
    const g = ctx.createGain();
    const base = rand(1700, 3100);
    o.frequency.setValueAtTime(base, t);
    o.frequency.exponentialRampToValueAtTime(base * rand(1.2, 1.6), t + .06);
    o.frequency.exponentialRampToValueAtTime(base * .8, t + .14);
    g.gain.setValueAtTime(0, t); g.gain.linearRampToValueAtTime(.035, t + .02); g.gain.exponentialRampToValueAtTime(.0001, t + .2);
    o.connect(g); g.connect(this.ambBus); o.start(t); o.stop(t + .23);
  }
  creak() {
    if (!this.ready) return;
    const ctx = this.ctx, t = ctx.currentTime;
    const src = this.noiseSource(); const f = ctx.createBiquadFilter(); f.type = 'bandpass'; f.frequency.value = rand(180, 420); f.Q.value = 4;
    const g = ctx.createGain(); g.gain.value = .02;
    src.connect(f); f.connect(g); g.connect(this.ambBus); src.start(t); src.stop(t + .6);
  }

  tone({ freq = 220, type = 'sine', dur = .3, gain = .1, at = 0, slide = null, bus = null, attack = .01, release = null, detune = 0, filter = null }) {
    if (!this.ready) return;
    const ctx = this.ctx, t = ctx.currentTime + at;
    const o = ctx.createOscillator(); o.type = type; o.frequency.setValueAtTime(freq, t); o.detune.value = detune;
    if (slide) o.frequency.exponentialRampToValueAtTime(Math.max(20, slide), t + dur);
    const g = ctx.createGain();
    const out = bus || this.sfxBus;
    let node = o;
    if (filter) {
      const f = ctx.createBiquadFilter(); f.type = filter.type || 'lowpass'; f.frequency.value = filter.freq || 800; f.Q.value = filter.q || 1;
      node.connect(f); node = f;
    }
    node.connect(g); g.connect(out);
    g.gain.setValueAtTime(0.0001, t);
    g.gain.linearRampToValueAtTime(gain, t + attack);
    g.gain.exponentialRampToValueAtTime(.0001, t + dur);
    o.start(t); o.stop(t + dur + .05);
    return { o, g };
  }

  noiseBurst({ dur = .2, gain = .2, freq = 1200, q = .8, at = 0, type = 'bandpass', bus = null, slide = null }) {
    if (!this.ready) return;
    const ctx = this.ctx, t = ctx.currentTime + at;
    const src = this.noiseSource();
    const f = ctx.createBiquadFilter(); f.type = type; f.frequency.setValueAtTime(freq, t); f.Q.value = q;
    if (slide) f.frequency.exponentialRampToValueAtTime(slide, t + dur);
    const g = ctx.createGain(); g.gain.setValueAtTime(gain, t); g.gain.exponentialRampToValueAtTime(.0001, t + dur);
    src.connect(f); f.connect(g); g.connect(bus || this.sfxBus); src.start(t); src.stop(t + dur + .05);
  }

  // ---------- music ----------
  setTheme(theme) {
    if (this.theme === theme) return;
    this.theme = theme;
    this.musicStep = 0; this.beat = 0;
    if (!this.ready) return;
    this.musicBus.gain.cancelScheduledValues(this.ctx.currentTime);
    this.musicBus.gain.linearRampToValueAtTime(theme === 'none' ? 0 : .5, this.ctx.currentTime + 1.2);
    clearInterval(this.musicTimer);
    if (theme === 'none') return;
    const interval = theme === 'boss' ? 210 : theme === 'title' ? 620 : 520;
    this.musicTimer = setInterval(() => this.musicTick(), interval);
    this.musicTick();
  }

  musicTick() {
    if (!this.ready || this.theme === 'none') return;
    const t = this.theme;
    const step = this.musicStep++;
    if (t === 'title') this.titleMusic(step);
    else if (t === 'explore') this.exploreMusic(step);
    else if (t === 'boss') this.bossMusic(step);
    else if (t === 'victory') this.victoryMusic(step);
  }

  pad(freq, dur, gain = .04, type = 'sine', at = 0, detune = 0) {
    this.tone({ freq, type, dur, gain, at, attack: dur * .3, bus: this.musicBus, detune, filter: { type: 'lowpass', freq: 900 } });
    this.tone({ freq: freq * 1.004, type: 'triangle', dur, gain: gain * .4, at, attack: dur * .35, bus: this.musicBus });
  }

  titleMusic(step) {
    const chordRoots = [0, -4, -7, -2];
    const root = NOTE(chordRoots[Math.floor(step / 4) % 4], 73.42);
    if (step % 4 === 0) {
      this.pad(root, 3.8, .05, 'sine');
      this.pad(NOTE(chordRoots[Math.floor(step / 4) % 4] + 7, 73.42), 3.8, .03, 'sine');
      this.pad(NOTE(chordRoots[Math.floor(step / 4) % 4] + 12, 73.42), 3.8, .018, 'triangle');
    }
    if (step % 8 === 3 || step % 8 === 6) {
      const n = NOTE(choose([12, 15, 19, 24]) + chordRoots[Math.floor(step / 4) % 4], 73.42);
      this.tone({ freq: n, type: 'sine', dur: 2.4, gain: .022, bus: this.musicBus, at: 0, attack: .4, filter: { type: 'lowpass', freq: 1200 } });
    }
  }

  exploreMusic(step) {
    const prog = [0, -2, -4, -5];
    const rootSemi = prog[Math.floor(step / 8) % 4];
    if (step % 8 === 0) {
      const root = NOTE(rootSemi, 98);
      this.pad(root / 2, 4.6, .038, 'sine');
      this.pad(root * 1.1892, 4.4, .02, 'triangle');
      this.pad(root * 1.4983, 4.2, .014, 'sine');
    }
    if (step % 4 === 2) {
      const melody = SCALE[Math.floor(Math.random() * SCALE.length)] + 12 + rootSemi;
      this.tone({ freq: NOTE(melody, 98), type: 'sine', dur: 2.2, gain: .026, bus: this.musicBus, attack: .18, filter: { type: 'lowpass', freq: 1600 } });
    }
    if (step % 16 === 6) {
      this.tone({ freq: NOTE(rootSemi + 3, 98), type: 'triangle', dur: 3.4, gain: .013, bus: this.musicBus, attack: .5 });
    }
  }

  bossMusic(step) {
    const b = step % 16;
    // driving low ostinato
    const seq = [0, 0, 3, 0, 5, 3, 0, -2];
    const semi = seq[b % 8] - 12;
    if (b % 2 === 0) {
      this.tone({ freq: NOTE(semi, 73.42), type: 'sawtooth', dur: .22, gain: .05, bus: this.musicBus, filter: { type: 'lowpass', freq: 420, q: 3 }, attack: .005 });
    }
    // drums
    if (b === 0 || b === 6 || b === 10) {
      this.noiseBurst({ dur: .3, gain: .16, freq: 90, q: .7, type: 'lowpass', bus: this.musicBus });
      this.tone({ freq: 56, type: 'sine', dur: .4, gain: .2, bus: this.musicBus, slide: 32 });
    }
    if (b === 4 || b === 12) this.noiseBurst({ dur: .16, gain: .1, freq: 1800, q: 1, bus: this.musicBus });
    if (b % 2 === 1) this.noiseBurst({ dur: .06, gain: .035, freq: 6000, q: 1.4, bus: this.musicBus });
    // choir stabs
    if (b === 0 || b === 8) {
      this.tone({ freq: NOTE(-5, 146.83), type: 'sawtooth', dur: 2.1, gain: .025, bus: this.musicBus, attack: .3, filter: { type: 'lowpass', freq: 760 } });
      this.tone({ freq: NOTE(-1, 146.83), type: 'sawtooth', dur: 2.1, gain: .018, bus: this.musicBus, attack: .35, filter: { type: 'lowpass', freq: 700 } });
      this.tone({ freq: NOTE(2, 146.83), type: 'sawtooth', dur: 2.1, gain: .014, bus: this.musicBus, attack: .4, filter: { type: 'lowpass', freq: 680 } });
    }
    if (b === 14 && Math.random() < .4) this.tone({ freq: NOTE(12, 146.83), type: 'sine', dur: .8, gain: .02, bus: this.musicBus, at: .06 });
  }

  victoryMusic(step) {
    const chord = [0, 4, 7, 12];
    if (step % 8 === 0) {
      this.pad(NOTE(0, 110), 4.5, .04, 'sine');
      this.pad(NOTE(4, 110), 4.2, .024, 'sine');
      this.pad(NOTE(7, 110), 4.2, .018, 'triangle');
    }
    if (step % 16 === 4) this.tone({ freq: NOTE(choose(chord) + 12, 110), type: 'sine', dur: 2.6, gain: .028, bus: this.musicBus, attack: .2 });
  }

  // ---------- SFX ----------
  swing(heavy = false) {
    this.noiseBurst({ dur: heavy ? .26 : .16, gain: heavy ? .16 : .1, freq: heavy ? 420 : 900, slide: heavy ? 180 : 400, q: 1.2 });
  }
  hit(metal = false) {
    if (metal) {
      this.noiseBurst({ dur: .18, gain: .18, freq: 3200, q: 4 });
      this.tone({ freq: 780, type: 'square', dur: .18, gain: .05, slide: 220 });
    } else {
      this.noiseBurst({ dur: .16, gain: .17, freq: 500, q: .9, type: 'lowpass' });
      this.tone({ freq: 120, type: 'sine', dur: .2, gain: .18, slide: 48 });
    }
  }
  block() { this.noiseBurst({ dur: .12, gain: .16, freq: 2600, q: 3 }); this.tone({ freq: 440, type: 'triangle', dur: .14, gain: .06, slide: 300 }); }
  parry() { this.tone({ freq: 1320, type: 'sine', dur: .5, gain: .1, slide: 980 }); this.tone({ freq: 1760, type: 'sine', dur: .35, gain: .06 }); this.noiseBurst({ dur: .1, gain: .14, freq: 4200, q: 3 }); }
  dodge() { this.noiseBurst({ dur: .22, gain: .08, freq: 700, slide: 250, q: 1 }); }
  step() { this.noiseBurst({ dur: .06, gain: .02, freq: 240, type: 'lowpass' }); }
  jump() { this.tone({ freq: 180, type: 'sine', dur: .18, gain: .04, slide: 240 }); }
  heal() { for (let i = 0; i < 4; i++) this.tone({ freq: 520 + i * 120, type: 'sine', dur: .9, gain: .03, at: i * .08, slide: 700 + i * 150 }); }
  death() { this.tone({ freq: 90, type: 'sawtooth', dur: 1.8, gain: .1, slide: 26, filter: { type: 'lowpass', freq: 300 } }); this.noiseBurst({ dur: 1.6, gain: .08, freq: 200, type: 'lowpass' }); }
  pickup() { this.tone({ freq: 880, type: 'sine', dur: .3, gain: .05 }); this.tone({ freq: 1320, type: 'sine', dur: .4, gain: .04, at: .08 }); }
  interact() { this.tone({ freq: 420, type: 'triangle', dur: .14, gain: .035 }); }
  levelup() { [0, 4, 7, 12].forEach((s, i) => this.tone({ freq: NOTE(s, 262), type: 'sine', dur: 1.2, gain: .045, at: i * .13 })); }
  ui() { this.tone({ freq: 620, type: 'sine', dur: .08, gain: .025 }); }
  roar() { this.tone({ freq: 65, type: 'sawtooth', dur: 1.6, gain: .16, slide: 44, filter: { type: 'lowpass', freq: 500, q: 3 } }); this.noiseBurst({ dur: 1.5, gain: .12, freq: 300, type: 'lowpass' }); }
  arrow() { this.noiseBurst({ dur: .18, gain: .07, freq: 1800, slide: 500, q: 2 }); }
  spell() { for (let i = 0; i < 3; i++) this.tone({ freq: 300 + i * 220, type: 'sine', dur: .6, gain: .035, at: i * .04, slide: 900 + i * 200 }); }
  souls() { this.tone({ freq: 760, type: 'sine', dur: .5, gain: .04, slide: 1200 }); this.tone({ freq: 1140, type: 'sine', dur: .55, gain: .025, at: .06, slide: 1600 }); }
  bossDeath() {
    this.roar();
    this.tone({ freq: 55, type: 'sine', dur: 3.2, gain: .2, slide: 24 });
    this.noiseBurst({ dur: 2.6, gain: .14, freq: 400, type: 'lowpass' });
  }
  gate() { this.tone({ freq: 120, type: 'sawtooth', dur: 1.4, gain: .06, slide: 50, filter: { type: 'lowpass', freq: 400 } }); this.noiseBurst({ dur: 1.2, gain: .06, freq: 800 }); }
}

export const audio = new AudioEngine();
