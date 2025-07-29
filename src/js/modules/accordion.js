export default function accordion(parent, onlyMobile = false) {
  const summaryArray = parent.querySelectorAll('[data-summary]');

  if (onlyMobile) {
    setMobile();

    window.addEventListener('resize', setMobile);
  }

  summaryArray.forEach((summary) => {
    summary.addEventListener('click', closeOpenedDetails);
  });

  function closeOpenedDetails() {
    summaryArray.forEach((summary) => {
      let detail = summary.parentNode;
      if (detail !== this.parentNode) {
        detail.removeAttribute('open');
      }
    });
  }

  function setMobile() {
    summaryArray.forEach((summary) => {
      const detail = summary.parentNode;
      if (window.innerWidth < 768) {
        detail.removeAttribute('open');
      } else {
        detail.setAttribute('open', '');
      }
    });
  }
}
