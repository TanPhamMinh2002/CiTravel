let menu = document.querySelector("#menu-bar");
let navbar = document.querySelector(".navbar");
let logo = document.querySelector(".logo");

let lastKnownScrollPosition = 0;
let ticking = false;

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

menu.addEventListener("click", () => {
  menu.classList.toggle("fa-times");
  menu.classList.toggle("active");
  navbar.classList.toggle("active");
  logo.classList.toggle("active");
});

const url = "data.json";

function getResData() {
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      const { reservation_code, firstname } = data;
      const res_input = document.getElementById("reservation").value;
      const name_input = document.getElementById("firstname").value;

      if (res_input != reservation_code) {
        alert("Wrong");
      }

      if (name_input != firstname) {
        alert("Wrong");
      }
    })
    .catch((error) => {
      console.error(error);
    });
}
