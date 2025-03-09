import 'https://unpkg.com/swiper/swiper-bundle.min.js';

const swiper = new Swiper('.swiper', {
  slidesPerView: 1,
  spaceBetween: 20,
  breakpointBase: window,

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});
