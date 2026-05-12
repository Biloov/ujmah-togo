/* ============================================
   UJMAH — Main JavaScript
   ============================================ */
document.addEventListener('DOMContentLoaded', () => {
  initNavbar();
  initScrollReveal();
  initCounters();
  initContactForm();
});

/* ---- Navbar ---- */
function initNavbar() {
  const hamburger = document.querySelector('.navbar__hamburger');
  const links = document.querySelector('.navbar__links');
  const navbar = document.querySelector('.navbar');

  if (hamburger && links) {
    hamburger.addEventListener('click', () => {
      hamburger.classList.toggle('active');
      links.classList.toggle('open');
    });
    links.querySelectorAll('.navbar__link').forEach(link => {
      link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        links.classList.remove('open');
      });
    });
  }

  if (navbar) {
    let lastScroll = 0;
    window.addEventListener('scroll', () => {
      const currentScroll = window.scrollY;
      navbar.classList.toggle('scrolled', currentScroll > 20);
      lastScroll = currentScroll;
    }, { passive: true });
  }
}

/* ---- Scroll Reveal ---- */
function initScrollReveal() {
  const reveals = document.querySelectorAll('.reveal');
  if (!reveals.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15, rootMargin: '0px 0px -40px 0px' });

  reveals.forEach(el => observer.observe(el));
}

/* ---- Counter Animation ---- */
function initCounters() {
  const counters = document.querySelectorAll('[data-counter]');
  if (!counters.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        animateCounter(entry.target);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });

  counters.forEach(el => observer.observe(el));
}

function animateCounter(el) {
  const target = parseInt(el.dataset.counter, 10);
  const suffix = el.dataset.suffix || '';
  const duration = 2000;
  const start = performance.now();

  function update(now) {
    const elapsed = now - start;
    const progress = Math.min(elapsed / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3);
    el.textContent = Math.floor(eased * target) + suffix;
    if (progress < 1) requestAnimationFrame(update);
  }
  requestAnimationFrame(update);
}

/* ---- Contact Form Validation ---- */
function initContactForm() {
  const form = document.getElementById('contactForm');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    let valid = true;

    form.querySelectorAll('[required]').forEach(input => {
      const error = input.parentElement.querySelector('.form-error');
      if (!input.value.trim()) {
        input.classList.add('error');
        if (error) error.style.display = 'block';
        valid = false;
      } else {
        input.classList.remove('error');
        if (error) error.style.display = 'none';
      }
    });

    const email = form.querySelector('[type="email"]');
    if (email && email.value && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value)) {
      email.classList.add('error');
      const err = email.parentElement.querySelector('.form-error');
      if (err) { err.textContent = 'Adresse email invalide'; err.style.display = 'block'; }
      valid = false;
    }

    if (valid) {
      const btn = form.querySelector('button[type="submit"]');
      btn.textContent = '✓ Message envoyé !';
      btn.style.background = '#22c55e';
      form.reset();
      setTimeout(() => { btn.textContent = 'Envoyer le message'; btn.style.background = ''; }, 3000);
    }
  });
}

/* ---- Helper: Copy to Clipboard ---- */
function copyToClipboard(text, btn) {
  if (!navigator.clipboard) return;
  navigator.clipboard.writeText(text).then(() => {
    const originalContent = btn.innerHTML;
    btn.innerHTML = '<span class="material-symbols-outlined">check</span> Copié !';
    btn.classList.add('copied');
    setTimeout(() => {
      btn.innerHTML = originalContent;
      btn.classList.remove('copied');
    }, 2000);
  });
}
window.copyToClipboard = copyToClipboard;
