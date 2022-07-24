//Display Guests
var q = parseInt(sessionStorage.getItem("q"));
var w = parseInt(sessionStorage.getItem("w"));
var e = parseInt(sessionStorage.getItem("e"));
var btnList = [];
const url = "../../dummy.json";

//Select all
let select_all = document.querySelector(".select_all a");

select_all.addEventListener("click", () => {
  select_all.classList.toggle("active");
  [].forEach.call(btnList, (el) => {
    if (!el.classList.contains("active")) {
      el.classList.add("active");
    }
  });
  if (!select_all.classList.contains("active")) {
    [].forEach.call(btnList, (el) => {
      el.classList.remove("active");
    });
  }
});
function getGuest() {
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      let count = 0;
      for (let i = 0; i < btnList.length; i++) {
        if (
          btnList[i].classList.contains("active") &&
          !data[q].itinerary.confirmation[w].guest[i].checkin
        ) {
          count += 1;
        }
      }
      alert(count);
    })
    .catch((error) => {
      console.error(error);
    });
}
/*[].forEach.call(btnList, (el) => {
  el.addEventListener("click", () => {
    el.classList.toggle("active");
    select_all.classList.remove("active");
  });
});*/

function guestCheckin() {
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      for (let i = 0; i < data[q].itinerary.confirmation[w].guest.length; i++) {
        if (data[q].itinerary.confirmation[w].guest[i].mainGuest) {
          document.getElementById(
            "mainGuest"
          ).innerText = `${data[q].itinerary.confirmation[w].guest[i].firstName} ${data[q].itinerary.confirmation[w].guest[i].lastName}`;
          let statusMain = document.querySelector("#mainBox .status");
          let btnMain = document.querySelector("#mainBox");
          let divMain = document.querySelector("#mainBox .guest_info");
          statusMain.classList.add("status");
          if (!data[q].itinerary.confirmation[w].guest[i].checkin) {
            statusMain.innerText = "Not Verified";
            btnMain.classList.add("not_verified");
          } else {
            statusMain.innerText = "Verified";
            btnMain.classList.add("verified");
          }
          divMain.appendChild(statusMain);
          btnMain.addEventListener("click", () => {
            btnMain.classList.toggle("active");
            select_all.classList.remove("active");
          });
          btnList.push(btnMain);
        } else {
          let btn = document.createElement("button");
          btn.classList.add("checkbox");
          document.getElementById("additionalGuest").appendChild(btn);
          let div = document.createElement("div");
          div.classList.add("guest_info");
          btn.appendChild(div);
          let tick = document.createElement("i");
          tick.classList.add("fa-solid", "fa-circle-check");
          btn.appendChild(tick);
          let name = document.createElement("p");
          name.classList.add("name");
          name.innerText = `${data[q].itinerary.confirmation[w].guest[i].firstName} ${data[q].itinerary.confirmation[w].guest[i].lastName}`;
          div.appendChild(name);
          let status = document.createElement("p");
          status.classList.add("status");
          if (!data[q].itinerary.confirmation[w].guest[i].checkin) {
            status.innerText = "Not Verified";
            btn.classList.add("not_verified");
          } else {
            status.innerText = "Verified";
            btn.classList.add("verified");
          }
          div.appendChild(status);
          btnList.push(btn);
          btn.addEventListener("click", () => {
            btn.classList.toggle("active");
            select_all.classList.remove("active");
          });
        }
      }
    })
    .catch((error) => {
      console.error(error);
    });
}
guestCheckin();
