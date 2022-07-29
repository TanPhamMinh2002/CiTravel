let menu = document.querySelector("#menu-bar");
let navbar = document.querySelector(".navbar");
let logo = document.querySelector(".logo");
let popup = document.querySelector("#popup");
let language = document.querySelector(".language");
let account = document.querySelector(".account_settings");
let lastKnownScrollPosition = 0;
let ticking = false;

const link = window.location.href.split("/");
if (link[link.length - 1] == "home" || link[link.length - 1] == "search-res") {
  language.classList.add("active");
  account.classList.remove("active");
} else {
  language.classList.remove("active");
  account.classList.add("active");
}
//Nav Bar remove on scroll
function doSomething() {
  menu.classList.remove("fa-times");
  menu.classList.remove("active");
  navbar.classList.remove("active");
  logo.classList.remove("active");
  language.classList.remove("active");
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
  if (
    !(link[link.length - 1] == "home" || link[link.length - 1] == "search-res")
  ) {
    language.classList.toggle("active");
  }
});
