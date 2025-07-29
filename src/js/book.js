// Styles
import '/src/css/book.scss';

// Default
import './default/default.js';
import tabs from './modules/tabs.js';

// Page scripts
document.addEventListener('DOMContentLoaded', () => {
  const tabsArray = document.querySelectorAll('[data-tabs]');
  tabsArray.forEach((tabsElement) => {
    const isInsideAccordion = !!tabsElement.closest('details');
    tabs(tabsElement, isInsideAccordion);
  });
});
