/* NUPP Student Life — Main JS */

// ===== NAV SCROLL =====
const nav = document.querySelector('nav');
window.addEventListener('scroll', () => {
  nav?.classList.toggle('scrolled', window.scrollY > 20);
  const btn = document.getElementById('back-to-top');
  btn?.classList.toggle('visible', window.scrollY > 400);
}, { passive: true });

// ===== HAMBURGER =====
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
hamburger?.addEventListener('click', () => {
  navLinks.classList.toggle('open');
  const spans = hamburger.querySelectorAll('span');
  hamburger.classList.toggle('active');
  if (hamburger.classList.contains('active')) {
    spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
    spans[1].style.opacity = '0';
    spans[2].style.transform = 'rotate(-45deg) translate(5px, -5px)';
  } else {
    spans.forEach(s => { s.style.transform = ''; s.style.opacity = ''; });
  }
});

// ===== ACTIVE NAV LINK =====
const currentPath = window.location.pathname;
document.querySelectorAll('.nav-links a').forEach(a => {
  const href = a.getAttribute('href');
  if (currentPath === href || (href !== '/' && currentPath.includes(href.replace('.html', '')))) {
    a.classList.add('active');
  }
});

// ===== FADE-UP ANIMATION =====
const fadeEls = document.querySelectorAll('.fade-up');
const io = new IntersectionObserver((entries) => {
  entries.forEach((e, i) => {
    if (e.isIntersecting) {
      setTimeout(() => e.target.classList.add('visible'), i * 80);
      io.unobserve(e.target);
    }
  });
}, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });
fadeEls.forEach(el => io.observe(el));

// ===== TABS =====
document.querySelectorAll('.tab-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    const target = btn.dataset.tab;
    const parent = btn.closest('.tabs, .section, main');
    parent?.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
    parent?.querySelectorAll('.tab-pane').forEach(p => p.classList.remove('active'));
    btn.classList.add('active');
    parent?.querySelector(`[data-pane="${target}"]`)?.classList.add('active');
  });
});

// ===== BACK TO TOP =====
document.getElementById('back-to-top')?.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// ===== LIGHTBOX =====
const lightbox = document.getElementById('lightbox');
const lightboxImg = lightbox?.querySelector('img');
document.querySelectorAll('.gallery-item').forEach(item => {
  item.addEventListener('click', () => {
    const img = item.querySelector('img');
    if (lightboxImg && img) {
      lightboxImg.src = img.src;
      lightbox.classList.add('open');
    }
  });
});
document.querySelector('.lightbox-close')?.addEventListener('click', () => {
  lightbox?.classList.remove('open');
});
lightbox?.addEventListener('click', (e) => {
  if (e.target === lightbox) lightbox.classList.remove('open');
});

// ===== TAG FILTER =====
document.querySelectorAll('.tag').forEach(tag => {
  tag.addEventListener('click', () => {
    const group = tag.closest('.tag-cloud');
    group?.querySelectorAll('.tag').forEach(t => t.classList.remove('active'));
    tag.classList.add('active');
    const filter = tag.dataset.filter;
    document.querySelectorAll('[data-category]').forEach(card => {
      card.style.display = (!filter || filter === 'all' || card.dataset.category === filter) ? '' : 'none';
    });
  });
});

// ===== COUNTER ANIMATION =====
function animateCounter(el) {
  const target = parseInt(el.dataset.target, 10);
  const duration = 1800;
  const step = target / (duration / 16);
  let current = 0;
  const timer = setInterval(() => {
    current += step;
    if (current >= target) { current = target; clearInterval(timer); }
    el.textContent = Math.floor(current).toLocaleString() + (el.dataset.suffix || '');
  }, 16);
}
const counterObs = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting && !e.target.dataset.counted) {
      e.target.dataset.counted = '1';
      animateCounter(e.target);
      counterObs.unobserve(e.target);
    }
  });
}, { threshold: 0.5 });
document.querySelectorAll('[data-target]').forEach(el => counterObs.observe(el));

// ===== SEARCH FILTER (client-side) =====
const searchInput = document.getElementById('search-input');
searchInput?.addEventListener('input', () => {
  const q = searchInput.value.toLowerCase();
  document.querySelectorAll('[data-searchable]').forEach(el => {
    el.style.display = el.textContent.toLowerCase().includes(q) ? '' : 'none';
  });
});
