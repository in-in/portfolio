const headerElem = document.querySelector('.header');
const logoElem = document.querySelector('.logo');

const headerSourceBottom = headerElem.getBoundingClientRect().bottom + window.pageYOffset;

window.onscroll = function () {
  if (headerElem.classList.contains('fixed') && window.pageYOffset < headerSourceBottom) {
    headerElem.classList.remove('fixed');
    logoElem.style.display = 'flex';
  } else if (window.pageYOffset > headerSourceBottom) {
    headerElem.classList.add('fixed');
    logoElem.style.display = 'none';
  }
};
