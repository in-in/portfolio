(function () {

  const emailInput = document.getElementById('inputEmail');

  function hideLabel() {
    const label = this.nextElementSibling;
    if (emailInput.value) {
      label.classList.add('feedback__label--hide');
    } else if (emailInput.value.length === 0) {
      label.classList.remove('feedback__label--hide');
    }
  }

  emailInput.addEventListener('change', hideLabel, false);
})();

(function () {
  const localHref = window.location.href;
  const inputHidden = document.querySelector('input[name="_next"]');
  inputHidden.setAttribute('value', localHref);

  function hideMail() {
    const base64Email = 'c2V0Zm9ybXpAZ21haWwuY29t';
    const baseUrl = '//formspree.io/';
    const action = baseUrl + atob(base64Email);
    document.querySelector('.feedback').setAttribute('action', action);
  }

  hideMail();

  function captureForm() {
    alert('Thank you for your message.');
  }

  const form = document.getElementsByClassName('feedback')[0];
  form.addEventListener('submit', captureForm, false);
})();
