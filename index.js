/* =========================
   GAMING SCROLL REVEAL
========================= */

const reveals = document.querySelectorAll('.reveal');

if (reveals.length > 0) {
  const revealObserver = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
          observer.unobserve(entry.target); // reveal only once
        }
      });
    },
    {
      threshold: 0.15,
      rootMargin: '0px 0px -60px 0px'
    }
  );

  reveals.forEach(el => revealObserver.observe(el));
}

/* =========================
   TYPING EFFECT (HERO)
========================= */

const typingTarget = document.getElementById('typing-text');

if (typingTarget) {
  const text =
    'Elite Free Fire Zone Push Strategist & Competitive Mentor';

  let index = 0;
  let speed = 45;

  function typeText() {
    if (index < text.length) {
      typingTarget.textContent += text.charAt(index);
      index++;
      setTimeout(typeText, speed);
    }
  }

  // Start typing after page fully loads
  window.addEventListener(
    'load',
    () => {
      typingTarget.textContent = '';
      typeText();
    },
    { once: true }
  );
}

/* =========================
   OPTIONAL: SMOOTH CTA FOCUS
   (micro polish, no risk)
========================= */

const ctaButtons = document.querySelectorAll('a[href="#contact"]');

ctaButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    const contact = document.getElementById('contact');
    if (contact) {
      contact.classList.add('active');
    }
  });
});
