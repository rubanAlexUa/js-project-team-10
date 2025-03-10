import Accordion from 'accordion-js';
import 'accordion-js/dist/accordion.min.css';

import Swiper from 'swiper/bundle';

const acc = new Accordion(".ac-container");

const swiper = new Swiper('.swiper', {
    loop: true,
    breakpoints: {
        320: {
            slidesPerView: 2
        },
        375: {
            slidesPerView: 2
        },

        768: {
            slidesPerView: 3
        },

        1440: {
            slidesPerView: 6
        }
    },
    navigation: {
        nextEl: '.swiper-button-next',
    },
    keyboard: {
        enabled: true,
        onlyInViewport: true,
    },

});
        
acc.open(0)

