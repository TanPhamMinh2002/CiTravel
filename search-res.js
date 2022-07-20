let menu = document.querySelector("#menu-bar");
let navbar = document.querySelector(".navbar");
let logo = document.querySelector(".logo");
let popup = document.querySelector("#popup");

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
});

//fetch local API data
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
              let otp = document.querySelector(".otp");
              otp.classList.toggle("active");
              verified_firstname = true;
            }
          }
        }
      }

      //Error Message
      if (res_input == "" || name_input == "") {
        popup.classList.add("active");
        document.getElementById("popup").innerText =
          "Cannot proceed with blank input(s)";
      } else {
        if (!verified_res) {
          popup.classList.add("active");
          document.getElementById("popup").innerText =
            "Invalid Reservation Code!";
        } else {
          if (!verified_firstname) {
            popup.classList.add("active");
            document.getElementById("popup").innerText = "Invalid First Name";
          }
        }
      }
    })
    .catch((error) => {
      console.error(error);
    });
}

//Generate OTP
const generateOtp = (optLength) => {
  let otp = "";
  for (let i = 0; i < optLength; i++) {
    otp += Math.floor(Math.random() * 10);
  }
  return otp;
};

//OTP Get Code
let otp_code = generateOtp(6);
function otp_email_getcode() {
  alert(`Your OTP code is: ${otp_code}`);
  let popupotp = document.querySelector("#popupotp");
  popupotp.classList.toggle("active");
  document.getElementById("popupotp").innerText =
    "OTP has been sent to your email address. Please check your email box, even in Spam";
  otp_form.addEventListener("input", () => {
    if (email_input.value.length == 6) {
      confirm_btn.disabled = false;
    } else {
      confirm_btn.disabled = true;
    }
  });
  let phone_getcode = document.querySelector("#phone_getcode");
  var timeleft = 60;
  var downloadTimer = setInterval(function () {
    if (timeleft <= 0) {
      clearInterval(downloadTimer);
      document.getElementById("email_getcode").innerHTML = "Try Again";
      phone_input.disabled = false;
      phone_getcode.classList.remove("active");
    } else {
      phone_input.disabled = true;
      document.getElementById("email_getcode").innerHTML = timeleft + "s";
      phone_getcode.classList.add("active");
    }
    timeleft -= 1;
  }, 1000);
}

//Phone OTP
function otp_phone_getcode() {
  alert(`Your OTP code is: ${otp_code}`);
  let popupotp = document.querySelector("#popupotp");
  popupotp.classList.toggle("active");
  document.getElementById("popupotp").innerText =
    "OTP has been sent to your mobile phone number. Please check your message";
  otp_form.addEventListener("input", () => {
    if (phone_input.value.length == 6) {
      confirm_btn.disabled = false;
    } else {
      confirm_btn.disabled = true;
    }
  });
  let email_getcode = document.querySelector("#email_getcode");
  var timeleft = 60;
  var downloadTimer = setInterval(function () {
    if (timeleft <= 0) {
      clearInterval(downloadTimer);
      document.getElementById("phone_getcode").innerHTML = "Try Again";
      email_input.disabled = false;
      email_getcode.classList.remove("active");
    } else {
      email_input.disabled = true;
      email_getcode.classList.add("active");
      document.getElementById("phone_getcode").innerHTML = timeleft + "s";
    }
    timeleft -= 1;
  }, 1000);
}

//otp confirmation
function otpverification() {
  if (email_input.value == otp_code || phone_input.value == otp_code) {
    document.getElementById("popupotp").innerText =
      "OTP Verification Successful!";
  } else {
    document.getElementById("popupotp").innerText =
      "OTP is invalid. Please try again!";
  }
}
