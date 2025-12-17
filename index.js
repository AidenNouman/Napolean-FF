/* =========================
   SCROLL REVEAL (MODERN & SMOOTH)
========================= */

const revealElements = document.querySelectorAll('.reveal');

const revealOnScroll = () => {
  const triggerBottom = window.innerHeight * 0.85;

  revealElements.forEach(el => {
    const elementTop = el.getBoundingClientRect().top;

    if (elementTop < triggerBottom) {
      el.classList.add('active');
    }
  });
};

window.addEventListener('scroll', revealOnScroll);
window.addEventListener('load', revealOnScroll);

/* =========================
   NAVBAR SCROLL EFFECT (OPTIMIZED)
========================= */

const nav = document.querySelector('nav');
let lastScrollY = 0;

window.addEventListener('scroll', () => {
  const currentScroll = window.scrollY;

  if (currentScroll > 30) {
    nav.style.background = 'rgba(0, 0, 0, 0.95)';
    nav.style.boxShadow = '0 8px 25px rgba(0,0,0,0.6)';
  } else {
    nav.style.background = 'rgba(0, 0, 0, 0.85)';
    nav.style.boxShadow = 'none';
  }

  lastScrollY = currentScroll;
});

/* =========================
   TYPING EFFECT (SMOOTH & SAFE)
========================= */

const typingTarget = document.getElementById('typing-text');
const text = 'Elite Free Fire Zone Push Strategist & Competitive Mentor';
let index = 0;

function typeText() {
  if (!typingTarget) return;

  if (index < text.length) {
    typingTarget.textContent += text.charAt(index);
    index++;
    setTimeout(typeText, 45);
  }
}

window.addEventListener('load', typeText);
