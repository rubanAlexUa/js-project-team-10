import Accordion from 'accordion-js';
import 'accordion-js/dist/accordion.min.css';

document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll('.accordion-container').forEach((accordionElement, index) => {
        try {
            const acc = new Accordion(accordionElement, {
                duration: 300,
                showFirst: false
            });
            
            if (index === 0) {
                acc.open(0);
            }
        } catch (error) {
            console.error("Accordion initialization error:", error);
        }
    });
});



   document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll('.mySwiper').forEach((swiperElement, index) => {
        new Swiper(swiperElement, {
            loop: true,
            grabCursor: true,
            simulateTouch: true,
            touchRatio: 1,
            breakpoints: {
                320: { slidesPerView: 2 },
                375: { slidesPerView: 2 },
                768: { slidesPerView: 3 },
                1440: { slidesPerView: 6 }
            },
            navigation: {
                nextEl: `.swiper-button-next`, 
            },
            mousewheel: true,
            speed: 500,
            keyboard: {
                enabled: true,
                onlyInViewport: true,
            },
        });
    });
   });

      
     
      