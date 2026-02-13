/* ============================================
   JAMES KIRKHAM — PORTFOLIO
   Theme Toggle, Scroll Reveals, Nav, Slider
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

    // Load saved theme or respect system preference
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

    // Close nav when a link is clicked
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
        // Fallback: show everything
        reveals.forEach(function (el) {
            el.classList.add('visible');
        });
    }

    // ---------- NAVBAR SCROLL EFFECT ----------
    var nav = document.getElementById('nav');
    var lastScroll = 0;

    window.addEventListener('scroll', function () {
        var current = window.pageYOffset;

        if (current > 100) {
            nav.style.boxShadow = 'var(--shadow)';
        } else {
            nav.style.boxShadow = 'none';
        }

        lastScroll = current;
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
            rootMargin: '-' + (parseInt(getComputedStyle(root).getPropertyValue('--nav-height')) || 72) + 'px 0px -50% 0px'
        });

        sections.forEach(function (section) {
            sectionObserver.observe(section);
        });
    }

    // ---------- TESTIMONIAL SLIDER ----------
    var slider = document.getElementById('testimonialSlider');
    var prevBtn = document.getElementById('testimonialPrev');
    var nextBtn = document.getElementById('testimonialNext');
    var dotsContainer = document.getElementById('testimonialDots');
    var cards = slider ? slider.querySelectorAll('.testimonial-card') : [];
    var currentSlide = 0;

    function createDots() {
        if (!dotsContainer) return;
        for (var i = 0; i < cards.length; i++) {
            var dot = document.createElement('button');
            dot.className = 'testimonials__dot' + (i === 0 ? ' active' : '');
            dot.setAttribute('aria-label', 'Go to testimonial ' + (i + 1));
            dot.setAttribute('data-index', i);
            dot.addEventListener('click', function () {
                goToSlide(parseInt(this.getAttribute('data-index')));
            });
            dotsContainer.appendChild(dot);
        }
    }

    function updateDots() {
        if (!dotsContainer) return;
        var dots = dotsContainer.querySelectorAll('.testimonials__dot');
        dots.forEach(function (dot, i) {
            dot.classList.toggle('active', i === currentSlide);
        });
    }

    function goToSlide(index) {
        if (!slider || index < 0 || index >= cards.length) return;
        currentSlide = index;
        var card = cards[currentSlide];
        slider.scrollTo({
            left: card.offsetLeft - slider.offsetLeft,
            behavior: 'smooth'
        });
        updateDots();
    }

    if (prevBtn) {
        prevBtn.addEventListener('click', function () {
            goToSlide(currentSlide > 0 ? currentSlide - 1 : cards.length - 1);
        });
    }

    if (nextBtn) {
        nextBtn.addEventListener('click', function () {
            goToSlide(currentSlide < cards.length - 1 ? currentSlide + 1 : 0);
        });
    }

    // Sync dots with scroll-snap
    if (slider) {
        var scrollTimeout;
        slider.addEventListener('scroll', function () {
            clearTimeout(scrollTimeout);
            scrollTimeout = setTimeout(function () {
                var scrollLeft = slider.scrollLeft;
                var cardWidth = cards[0].offsetWidth + parseInt(getComputedStyle(slider).gap || 0);
                var index = Math.round(scrollLeft / cardWidth);
                if (index >= 0 && index < cards.length && index !== currentSlide) {
                    currentSlide = index;
                    updateDots();
                }
            }, 50);
        }, { passive: true });
    }

    createDots();

    // ---------- IFRAME FALLBACK ----------
    // If iframe fails to load, show the fallback
    document.querySelectorAll('.browser-mockup__viewport iframe').forEach(function (iframe) {
        iframe.addEventListener('error', function () {
            var fallback = this.parentElement.querySelector('.browser-mockup__fallback');
            if (fallback) {
                fallback.style.display = 'flex';
                this.style.display = 'none';
            }
        });

        // Also set a timeout in case the iframe loads but is blank
        setTimeout(function () {
            try {
                // If we can't access the iframe content (CORS), show fallback
                if (iframe.contentDocument && iframe.contentDocument.body && !iframe.contentDocument.body.innerHTML) {
                    var fallback = iframe.parentElement.querySelector('.browser-mockup__fallback');
                    if (fallback) {
                        fallback.style.display = 'flex';
                    }
                }
            } catch (e) {
                // CORS error means site loaded successfully — iframe is fine
            }
        }, 5000);
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
