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
  pN.setAttribute("placeholder", "Player Name");

  let classSpec = document.createElement("input");
  classSpec.setAttribute("id", "classSpec");
  classSpec.setAttribute("type", "text");
  classSpec.setAttribute("placeholder", "Class/Spec");

  playerForm.appendChild(pN);
  playerForm.appendChild(classSpec);
  document.getElementById("formP").appendChild(playerForm);

  let dataBtn = document.createElement("button");
  dataBtn.setAttribute("type", "submit");
  dataBtn.setAttribute("id", "dataBtn"), (dataBtn.textContent = "Save");
  document.getElementById("formP").appendChild(dataBtn);
  dataBtn.addEventListener(
    "click",
    (e) => {
      e.stopPropogation;
      addPlayer();
      formHide();
    },
    false
  );
}

let playerData = [];

function formHide(id) {
  let form = document.getElementById("playerForm");
  form.remove();
  document.getElementsByClassName(id).remove();
}

const addPlayer = () => {
  let player = {
    id: Date.now(),
    name: document.getElementById("name").value,
    classSpec: document.getElementById("classSpec").value,
  };
  playerData.push(player);
  console.warn("added", { playerData });
  localStorage.setItem("playerList", JSON.stringify(playerData));
};

function popup(mylink, windowname) {
  if (!window.focus) return true;
  var href;
  if (typeof mylink == "string") href = mylink;
  else href = mylink.href;
  window.open(href, windowname, "width=400,height=200,scrollbars=yes");
  return false;
}

let players = [
  { Name: "Wugz", Class: "druid", Spec: "Feral", Role: "dps" },
  { Name: "Jet", Class: "warrior", Spec: "Prot", Role: "tank" },
  { Name: "Ehm", Class: "mage", Spec: "Fire", Role: "dps" },
  { Name: "Jonald", Class: "mage", Spec: "Arcane", Role: "dps" },
  { Name: "Tehroller", Class: "Paladin", Spec: "Holy", Role: "heals" },
];

// let myTbl = document.getElementById("myTbl");
// let container = document.getElementById("tContainer");

let table = document.querySelector("table");
let data = Object.keys(players[0]);

// function tblCloner(userValue) {
//   for (i = 0; i < userValue; i++) {
//     container.appendChild(myTbl.cloneNode(true));
//   }
//   document.getElementById("tblNumber").reset();
// }

function genTbl() {
  //Create the table element, create table body and append it to the table
  let table = document.createElement("table");
  let tableBody = document.createElement("tbody");
  table.appendChild(tableBody);
  table.setAttribute("id", Date.now());
  table.setAttribute("class", "groupTable");

  // Create the table head, insert row into thead, populate thead with the keys in players array
  function genTHead() {
    let tHead = table.createTHead();
    let row = tHead.insertRow();
    for (let key of data) {
      let th = document.createElement("th");
      let text = document.createTextNode(key);
      th.appendChild(text);
      row.appendChild(th);
    }
  }

  //Create, populate, and append table rows
  function generateTable(tablebody, data) {
    for (let element of data) {
      let newRow = tablebody.insertRow();
      for (key in element) {
        let cell = newRow.insertCell();
        let text = document.createTextNode(element[key]);
        cell.appendChild(text);
      }
    }
  }
  generateTable(table, players);
  genTHead();
  tContainer.appendChild(table);
}
