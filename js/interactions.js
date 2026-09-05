/* Shared gallery transitions, restrained pointer effects and the experience timeline. */
(function () {
  'use strict';
  const root = document.documentElement;
  const motion = window.matchMedia('(prefers-reduced-motion: reduce)');
  const pointer = window.matchMedia('(hover: hover) and (pointer: fine)');
  const clamp = (value, min = 0, max = 1) => Math.min(max, Math.max(min, value));
  let activeTransition = null;
  const fallbackAnimations = new Set();

  function transition({ from, to, update, panel }) {
    activeTransition?.skipTransition();
    const bounds = from?.getBoundingClientRect();
    const visible = bounds && bounds.width > 0 && bounds.height > 0
      && bounds.bottom > 0 && bounds.top < window.innerHeight;
    if (motion.matches || !document.startViewTransition || !visible) {
      update();
      if (!motion.matches && panel?.animate && panel.closest('dialog')?.open) {
        const animation = panel.animate([
          { opacity: 0, transform: 'translateY(10px)' },
          { opacity: 1, transform: 'translateY(0)' },
        ], { duration: 240, easing: 'cubic-bezier(.22, 1, .36, 1)' });
        fallbackAnimations.add(animation);
        animation.finished.then(() => fallbackAnimations.delete(animation), () => fallbackAnimations.delete(animation));
      }
      return;
    }

    // Keep names unique even if a visitor closes a gallery before its entrance ends.
    root.querySelectorAll('[data-gallery-transition]').forEach(element => {
      element.style.removeProperty('view-transition-name');
      element.removeAttribute('data-gallery-transition');
    });
    from.style.setProperty('view-transition-name', 'portfolio-screen');
    from.setAttribute('data-gallery-transition', '');
    root.classList.add('gallery-transitioning');
    let destination = null;
    let applied = false;
    const apply = () => {
      if (applied) return;
      applied = true;
      from.style.removeProperty('view-transition-name');
      from.removeAttribute('data-gallery-transition');
      update();
      destination = to?.();
      if (destination) {
        destination.style.setProperty('view-transition-name', 'portfolio-screen');
        destination.setAttribute('data-gallery-transition', '');
      }
    };
    const cleanup = current => {
      if (activeTransition !== current) return;
      [from, destination].forEach(element => {
        element?.style.removeProperty('view-transition-name');
        element?.removeAttribute('data-gallery-transition');
      });
      root.classList.remove('gallery-transitioning');
      activeTransition = null;
    };
    try {
      const current = document.startViewTransition(apply);
      activeTransition = current;
      current.ready.catch(() => {}); // Unsupported captures simply use the finished UI.
      current.updateCallbackDone.catch(() => { if (!applied) apply(); });
      current.finished.then(() => cleanup(current), () => cleanup(current));
    } catch {
      apply();
      [from, destination].forEach(element => {
        element?.style.removeProperty('view-transition-name');
        element?.removeAttribute('data-gallery-transition');
      });
      root.classList.remove('gallery-transitioning');
      activeTransition = null;
    }
  }
  function cancelMotion() {
    activeTransition?.skipTransition();
    fallbackAnimations.forEach(animation => animation.cancel());
    fallbackAnimations.clear();
  }
  window.PortfolioTransitions = { run: transition };

  const cards = [...document.querySelectorAll('#appGrid .project-card[data-project]')];
  const pendingCards = new Map();
  let pointerFrame = 0;
  function flushPointer() {
    pointerFrame = 0;
    pendingCards.forEach((position, card) => {
      card.style.setProperty('--light-x', `${position.x * 100}%`);
      card.style.setProperty('--light-y', `${position.y * 100}%`);
      card.style.setProperty('--tilt-x', `${position.tiltX}deg`);
      card.style.setProperty('--tilt-y', `${position.tiltY}deg`);
      card.style.setProperty('--glass-x', `${position.x * 100}%`);
    });
    pendingCards.clear();
  }
  function resetCard(card) {
    pendingCards.delete(card);
    card.classList.remove('is-pointing');
    ['--light-x', '--light-y', '--tilt-x', '--tilt-y', '--glass-x'].forEach(property => card.style.removeProperty(property));
  }
  cards.forEach(card => {
    const mockup = card.querySelector('.phone-mockup');
    card.addEventListener('pointermove', event => {
      if (!pointer.matches || motion.matches || event.pointerType === 'touch') return;
      const rect = card.getBoundingClientRect();
      const phone = mockup.getBoundingClientRect();
      const x = clamp((event.clientX - rect.left) / rect.width);
      const y = clamp((event.clientY - rect.top) / rect.height);
      const overPhone = event.clientY >= phone.top && event.clientY <= phone.bottom;
      const phoneY = clamp((event.clientY - phone.top) / phone.height);
      pendingCards.set(card, {
        x, y,
        tiltX: overPhone ? (0.5 - phoneY) * 3.2 : 0,
        tiltY: overPhone ? (x - 0.5) * 5.6 : 0,
      });
      card.classList.add('is-pointing');
      if (!pointerFrame) pointerFrame = requestAnimationFrame(flushPointer);
    }, { passive: true });
    card.addEventListener('pointerleave', () => resetCard(card));
    card.addEventListener('pointercancel', () => resetCard(card));
  });
  function resetPointers() {
    cancelAnimationFrame(pointerFrame);
    pointerFrame = 0;
    cards.forEach(resetCard);
  }
  pointer.addEventListener('change', resetPointers);

  const timeline = document.querySelector('#experience .timeline');
  const roles = timeline ? [...timeline.querySelectorAll('.timeline__item')] : [];
  let timelineVisible = false;
  let timelineFrame = 0;
  function drawTimeline() {
    timelineFrame = 0;
    if (!timeline || motion.matches || !timelineVisible || document.hidden) return;
    const rect = timeline.getBoundingClientRect();
    const focusY = window.innerHeight * 0.55;
    timeline.style.setProperty('--timeline-progress', clamp((focusY - rect.top) / Math.max(rect.height, 1)));
    let active = null;
    roles.forEach(role => {
      const reached = role.getBoundingClientRect().top + 12 <= focusY;
      role.classList.toggle('is-reached', reached);
      if (reached) active = role;
    });
    roles.forEach(role => role.classList.toggle('is-active', role === active));
  }
  function scheduleTimeline() {
    if (!timelineFrame && timelineVisible && !motion.matches && !document.hidden) timelineFrame = requestAnimationFrame(drawTimeline);
  }
  if (timeline && 'IntersectionObserver' in window) {
    timeline.classList.add('timeline--animated');
    new IntersectionObserver(entries => {
      timelineVisible = entries[0].isIntersecting;
      scheduleTimeline();
    }, { rootMargin: '100px 0px' }).observe(timeline);
    window.addEventListener('scroll', scheduleTimeline, { passive: true });
  }
  function resetMotion() {
    resetPointers();
    cancelMotion();
    cancelAnimationFrame(timelineFrame);
    timelineFrame = 0;
    if (motion.matches) {
      roles.forEach(role => role.classList.remove('is-active', 'is-reached'));
      timeline?.style.removeProperty('--timeline-progress');
    } else scheduleTimeline();
  }
  motion.addEventListener('change', resetMotion);
  window.addEventListener('resize', () => { resetPointers(); cancelMotion(); scheduleTimeline(); }, { passive: true });
  window.addEventListener('pagehide', () => {
    resetPointers(); cancelMotion(); cancelAnimationFrame(timelineFrame); timelineFrame = 0;
  });
  window.addEventListener('pageshow', scheduleTimeline);
  document.addEventListener('visibilitychange', () => {
    if (document.hidden) { resetPointers(); cancelMotion(); }
    else scheduleTimeline();
  });
})();
