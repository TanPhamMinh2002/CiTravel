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
