function feedback() {
  var localHref = window.location.href;
  var inputHidden = document.querySelector('input[name="_next"]');
  inputHidden.setAttribute('value', localHref);

  function hide() {
    'use strict';
    var base64_email = 'c2V0Zm9ybXpAZ21haWwuY29t';
    var base_url = '//formspree.io/';
    var action = base_url + atob(base64_email);
    document.querySelector('.feedback').setAttribute('action', action);
  }

  hide();

  var form = document.getElementsByClassName('feedback')[0];
  form.addEventListener('submit', captureForm, false);

  function captureForm() {
    alert('Thank you for your message.');
  }
}
