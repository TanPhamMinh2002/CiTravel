let menu = document.querySelector("#menu-bar");
let navbar = document.querySelector(".navbar");
let logo = document.querySelector(".logo");
let popup = document.querySelector("#popup");
let language = document.querySelector(".language");
let account = document.querySelector(".account_settings");
let accountMenu = document.querySelector(".accountMenu");
let lastKnownScrollPosition = 0;
let ticking = false;

const link = window.location.href.split("/");
if (
  !(
    link[link.length - 1] == "home" ||
    link[link.length - 1] == "search-res" ||
    link[link.length - 1] == "#" ||
    link[link.length - 1] == "confirmations"
  )
) {
  language.classList.remove("active");
  account.classList.add("active");
} else {
  language.classList.add("active");
  account.classList.remove("active");
}
//Nav Bar remove on scroll
function doSomething() {
  menu.classList.remove("fa-times");
  menu.classList.remove("active");
  navbar.classList.remove("active");
  logo.classList.remove("active");
  accountMenu.classList.remove("active");
  if (link[link.length - 1] == "search-res") {
    document.querySelector(".qrScan").classList.remove("hide");
  }
  if (link[link.length - 1] == "checkin-success") {
    document.getElementById("submitBtn").classList.remove("hide");
    document.querySelector(".status .icon").classList.remove("hide");
    document.getElementById("send").classList.remove("hide");
  }
  if (
    !(
      link[link.length - 1] == "home" ||
      link[link.length - 1] == "search-res" ||
      link[link.length - 1] == "#" ||
      link[link.length - 1] == "confirmations"
    )
  ) {
    language.classList.remove("active");
  }
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
    !(
      link[link.length - 1] == "home" ||
      link[link.length - 1] == "search-res" ||
      link[link.length - 1] == "#" ||
      link[link.length - 1] == "confirmations"
    )
  ) {
    language.classList.toggle("active");
  }
});

function openList() {
  accountMenu.classList.add("active");
}
function closeList() {
  accountMenu.classList.remove("active");
}
