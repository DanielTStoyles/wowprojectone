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
  { name: "Wugz", Class: "druid", Spec: "Feral", Role: "dps" },
  { name: "Jet", Class: "warrior", Spec: "Prot", Role: "tank" },
  { name: "Ehm", Class: "mage", Spec: "Fire", Role: "dps" },
  { name: "Jonald", Class: "mage", Spec: "Arcane", Role: "dps" },
  { name: "Tehroller", Class: "Paladin", Spec: "Holy", Role: "heals" },
];

let myTbl = document.getElementById("myTbl");
let container = document.getElementById("tContainer");

function tblCloner(userValue) {
  for (i = 0; i < userValue; i++) {
    container.appendChild(myTbl.cloneNode(true));
  }
  document.getElementById("tblNumber").reset();
}
