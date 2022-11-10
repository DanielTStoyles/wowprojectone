/** @format */

function dropMenu() {
  document.getElementById("myDropdown").classList.toggle("show");
}

// /* close dropdown menu if user clicks outside of it */
window.onclick = function (event) {
  if (!event.target.matches(".dropbtn")) {
    let dropdowns = document.getElementsByClassName("dropdown-content");
    let i;
    for (i = 0; i < dropdowns.length; i++) {
      let openDropdown = dropdowns[i];
      if (openDropdown.classList.contains("show")) {
        openDropdown.classList.remove("show");
      }
    }
  }
};

function selection(id) {
  document.getElementById("selectionText").innerHTML =
    document.getElementById(id).innerHTML;
}

function playerForms() {
  let playerForm = document.createElement("form");
  playerForm.setAttribute("method", "post");
  playerForm.setAttribute("id", "playerForm");

  let pN = document.createElement("input");
  pN.setAttribute("id", "name");
  pN.setAttribute("type", "text");
  pN.setAttribute("playerName", "namePlayer");
  pN.setAttribute("placeholder", "Player Name");

  let classSpec = document.createElement("input");
  classSpec.setAttribute("id", "classSpec");
  classSpec.setAttribute("type", "text");
  classSpec.setAttribute("classAndSpec", "ClassAndSpec");
  classSpec.setAttribute("placeholder", "Class/Spec");

  let dataBtn = document.createElement("button");
  dataBtn.setAttribute("type", "submit");
  dataBtn.setAttribute("id", "dataBtn"), (dataBtn.textContent = "Save");

  playerForm.appendChild(pN);
  playerForm.appendChild(classSpec);
  document.getElementById("tdone").appendChild(playerForm);
  document.getElementById("tdone").appendChild(dataBtn);

  let form = document.getElementById("playerForm");
  dataBtn.addEventListener("click", addPlayer);
  dataBtn.addEventListener("click", form.remove());
  // dataBtn.addEventListener("click", formHide());
}

let playerData = [];

// function formHide() {
//   document
//     .getElementById("playerForm")
//     .parentElement.removeChild(document.getElementById("playerForm"));
//   document.getElementById("dataBtn").remove();
// }

const addPlayer = (ev) => {
  let player = {
    id: Date.now(),
    name: document.getElementById("name").value,
    classSpec: document.getElementById("classSpec").value,
  };
  playerData.push(player);
  console.warn("added", { playerData });
  localStorage.setItem("playerList", JSON.stringify(playerData));
};

// const fileSystem=require("browserify-fs")
// playerData.push(player);
// const data = JSON.stringify(playerData);
// document.querySelector("form").reset();
// writeFile("./playerData.json", data, (err) => {
//   if (err) {
//     console.log("Error writing file", err);
//   } else {
//     console.log("JSON data is written to the file successfully");
//   }
// });
// };
