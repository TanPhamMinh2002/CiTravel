var q = parseInt(sessionStorage.getItem("q"));
var w = parseInt(sessionStorage.getItem("w"));
var e = parseInt(sessionStorage.getItem("e"));
const url = "../assets/dummy.json";
/*Check in info injection*/
function bookinginfo() {
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      document.getElementById("arrival").innerText =
        data[q].itinerary.confirmation[w].arrival;
      document.getElementById("departure").innerText =
        data[q].itinerary.confirmation[w].departure;
      document.getElementById(
        "guestNum"
      ).innerText = `${data[q].itinerary.confirmation[w].guestNum} Adults`;
      document.getElementById(
        "nights"
      ).innerText = `${data[q].itinerary.confirmation[w].nights} nights`;
      document.getElementById("status").innerText =
        data[q].itinerary.confirmation[w].status;

      let bg_status = document.querySelector("#bg-status");
      let status = document.querySelector("#status");
      if (
        data[q].itinerary.confirmation[w].status == "Reserved" ||
        data[q].itinerary.confirmation[w].status == "Checkin"
      ) {
        bg_status.classList.add("reserved");
        status.classList.add("reserved");
      }
      if (data[q].itinerary.confirmation[w].status == "Inhouse") {
        bg_status.classList.add("inhouse");
        status.classList.add("inhouse");
      }
      if (data[q].itinerary.confirmation[w].status == "Checkout") {
        bg_status.classList.add("checkout");
        status.classList.add("checkout");
      }

      let btn_checkin = document.querySelector("#checkin");
      if (
        data[q].itinerary.confirmation[w].guestCheckin ==
        data[q].itinerary.confirmation[w].guestNum
      ) {
        document.getElementById("checkin").innerText =
          "Already checked in. Please scan the provided QR Code via email.";
        btn_checkin.disabled = true;
      }
      if (
        data[q].itinerary.confirmation[w].guestCheckin !=
        data[q].itinerary.confirmation[w].guestNum
      ) {
        document.getElementById(
          "checkin"
        ).innerText = `Check in online (${data[q].itinerary.confirmation[w].guestCheckin}/${data[q].itinerary.confirmation[w].guestNum})`;
        btn_checkin.disabled = false;
      }
      //console.log(data[q].itinerary.confirmation[w].arrival);
      //console.log(`${q} ${w} ${e}`);
      //console.log(typeof data[q].itinerary.confirmation[w].status);
    })
    .catch((error) => {
      console.error(error);
    });
}
bookinginfo();
