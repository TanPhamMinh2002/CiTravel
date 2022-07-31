function displayInfo(url, q, w, e) {
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
      let firstAdditionGuest = false;
      for (let i = 0; i < data[q].itinerary.confirmation[w].guest.length; i++) {
        if (data[q].itinerary.confirmation[w].guest[i].mainGuest) {
          document.getElementById(
            "mainName"
          ).innerText = `${data[q].itinerary.confirmation[w].guest[i].firstName} ${data[q].itinerary.confirmation[w].guest[i].lastName}`;
          if (data[q].itinerary.confirmation[w].guest[i].checkin) {
            document.getElementById("mainStatus").innerText = "Verified";
            document.getElementById("mainStatus").classList.add("verified");
          } else {
            document.getElementById("mainStatus").innerText = "Not Verified";
            document.getElementById("mainStatus").classList.add("notVerified");
            document.getElementById("mainBtn").classList.add("active");
          }
        } else {
          if (!firstAdditionGuest) {
            firstAdditionGuest = true;
            let guestType = document.createElement("div");
            guestType.classList.add("guestType");
            guestType.innerText = "Additional Guest";
            document.querySelector(".guestSection").appendChild(guestType);
          }
          let boxInfo = document.createElement("div");
          boxInfo.classList.add("boxInfo");
          let guestInfo = document.createElement("div");
          guestInfo.classList.add("guestInfo");
          let guestName = document.createElement("h2");
          guestName.classList.add("guestName");
          guestName.innerText = `${data[q].itinerary.confirmation[w].guest[i].firstName} ${data[q].itinerary.confirmation[w].guest[i].lastName}`;
          let guestStatus = document.createElement("p");
          guestStatus.classList.add("guestStatus");
          let checkinBtn = document.createElement("button");
          checkinBtn.classList.add("checkinBtn");
          checkinBtn.innerText = "Check in";
          checkinBtn.setAttribute("onclick", "location.href='check-in'");
          if (data[q].itinerary.confirmation[w].guest[i].checkin) {
            guestStatus.innerText = "Verified";
            guestStatus.classList.add("verified");
          } else {
            guestStatus.innerText = "Not Verified";
            guestStatus.classList.add("notVerified");
            checkinBtn.classList.add("active");
          }
          guestInfo.appendChild(guestName);
          guestInfo.appendChild(guestStatus);
          boxInfo.appendChild(guestInfo);
          boxInfo.appendChild(checkinBtn);
          document.querySelector(".guestSection").appendChild(boxInfo);
        }
      }
    })
    .catch((error) => {
      console.error(error);
    });
}

displayInfo(
  "assets/dummy.json",
  parseInt(sessionStorage.getItem("q")),
  parseInt(sessionStorage.getItem("w")),
  parseInt(sessionStorage.getItem("e"))
);
