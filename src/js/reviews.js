import axios from 'axios';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const reviewsList = document.querySelector('.swiper-1 #reviews-list');
const nexBtn = document.querySelector('.swiper-1 .swiper-button-next');
const prevBtn = document.querySelector('.swiper-1 .swiper-button-prev');

async function fetchReviews() {
  try {
    const response = await axios.get(
      'https://portfolio-js.b.goit.study/api/reviews'
    );
    const reviews = response.data;
    renderReviews(reviews);
  } catch (error) {
    iziToast.error({
      title: 'Error',
      message: 'Failed to load reviews',
      position: 'topRight',
    });
    reviewsList.innerHTML = '<p class="not-found">Not found</p>';
  }
}

function renderReviews(reviews) {
  reviewsList.innerHTML = reviews
    .map(
      review => `
            <li class="swiper-slide swiper-1">
              <img src="${review.avatar_url}" alt="${review.author}" class="review-avatar">
              <h4 class="slide-title ">${review.author}</h4>
              <p class="slide-text">${review.review}</p>
            </li>`
    )
    .join('');
  setTimeout(() => {
    initSwiper();
  }, 0);
}

function initSwiper() {
  if (!nexBtn || !prevBtn) {
    console.error('Swiper navigation buttons not found!');
    return;
  }
  const swiperFirst = new Swiper('.swiper-1', {
    slidesPerView: 1,
    spaceBetween: 16,
    loop: false,
    allowSlideNext: true,
    allowSlidePrev: true,
    navigation: {
      prevEl: '.swiper-1 .swiper-button-prev',
      nextEl: '.swiper-1 .swiper-button-next',
    },

    keyboard: {
      enabled: true,
      onlyInViewport: true,
    },
    mousewheel: true,
    breakpoints: {
      768: {
        slidesPerView: 2,
      },
      1440: {
        slidesPerView: 4,
      },
    },
  });
}

document.addEventListener('DOMContentLoaded', fetchReviews);
