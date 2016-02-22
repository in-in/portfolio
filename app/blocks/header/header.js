const avatarElem = document.querySelector('.header');

const avatarSourceBottom = avatarElem.getBoundingClientRect().bottom + window.pageYOffset;
console.log(window.pageYOffset);

window.onscroll = function () {
  if (avatarElem.classList.contains('fixed') && window.pageYOffset < avatarSourceBottom) {
    avatarElem.classList.remove('fixed');
  } else if (window.pageYOffset > avatarSourceBottom) {
    avatarElem.classList.add('fixed');
  }
};
