const mobileMenu = document.querySelector(".mobile-nav");
const hamburgerMenu = document.querySelector(".hamburger");
const mobileNavMenu = document.getElementById("");
const body = document.body;

hamburgerMenu.addEventListener("click", () => {
  console.log("Ham menu clicked!");
  hamburgerMenu.classList.toggle("active");
  mobileMenu.classList.toggle("active");
  body.classList.toggle("no-scroll");
});
