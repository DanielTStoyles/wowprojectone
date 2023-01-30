/* @format */
import {
  banner,
  specImages,
  dropImages,
  dropMenu,
  dropDisplay,
  selectionImage,
  pDropMenu,
} from "./dropMenuMaker.js";
// let table = document.querySelector("table");
export let players = [
  { Name: "Wugz", Class: "druid", Role: "dps" },
  { Name: "Jet", Class: "warrior", Role: "tank" },
  { Name: "Ehm", Class: "mage", Role: "dps" },
  { Name: "Jonald", Class: "mage", Role: "dps" },
  { Name: "Tehroller", Class: "Paladin", Spec: "Holy", Role: "heals" },
];
export let playerObject = [];
// let playerObjectData = Object.keys(playerObjectData[0]);
// export let data = Object.keys(players[0]);
export const tContainer = document.getElementById("tContainer");

export function genTbl2() {
  let tDiv = document.createElement("div");
  tDiv.setAttribute("class", "tDiv");
  tContainer.appendChild(tDiv);
  let table = document.createElement("table");
  let caption = document.createElement("caption");
  caption.setAttribute("class", "caption");
  let newText = document.createElement("input");
  newText.setAttribute("class", "caption");
  newText.setAttribute("type", "text");
  newText.setAttribute("placeHolder", "Group #");

  caption.appendChild(newText);
  newText.addEventListener("onkeydown", editRelease());
  let tableBody = document.createElement("tbody");
  table.setAttribute("id", Date.now());
  table.setAttribute("class", "groupTable");

  for (let i = 0; i < 5; i++) {
    const row = document.createElement("tr");

    for (let j = 0; j < 3; j++) {
      const cell = document.createElement("td");
      if ([j] == 0) {
        let playerBtn = document.createElement("button");
        let newTextNode = document.createTextNode("Select Player");
        playerBtn.className = "playerBtn";
        playerBtn.id = "playerBtn";
        playerBtn.setAttribute("type", "button");

        playerBtn.appendChild(newTextNode);

        cell.appendChild(playerBtn);

        playerBtn.addEventListener("click", function (event) {
          if (event.target === playerBtn) {
            playerList();
          }
        });
      }
      row.appendChild(cell);
      tableBody.appendChild(row);
    }
  }

  let tHead = table.createTHead();
  let tRow = tHead.insertRow();

  let thOne = document.createElement("th");
  let textOne = document.createTextNode("Name");
  thOne.appendChild(textOne);

  let thTwo = document.createElement("th");
  let textTwo = document.createTextNode("Role");
  thTwo.appendChild(textTwo);

  let thThree = document.createElement("th");
  let textThree = document.createTextNode("Class & Spec");
  thThree.appendChild(textThree);

  tRow.appendChild(thOne);
  tRow.appendChild(thTwo);
  tRow.appendChild(thThree);

  table.appendChild(caption);
  table.appendChild(tRow);
  table.appendChild(tableBody);
  tDiv.appendChild(table);

  let pDropDiv = document.createElement("div");
  pDropDiv.setAttribute("class", "pDropdown");
  pDropDiv.setAttribute("id", "pDropdown");
  tDiv.appendChild(pDropDiv);

  let pDropdownDiv = document.createElement("div");
  pDropdownDiv.setAttribute("id", "pMyDropdown");
  pDropdownDiv.setAttribute("class", "pDropdown-content");
  pDropDiv.appendChild(pDropdownDiv);

  let pMenuDiv = document.createElement("div");
  pMenuDiv.setAttribute("class", "pMenu");
  pMenuDiv.setAttribute("id", "pMenu");
  pDropdownDiv.appendChild(pMenuDiv);
}

export function playerList() {
  let data = Object.values(playerObject[0]);
  console.log(data);

  for (let i = 0; i < playerObject.length; i++) {
    let pListItem = document.createElement("li");
    let listSpace = document.createElement("p");
    let newText = document.createTextNode(data[1]);
    pListItem.setAttribute("class", "playerOption");
    pListItem.appendChild(listSpace);
    listSpace.appendChild(newText);
    pDropMenu();
    document.getElementById("pMenu").appendChild(pListItem);
    pListItem.addEventListener("click", function () {
      for (let j = 0; j < data.length; j++) {
        let tableNode = document.createTextNode(data[1]);
        let table = document.querySelector("table");
        let cells = table.querySelectorAll("td");
        cells[j].appendChild(tableNode);
      }
    });
  }
}

export function genTbl() {
  //Create the table element, create table body and append it to the table
  let table = document.createElement("table");
  let tableBody = document.createElement("tbody");
  table.appendChild(tableBody);
  table.setAttribute("id", Date.now());
  table.setAttribute("class", "groupTable");

  //Create, populate, and append table rows
  function generateTable(tableBody, data) {
    for (let element of data) {
      let newRow = tableBody.insertRow();
      console.log(element);
      for (const key in element) {
        let cell = newRow.insertCell();
        let text = document.createTextNode(element[key]);
        cell.appendChild(text);
        tableBody.appendChild(newRow);
      }
    }
  }
  generateTable(table, playerObject);
  tContainer.appendChild(table);
  let tHead = document.querySelector("table").createTHead();
  let row = tHead.insertRow();
  let newData = Object.keys(playerObject[0]);
  console.log(newData);

  for (let key of newData) {
    let th = document.createElement("th");
    let text = document.createTextNode(key);
    th.appendChild(text);
    row.appendChild(th);
  }
}

export function genTHead() {
  let tHead = document.querySelector("table").createTHead();
  let row = tHead.insertRow();
  for (let key of data) {
    let th = document.createElement("th");
    let text = document.createTextNode(key);
    th.appendChild(text);
    row.appendChild(th);
  }
}

export function tblCloner() {
  let userValue = document.getElementById("userInput").value;
  let i = 0;
  for (i = 0; i < userValue; i++) {
    genTbl2();
  }
  document.getElementById("tblNumber").reset();
}

export function editRelease() {
  let captionList = document.getElementsByClassName("caption");

  if (event.key === "Enter") {
    for (i = 0; i < captionList.length; i++) {
      let captionItem = captionList[i];
      captionItem.blur(captionItem[i]);
      console.log("functioning", captionList, captionItem);
    }
  } else {
    console.log("this is the else function");
  }
}

export function editButton() {
  document.getElementById("caption").setAttribute("contenteditable", true);
}

export function formHide(id) {
  let form = document.getElementById("playerForm");
  form.remove();
  document.getElementsByClassName(id).remove();
}

export function playerForms() {
  let playerForm = document.getElementById("playerForm");
  playerForm.setAttribute("method", "post");
  playerForm.setAttribute("id", "playerForm");

  let pN = document.createElement("input");
  pN.setAttribute("id", "name");
  pN.setAttribute("type", "text");
  pN.setAttribute("placeholder", "Player Name");

  let charName = document.createElement("input");
  charName.setAttribute("id", "charName");
  charName.setAttribute("type", "text");
  charName.setAttribute("placeholder", "Character Name");

  let alternateRole = document.createElement("input");
  alternateRole.setAttribute("id", "alternateRole");
  alternateRole.setAttribute("type", "text");
  alternateRole.setAttribute("placeholder", "Alternate Role (optional)");

  document.getElementById("pF1").appendChild(pN);
  document.getElementById("pF2").appendChild(charName);
  document.getElementById("pF4").appendChild(alternateRole);
  // document.getElementById("formP").appendChild(playerForm);

  let dataBtn = document.createElement("button");
  dataBtn.setAttribute("type", "submit");
  dataBtn.setAttribute("id", "dataBtn"), (dataBtn.textContent = "Save");
  document.getElementById("pF5").appendChild(dataBtn);
  // dataBtn.addEventListener(
  //   "click",
  //   (e) => {
  //     e.stopPropogation;
  //     addPlayer();
  //     formHide();
  //   },
  //   false
  // );
}

export function consoleLogger() {
  let playersList = Object.values(playerObject);
  console.log(playersList);
}

// export function dropPlayer() {
//   for (let i = 0; i < playerObject.length; i++) {
//     let item = playerObject[i];
//     let listItem = document.createElement("li");
//     let listItemId = "playerItem";

//     listItem.setAttribute("class", "playerList");
//     listItem.setAttribute("id", listItemId + (i + 1));

//     let playerProfile = document.createElement("p");
//     let playerProfileId = "playerSelection";
//     playerProfile.setAttribute("class", "playerSelection");
//     playerProfile.setAttribute("id", playerProfileId + (i + 1));
//     let id = listItem.id;
//     // playerProfile.setAttribute("src", item.src);

//     listItem.appendChild(playerProfile);
//     document.getElementById("menu").appendChild(listItem);
//     listItem.addEventListener(
//       "click", function (event){
//         if (event.target===playerProfile){
//           console.log("it worked!");
//         }
//       }

//     );
//   }
// }
