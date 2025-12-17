/* =========================
   GAMING SCROLL REVEAL
========================= */

const reveals = document.querySelectorAll('.reveal');

if (reveals.length) {
  const revealObserver = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
          observer.unobserve(entry.target); // reveal once
        }
      });
    },
    { threshold: 0.15 }
  );

  reveals.forEach(el => revealObserver.observe(el));
}

/* =========================
   NAVBAR SCROLL EFFECT
========================= */

const nav = document.querySelector('.navbar');

if (nav) {
  let lastState = false;

  window.addEventListener(
    'scroll',
    () => {
      const scrolled = window.scrollY > 30;

      if (scrolled !== lastState) {
        nav.style.background = scrolled
          ? 'rgba(0,0,0,0.95)'
          : 'rgba(0,0,0,0.9)';
        nav.style.boxShadow = scrolled
          ? '0 8px 25px rgba(0,0,0,0.6)'
          : 'none';

        lastState = scrolled;
      }
    },
    { passive: true }
  );
}

/* =========================
   TYPING EFFECT (HERO)
========================= */

const typingTarget = document.getElementById('typing-text');

if (typingTarget) {
  const text =
    'Elite Free Fire Zone Push Strategist & Competitive Mentor';
  let index = 0;

  function typeText() {
    typingTarget.textContent += text.charAt(index);
    index++;

    if (index < text.length) {
      setTimeout(typeText, 45);
    }
  }

  window.addEventListener('load', typeText, { once: true });
}
