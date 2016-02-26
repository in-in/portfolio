(function () {
  const navList = document.querySelectorAll('nav a');
  const offset = 70;
  const sections = document.querySelectorAll('section');
  window.onscroll = function () {
    for (let i = 0; i < sections.length; i++) {
      if (sections[i].getBoundingClientRect().top <= offset && sections[i].getBoundingClientRect().bottom >= offset) {
        navList[i].classList.add('menu__item--active');
      } else {
        navList[i].classList.remove('.menu__item--active');
      }
    }
  };
})();
