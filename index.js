/* =========================
   SCROLL REVEAL ANIMATIONS
========================= */

const revealElements = document.querySelectorAll('.fade-left, .fade-right');

function revealOnScroll() {
  const windowHeight = window.innerHeight;

  revealElements.forEach(el => {
    const elementTop = el.getBoundingClientRect().top;

    if (elementTop < windowHeight - 80) {
      el.style.opacity = '1';
      el.style.transform = 'translateX(0)';
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
    nav.style.background = 'rgba(0, 0, 0, 0.95)';
    nav.style.boxShadow = '0 8px 25px rgba(0,0,0,0.6)';
  } else {
    nav.style.background = 'rgba(0, 0, 0, 0.85)';
    nav.style.boxShadow = 'none';
  }
});

/* =========================
   TYPING EFFECT (HERO)
========================= */

const text = "Elite Free Fire Zone Push Strategist & Competitive Mentor";
const typingTarget = document.getElementById("typing-text");
let index = 0;

function typeText() {
  if (!typingTarget) return;

  if (index < text.length) {
    typingTarget.textContent += text.charAt(index);
    index++;
    setTimeout(typeText, 40);
  }
}

window.addEventListener("load", typeText);
