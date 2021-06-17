// Also can pass in optional settings block
var rellax = new Rellax('.rellax', {
    speed: -5,
    center: true,
    wrapper: null,
    round: true,
    vertical: true,
    horizontal: false
  });
AOS.init();

var shown = false;
function mobileMenu(x) {
  //x.classList.toggle("change"); Fuj
  if(!shown) {
    document.getElementById("mobile-menu-dropdown").style.display = "block";
    shown = true;
  }
  else {
    document.getElementById("mobile-menu-dropdown").style.display = "none";
    shown = false;
  }
} 