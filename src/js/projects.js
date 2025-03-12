const swiperSecond = new Swiper('.swiper-2', {
  slidesPerView: 1,
  spaceBetween: 20,
  breakpointBase: window,

  navigation: {
    nextEl: '.swiper-2 .swiper-button-next',
    prevEl: '.swiper-2 .swiper-button-prev',
  },
  keyboard: {
    enabled: true,
    onlyInViewport: true,
  },
  mousewheel: true,
});
