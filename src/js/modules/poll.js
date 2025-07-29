export default function poll() {
  const form = document.querySelector('[data-poll-form]');
  const button = document.querySelector('[data-poll-submit]');
  const result = document.querySelector('[data-poll-result]');

  form.addEventListener('submit', (event) => {
    event.preventDefault();

    form.classList.add('poll__form_voted');
    button.setAttribute('hidden', '');
    result.removeAttribute('hidden');
  });
}

poll();
