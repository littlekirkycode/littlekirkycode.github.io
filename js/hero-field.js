// A small Canvas2D light field: no video, WebGL dependency or continuous work off screen.
export function drawLightField(ctx, width, height, time = 0, pointer = { x: 0, y: 0 }, light = false) {
  ctx.clearRect(0, 0, width, height);
  ctx.save();
  ctx.globalCompositeOperation = light ? 'source-over' : 'screen';
  const phase = time * 0.22;
  const compact = width < 700;
  const lanes = compact ? 28 : 38;

  for (let band = 0; band < 2; band++) {
    const gradient = ctx.createLinearGradient(0, height * 0.6, width, height * 0.3);
    const alpha = light ? 0.36 : 0.64;
    if (band === 0) {
      gradient.addColorStop(0, `rgba(24, 194, 228, ${alpha * 0.3})`);
      gradient.addColorStop(0.22, `rgba(37, 161, 247, ${alpha})`);
      gradient.addColorStop(0.57, `rgba(80, 105, 249, ${alpha * 0.5})`);
      gradient.addColorStop(0.82, `rgba(169, 104, 250, ${alpha})`);
      gradient.addColorStop(1, 'rgba(123, 87, 244, 0)');
    } else {
      gradient.addColorStop(0, 'rgba(83, 79, 236, 0)');
      gradient.addColorStop(0.18, `rgba(122, 95, 251, ${alpha})`);
      gradient.addColorStop(0.5, `rgba(78, 114, 245, ${alpha * 0.45})`);
      gradient.addColorStop(0.8, `rgba(31, 177, 240, ${alpha})`);
      gradient.addColorStop(1, `rgba(58, 196, 221, ${alpha * 0.3})`);
    }
    ctx.strokeStyle = gradient;
    for (let lane = 0; lane < lanes; lane++) {
      const strand = (lane / (lanes - 1) - 0.5) * 2;
      ctx.beginPath();
      for (let step = 0; step <= 68; step++) {
        const u = step / 68;
        const x = width * (-0.12 + 1.24 * u);
        // The two ribbons fold in opposite directions, framing the centre of the hero.
        const arc = band === 0
          ? 0.17 + 0.24 * Math.cos(u * Math.PI * 1.8 + 0.25)
          : 0.8 + 0.19 * Math.sin(u * Math.PI * 1.8 - 0.3);
        const fold = Math.sin(u * 7 + phase * 0.65 + band * 2.7);
        const spread = 0.018 + 0.074 * fold * fold;
        const wave = 0.032 * Math.sin(u * 9 + phase + band * 2.1 + strand * 0.35)
          + 0.009 * Math.sin(u * 22 - phase * 0.7 + strand);
        const depth = Math.sin(u * Math.PI);
        const y = height * (arc + strand * spread + wave)
          + pointer.y * 18 * depth + pointer.x * 10 * Math.sin(u * 6 + band);
        if (step === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
      }
      // Sparse wide strokes add glow without a costly per-frame blur filter.
      if (lane % 6 === 0) {
        ctx.globalAlpha = light ? 0.06 : 0.08;
        ctx.lineWidth = compact ? 10 : 16;
        ctx.stroke();
      }
      ctx.globalAlpha = 0.3 + 0.7 * Math.pow(1 - Math.abs(strand), 0.65);
      ctx.lineWidth = lane % 7 === 0 ? 1.4 : 0.75;
      ctx.stroke();
    }
  }
  ctx.restore();
}

export function initHeroField() {
  const hero = document.getElementById('hero');
  const canvas = document.getElementById('heroField');
  const toggle = document.getElementById('heroMotionToggle');
  if (!hero || !canvas || !toggle) return;
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)');
  const finePointer = window.matchMedia('(hover: hover) and (pointer: fine)');
  const entrances = [];

  // Content is visible first; animation is only a short enhancement on initial arrival.
  if (!reduced.matches && window.scrollY < 40 && !window.location.hash) {
    hero.querySelectorAll('.hero__content > *').forEach((element, index) => {
      if (!element.animate) return;
      element.classList.add('visible');
      entrances.push(element.animate([
        { opacity: 0, transform: 'translateY(12px)' },
        { opacity: 1, transform: 'translateY(0)' },
      ], { duration: 460, delay: index * 45, easing: 'cubic-bezier(.22, 1, .36, 1)', fill: 'backwards' }));
    });
  }

  const ctx = canvas.getContext('2d');
  if (!ctx) return; // The CSS colour wash remains when canvas is unavailable.
  let width = 0, height = 0, frame = 0, lastTime = 0, elapsed = 0;
  let visible = hero.getBoundingClientRect().bottom > 0;
  let paused = false;
  let light = document.documentElement.dataset.theme === 'light';
  const pointer = { x: 0, y: 0 }, target = { x: 0, y: 0 };
  try { paused = localStorage.getItem('hero-motion') === 'paused'; } catch { /* Storage is optional. */ }
  const canMove = () => !paused && !reduced.matches && visible && !document.hidden;
  const draw = () => drawLightField(ctx, width, height, elapsed, pointer, light);
  function stop() {
    cancelAnimationFrame(frame);
    frame = 0;
    lastTime = 0;
  }
  function tick(now) {
    frame = 0;
    if (!canMove()) return;
    if (!lastTime) lastTime = now;
    const delta = now - lastTime;
    if (delta >= 1000 / 30) {
      elapsed += Math.min(delta, 80) / 1000;
      lastTime = now;
      pointer.x += (target.x - pointer.x) * 0.055;
      pointer.y += (target.y - pointer.y) * 0.055;
      draw();
    }
    frame = requestAnimationFrame(tick);
  }
  function sync() {
    toggle.hidden = reduced.matches;
    toggle.setAttribute('aria-pressed', String(paused));
    toggle.querySelector('span').textContent = paused ? 'Play background' : 'Pause background';
    if (canMove() && !frame) frame = requestAnimationFrame(tick);
    else if (!canMove()) stop();
  }
  function resize() {
    const bounds = hero.getBoundingClientRect();
    if (!bounds.width || !bounds.height) return;
    width = bounds.width;
    height = bounds.height;
    const ratio = Math.min(window.devicePixelRatio || 1, 1.5, 1800 / width);
    canvas.width = Math.round(width * ratio);
    canvas.height = Math.round(height * ratio);
    ctx.setTransform(ratio, 0, 0, ratio, 0, 0);
    draw();
  }
  toggle.addEventListener('click', () => {
    paused = !paused;
    try { localStorage.setItem('hero-motion', paused ? 'paused' : 'playing'); } catch { /* Storage is optional. */ }
    sync();
  });
  hero.addEventListener('pointermove', event => {
    if (!finePointer.matches || !canMove()) return;
    const bounds = hero.getBoundingClientRect();
    target.x = (event.clientX - bounds.left) / bounds.width * 2 - 1;
    target.y = (event.clientY - bounds.top) / bounds.height * 2 - 1;
  }, { passive: true });
  hero.addEventListener('pointerleave', () => { target.x = target.y = 0; });
  document.addEventListener('visibilitychange', sync);
  window.addEventListener('pagehide', stop);
  window.addEventListener('pageshow', sync);
  reduced.addEventListener('change', () => {
    if (reduced.matches) {
      entrances.forEach(animation => animation.cancel());
      target.x = target.y = pointer.x = pointer.y = 0;
    }
    sync();
    draw();
  });
  new MutationObserver(() => {
    light = document.documentElement.dataset.theme === 'light';
    draw();
  }).observe(document.documentElement, { attributes: true, attributeFilter: ['data-theme'] });
  if ('ResizeObserver' in window) new ResizeObserver(resize).observe(hero);
  else window.addEventListener('resize', resize, { passive: true });
  if ('IntersectionObserver' in window) {
    new IntersectionObserver(entries => {
      visible = entries[0].isIntersecting;
      sync();
    }).observe(hero);
  }
  resize();
  sync();
}

if (typeof document !== 'undefined') initHeroField();
