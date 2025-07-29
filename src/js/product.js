// Styles
import '/src/css/product.scss';

// Default
import './default/default.js';

// Page scripts
import tabs from './modules/tabs.js';

document.addEventListener('DOMContentLoaded', () => {
  const tabsArray = document.querySelectorAll('[data-tabs]');
  tabsArray.forEach((tabsElement) => {
    const isInsideAccordion = !!tabsElement.closest('details');
    tabs(tabsElement, isInsideAccordion);
  });
});
