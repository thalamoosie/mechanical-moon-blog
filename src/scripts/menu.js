const mobileMenu = document.querySelector(".mobile-nav");
const hamburgerMenu = document.querySelector(".hamburger");

hamburgerMenu.addEventListener("click", () => {
  console.log("Ham menu clicked!");
  hamburgerMenu.classList.toggle("active");
  mobileMenu.classList.toggle("active");
});
