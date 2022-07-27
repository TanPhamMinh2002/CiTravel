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
const url = "assets/dummy.json";
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
/**
var first = 0;
document.getElementById("arrivalTime").addEventListener("click", function () {
  if (first == 0) {
    this.value = "";
    first = 1;
  }
});

document.getElementById("arrivalTime").addEventListener("input", function () {
  console.log(this.value);
  const [h, mBox] = this.value.split(":");
  const [m, s] = mBox.split(" ");

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

new Picker(document.querySelector("form .js-time-picker"), {
  format: "HH:mm",
  headers: true,
  text: {
    title: "Pick your arrival time",
  },
  hour: 14,
}); */
