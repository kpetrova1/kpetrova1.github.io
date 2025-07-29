// Styles
import '/src/css/video.scss';

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
