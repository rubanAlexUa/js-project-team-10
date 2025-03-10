import Accordion from 'accordion-js';
import 'accordion-js/dist/accordion.min.css';

const container = document.querySelector('.ac-container');
const accordion = new Accordion(container, {
    showMultiple: true,
    onOpen: (currEl) => {
        toggleFaqIcon(currEl, true);
    },
    onClose: (currEl) => {
        toggleFaqIcon(currEl, false);
    }
});

function toggleFaqIcon(element, isOpen) {
    const svgContainer = element.querySelector('.faq-svg');
    if (!svgContainer) return;

    svgContainer.innerHTML = isOpen
        ? `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M15 12.5L10 7.5L5 12.5" stroke="#FAFAFA" stroke-width="2" />
</svg>`
        : `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M15 7.5L10 12.5L5 7.5" stroke="#FAFAFA" stroke-width="2" />
</svg>`;
}
