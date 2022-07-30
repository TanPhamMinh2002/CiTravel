var q = parseInt(sessionStorage.getItem("q"));
var w = parseInt(sessionStorage.getItem("w"));

const url = "assets/dummy.json";
let sendList = [];
function qrSend() {
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      for (let i = 0; i < data[q].itinerary.confirmation[w].guest.length; i++) {
        if (data[q].itinerary.confirmation[w].guest[i].checkin) {
          let emailForm = document.createElement("div");
          emailForm.classList.add("emailForm");
          let qrDisplay = document.createElement("div");
          qrDisplay.classList.add("qrDisplay");
          let qrGuest = document.createElement("img");
          qrGuest.id = "qrGuest";
          qrGuest.setAttribute(
            "src",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnybLZQkb8BG9uN4bX31TBXP51qPlA3gD00g&usqp=CAU"
          );
          let guestName = document.createElement("h2");
          guestName.classList.add("guestName");
          guestName.innerText = `${data[q].itinerary.confirmation[w].guest[i].firstName} ${data[q].itinerary.confirmation[w].guest[i].lastName}`;
          qrDisplay.appendChild(qrGuest);
          qrDisplay.appendChild(guestName);

          let inputEmail = document.createElement("div");
          inputEmail.classList.add("inputEmail");
          let label = document.createElement("label");
          label.setAttribute("for", "guestEmail");
          label.innerText = "Email";
          let guestEmail = document.createElement("input");
          guestEmail.id = "guestEmail";
          guestEmail.setAttribute("type", "email");
          inputEmail.appendChild(label);
          inputEmail.appendChild(guestEmail);

          let send = document.createElement("a");
          send.id = "send";
          let checkBox = document.createElement("div");
          checkBox.classList.add("checkBox");
          let checkIcon = document.createElement("i");
          checkIcon.classList.add("fa-solid", "fa-check");
          let p = document.createElement("p");
          p.innerText = "Send this code to my email";
          checkBox.appendChild(checkIcon);
          send.appendChild(checkBox);
          send.appendChild(p);
          send.addEventListener("click", function () {
            send.classList.toggle("active");
          });
          sendList.push(send);
          emailForm.appendChild(qrDisplay);
          emailForm.appendChild(inputEmail);
          emailForm.appendChild(send);
          document.getElementById("sendEmail").appendChild(emailForm);
        }
      }
    })
    .catch((error) => {
      console.error(error);
    });
}
qrSend();

menu.addEventListener("click", function () {
  document.getElementById("submitBtn").classList.toggle("hide");
  document.querySelector(".status .icon").classList.toggle("hide");
  document.getElementById("send").classList.toggle("hide");
});
