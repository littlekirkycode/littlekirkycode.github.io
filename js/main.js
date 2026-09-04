/* The original portfolio content, with accessible navigation and phone galleries. */
(function () {
  'use strict';
    var projectData = {
        selfquest: {
            title: 'SelfQuest',
            role: 'Founder & Developer',
            desc: 'A gamified fitness tracker that turns your self-improvement journey into an RPG-style adventure. Built solo from concept to 1.3M+ downloads and 100K daily active users. Architected scalable backend systems including JWT auth, caching layers, and cost-optimised Azure cloud infrastructure. Delivered full-stack features across iOS and Android, from UX design to deployment and analytics with PostHog.',
            tags: ['Flutter', 'C#', 'SQL', 'Azure', 'PostHog'],
            tagClasses: ['tag--flutter', 'tag--csharp', 'tag--csharp', 'tag--azure', 'tag--web'],
            socials: [
                { platform: 'TikTok', count: '72K', label: 'followers', icon: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1v-3.52a6.37 6.37 0 00-.79-.05A6.34 6.34 0 003.15 15.2a6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.34-6.34V8.72a8.2 8.2 0 004.77 1.53v-3.4a4.85 4.85 0 01-1.01-.16z"/></svg>' },
                { platform: 'Discord', count: '16K', label: 'members', icon: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M20.317 4.37a19.791 19.791 0 00-4.885-1.515.074.074 0 00-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 00-5.487 0 12.64 12.64 0 00-.617-1.25.077.077 0 00-.079-.037A19.736 19.736 0 003.677 4.37a.07.07 0 00-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 00.031.057 19.9 19.9 0 005.993 3.03.078.078 0 00.084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 00-.041-.106 13.107 13.107 0 01-1.872-.892.077.077 0 01-.008-.128 10.2 10.2 0 00.372-.292.074.074 0 01.077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 01.078.01c.12.098.246.198.373.292a.077.077 0 01-.006.127 12.299 12.299 0 01-1.873.892.077.077 0 00-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 00.084.028 19.839 19.839 0 006.002-3.03.077.077 0 00.032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 00-.031-.03z"/></svg>' },
                { platform: 'Instagram', count: '1.5K', label: 'followers', icon: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>' }
            ],
            highlights: [
                '1.3M+ downloads across iOS and Android',
                '100K daily active users',
                'Scalable C# backend on Azure with JWT auth and caching',
                'Full analytics pipeline with PostHog',
                'Solo-built: design, development, marketing, and operations'
            ],
            screenshots: 4,
            galleryImages: [
                'assets/images/projects/selfquest/gallery/screenshot-1.png',
                'assets/images/projects/selfquest/gallery/screenshot-2.png',
                'assets/images/projects/selfquest/gallery/screenshot-3.png',
                'assets/images/projects/selfquest/gallery/screenshot-4.png'
            ],
            links: [
                { label: 'App Store', url: '#', icon: 'appstore' },
                { label: 'Google Play', url: '#', icon: 'playstore' },
                { label: 'Visit Website', url: 'https://selfquest.net', icon: 'external' }
            ]
        },
        nuremi: {
            title: 'Nuremi',
            role: 'Lead Developer & Technical Consultant',
            desc: 'An AI-powered concierge and interactive map application built in React Native with a Supabase backend. Led all architecture decisions, user experience design, and end-to-end technical implementation for the client.',
            tags: ['React Native', 'Supabase', 'JavaScript'],
            tagClasses: ['tag--react-native', 'tag--supabase', 'tag--js'],
            socials: [],
            highlights: [
                'Full AI-powered concierge system',
                'Interactive map with real-time data',
                'Supabase backend for auth and data sync',
                'Led architecture and UX decisions end-to-end'
            ],
            screenshots: 6,
            links: [
                { label: 'App Store', url: '#', icon: 'appstore' },
                { label: 'Google Play', url: '#', icon: 'playstore' }
            ]
        },
        selfgrow: {
            title: 'SelfGrow',
            role: 'Founder & Developer',
            desc: 'A habit-breaking app focused on social accountability through friend and group support. Building natively in Swift with a Supabase backend for real-time sync and authentication. Designed to help people break bad habits through community support rather than willpower alone.',
            tags: ['Swift', 'Supabase', 'iOS'],
            tagClasses: ['tag--swift', 'tag--supabase', 'tag--ios'],
            socials: [],
            highlights: [
                'Native Swift for optimal iOS performance',
                'Social accountability through friend groups',
                'Real-time sync with Supabase backend',
                'Focus on habit-breaking through community support'
            ],
            screenshots: 5,
            galleryImages: [
                'assets/images/projects/selfgrow/gallery/screenshot-1.png',
                'assets/images/projects/selfgrow/gallery/screenshot-2.png',
                'assets/images/projects/selfgrow/gallery/screenshot-3.png',
                'assets/images/projects/selfgrow/gallery/screenshot-4.png',
                'assets/images/projects/selfgrow/gallery/screenshot-5.png'
            ],
            links: [
                { label: 'App Store', url: '#', icon: 'appstore' }
            ]
        },
        selfaware: {
            title: 'SelfAware',
            role: 'Founder & Developer',
            desc: 'An AI-first concierge and life OS app built in React Native (Expo/TypeScript) with Supabase backend. Features an agentic AI system using OpenAI Responses API with custom MCP tooling, RAG pipeline with pgvector embeddings, real-time streaming chat, multi-modal input (Vision, Whisper), and 5+ third-party API integrations.',
            tags: ['React Native', 'Supabase', 'OpenAI', 'TypeScript'],
            tagClasses: ['tag--react-native', 'tag--supabase', 'tag--web', 'tag--web'],
            socials: [],
            highlights: [
                'Agentic AI system with OpenAI + custom MCP tooling',
                'RAG pipeline with pgvector embeddings and semantic search',
                'Real-time streaming AI chat with SSE',
                'Multi-modal input: Vision, Whisper, speech recognition',
                '5+ third-party API integrations (Amadeus, Ticketmaster, Google Places)'
            ],
            screenshots: 5,
            galleryImages: [
                'assets/images/projects/selfaware/gallery/screenshot-1.png',
                'assets/images/projects/selfaware/gallery/screenshot-2.png',
                'assets/images/projects/selfaware/gallery/screenshot-3.png',
                'assets/images/projects/selfaware/gallery/screenshot-4.png',
                'assets/images/projects/selfaware/gallery/screenshot-5.png'
            ],
            links: [
                { label: 'App Store', url: '#', icon: 'appstore' }
            ]
        }
    };


  const root = document.documentElement;
  const themeToggle = document.getElementById('themeToggle');
  const media = window.matchMedia('(max-width: 768px)');
  const motion = window.matchMedia('(prefers-reduced-motion: reduce)');
  function updateThemeLabel() {
    const dark = root.dataset.theme !== 'light';
    themeToggle.setAttribute('aria-label', `Switch to ${dark ? 'light' : 'dark'} mode`);
    themeToggle.setAttribute('aria-pressed', String(!dark));
    document.querySelector('meta[name="theme-color"]')?.setAttribute('content', dark ? '#0a0a0a' : '#fafafa');
  }
  updateThemeLabel();
  themeToggle.addEventListener('click', () => {
    root.dataset.theme = root.dataset.theme === 'dark' ? 'light' : 'dark';
    try { localStorage.setItem('theme', root.dataset.theme); } catch { /* Theme switching works without storage. */ }
    updateThemeLabel();
  });

  const nav = document.getElementById('nav');
  const hamburger = document.getElementById('hamburger');
  const navLinks = document.getElementById('navLinks');
  const navBackdrop = document.getElementById('navBackdrop');
  const modal = document.getElementById('projectModal');
  const viewer = document.getElementById('screenshotViewer');
  let menuOpen = false;
  const syncScrollLock = () => { document.body.style.overflow = menuOpen || modal.open || viewer.open ? 'hidden' : ''; };
  function setMenu(open, returnFocus = false) {
    menuOpen = open && media.matches;
    hamburger.classList.toggle('active', menuOpen);
    hamburger.setAttribute('aria-expanded', String(menuOpen));
    hamburger.setAttribute('aria-label', menuOpen ? 'Close navigation menu' : 'Open navigation menu');
    navLinks.classList.toggle('open', menuOpen);
    nav.classList.toggle('menu-open', menuOpen);
    navBackdrop.classList.toggle('open', menuOpen);
    navLinks.inert = media.matches && !menuOpen;
    document.querySelectorAll('main, .footer').forEach(el => { el.inert = menuOpen; });
    syncScrollLock();
    if (menuOpen) navLinks.querySelector('a').focus();
    else if (returnFocus) hamburger.focus();
  }
  hamburger.addEventListener('click', () => setMenu(!menuOpen, menuOpen));
  navBackdrop.addEventListener('click', () => setMenu(false, true));
  navLinks.querySelectorAll('a').forEach(link => link.addEventListener('click', () => setMenu(false)));
  media.addEventListener?.('change', () => setMenu(false));
  setMenu(false);

  // Preserve original project copy and every original screenshot.
  projectData.selfquest.links = [
    { label: 'App Store', url: 'https://apps.apple.com/us/app/selfquest/id6498150329' },
    { label: 'Google Play', url: 'https://play.google.com/store/apps/details?id=com.jameskirkham.sq&hl=en' },
    { label: 'Visit Website', url: 'https://selfquest.net' },
  ];
  for (const [id, data] of Object.entries(projectData)) {
    data.screens = data.galleryImages ? [`assets/images/projects/${id}/main.webp`, ...data.galleryImages.map(url => url.replace(/\.png$/, '.webp'))] : [];
  }
  const selectedScreens = {};
  let activeProject = null;
  let galleryIndex = 0;
  let modalOpener = null;
  let viewerOpener = null;
  let lastSwipe = 0;
  const wrapIndex = (index, length) => (index + length) % length;
  const makeButton = (label, text, onClick) => {
    const button = document.createElement('button');
    button.type = 'button'; button.className = 'gallery-button';
    button.setAttribute('aria-label', label); button.textContent = text;
    button.addEventListener('click', onClick); return button;
  };
  function setImage(image, url, alt) {
    image.alt = alt; image.draggable = false;
    image.onerror = () => {
      image.onerror = null;
      if (url.endsWith('.webp')) image.src = url.replace(/\.webp$/, '.png');
    };
    image.src = url;
  }
  function bindSwipe(element, callback) {
    let start = null;
    element.addEventListener('pointerdown', event => {
      if (event.pointerType === 'mouse') return;
      start = { x: event.clientX, y: event.clientY };
    });
    element.addEventListener('pointercancel', () => { start = null; });
    element.addEventListener('pointerup', event => {
      if (!start) return;
      const dx = event.clientX - start.x, dy = event.clientY - start.y;
      start = null;
      if (Math.abs(dx) > 40 && Math.abs(dx) > Math.abs(dy) * 1.3) {
        lastSwipe = Date.now(); callback(dx < 0 ? 1 : -1);
      }
    });
  }
  function showDialog(dialog) {
    if (typeof dialog.showModal === 'function') dialog.showModal();
    else dialog.setAttribute('open', '');
    dialog.classList.add('open'); syncScrollLock();
  }
  function hideDialog(dialog) {
    if (typeof dialog.close === 'function') dialog.close();
    else { dialog.removeAttribute('open'); dialog.dispatchEvent(new Event('close')); }
  }
  const modalPhones = document.getElementById('modalPhones');
  const modalClose = document.getElementById('modalClose');
  function updateGallery(nextIndex) {
    if (!activeProject?.screens.length) return;
    galleryIndex = wrapIndex(nextIndex, activeProject.screens.length);
    const alt = `${activeProject.title} app screen ${galleryIndex + 1} of ${activeProject.screens.length}`;
    setImage(document.getElementById('galleryImage'), activeProject.screens[galleryIndex], alt);
    document.getElementById('galleryCount').textContent = `Screen ${galleryIndex + 1} / ${activeProject.screens.length}`;
    modalPhones.querySelectorAll('.gallery-thumbnail').forEach((button, index) => button.setAttribute('aria-pressed', String(index === galleryIndex)));
    if (viewer.open) renderViewer();
  }
  function renderGallery() {
    modalPhones.replaceChildren();
    if (!activeProject.screens.length) {
      const note = document.createElement('p'); note.className = 'gallery-empty';
      note.textContent = 'Client project. Explore the role, technology and engineering details alongside.';
      modalPhones.append(note); return;
    }
    const stage = document.createElement('button'); stage.type = 'button'; stage.className = 'gallery-stage';
    stage.setAttribute('aria-label', `View ${activeProject.title} screenshot full screen`);
    const image = document.createElement('img'); image.id = 'galleryImage';
    const zoom = document.createElement('span'); zoom.className = 'gallery-stage__zoom'; zoom.textContent = 'View full screen ↗';
    stage.append(image, zoom);
    stage.addEventListener('click', () => { if (Date.now() - lastSwipe > 300) openViewer(stage); });
    bindSwipe(stage, direction => updateGallery(galleryIndex + direction));
    const controls = document.createElement('div'); controls.className = 'gallery-controls';
    const count = document.createElement('span'); count.id = 'galleryCount'; count.className = 'gallery-count'; count.setAttribute('aria-live', 'polite');
    controls.append(makeButton('Previous gallery screenshot', '←', () => updateGallery(galleryIndex - 1)), count, makeButton('Next gallery screenshot', '→', () => updateGallery(galleryIndex + 1)));
    const thumbnails = document.createElement('div'); thumbnails.className = 'gallery-thumbnails'; thumbnails.setAttribute('role', 'group'); thumbnails.setAttribute('aria-label', 'Choose an app screenshot');
    activeProject.screens.forEach((url, index) => {
      const button = document.createElement('button'); button.type = 'button'; button.className = 'gallery-thumbnail'; button.setAttribute('aria-label', `Show screenshot ${index + 1}`);
      const thumbnail = document.createElement('img'); thumbnail.loading = 'lazy'; thumbnail.alt = ''; thumbnail.src = url;
      button.append(thumbnail); button.addEventListener('click', () => updateGallery(index)); thumbnails.append(button);
    });
    modalPhones.append(stage, controls, thumbnails);
    updateGallery(galleryIndex);
  }
  function openModal(id, opener) {
    const data = projectData[id]; if (!data) return;
    if (menuOpen) setMenu(false);
    activeProject = data; galleryIndex = selectedScreens[id] || 0; modalOpener = opener || document.activeElement;
    document.getElementById('modalTitle').textContent = data.title;
    document.getElementById('modalRole').textContent = data.role;
    document.getElementById('modalDesc').textContent = data.desc;
    const tags = document.getElementById('modalTags'); tags.replaceChildren();
    data.tags.forEach((tag, index) => { const span = document.createElement('span'); span.className = `tag ${data.tagClasses[index] || ''}`; span.textContent = tag; tags.append(span); });
    const socials = document.getElementById('modalSocials'); socials.replaceChildren();
    data.socials.forEach(social => { const item = document.createElement('div'); item.className = 'modal__social-item'; item.innerHTML = social.icon; const count = document.createElement('span'); count.textContent = social.count; const label = document.createElement('small'); label.textContent = `${social.platform} ${social.label}`; item.append(count, label); socials.append(item); });
    const highlights = document.getElementById('modalHighlights'); highlights.replaceChildren();
    data.highlights.forEach(text => { const item = document.createElement('div'); item.className = 'modal__highlight'; item.textContent = text; highlights.append(item); });
    const actions = document.getElementById('modalActions'); actions.replaceChildren();
    data.links.filter(link => link.url !== '#').forEach(link => { const a = document.createElement('a'); a.href = link.url; a.className = 'btn btn--primary'; a.textContent = link.label; a.target = '_blank'; a.rel = 'noopener noreferrer'; actions.append(a); });
    renderGallery(); showDialog(modal); modal.querySelector('.modal__container').scrollTop = 0; modalClose.focus();
  }
  modalClose.addEventListener('click', () => hideDialog(modal));
  document.getElementById('modalBackdrop').addEventListener('click', () => hideDialog(modal));
  modal.addEventListener('close', () => { modal.classList.remove('open'); syncScrollLock(); modalOpener?.focus(); });
  document.querySelectorAll('#appGrid .project-card[data-project]').forEach(card => {
    const id = card.dataset.project, data = projectData[id];
    const mockup = card.querySelector('.phone-mockup');
    const detailButton = card.querySelector('.project-card__expand');
    detailButton.setAttribute('aria-label', `View ${data.title} details and screenshots`);
    mockup.setAttribute('role', 'button'); mockup.tabIndex = 0; mockup.setAttribute('aria-label', `Open ${data.title} details and gallery`);
    mockup.addEventListener('keydown', event => { if (event.key === 'Enter' || event.key === ' ') { event.preventDefault(); openModal(id, mockup); } });
    card.addEventListener('click', event => {
      if (event.target.closest('a, .phone-controls') || Date.now() - lastSwipe < 300) return;
      openModal(id, event.target.closest('button,[tabindex]') || detailButton);
    });
    if (!data.screens.length) return;
    selectedScreens[id] = 0;
    const controls = document.createElement('div'); controls.className = 'phone-controls'; controls.setAttribute('role','group'); controls.setAttribute('aria-label', `${data.title} preview screens`);
    const count = document.createElement('span'); count.className = 'phone-controls__count'; count.setAttribute('aria-live', 'polite'); count.textContent = `1 / ${data.screens.length}`;
    const changeScreen = direction => {
      selectedScreens[id] = wrapIndex(selectedScreens[id] + direction, data.screens.length);
      const index = selectedScreens[id];
      setImage(card.querySelector('img.device-screen'), data.screens[index], `${data.title} app screen ${index + 1} of ${data.screens.length}`);
      count.textContent = `${index + 1} / ${data.screens.length}`;
    };
    controls.append(makeButton(`Previous ${data.title} preview`, '←', () => changeScreen(-1)), count, makeButton(`Next ${data.title} preview`, '→', () => changeScreen(1)));
    mockup.after(controls); bindSwipe(mockup, changeScreen);
  });
  function renderViewer() {
    const alt = `${activeProject.title} — screen ${galleryIndex + 1} of ${activeProject.screens.length}`;
    document.getElementById('viewerTitle').textContent = activeProject.title;
    document.getElementById('viewerCaption').textContent = `${alt} · Use arrows or swipe to browse`;
    setImage(document.getElementById('viewerImage'), activeProject.screens[galleryIndex], alt);
  }
  function openViewer(opener) { viewerOpener = opener; renderViewer(); showDialog(viewer); document.getElementById('viewerClose').focus(); }
  document.getElementById('viewerClose').addEventListener('click', () => hideDialog(viewer));
  document.getElementById('viewerPrevious').addEventListener('click', () => updateGallery(galleryIndex - 1));
  document.getElementById('viewerNext').addEventListener('click', () => updateGallery(galleryIndex + 1));
  bindSwipe(document.getElementById('viewerStage'), direction => updateGallery(galleryIndex + direction));
  viewer.addEventListener('close', () => { viewer.classList.remove('open'); syncScrollLock(); viewerOpener?.focus(); });
  document.addEventListener('keydown', event => {
    if (viewer.open || modal.open) {
      if (activeProject?.screens.length && (event.key === 'ArrowLeft' || event.key === 'ArrowRight')) { event.preventDefault(); updateGallery(galleryIndex + (event.key === 'ArrowRight' ? 1 : -1)); }
      if (event.key === 'Escape' && typeof (viewer.open ? viewer : modal).close !== 'function') { event.preventDefault(); hideDialog(viewer.open ? viewer : modal); }
      return;
    }
    if (!menuOpen) return;
    if (event.key === 'Escape') { event.preventDefault(); setMenu(false, true); }
    if (event.key === 'Tab') {
      const targets = [...navLinks.querySelectorAll('a'), themeToggle, hamburger];
      const index = targets.indexOf(document.activeElement);
      if (event.shiftKey && index <= 0) { event.preventDefault(); targets.at(-1).focus(); }
      else if (!event.shiftKey && index === targets.length - 1) { event.preventDefault(); targets[0].focus(); }
    }
  });

  // Content is visible without JavaScript and reduced motion is respected.
  const reveals = [...document.querySelectorAll('.reveal')];
  if ('IntersectionObserver' in window && !motion.matches) {
    const observer = new IntersectionObserver(entries => entries.forEach(entry => { if (entry.isIntersecting) { entry.target.classList.add('visible'); observer.unobserve(entry.target); } }), { threshold: 0.04 });
    reveals.forEach(element => { if (element.getBoundingClientRect().top < window.innerHeight) element.classList.add('visible'); observer.observe(element); });
    root.classList.add('js');
  }
  window.addEventListener('beforeprint', () => reveals.forEach(el => el.classList.add('visible')));
  if ('IntersectionObserver' in window) {
    const sectionObserver = new IntersectionObserver(entries => entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      document.querySelectorAll('.nav__link').forEach(link => {
        const active = link.hash === `#${entry.target.id}`;
        link.classList.toggle('active', active);
        if (active) link.setAttribute('aria-current','location'); else link.removeAttribute('aria-current');
      });
    }), { rootMargin: '-15% 0px -60% 0px', threshold: 0 });
    document.querySelectorAll('main > section[id]').forEach(section => sectionObserver.observe(section));
  }
  document.querySelectorAll('a[href^="#"]').forEach(anchor => anchor.addEventListener('click', event => {
    const href = anchor.getAttribute('href');
    if (!href || href === '#') return;
    const target = document.getElementById(href.slice(1));
    if (!target) return;
    event.preventDefault();
    target.setAttribute('tabindex', '-1'); target.focus({ preventScroll: true });
    target.scrollIntoView({ behavior: motion.matches ? 'auto' : 'smooth' });
    history.replaceState(null, '', href);
  }));
  const contactForm = document.getElementById('contactForm');
  contactForm.addEventListener('submit', event => {
    event.preventDefault();
    if (!contactForm.reportValidity()) return;
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();
    const subject = encodeURIComponent('Portfolio Contact from ' + name);
    const body = encodeURIComponent('From: ' + name + '\nEmail: ' + email + '\n\n' + message);
    window.location.href = 'mailto:james.kirkham00@gmail.com?subject=' + subject + '&body=' + body;
  });
})();
