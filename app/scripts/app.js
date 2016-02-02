function tri() {
  const w = document.getElementById('home').offsetWidth;
  const h = Math.floor(w * 0.23);
  const triangle = document.querySelectorAll('.js-triangle');

  for (let i = 0; i < triangle.length; i++) {
    triangle[i].style.borderWidth = h + 'px 0 0 ' + w + 'px';
  }
  window.onresize = tri;
}

function show() {
  const up = this.querySelector('.portfolio__description h3');
  const down = this.querySelector('.portfolio__description p');
  const img = this.querySelector('.portfolio__image');
  const size = this.offsetWidth / 2;

  up.style.transform = `translateY(-${size}px)`;
  down.style.transform = `translateY(${size}px)`;
  img.style.transform = 'scale(1.15)';
}

function hide() {
  const up = this.querySelector('.portfolio__description h3');
  const down = this.querySelector('.portfolio__description p');
  const img = this.querySelector('.portfolio__image');

  up.style.transform = 'translateY(0px)';
  down.style.transform = 'translateY(0px)';
  img.style.transform = 'scale(1)';
}

function getCard() {
  const card = document.querySelectorAll('.portfolio__item');
  for (let i = 0; i < card.length; i++) {
    card[i].onmouseover = show;
    card[i].onmouseout = hide;
  }
}

function checkForm() {
  const emailInput = document.getElementById('inputEmail');
  emailInput.addEventListener('change', hideLabel, false);

  function hideLabel() {
    const label = this.nextElementSibling;
    if (emailInput.value) {
      label.classList.add('feedback__label--hide');
    } else if (emailInput.value.length === 0) {
      label.classList.remove('feedback__label--hide');
    }
  }
}

function copyYear() {
  const d = new Date().getFullYear();
  const copy = document.querySelector('.footer__copyright > small');

  function convert(num) {

    const decimalValue = [ 1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1 ];
    const romanNumeral = [ 'M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I' ];

    let romanized = '';

    for (let index = 0; index < decimalValue.length; index++) {
      while (decimalValue[index] <= num) {
        romanized += romanNumeral[index];
        num -= decimalValue[index];
      }
    }
    return romanized;
  }

  copy.innerHTML += convert(d);
}

window.onload = () => {
  tri();
  getCard();
  checkForm();
  copyYear();
};
