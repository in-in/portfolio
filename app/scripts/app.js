
// const triangle = document.querySelector('.js-triangle');



// triangle.style.borderWidth = w;

function tri() {
  const w = document.getElementById('home').offsetWidth;
  console.log(w);
}

window.onload = tri;
window.addEventListener('resize', tri);
