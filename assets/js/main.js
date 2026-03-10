/* ============================================================
   RAYCON CONSTRUCTION — Main JavaScript
   Vanilla JS · No dependencies
   ============================================================ */

(function () {
  'use strict';

  /* ------ Helpers ------ */
  const $ = (sel, ctx = document) => ctx.querySelector(sel);
  const $$ = (sel, ctx = document) => [...ctx.querySelectorAll(sel)];

  /* ------ DOM Ready ------ */
  document.addEventListener('DOMContentLoaded', () => {
    initNavbar();
    initMobileNav();
    initBackToTop();
    initScrollAnimations();
    initAccordions();
    initProjectsFilter();
    initProjectDetail();
    initContactForm();
    initDropdowns();
  });

  /* ==========================================================
     NAVBAR — scroll background & active link
     ========================================================== */
  function initNavbar() {
    const navbar = $('.navbar');
    if (!navbar) return;

    const onScroll = () => {
      navbar.classList.toggle('scrolled', window.scrollY > 40);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();

    // Mark active nav link
    const current = window.location.pathname.split('/').pop() || 'index.html';
    $$('.nav-links a, .mobile-nav a').forEach(link => {
      const href = link.getAttribute('href');
      if (href === current || (current === '' && href === 'index.html')) {
        link.classList.add('active');
      }
    });
  }

  /* ==========================================================
     MOBILE NAV — drawer with focus trap + escape
     ========================================================== */
  function initMobileNav() {
    const toggle = $('.nav-toggle');
    const drawer = $('.mobile-nav');
    const overlay = $('.nav-overlay');
    if (!toggle || !drawer) return;

    const focusableSelector = 'a[href], button, input, textarea, select, [tabindex]:not([tabindex="-1"])';
    let lastFocused = null;

    function open() {
      lastFocused = document.activeElement;
      toggle.setAttribute('aria-expanded', 'true');
      drawer.classList.add('open');
      if (overlay) overlay.classList.add('open');
      document.body.style.overflow = 'hidden';

      // Focus first link
      const firstFocusable = drawer.querySelector(focusableSelector);
      if (firstFocusable) firstFocusable.focus();

      document.addEventListener('keydown', trapFocus);
      document.addEventListener('keydown', escClose);
    }

    function close() {
      toggle.setAttribute('aria-expanded', 'false');
      drawer.classList.remove('open');
      if (overlay) overlay.classList.remove('open');
      document.body.style.overflow = '';
      document.removeEventListener('keydown', trapFocus);
      document.removeEventListener('keydown', escClose);
      if (lastFocused) lastFocused.focus();
    }

    function escClose(e) {
      if (e.key === 'Escape') close();
    }

    function trapFocus(e) {
      if (e.key !== 'Tab') return;
      const focusables = $$(focusableSelector, drawer);
      if (focusables.length === 0) return;
      const first = focusables[0];
      const last = focusables[focusables.length - 1];
      if (e.shiftKey) {
        if (document.activeElement === first) { e.preventDefault(); last.focus(); }
      } else {
        if (document.activeElement === last) { e.preventDefault(); first.focus(); }
      }
    }

    toggle.addEventListener('click', () => {
      const isOpen = toggle.getAttribute('aria-expanded') === 'true';
      isOpen ? close() : open();
    });

    if (overlay) overlay.addEventListener('click', close);

    // Close on link click
    $$('a', drawer).forEach(link => link.addEventListener('click', close));

    // Mobile sub-menu toggles
    $$('.mobile-nav__toggle', drawer).forEach(btn => {
      btn.addEventListener('click', () => {
        const sub = btn.nextElementSibling;
        if (!sub) return;
        const expanded = btn.getAttribute('aria-expanded') === 'true';
        btn.setAttribute('aria-expanded', String(!expanded));
        sub.classList.toggle('open');
      });
    });
  }

  /* ==========================================================
     DROPDOWNS (desktop nav)
     ========================================================== */
  function initDropdowns() {
    $$('.nav-dropdown').forEach(dropdown => {
      const toggle = dropdown.querySelector('.nav-dropdown__toggle');
      if (!toggle) return;

      toggle.addEventListener('click', (e) => {
        e.stopPropagation();
        const isOpen = dropdown.getAttribute('aria-expanded') === 'true';
        // Close all others
        $$('.nav-dropdown').forEach(d => d.setAttribute('aria-expanded', 'false'));
        dropdown.setAttribute('aria-expanded', String(!isOpen));
      });

      // Close on outside click
      document.addEventListener('click', () => {
        dropdown.setAttribute('aria-expanded', 'false');
      });

      // Close on escape
      dropdown.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
          dropdown.setAttribute('aria-expanded', 'false');
          toggle.focus();
        }
      });
    });
  }

  /* ==========================================================
     BACK TO TOP
     ========================================================== */
  function initBackToTop() {
    const btn = $('.back-to-top');
    if (!btn) return;

    window.addEventListener('scroll', () => {
      btn.classList.toggle('visible', window.scrollY > 500);
    }, { passive: true });

    btn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  /* ==========================================================
     SCROLL ANIMATIONS (Intersection Observer)
     ========================================================== */
  function initScrollAnimations() {
    const items = $$('.animate-on-scroll');
    if (!items.length) return;

    // Respect reduced motion
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      items.forEach(el => el.classList.add('in-view'));
      return;
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15, rootMargin: '0px 0px -40px 0px' });

    items.forEach(el => observer.observe(el));
  }

  /* ==========================================================
     ACCORDION (FAQ)
     ========================================================== */
  function initAccordions() {
    $$('.accordion').forEach(accordion => {
      accordion.addEventListener('click', (e) => {
        const trigger = e.target.closest('.accordion__trigger');
        if (!trigger) return;

        const panel = document.getElementById(trigger.getAttribute('aria-controls'));
        if (!panel) return;

        const isOpen = trigger.getAttribute('aria-expanded') === 'true';

        // Close all in this accordion
        $$('.accordion__trigger', accordion).forEach(t => {
          t.setAttribute('aria-expanded', 'false');
          const p = document.getElementById(t.getAttribute('aria-controls'));
          if (p) p.style.maxHeight = null;
        });

        if (!isOpen) {
          trigger.setAttribute('aria-expanded', 'true');
          panel.style.maxHeight = panel.scrollHeight + 'px';
        }
      });
    });
  }

  /* ==========================================================
     PROJECTS FILTER + RENDER
     ========================================================== */
  function initProjectsFilter() {
    const grid = $('#projects-grid');
    const filterBar = $('.filter-bar');
    if (!grid || !filterBar || typeof PROJECTS === 'undefined') return;

    // Render filter buttons
    const categories = ['All', ...new Set(PROJECTS.map(p => p.category))];
    filterBar.innerHTML = categories.map(cat =>
      `<button class="filter-btn${cat === 'All' ? ' active' : ''}" data-filter="${cat}">${cat}</button>`
    ).join('');

    // Event delegation for filters
    filterBar.addEventListener('click', (e) => {
      const btn = e.target.closest('.filter-btn');
      if (!btn) return;
      $$('.filter-btn', filterBar).forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      renderProjects(btn.dataset.filter);
    });

    function renderProjects(filter) {
      const filtered = filter === 'All' ? PROJECTS : PROJECTS.filter(p => p.category === filter);

      grid.style.opacity = '0';
      grid.style.transform = 'translateY(12px)';

      setTimeout(() => {
        grid.innerHTML = filtered.map(project => `
          <article class="card">
            <div class="card__img img-placeholder" aria-hidden="true">
              <span>${project.category} — Photo</span>
            </div>
            <div class="card__body">
              <div class="card__meta">
                <span class="chip chip--accent">${project.category}</span>
                <span class="chip">${project.location.split(',')[0]}</span>
              </div>
              <h3 class="card__title" style="margin-top:var(--sp-3)">${project.title}</h3>
              <p class="card__text">${project.overview.substring(0, 140)}…</p>
              <a href="project.html?id=${project.id}" class="card__link">View project</a>
            </div>
          </article>
        `).join('');

        // Trigger reflow
        void grid.offsetHeight;
        grid.style.opacity = '1';
        grid.style.transform = 'translateY(0)';
        grid.style.transition = 'opacity .35s ease, transform .35s ease';
      }, 200);
    }

    renderProjects('All');
  }

  /* ==========================================================
     PROJECT DETAIL (single project page)
     ========================================================== */
  function initProjectDetail() {
    const container = $('#project-detail');
    if (!container || typeof PROJECTS === 'undefined') return;

    const params = new URLSearchParams(window.location.search);
    const id = params.get('id');
    const project = PROJECTS.find(p => p.id === id);

    if (!project) {
      container.innerHTML = `
        <div class="not-found">
          <h2>Project Not Found</h2>
          <p>We couldn't find a project matching that reference. It may have been moved or the link may be incorrect.</p>
          <a href="projects.html" class="btn btn--primary">View All Projects</a>
        </div>`;
      // Update page title
      document.title = 'Project Not Found — Raycon Construction';
      return;
    }

    // Update page title & breadcrumb
    document.title = `${project.title} — Raycon Construction`;
    const breadcrumbTitle = $('#breadcrumb-title');
    if (breadcrumbTitle) breadcrumbTitle.textContent = project.title;

    // Render hero
    const heroTitle = $('#project-hero-title');
    const heroLocation = $('#project-hero-location');
    if (heroTitle) heroTitle.textContent = project.title;
    if (heroLocation) heroLocation.textContent = `${project.location} · ${project.year}`;

    // Render detail
    container.innerHTML = `
      <div class="project-detail__meta">
        <div class="project-detail__meta-item">
          <strong>Location</strong>${project.location}
        </div>
        <div class="project-detail__meta-item">
          <strong>Year</strong>${project.year}
        </div>
        <div class="project-detail__meta-item">
          <strong>Category</strong>${project.category}
        </div>
      </div>

      <h3>Overview</h3>
      <p>${project.overview}</p>

      <div class="project-detail__gallery">
        ${Array.from({ length: project.images }, (_, i) => `
          <div class="project-detail__gallery-img" role="img" aria-label="${project.title} — Image ${i + 1}">
            Image ${i + 1} Placeholder
          </div>
        `).join('')}
      </div>

      <h3>Scope of Work</h3>
      <p>${project.scope}</p>

      <h3 style="margin-top:var(--sp-6)">Project Highlights</h3>
      <ul class="project-detail__highlights">
        ${project.highlights.map(h => `<li>${h}</li>`).join('')}
      </ul>

      <div style="margin-top:var(--sp-8)">
        <a href="projects.html" class="btn btn--secondary">← Back to Projects</a>
        <a href="contact.html" class="btn btn--primary" style="margin-left:var(--sp-3)">Discuss Your Project</a>
      </div>
    `;
  }

  /* ==========================================================
     CONTACT FORM — validation + localStorage + toast
     ========================================================== */
  function initContactForm() {
    const form = $('#contact-form');
    if (!form) return;

    form.addEventListener('submit', (e) => {
      e.preventDefault();
      if (!validateForm(form)) return;

      // Gather data
      const data = Object.fromEntries(new FormData(form));
      data.submittedAt = new Date().toISOString();

      // Save to localStorage
      const messages = JSON.parse(localStorage.getItem('raycon_messages') || '[]');
      messages.push(data);
      localStorage.setItem('raycon_messages', JSON.stringify(messages));

      // Reset form
      form.reset();
      clearErrors(form);

      // Show toast
      showToast('Thank you! Your message has been received. We\'ll be in touch shortly.');
    });

    // Live validation on blur
    form.addEventListener('focusout', (e) => {
      if (e.target.matches('.form-input, .form-select, .form-textarea')) {
        validateField(e.target);
      }
    });
  }

  function validateForm(form) {
    let valid = true;
    $$('.form-input[required], .form-select[required], .form-textarea[required]', form).forEach(field => {
      if (!validateField(field)) valid = false;
    });
    // Focus first invalid
    if (!valid) {
      const firstError = form.querySelector('.error');
      if (firstError) firstError.focus();
    }
    return valid;
  }

  function validateField(field) {
    const errorEl = field.parentElement.querySelector('.form-error');
    let message = '';

    if (field.required && !field.value.trim()) {
      message = 'This field is required.';
    } else if (field.type === 'email' && field.value.trim()) {
      const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRe.test(field.value.trim())) message = 'Please enter a valid email address.';
    } else if (field.type === 'tel' && field.value.trim()) {
      const phoneRe = /^[+\d\s()-]{7,}$/;
      if (!phoneRe.test(field.value.trim())) message = 'Please enter a valid phone number.';
    }

    if (message) {
      field.classList.add('error');
      if (errorEl) { errorEl.textContent = message; errorEl.classList.add('visible'); }
      return false;
    } else {
      field.classList.remove('error');
      if (errorEl) { errorEl.textContent = ''; errorEl.classList.remove('visible'); }
      return true;
    }
  }

  function clearErrors(form) {
    $$('.form-input, .form-select, .form-textarea', form).forEach(f => f.classList.remove('error'));
    $$('.form-error', form).forEach(e => { e.textContent = ''; e.classList.remove('visible'); });
  }

  /* ==========================================================
     TOAST NOTIFICATION
     ========================================================== */
  function showToast(message, duration = 4000) {
    // Remove existing
    const existing = $('.toast');
    if (existing) existing.remove();

    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.setAttribute('role', 'status');
    toast.setAttribute('aria-live', 'polite');
    toast.textContent = message;
    document.body.appendChild(toast);

    requestAnimationFrame(() => {
      toast.classList.add('show');
    });

    setTimeout(() => {
      toast.classList.remove('show');
      setTimeout(() => toast.remove(), 400);
    }, duration);
  }

  /* ==========================================================
     RENDER HELPERS — used by pages that build from data.js
     ========================================================== */

  // Render service cards (used on index.html)
  window.renderServiceCards = function (containerId, limit) {
    const container = document.getElementById(containerId);
    if (!container || typeof SERVICES === 'undefined') return;
    const items = limit ? SERVICES.slice(0, limit) : SERVICES;

    container.innerHTML = items.map(s => `
      <div class="service-card animate-on-scroll">
        <div class="service-card__icon">${getServiceIcon(s.icon)}</div>
        <h3 class="service-card__title">${s.title}</h3>
        <p class="service-card__text">${s.shortDesc}</p>
      </div>
    `).join('');

    // Re-observe new elements
    initScrollAnimations();
  };

  // Render featured projects (used on index.html)
  window.renderFeaturedProjects = function (containerId, limit) {
    const container = document.getElementById(containerId);
    if (!container || typeof PROJECTS === 'undefined') return;
    const items = limit ? PROJECTS.slice(0, limit) : PROJECTS;

    container.innerHTML = items.map(p => `
      <article class="card animate-on-scroll">
        <div class="card__img img-placeholder" aria-hidden="true">
          <span>${p.category} — Photo</span>
        </div>
        <div class="card__body">
          <div class="card__meta">
            <span class="chip chip--accent">${p.category}</span>
            <span class="chip">${p.location.split(',')[0]}</span>
          </div>
          <h3 class="card__title" style="margin-top:var(--sp-3)">${p.title}</h3>
          <p class="card__text">${p.overview.substring(0, 120)}…</p>
          <a href="project.html?id=${p.id}" class="card__link">View project</a>
        </div>
      </article>
    `).join('');

    initScrollAnimations();
  };

  // Render testimonials
  window.renderTestimonials = function (containerId) {
    const container = document.getElementById(containerId);
    if (!container || typeof TESTIMONIALS === 'undefined') return;

    container.innerHTML = TESTIMONIALS.map(t => `
      <div class="testimonial-card animate-on-scroll">
        <p class="testimonial-card__quote">${t.quote}</p>
        <div class="testimonial-card__author">
          <div class="testimonial-card__avatar">${t.initials}</div>
          <div>
            <div class="testimonial-card__name">${t.name}</div>
            <div class="testimonial-card__role">${t.role}</div>
          </div>
        </div>
      </div>
    `).join('');

    initScrollAnimations();
  };

  // Render team cards
  window.renderTeam = function (containerId) {
    const container = document.getElementById(containerId);
    if (!container || typeof TEAM === 'undefined') return;

    container.innerHTML = TEAM.map(m => `
      <div class="team-card animate-on-scroll">
        <div class="team-card__avatar">${m.initials}</div>
        <h3 class="team-card__name">${m.name}</h3>
        <p class="team-card__role">${m.role}</p>
        <p class="team-card__bio">${m.bio}</p>
      </div>
    `).join('');

    initScrollAnimations();
  };

  // Render service details (services page)
  window.renderServiceDetails = function (containerId) {
    const container = document.getElementById(containerId);
    if (!container || typeof SERVICES === 'undefined') return;

    container.innerHTML = SERVICES.map(s => `
      <div class="service-detail animate-on-scroll">
        <div>
          <h3 class="service-detail__title">${s.title}</h3>
          <p class="service-detail__text">${s.longDesc}</p>
          <a href="contact.html" class="btn btn--primary btn--sm" style="margin-top:var(--sp-5)">Enquire About This Service</a>
        </div>
        <div class="service-detail__img" role="img" aria-label="${s.title}">
          ${s.title} — Photo
        </div>
      </div>
    `).join('');

    initScrollAnimations();
  };

  // Render FAQ accordion
  window.renderFAQs = function (containerId) {
    const container = document.getElementById(containerId);
    if (!container || typeof FAQS === 'undefined') return;

    container.innerHTML = FAQS.map((faq, i) => `
      <div class="accordion__item">
        <button class="accordion__trigger" aria-expanded="false" aria-controls="faq-panel-${i}" id="faq-trigger-${i}">
          <span>${faq.question}</span>
          <svg class="accordion__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" aria-hidden="true">
            <line x1="12" y1="5" x2="12" y2="19"></line>
            <line x1="5" y1="12" x2="19" y2="12"></line>
          </svg>
        </button>
        <div class="accordion__panel" id="faq-panel-${i}" role="region" aria-labelledby="faq-trigger-${i}">
          <div class="accordion__panel__inner">${faq.answer}</div>
        </div>
      </div>
    `).join('');

    initAccordions();
  };

  /* ==========================================================
     SERVICE ICONS (simple inline SVGs)
     ========================================================== */
  function getServiceIcon(icon) {
    const icons = {
      'home-luxury': `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>`,
      'home-heart': `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><path d="M12 17.5s-3-2.5-3-4a1.5 1.5 0 0 1 3-1 1.5 1.5 0 0 1 3 1c0 1.5-3 4-3 4z"/></svg>`,
      'tools': `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></svg>`,
      'blueprint': `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="3" width="20" height="18" rx="2"/><line x1="8" y1="3" x2="8" y2="21"/><line x1="2" y1="9" x2="22" y2="9"/><line x1="2" y1="15" x2="8" y2="15"/></svg>`,
      'shield': `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><polyline points="9 12 11 14 15 10"/></svg>`,
      'key': `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M21 2l-2 2m-7.61 7.61a5.5 5.5 0 1 1-7.778 7.778 5.5 5.5 0 0 1 7.777-7.777zm0 0L15.5 7.5m0 0l3 3L22 7l-3-3m-3.5 3.5L19 4"/></svg>`
    };
    return icons[icon] || icons['home-luxury'];
  }

})();
