import Accordion from 'accordion-js';
import 'accordion-js/dist/accordion.min.css';

const container = document.querySelector('.ac-container');
const accordion = new Accordion(container, {
    showMultiple: true,
    duration: 400,
});


