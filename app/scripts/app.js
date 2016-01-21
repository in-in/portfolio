function tri() {
  const w = document.getElementById('home').offsetWidth;
  const h = Math.floor(w * 0.23);
  const triangle = document.querySelector('.js-triangle');
  triangle.style.borderWidth = h + 'px 0 0 ' + w + 'px';
}

window.onload = tri;
window.onresize = tri;
