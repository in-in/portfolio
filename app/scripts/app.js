const svgIcon = document.querySelectorAll('.menu__icon use');
// const svgShadow = shadowRoot.getElementById("menu-home");
// const svgShadow = ShadowRoot.getElementById('menu-user');

console.log(svgIcon[1].offsetWidth);
console.log(svgIcon[1].clientWidth);
console.log(getComputedStyle(svgIcon[1]).width);
console.log(svgIcon[1]);
console.log(svgIcon[1].shadowRoot);
