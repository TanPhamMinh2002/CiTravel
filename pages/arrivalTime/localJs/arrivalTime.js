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
