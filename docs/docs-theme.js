/* FlowSquad Enterprise Docs — Shared JavaScript */
/* ================================================ */

(function () {
  'use strict';

  /* ── 0. Theme switcher ──────────────────────────────────── */
  var THEME_KEY = 'fs_theme';

  function applyTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme === 'dark' ? 'dark' : 'light');
    updateThemeIcon(theme);
  }

  function updateThemeIcon(theme) {
    var btn = document.getElementById('docs-theme-btn');
    if (btn) btn.textContent = (theme === 'dark') ? '☀️' : '🌙';
  }

  function toggleTheme() {
    var current = document.documentElement.getAttribute('data-theme') || 'light';
    var next = (current === 'dark') ? 'light' : 'dark';
    applyTheme(next);
    try { localStorage.setItem(THEME_KEY, next); } catch (_) {}
  }

  // Apply before first paint to prevent flash
  (function initTheme() {
    var stored = '';
    try { stored = localStorage.getItem(THEME_KEY) || ''; } catch (_) {}
    if (!stored && window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      stored = 'dark';
    }
    applyTheme(stored || 'light');
  }());

  // Keep global for any legacy inline onclick still in markup during transition
  window.docsToggleTheme = toggleTheme;

  // Wire the button listener and sync icon once DOM is ready
  function initThemeButton() {
    var btn = document.getElementById('docs-theme-btn');
    if (btn) {
      btn.addEventListener('click', toggleTheme);
      btn.removeAttribute('onclick'); // remove inline handler if present
    }
    updateThemeIcon(document.documentElement.getAttribute('data-theme') || 'light');
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initThemeButton);
  } else {
    initThemeButton();
  }

  /* ── 1. Mobile sidebar toggle ───────────────────────────── */
  function initSidebar() {
    var hamburger = document.querySelector('.hamburger');
    var sidebar   = document.querySelector('.docs-sidebar');
    var overlay   = document.querySelector('.sidebar-overlay');
    if (!hamburger || !sidebar) return;

    hamburger.addEventListener('click', function () {
      var open = sidebar.classList.toggle('open');
      if (overlay) overlay.classList.toggle('open', open);
    });

    if (overlay) {
      overlay.addEventListener('click', function () {
        sidebar.classList.remove('open');
        overlay.classList.remove('open');
      });
    }
  }

  /* ── 2. Active TOC highlighting (IntersectionObserver) ─── */
  function initTOC() {
    var tocLinks = Array.from(document.querySelectorAll('.docs-toc a, .sidebar-nav a.toc-link'));
    if (!tocLinks.length) return;

    var headings = Array.from(document.querySelectorAll('.docs-content h2[id], .docs-content h3[id]'));
    if (!headings.length) return;

    var activeId = null;

    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          activeId = entry.target.id;
          updateActive(activeId);
        }
      });
    }, {
      rootMargin: '-' + (parseInt(getComputedStyle(document.documentElement)
        .getPropertyValue('--nav-height') || '60') + 16) + 'px 0px -60% 0px',
      threshold: 0
    });

    headings.forEach(function (h) { observer.observe(h); });

    function updateActive(id) {
      tocLinks.forEach(function (a) {
        var href = a.getAttribute('href');
        var match = href && href === '#' + id;
        a.classList.toggle('toc-active', match);
        a.classList.toggle('active', match);
      });
    }

    // Highlight on click immediately
    tocLinks.forEach(function (a) {
      a.addEventListener('click', function () {
        var id = (a.getAttribute('href') || '').replace('#', '');
        if (id) updateActive(id);
      });
    });
  }

  /* ── 3. Smooth scroll for all anchor links ──────────────── */
  function initSmoothScroll() {
    document.addEventListener('click', function (e) {
      var a = e.target.closest('a[href^="#"]');
      if (!a) return;
      var id = a.getAttribute('href').slice(1);
      var target = id ? document.getElementById(id) : null;
      if (!target) return;
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      // update URL hash without jumping
      history.pushState(null, '', '#' + id);
    });
  }

  /* ── 4. Copy-to-clipboard on code blocks ────────────────── */
  function initCopyButtons() {
    var pres = document.querySelectorAll('.docs-content pre');
    pres.forEach(function (pre) {
      var btn = document.createElement('button');
      btn.className = 'copy-btn';
      btn.textContent = 'Copy';
      pre.appendChild(btn);

      btn.addEventListener('click', function () {
        var code = pre.querySelector('code') || pre;
        var text = code.innerText || code.textContent || '';
        if (navigator.clipboard && navigator.clipboard.writeText) {
          navigator.clipboard.writeText(text).then(function () {
            showCopied(btn);
          }).catch(function () {
            fallbackCopy(text, btn);
          });
        } else {
          fallbackCopy(text, btn);
        }
      });
    });
  }

  function showCopied(btn) {
    btn.textContent = '✓ Copied';
    btn.classList.add('copied');
    setTimeout(function () {
      btn.textContent = 'Copy';
      btn.classList.remove('copied');
    }, 1500);
  }

  function fallbackCopy(text, btn) {
    var ta = document.createElement('textarea');
    ta.value = text;
    ta.style.position = 'fixed';
    ta.style.opacity = '0';
    document.body.appendChild(ta);
    ta.select();
    try { document.execCommand('copy'); showCopied(btn); } catch (_) {}
    document.body.removeChild(ta);
  }

  /* ── 5. Highlight current guide in sidebar nav ──────────── */
  function initGuideHighlight() {
    var currentPage = window.location.pathname.split('/').pop() || 'index.html';
    var links = document.querySelectorAll('.sidebar-nav a.guide-link');
    links.forEach(function (a) {
      var href = (a.getAttribute('href') || '').split('/').pop();
      if (href === currentPage) {
        a.classList.add('active');
      }
    });
  }

  /* ── Init on DOMContentLoaded ───────────────────────────── */
  function init() {
    initSidebar();
    initTOC();
    initSmoothScroll();
    initCopyButtons();
    initGuideHighlight();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
