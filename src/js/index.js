// Styles
import '/src/css/index.scss';

// Default
import './default/default.js';

// Page scripts
import './modules/poll.js';
import accordion from './modules/accordion.js';

document.addEventListener('DOMContentLoaded', function () {
  const benchmarks = document.querySelector('[data-benchmarks]');
  accordion(benchmarks, true);

  const accordions = document.querySelector('[data-index-mobile-accordions]');
  accordion(accordions);
});
