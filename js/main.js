/* ============================================
   JAMES KIRKHAM — PORTFOLIO
   Theme Toggle, Scroll Reveals, Nav, Modal
   ============================================ */

(function () {
    'use strict';

    // ---------- THEME TOGGLE ----------
    const themeToggle = document.getElementById('themeToggle');
    const root = document.documentElement;

    function setTheme(theme) {
        root.setAttribute('data-theme', theme);
        localStorage.setItem('theme', theme);
    }

    const saved = localStorage.getItem('theme');
    if (saved) {
        setTheme(saved);
    } else if (window.matchMedia('(prefers-color-scheme: light)').matches) {
        setTheme('light');
    }

    themeToggle.addEventListener('click', function () {
        const current = root.getAttribute('data-theme');
        setTheme(current === 'dark' ? 'light' : 'dark');
    });

    // ---------- MOBILE NAV ----------
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.getElementById('navLinks');

    hamburger.addEventListener('click', function () {
        hamburger.classList.toggle('active');
        navLinks.classList.toggle('open');
        document.body.style.overflow = navLinks.classList.contains('open') ? 'hidden' : '';
    });

    navLinks.querySelectorAll('.nav__link').forEach(function (link) {
        link.addEventListener('click', function () {
            hamburger.classList.remove('active');
            navLinks.classList.remove('open');
            document.body.style.overflow = '';
        });
    });

    // ---------- SCROLL REVEAL ----------
    var reveals = document.querySelectorAll('.reveal');

    if ('IntersectionObserver' in window) {
        var observer = new IntersectionObserver(function (entries) {
            entries.forEach(function (entry) {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    observer.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        });

        reveals.forEach(function (el) {
            observer.observe(el);
        });
    } else {
        reveals.forEach(function (el) {
            el.classList.add('visible');
        });
    }

    // ---------- NAVBAR SCROLL EFFECT ----------
    var nav = document.getElementById('nav');

    window.addEventListener('scroll', function () {
        var current = window.pageYOffset;
        if (current > 100) {
            nav.style.boxShadow = 'var(--shadow)';
        } else {
            nav.style.boxShadow = 'none';
        }
    }, { passive: true });

    // ---------- ACTIVE NAV LINK ON SCROLL ----------
    var sections = document.querySelectorAll('section[id]');
    var navLinksList = document.querySelectorAll('.nav__link');

    if ('IntersectionObserver' in window) {
        var sectionObserver = new IntersectionObserver(function (entries) {
            entries.forEach(function (entry) {
                if (entry.isIntersecting) {
                    var id = entry.target.getAttribute('id');
                    navLinksList.forEach(function (link) {
                        link.classList.remove('active');
                        if (link.getAttribute('href') === '#' + id) {
                            link.classList.add('active');
                        }
                    });
                }
            });
        }, {
            threshold: 0.3,
            rootMargin: '-72px 0px -50% 0px'
        });

        sections.forEach(function (section) {
            sectionObserver.observe(section);
        });
    }

    // ---------- PROJECT DETAIL MODAL ----------
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
            screenshots: 6,
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
        twinai: {
            title: 'TwinAI',
            role: 'Developer',
            desc: 'An AI-powered companion app that creates a digital twin to help users with daily tasks, decisions, and personal productivity. Built with React Native and Supabase for cross-platform support with a real-time backend.',
            tags: ['React Native', 'Supabase'],
            tagClasses: ['tag--react-native', 'tag--supabase'],
            socials: [],
            highlights: [
                'AI-powered digital companion',
                'Cross-platform with React Native (iOS & Android)',
                'Supabase backend for real-time data and auth',
                'Natural language interaction for daily tasks'
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
            screenshots: 6,
            links: [
                { label: 'App Store', url: '#', icon: 'appstore' }
            ]
        }
    };

    var modal = document.getElementById('projectModal');
    var modalBackdrop = document.getElementById('modalBackdrop');
    var modalClose = document.getElementById('modalClose');
    var modalTitle = document.getElementById('modalTitle');
    var modalRole = document.getElementById('modalRole');
    var modalDesc = document.getElementById('modalDesc');
    var modalTags = document.getElementById('modalTags');
    var modalSocials = document.getElementById('modalSocials');
    var modalHighlights = document.getElementById('modalHighlights');
    var modalActions = document.getElementById('modalActions');
    var modalPhones = document.getElementById('modalPhones');

    function openModal(projectId) {
        var data = projectData[projectId];
        if (!data) return;

        modalTitle.textContent = data.title;
        modalRole.textContent = data.role;
        modalDesc.textContent = data.desc;

        // Tags
        modalTags.innerHTML = '';
        data.tags.forEach(function (tag, i) {
            var span = document.createElement('span');
            span.className = 'tag ' + (data.tagClasses[i] || '');
            span.textContent = tag;
            modalTags.appendChild(span);
        });

        // Social stats
        modalSocials.innerHTML = '';
        if (data.socials.length > 0) {
            data.socials.forEach(function (social) {
                var div = document.createElement('div');
                div.className = 'modal__social-item';
                div.innerHTML = social.icon + '<span>' + social.count + '</span><small>' + social.label + '</small>';
                modalSocials.appendChild(div);
            });
        }

        // Highlights
        modalHighlights.innerHTML = '';
        data.highlights.forEach(function (h) {
            var div = document.createElement('div');
            div.className = 'modal__highlight';
            div.textContent = h;
            modalHighlights.appendChild(div);
        });

        // Phone mockups
        modalPhones.innerHTML = '';
        for (var i = 0; i < data.screenshots; i++) {
            var phone = document.createElement('div');
            phone.innerHTML = '<div class="phone-mockup__frame">' +
                '<div class="phone-mockup__notch"></div>' +
                '<div class="phone-mockup__screen">' +
                '<div class="phone-mockup__placeholder">' +
                '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><circle cx="8.5" cy="8.5" r="1.5"></circle><polyline points="21 15 16 10 5 21"></polyline></svg>' +
                '<span>Screen ' + (i + 1) + '</span>' +
                '</div></div></div>';
            modalPhones.appendChild(phone);
        }

        // Action buttons
        modalActions.innerHTML = '';
        data.links.forEach(function (link) {
            var a = document.createElement('a');
            a.href = link.url;
            a.className = 'btn btn--primary';
            a.textContent = link.label;
            if (link.url !== '#') {
                a.target = '_blank';
                a.rel = 'noopener';
            }
            modalActions.appendChild(a);
        });

        modal.classList.add('open');
        document.body.style.overflow = 'hidden';
    }

    function closeModal() {
        modal.classList.remove('open');
        document.body.style.overflow = '';
    }

    // Click handlers for project cards
    document.querySelectorAll('.project-card[data-project]').forEach(function (card) {
        card.addEventListener('click', function (e) {
            // Don't open modal if clicking an actual link
            if (e.target.closest('a')) return;
            openModal(this.getAttribute('data-project'));
        });
    });

    if (modalClose) modalClose.addEventListener('click', closeModal);
    if (modalBackdrop) modalBackdrop.addEventListener('click', closeModal);

    // Close on Escape
    document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape' && modal.classList.contains('open')) {
            closeModal();
        }
    });

    // ---------- IFRAME FALLBACK ----------
    document.querySelectorAll('.browser-mockup__viewport iframe').forEach(function (iframe) {
        var loaded = false;

        iframe.addEventListener('load', function () {
            loaded = true;
        });

        iframe.addEventListener('error', function () {
            var fallback = this.parentElement.querySelector('.browser-mockup__fallback');
            if (fallback) {
                fallback.style.display = 'flex';
                this.style.display = 'none';
            }
        });

        // If iframe hasn't loaded after 8s, show fallback
        setTimeout(function () {
            if (!loaded) {
                var fallback = iframe.parentElement.querySelector('.browser-mockup__fallback');
                if (fallback) {
                    fallback.style.display = 'flex';
                    iframe.style.display = 'none';
                }
            }
        }, 8000);
    });

    // ---------- SMOOTH SCROLL FOR CTA BUTTONS ----------
    document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
        anchor.addEventListener('click', function (e) {
            var target = document.querySelector(this.getAttribute('href'));
            if (target) {
                e.preventDefault();
                target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });

})();
