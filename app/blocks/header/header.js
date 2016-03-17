const headerElem = document.querySelector('.header');

window.addEventListener('scroll', function () {
  const headerHeight = headerElem.clientHeight;
  if (headerElem.classList.contains('header--scroll') && window.pageYOffset < headerHeight) {
    headerElem.classList.remove('header--scroll');
  } else if (window.pageYOffset >= headerHeight) {
    headerElem.classList.add('header--scroll');
  }
}, false);
