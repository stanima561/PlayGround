import './style.css';
import { Game } from './game/game.js';

const boot = async () => {
  const canvas = document.getElementById('game-canvas');
  if (!canvas) throw new Error('Missing #game-canvas');

  const game = new Game(canvas);
  window.__HOLLOW_CROWN__ = game;

  try {
    await game.init();
    document.getElementById('loading')?.classList.add('hidden');
  } catch (err) {
    console.error('[THE HOLLOW CROWN] Failed to start:', err);
    window.__HOLLOW_CROWN_ERROR__ = err;
    const loading = document.getElementById('loading');
    if (loading) {
      loading.classList.remove('done');
      loading.style.opacity = '1';
      const status = document.getElementById('load-status');
      if (status) {
        status.textContent = 'The crown could not be lit. See console for details.';
        status.style.color = '#c26a5f';
      }
    }
  }
};

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', boot, { once: true });
} else {
  boot();
}
