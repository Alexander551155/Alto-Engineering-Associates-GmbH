document.addEventListener('DOMContentLoaded', () => {

  /* =========================
     1) Jahr im Footer
  ========================== */
  const y = document.getElementById('y');
  if (y) {
    y.textContent = new Date().getFullYear();
  }

  /* =========================
     2) Smooth Scroll
  ========================== */
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

  /* =========================
     3) Navbar Scroll Effekt (blur + shadow)
  ========================== */
  const nav = document.querySelector('.navbar');
  const onScrollNav = () => {
    if (!nav) return;
    nav.classList.toggle('scrolled', window.scrollY > 10);
  };
  window.addEventListener('scroll', onScrollNav);
  onScrollNav(); // direkt beim Laden einmal setzen

  /* =========================
     4) Back to top Button
  ========================== */
  const toTop = document.getElementById('toTop');

  const onScrollTopBtn = () => {
    if (!toTop) return;
    toTop.style.display = window.scrollY > 350 ? 'block' : 'none';
  };

  window.addEventListener('scroll', onScrollTopBtn);
  onScrollTopBtn(); // direkt beim Laden einmal setzen

  if (toTop) {
    toTop.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  /* =========================
     5) Scroll Reveal Animation
  ========================== */
  const revealEls = document.querySelectorAll('.reveal, .reveal-stagger');

  if (revealEls.length > 0) {
    const io = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });

    revealEls.forEach(el => io.observe(el));
  }

});
