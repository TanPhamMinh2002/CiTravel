var q = parseInt(sessionStorage.getItem("q"));
var w = parseInt(sessionStorage.getItem("w"));
var e = parseInt(sessionStorage.getItem("e"));
var totalCheckin = parseInt(sessionStorage.getItem("totalCheckin"));
var stepCount = 1;
document.getElementById("steps").innerText = `Step ${stepCount} of ${
  totalCheckin + 1
}`;
sessionStorage.setItem("stepCount", stepCount);
//Arrival Date
const url = "../../dummy.json";
function arrivalDate() {
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      var input = (document.getElementById("arrivalDate").placeholder =
        data[q].itinerary.confirmation[w].arrival);
    })
    .catch((error) => {
      console.log(error);
    });
}
arrivalDate();

document
  .getElementById("arrivalTime")
  .addEventListener("input", function (event) {
    console.log(this.value);
    const [h, mBox] = this.value.split(":");
    const [m, s] = mBox.split(" ");
    console.log(`${h} and ${m} and ${s}`);
    let btn = document.querySelector("#submitBtn");
    if (h == 12 || h == 1 || s == "am") {
      console.log("error");
      btn.disabled = true;
      btn.value = "Please select after 2pm";
    } else {
      btn.disabled = false;
      btn.value = "Continue";
    }
  });
