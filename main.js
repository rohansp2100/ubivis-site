/* ================================
   SITE INITIALIZATION
================================ */
document.addEventListener('DOMContentLoaded', () => {
  setupMobileMenu();
  setupNavbarHighlight();
});

/* ================================
   MOBILE MENU
================================ */
function setupMobileMenu() {
  const hamburger = document.querySelector('.hamburger');
  const navbar = document.querySelector('.navbar');
  const navLinks = document.querySelectorAll('.nav-link');

  if (!hamburger || !navbar) return;

  hamburger.addEventListener('click', () => {
    navbar.classList.toggle('active');
  });

  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      navbar.classList.remove('active');
    });
  });

  document.addEventListener('click', e => {
    if (!navbar.contains(e.target) && navbar.classList.contains('active')) {
      navbar.classList.remove('active');
    }
  });
}

/* ================================
   ACTIVE NAV LINK HIGHLIGHT
================================ */
function setupNavbarHighlight() {
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';

  document.querySelectorAll('.nav-link').forEach(link => {
    const href = link.getAttribute('href');
    link.classList.toggle(
      'active',
      href === currentPage || (currentPage === '' && href === 'index.html')
    );
  });
}
