var q = parseInt(sessionStorage.getItem("q"));
var w = parseInt(sessionStorage.getItem("w"));
var e = parseInt(sessionStorage.getItem("e"));
/*document.getElementById("documentType").addEventListener("click", () => {
  console.log(document.getElementById("documentType").value);
});*/

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
      frontId.style.display = null;
      frontImg.style.display = null;
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
      backId.style.display = null;
      backImg.style.display = null;
    }
  });
backImg.addEventListener("click", function () {
  backId.style.display = "initial";
  backImg.style.display = "none";
});
