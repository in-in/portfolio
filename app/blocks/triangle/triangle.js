function tri() {
  const w = document.getElementById('home').offsetWidth;
  const h = Math.floor(w * 0.23);
  const triangle = document.querySelectorAll('.js-triangle');

  for (let i = 0; i < triangle.length; i++) {
    triangle[i].style.borderWidth = h + 'px 0 0 ' + w + 'px';
  }
}

window.addEventListener('resize', tri, false);
window.addEventListener('load', tri, false);
