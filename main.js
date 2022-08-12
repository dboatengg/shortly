const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav__menu");
const navLink = document.querySelectorAll(".nav__link");
mainBody = document.getElementsByTagName("main")[0];
heroBody = document.querySelector(".hero");

hamburger.addEventListener("click", openMenu);

function openMenu() {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
}

navLink.forEach((n) => n.addEventListener("click", closeMenu));

function closeMenu() {
  hamburger.classList.remove("active");
  navMenu.classList.remove("active");
}

mainBody.addEventListener("click", closeMenu);
heroBody.addEventListener("click", closeMenu);
console.log(mainBody);
