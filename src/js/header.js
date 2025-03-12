const menuLink = document.querySelector('.header-menu-btn');
const navMenu = document.querySelector('.nav-menu');
const openMenuBtn = document.querySelector('.menu-open-btn');
const closeMenuBtn = document.querySelector('.mob-menu-close');
const mobileMenu = document.querySelector('.mobile-menu');
const menuLinks = document.querySelector('.mob-menu-link');

menuLink.addEventListener('click', e => {
  e.preventDefault();
  navMenu.classList.toggle('visibility');
});

document.addEventListener('click', e => {
  if (!menuLink.contains(e.target) && !navMenu.contains(e.target)) {
    navMenu.classList.remove('visibility');
  }
});

function toggleMenu() {
  mobileMenu.classList.toggle('hidden');

  if (mobileMenu.classList.contains('hidden')) {
    document.body.style.overflow = 'auto';
  } else {
    document.body.style.overflow = 'hidden';
  }
}

openMenuBtn.addEventListener('click', toggleMenu);

closeMenuBtn.addEventListener('click', toggleMenu);

menuLinks.forEach(link => {
  link.addEventListener('click', toggleMenu);
});
