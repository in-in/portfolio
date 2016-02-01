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


window.onload = () => {
  tri();
  getCard();
  checkForm();
};
