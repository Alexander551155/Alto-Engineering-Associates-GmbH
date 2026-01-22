document.addEventListener('DOMContentLoaded', () => {

  // Jahr im Footer
  const y = document.getElementById('y');
  if (y) {
    y.textContent = new Date().getFullYear();
  }

  // Smooth Scroll
  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', e => {
      const id = link.getAttribute('href');

      if (!id || id === '#') return;

      const target = document.querySelector(id);
      if (!target) return;

      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      history.pushState(null, '', id);
    });
  });

});

/* NEUE */


// Scroll Reveal (IntersectionObserver)
const revealEls = document.querySelectorAll('.reveal, .reveal-stagger');

const io = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('is-visible');
      io.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

revealEls.forEach(el => io.observe(el));
