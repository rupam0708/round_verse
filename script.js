/**
 * RoundVerse Landing Page — Minimal JavaScript
 * Smooth scroll, header scroll state, intersection observer animations
 */
(function () {
  'use strict';

  const header = document.getElementById('header');
  const navLinks = document.querySelectorAll('.nav-link[href^="#"]');
  const animatedElements = document.querySelectorAll('[style*="animation:"]');

  /* --- Header scroll effect --- */
  function onScroll() {
    if (window.scrollY > 20) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  /* --- Smooth scroll for anchor links --- */
  navLinks.forEach(function (link) {
    link.addEventListener('click', function (e) {
      const href = link.getAttribute('href');
      if (href.startsWith('#')) {
        e.preventDefault();
        const target = document.querySelector(href);
        if (target) {
          const headerHeight = header.offsetHeight;
          const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - headerHeight;
          window.scrollTo({ top: targetPosition, behavior: 'smooth' });
        }
      }
    });
  });

  /* --- Intersection Observer for fade-in animations --- */
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.style.animationPlayState = 'running';
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

    animatedElements.forEach(function (el) {
      el.style.animationPlayState = 'paused';
      observer.observe(el);
    });
  } else {
    /* Fallback for browsers without IntersectionObserver */
    animatedElements.forEach(function (el) {
      el.style.animationPlayState = 'running';
    });
  }

  /* --- Mobile nav toggle (if needed later) --- */
  // const navToggle = document.querySelector('.nav-toggle');
  // const navMenu = document.querySelector('.nav-links');
  // if (navToggle && navMenu) { ... }

  /* --- External link safety --- */
  document.querySelectorAll('a[target="_blank"]').forEach(function (link) {
    if (!link.hasAttribute('rel')) {
      link.setAttribute('rel', 'noopener noreferrer');
    }
  });

  console.log('RoundVerse landing page loaded');
})();