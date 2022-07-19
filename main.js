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
      const { reservation_code, firstnames } = data;
      const res_input = document.getElementById("reservation").value;
      const name_input = document.getElementById("firstname").value;

      let verified_res = false;
      let verified_firstname = false;
      for (let i = 0; i < parseInt(JSON.stringify(data.length)); i++) {
        if (res_input == data[i].reservation_code) {
          verified_res = true;
          for (
            let j = 0;
            j < parseInt(JSON.stringify(data[i].firstnames.length));
            j++
          ) {
            if (name_input == data[i].firstnames[j]) {
              alert("Success!");
              verified_firstname = true;
            }
          }
        }
      }

      if (!verified_res) {
        alert("Wrong Reservation Code");
      } else {
        if (!verified_firstname) {
          alert("Wrong first name");
        }
      }
    })
    .catch((error) => {
      console.error(error);
    });
}
