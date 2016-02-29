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

window.addEventListener('load', getCard, false);
