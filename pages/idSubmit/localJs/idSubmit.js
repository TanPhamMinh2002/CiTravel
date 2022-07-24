var q = parseInt(sessionStorage.getItem("q"));
var w = parseInt(sessionStorage.getItem("w"));
var totalCheckin = parseInt(sessionStorage.getItem("totalCheckin"));
var stepCount = parseInt(sessionStorage.getItem("stepCount")) + 1;
var guestIndex = parseInt(sessionStorage.getItem("guestIndex"));
document.getElementById("steps").innerText = `Step ${stepCount} of ${
  totalCheckin + 1
}`;

var checkinList = JSON.parse(sessionStorage.getItem("checkinList"));
var e = checkinList[guestIndex];
console.log(totalCheckin);
console.log(guestIndex);

/**Continue check in */
function continueCheckin() {
  if (guestIndex < totalCheckin - 1) {
    guestIndex += 1;
    stepCount += 1;
    sessionStorage.setItem("guestIndex", guestIndex);
    sessionStorage.setItem("stepCount", stepCount);
    location.reload();
  } else {
    alert("Check in Successful");
  }
}

//Arrival Date
const url = "../../dummy.json";
function arrivalDate() {
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
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
document
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
});

document
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
});
document.getElementById("documentType").addEventListener("change", () => {
  frontId.style.display = "initial";
  frontImg.style.display = "none";
  if (document.getElementById("documentType").value == "Identification") {
    document.getElementById("preview2").style.display = "initial";
    document.getElementById("idSubmission2").required = true;
  } else {
    document.getElementById("preview2").style.display = "none";
    document.getElementById("idSubmission2").required = false;
  }
});
