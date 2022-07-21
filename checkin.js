let menu = document.querySelector("#menu-bar");
let navbar = document.querySelector(".navbar");
let logo = document.querySelector(".logo");
let popup = document.querySelector("#popup");
let language = document.querySelector(".language");

let lastKnownScrollPosition = 0;
let ticking = false;

//Nav Bar remove on scroll
function doSomething() {
  menu.classList.remove("fa-times");
  menu.classList.remove("active");
  navbar.classList.remove("active");
  logo.classList.remove("active");
}
document.addEventListener("scroll", function (e) {
  lastKnownScrollPosition = window.scrollY;

  if (!ticking) {
    window.requestAnimationFrame(function () {
      doSomething();
      ticking = false;
    });

    ticking = true;
  }
});

//Nav expands on click
menu.addEventListener("click", () => {
  menu.classList.toggle("fa-times");
  menu.classList.toggle("active");
  navbar.classList.toggle("active");
  logo.classList.toggle("active");
  language.classList.toggle("active");
});

//Select all
let select_all = document.querySelector(".select_all a");
let not_verified = document.querySelectorAll(".not_verified");
select_all.addEventListener("click", () => {
  select_all.classList.toggle("active");
  [].forEach.call(not_verified, (el) => {
    if (!el.classList.contains("active")) {
      el.classList.add("active");
    } else {
      el.classList.remove("active");
    }
  });
});

[].forEach.call(not_verified, (el) => {
  el.addEventListener("click", () => {
    el.classList.toggle("active");
    select_all.classList.remove("active");
  });
});
