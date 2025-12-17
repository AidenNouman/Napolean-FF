/* =========================
   GAMING SCROLL REVEAL
========================= */

const reveals = document.querySelectorAll('.reveal');

function revealOnScroll() {
  const triggerPoint = window.innerHeight * 0.85;

  reveals.forEach(el => {
    const top = el.getBoundingClientRect().top;
    if (top < triggerPoint) {
      el.classList.add('active');
    }
  });
}

window.addEventListener('scroll', revealOnScroll);
window.addEventListener('load', revealOnScroll);

/* =========================
   NAVBAR SCROLL EFFECT
========================= */

const nav = document.querySelector('nav');

window.addEventListener('scroll', () => {
  if (window.scrollY > 30) {
    nav.style.background = 'rgba(0,0,0,0.95)';
    nav.style.boxShadow = '0 8px 25px rgba(0,0,0,0.6)';
  } else {
    nav.style.background = 'rgba(0,0,0,0.85)';
    nav.style.boxShadow = 'none';
  }
});

/* =========================
   TYPING EFFECT
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
