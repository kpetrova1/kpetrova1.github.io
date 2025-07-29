'use strict';

export default function dropdown(dataButton, dataDropdown) {
  const button = document.querySelector(dataButton);
  const dropdown = document.querySelector(dataDropdown);

  button.addEventListener('click', function () {
    button.classList.toggle('is-active');
    dropdown.classList.toggle('is-active');
  });

  window.addEventListener('click', function (event) {
    if (!event.target.matches(dataButton)) {
      if (dropdown.classList.contains('is-active')) {
        button.classList.remove('is-active');
        dropdown.classList.remove('is-active');
      }
    }
  });
}
