export default function tabs(tabs, insideAccordion = false) {
  const buttons = tabs.querySelectorAll('[data-tab]');

  if (insideAccordion) {
    const accordion = tabs.closest('details');
    const summaryTabs = accordion.querySelectorAll('summary [data-tab]');

    summaryTabs.forEach((tab) => {
      tab.addEventListener('click', function (e) {
        e.stopPropagation();

        summaryTabs.forEach((tab) => tab.classList.remove('is-active'));
        this.classList.add('is-active');

        if (!accordion.open) {
          accordion.open = true;
        }

        const tabId = this.getAttribute('data-tab');

        activateTab(tabId);
      });
    });
  }

  buttons.forEach((button) => {
    button.addEventListener('click', function (e) {
      const tabId = this.getAttribute('data-tab');

      activateTab(tabId);
    });
  });

  function activateTab(tabId) {
    tabs.querySelectorAll('[data-tab]').forEach((tab) => tab.classList.remove('is-active'));
    tabs.querySelectorAll('[data-tab-content]').forEach((c) => c.classList.remove('is-active'));

    tabs.querySelector(`[data-tab="${tabId}"]`).classList.add('is-active');
    tabs.querySelector(`#${tabId}`).classList.add('is-active');
  }
}
