var q = parseInt(sessionStorage.getItem("q"));
var w = parseInt(sessionStorage.getItem("w"));
var totalCheckin = parseInt(sessionStorage.getItem("totalCheckin"));
var stepCount = parseInt(sessionStorage.getItem("stepCount"));
var guestIndex = parseInt(sessionStorage.getItem("guestIndex"));
document.getElementById("steps").innerText = `Step ${stepCount} of ${
  totalCheckin + 1
}`;
const url = "assets/dummy.json";
var checkinList = JSON.parse(sessionStorage.getItem("checkinList"));
var e = checkinList[guestIndex];
let isSubmit = false;
function submitted() {
  isSubmit = true;
}
/**Continue check in */
function continueCheckin() {
  if (guestIndex < totalCheckin - 1 && isSubmit) {
    guestIndex += 1;
    stepCount += 1;
    sessionStorage.setItem("guestIndex", guestIndex);
    sessionStorage.setItem("stepCount", stepCount);
    location.reload("id-submit");
  } else if (isSubmit) {
    alert("Check in Successful");
  }
}

//Arrival Date

/*const totalAdditionGuest = parseInt(
  sessionStorage.getItem("totalAdditionGuest")
);*/
var additionGuestCount = parseInt(sessionStorage.getItem("additionGuestCount"));
var totalAdditionGuest = parseInt(sessionStorage.getItem("totalAdditionGuest"));
function arrivalDate() {
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      if (data[q].itinerary.confirmation[w].guest[e].mainGuest) {
        document.getElementById("guestType").innerText = "Main Guest";
      } else {
        if (additionGuestCount < totalAdditionGuest) {
          additionGuestCount += 1;
          document.getElementById(
            "guestType"
          ).innerText = `Additional Guest ${additionGuestCount}`;
          sessionStorage.setItem("additionGuestCount", additionGuestCount);
        }
      }
      document.getElementById("firstName").placeholder =
        data[q].itinerary.confirmation[w].guest[e].firstName;
      document.getElementById("lastName").placeholder =
        data[q].itinerary.confirmation[w].guest[e].lastName;
      document.getElementById("email").placeholder =
        data[q].itinerary.confirmation[w].guest[e].email;
    })
    .catch((error) => {
      console.log(error);
    });
}
arrivalDate();

/**Preview image upload */
const frontImg = document.getElementById("frontImg");
const backImg = document.getElementById("backImg");
const frontId = document.getElementById("frontId");
const backId = document.getElementById("backId");
/*document
  .getElementById("idSubmission1")
  .addEventListener("change", function () {
    const file = this.files[0];
    if (file) {
      const reader = new FileReader();
      frontId.style.display = "none";
      frontImg.style.display = "initial";

      reader.addEventListener("load", function () {
        frontImg.setAttribute("src", this.result);
      });

      reader.readAsDataURL(file);
    } else {
      frontId.style.display = "initial";
      frontImg.style.display = "none";
    }
  });
frontImg.addEventListener("click", function () {
  frontId.style.display = "initial";
  frontImg.style.display = "none";
});*/

/*document
  .getElementById("idSubmission2")
  .addEventListener("change", function () {
    const file = this.files[0];
    if (file) {
      const reader = new FileReader();
      backId.style.display = "none";
      backImg.style.display = "initial";

      reader.addEventListener("load", function () {
        backImg.setAttribute("src", this.result);
      });
      reader.readAsDataURL(file);
    } else {
      backId.style.display = "initial";
      backImg.style.display = "none";
    }
  });
backImg.addEventListener("click", function () {
  backId.style.display = "initial";
  backImg.style.display = "none";
});*/
document.getElementById("documentType").addEventListener("change", () => {
  frontId.style.display = "initial";
  frontImg.style.display = "none";
  if (document.getElementById("documentType").value == "Identification") {
    document.getElementById("preview2").style.display = "initial";
  } else {
    document.getElementById("preview2").style.display = "none";
  }
});
/*
 Tesseract.recognize("../../img/CMND.jpg", "eng", {
  logger: (m) => console.log(m),
}).then(({ data: { text } }) => {
  console.log(text);
});*/

const datepicker = new TheDatepicker.Datepicker(document.getElementById("dob"));
datepicker.render();
datepicker.options.setInputFormat("Y-n-j");

/**Front Capture */
let frontCanvas = document.querySelector("#frontCanvas");
let contextFront = frontCanvas.getContext("2d");
let videoFront = document.querySelector("#videoFront");

let previewFront = document.querySelector(".previewFront");

function displayFrontCam() {
  previewFront.classList.add("active");
  if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
    navigator.mediaDevices
      .getUserMedia({ video: { facingMode: "environment" }, audio: false })
      .then((stream) => {
        videoFront.srcObject = stream;
        videoFront.play();
      });
  }
}

function frontImgCapture() {
  /*frontCanvas.style.display = "initial";*/
  previewFront.classList.remove("active");
  document.getElementById("frontId").style.display = "none";
  contextFront.drawImage(
    videoFront,
    0,
    0,
    frontCanvas.width,
    frontCanvas.height
  );
  let image_data_url = frontCanvas.toDataURL("image/jpeg");
  document.getElementById("frontImg").style.display = "initial";
  document.getElementById("frontImg").setAttribute("src", image_data_url);
  // data url of the image
  console.log(image_data_url);
  videoFront.srcObject.getTracks().forEach(function (track) {
    track.stop();
  });
}

function cancelFront() {
  videoFront.srcObject.getTracks().forEach(function (track) {
    track.stop();
  });

  previewFront.classList.remove("active");
}

/**Back Capture */
let backCanvas = document.querySelector("#backCanvas");
let contextBack = backCanvas.getContext("2d");
let videoBack = document.querySelector("#videoBack");

let previewBack = document.querySelector(".previewBack");

function displayBackCam() {
  previewBack.classList.add("active");
  if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
    navigator.mediaDevices
      .getUserMedia({ video: { facingMode: "environment" }, audio: false })
      .then((stream) => {
        videoBack.srcObject = stream;
        videoBack.play();
      });
  }
}

function backImgCapture() {
  /*frontCanvas.style.display = "initial";*/
  previewBack.classList.remove("active");
  document.getElementById("backId").style.display = "none";
  contextBack.drawImage(videoBack, 0, 0, backCanvas.width, backCanvas.height);
  let image_data_url = backCanvas.toDataURL("image/jpeg");
  document.getElementById("backImg").style.display = "initial";
  document.getElementById("backImg").setAttribute("src", image_data_url);
  // data url of the image
  console.log(image_data_url);
  videoBack.srcObject.getTracks().forEach(function (track) {
    track.stop();
  });
}

function cancelBack() {
  videoBack.srcObject.getTracks().forEach(function (track) {
    track.stop();
  });

  previewBack.classList.remove("active");
}
