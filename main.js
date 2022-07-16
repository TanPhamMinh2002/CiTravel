let menu = document.querySelector("#menu-bar");
let navbar = document.querySelector(".navbar");
let logo = document.querySelector(".logo");

menu.addEventListener("click", () => {
  menu.classList.toggle("fa-times");
  menu.classList.toggle("active");
  navbar.classList.toggle("active");
  logo.classList.toggle("active");
});
