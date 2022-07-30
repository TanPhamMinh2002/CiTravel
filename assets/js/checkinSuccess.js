let checkBox = document.querySelector("#send");
checkBox.addEventListener("click", function () {
  checkBox.classList.toggle("active");
});

var q = parseInt(sessionStorage.getItem("q"));
var w = parseInt(sessionStorage.getItem("w"));

const url = "assets/dummy.json";

function qrSend() {
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      for (
        let i = 0;
        i < data[q].itinerary.confirmation[w].guest.length;
        i++
      ) {}
      console.log(data[q].itinerary.confirmation[w].guest.length);
    })
    .catch((error) => {
      console.error(error);
    });
}
qrSend();
