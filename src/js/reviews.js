import axios from 'axios';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import Swiper from 'swiper';
import 'swiper/css';


const reviewsList = document.querySelector("#reviews-list");
const nexBtn = document.querySelector(".swiper-button-next");
const prevBtn = document.querySelector(".swiper-button-prev");

async function fetchReviews() {
    try {
        const response = await axios.get('https://portfolio-js.b.goit.study/api/reviews');
        const reviews = response.data;
        renderReviews(reviews);   
    } catch (error) {
       iziToast.error({
            title: 'Error',
            message: 'Failed to load reviews',
            position: 'topRight'
        });
       reviewsList.innerHTML = '<p class="not-found">Not found</p>';
    }
}

function initSwiper() {
   new Swiper('.swiper', {
       slidesPerView: 1, 
        spaceBetween: 20, 
        loop: false, 
        allowSlideNext: true,
        allowSlidePrev: true,
        navigation: {
            nextEl: '.swiper-button-next', 
            prevEl:  '.swiper-button-prev', 
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
        } 
    });
}

function renderReviews(reviews) {
    reviewsList.innerHTML = reviews
        .map(review =>
            `<li class="swiper-slide" data-id="${review._id}>
                <img src="${review.avatar_url}" alt="${review.author}" class="review-avatar"></img> 
            <h4 class="slide-title">${review.author}</h4>
                <p class="slide-text">${review.review}</p>
            </li>`
        )
        .join('');
    initSwiper(); 
}

document.addEventListener('DOMContentLoaded', fetchReviews);




