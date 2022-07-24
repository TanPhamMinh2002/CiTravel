/*Fetch Dummy Data*/
const url = "../../dummy.json";
function getResData() {
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      const res_input = document.getElementById("reservation").value;
      const name_input = document.getElementById("firstname").value;
      let verified_res = false;
      let verified_firstname = false;
      for (let i = 0; i < data.length; i++) {
        for (let j = 0; j < data[i].itinerary.confirmation.length; j++) {
          if (res_input == data[i].itinerary.confirmation[j].number) {
            verified_res = true;
            for (
              let z = 0;
              z < data[i].itinerary.confirmation[j].guest.length;
              z++
            ) {
              if (
                name_input ==
                data[i].itinerary.confirmation[j].guest[z].firstName
              ) {
                verified_firstname = true;
                if (
                  data[i].itinerary.confirmation[j].guestCheckin ==
                  data[i].itinerary.confirmation[j].guestNum
                ) {
                  popup.classList.add("active");
                  document.getElementById("popup").innerHTML =
                    "Already checked in" +
                    `.<br />` +
                    "Please scan the provided QR code via email.";
                } else {
                  sessionStorage.setItem("q", i);
                  sessionStorage.setItem("w", j);
                  sessionStorage.setItem("e", z);
                  let otp = document.querySelector(".otp");
                  otp.classList.toggle("active");
                }
              }
            }
          }
        }
      }

      //Error Message
      if (res_input == "" || name_input == "") {
        popup.classList.add("active");
        document.getElementById("popup").innerText =
          "Cannot proceed with blank input(s)";
        //console.log(data[0].itinerary.confirmation[0].number);
        //console.log(data[0].itinerary.confirmation[0].guest[0].firstName);
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

/*Generate OTP*/
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
  document.getElementById("popupotp").innerHTML =
    "OTP has been sent to your email address." +
    "<br/>" +
    "Please check your email box, even in Spam";
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

//data[q].itinerary.confirmation[w].guest[e];

//otp confirmation
function otpverification() {
  if (email_input.value == otp_code || phone_input.value == otp_code) {
    document.getElementById("popupotp").innerText =
      "OTP Verification Successful!";
    location.href = "../check-in/checkin.html";
  } else {
    document.getElementById("popupotp").innerText =
      "OTP is invalid. Please try again!";
  }
}
