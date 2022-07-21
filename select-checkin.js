//Display Guests
var q = parseInt(sessionStorage.getItem("q"));
var w = parseInt(sessionStorage.getItem("w"));
var e = parseInt(sessionStorage.getItem("e"));
const btnList = [];

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

/*[].forEach.call(btnList, (el) => {
  el.addEventListener("click", () => {
    el.classList.toggle("active");
    select_all.classList.remove("active");
  });
});*/

const url = "dummy.json";
function guestCheckin() {
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      for (let i = 0; i < data[q].itinerary.confirmation[w].guest.length; i++) {
        if (data[q].itinerary.confirmation[w].guest[i].mainGuest) {
          document.getElementById(
            "mainGuest"
          ).innerText = `${data[q].itinerary.confirmation[w].guest[i].firstName} ${data[q].itinerary.confirmation[w].guest[i].lastName}`;
        } else {
          let btn = document.createElement("button");
          btn.classList.add("checkbox", "not_verified");
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
          status.innerText = "Not Verified";
          div.appendChild(status);
          btnList.push(btn);
          btn.addEventListener("click", () => {
            btn.classList.toggle("active");
            select_all.classList.remove("active");
          });
        }
      }
    });
}
guestCheckin();
