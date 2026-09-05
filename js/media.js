/* Decode gallery images before changing the visible screen; stale requests never win. */
(function () {
  'use strict';
  const motion = window.matchMedia('(prefers-reduced-motion: reduce)');
  const cache = new Map();
  const states = new WeakMap();
  const activeFades = new Set();
  const preview = url => url.replace('assets/images/projects/', 'assets/images/previews/');

  function load(url) {
    if (cache.has(url)) return cache.get(url);
    const pending = new Promise((resolve, reject) => {
      const image = new Image();
      image.decoding = 'async';
      image.onload = async () => {
        try { await image.decode?.(); } catch { /* Loaded image is usable without decode(). */ }
        resolve(image);
      };
      image.onerror = () => reject(new Error('Image unavailable'));
      image.src = url;
    });
    cache.set(url, pending);
    // Keep only a small recent set of decoded images, especially on phones.
    if (cache.size > 14) cache.delete(cache.keys().next().value);
    pending.catch(() => { if (cache.get(url) === pending) cache.delete(url); });
    return pending;
  }
  async function ready(url) {
    const original = url.replace('assets/images/previews/', 'assets/images/projects/');
    const candidates = [...new Set([url, original, original.replace(/\.webp$/, '.png')])];
    for (const candidate of candidates) {
      try { return await load(candidate); } catch { /* Try the original format if a preview fails. */ }
    }
    return null;
  }
  function preload(url) {
    if (navigator.connection?.saveData) return;
    void ready(url);
  }
  function clearFade(state) {
    state.animation?.cancel();
    state.overlay?.remove();
    state.animation = state.overlay = null;
    activeFades.delete(state);
  }
  async function swap(image, url, alt) {
    if (!image) return false;
    let state = states.get(image);
    if (!state) { state = { request: 0 }; states.set(image, state); }
    const request = ++state.request;
    image.draggable = false;
    image.setAttribute('aria-busy', 'true');
    if (!image.getAttribute('src')) image.alt = alt;
    const loaded = await ready(url);
    if (state.request !== request) return false;
    image.removeAttribute('aria-busy');
    if (!loaded) return false; // Keep the previous screen on a failed connection.
    clearFade(state);
    const hasPrevious = image.complete && image.naturalWidth > 0;
    if (image.src !== loaded.src && hasPrevious && !motion.matches && image.animate && image.offsetWidth) {
      const overlay = image.cloneNode(false);
      overlay.removeAttribute('id');
      overlay.removeAttribute('aria-busy');
      overlay.removeAttribute('data-gallery-transition');
      overlay.style.removeProperty('view-transition-name');
      overlay.alt = '';
      overlay.setAttribute('aria-hidden', 'true');
      overlay.classList.add('screen-fade');
      Object.assign(overlay.style, {
        left: `${image.offsetLeft}px`, top: `${image.offsetTop}px`,
        width: `${image.offsetWidth}px`, height: `${image.offsetHeight}px`,
      });
      image.parentElement.append(overlay);
      state.overlay = overlay;
      state.animation = overlay.animate([{ opacity: 1 }, { opacity: 0 }], {
        duration: 190, easing: 'ease-out', fill: 'forwards',
      });
      activeFades.add(state);
      state.animation.finished.then(() => {
        if (state.overlay === overlay) clearFade(state);
      }, () => {});
    }
    image.alt = alt;
    image.src = loaded.src;
    return true;
  }
  function clearAllFades() { [...activeFades].forEach(clearFade); }
  motion.addEventListener('change', () => { if (motion.matches) clearAllFades(); });
  window.addEventListener('resize', clearAllFades, { passive: true });
  window.PortfolioMedia = { swap, preload, preview };
})();
