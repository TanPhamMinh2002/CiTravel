var q = parseInt(sessionStorage.getItem("q"));
var w = parseInt(sessionStorage.getItem("w"));
var e = parseInt(sessionStorage.getItem("e"));

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
