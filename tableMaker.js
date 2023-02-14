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

export let players = [
  { Name: "Wugz", Class: "druid", Role: "dps" },
  { Name: "Jet", Class: "warrior", Role: "tank" },
  { Name: "Ehm", Class: "mage", Role: "dps" },
  { Name: "Jonald", Class: "mage", Role: "dps" },
  { Name: "Tehroller", Class: "Paladin", Spec: "Holy", Role: "heals" },
];

export const doc = document;

export let playerObject = [];

export const tContainer = doc.getElementById("tContainer");

export function genTbl2() {
  let tDiv = doc.createElement("div");
  tDiv.setAttribute("class", "tDiv");
  tContainer.appendChild(tDiv);
  let table = doc.createElement("table");

  let caption = doc.createElement("caption");
  caption.setAttribute("class", "caption");

  let newText = doc.createElement("input");
  newText.setAttribute("class", "caption");
  newText.setAttribute("type", "text");
  newText.setAttribute("placeHolder", "Group #");

  caption.appendChild(newText);

  newText.addEventListener("keydown", editRelease);

  let tableBody = doc.createElement("tbody");
  table.setAttribute("id", Date.now());
  table.setAttribute("class", "groupTable");

  for (let i = 0; i < 5; i++) {
    const row = doc.createElement("tr");

    for (let j = 0; j < 3; j++) {
      const cellId = "playerGroup" + [i] + [j];
      let cell = doc.createElement("td");
      cell.id = cellId;

      if (j === 0) {
        let playerBtn = doc.createElement("button");

        playerBtn.id = "playerBtn" + i + j;
        playerBtn.innerText = "Select Player";
        playerBtn.setAttribute("type", "button");

        cell.appendChild(playerBtn);
        playerBtn.addEventListener("click", function () {
          let alreadyUsed = false;
          for (let i = 0; i < pMenuDiv.children.length; i++) {
            if (pMenuDiv.children[i].innerText === playerObject.name) {
              alreadyUsed = true;
              break;
            }
          }
          if (!alreadyUsed) {
            pMyDropdown.style.display = "block";
            stinky();
          }
        });
      }

      row.appendChild(cell);
    }
    tableBody.appendChild(row);
  }

  let tHead = table.createTHead();
  let tRow = tHead.insertRow();

  let thOne = doc.createElement("th");
  let textOne = doc.createTextNode("Name");
  thOne.appendChild(textOne);

  let thTwo = doc.createElement("th");
  let textTwo = doc.createTextNode("Role");
  thTwo.appendChild(textTwo);

  let thThree = doc.createElement("th");
  let textThree = doc.createTextNode("Class & Spec");
  thThree.appendChild(textThree);

  tRow.append(thOne, thTwo, thThree);
  table.append(caption, tRow, tableBody);
  tDiv.appendChild(table);

  let pDropDiv = doc.createElement("div");
  pDropDiv.setAttribute("class", "pDropdown");
  pDropDiv.setAttribute("id", "pDropdown");
  tDiv.appendChild(pDropDiv);

  let pDropdownDiv = doc.createElement("div");
  pDropdownDiv.setAttribute("id", "pMyDropdown");
  pDropdownDiv.setAttribute("class", "pDropdown-content");
  pDropDiv.appendChild(pDropdownDiv);
  pMyDropdown.style.display = "none";

  let pMenuDiv = doc.createElement("div");
  pMenuDiv.setAttribute("class", "pMenu");
  pMenuDiv.setAttribute("id", "pMenu");
  pDropdownDiv.appendChild(pMenuDiv);

  function stinky() {
    const createdLi = new Set();
    const rows = tDiv.querySelectorAll("tr");

    playerObject.forEach((item) => {
      if (!createdLi.has(item.name)) {
        let li = doc.createElement("li");
        const theButton = event.target;
        li.setAttribute("class", "playerItem");
        li.innerText = item.name;
        doc.getElementById("pMenu").appendChild(li);
        createdLi.add(item.name);
        li.addEventListener("click", function (event) {
          event.stopPropagation();
          let rowIndex = theButton.id.slice(-1);
          let cellId1 = "playerGroup" + rowIndex + "0";
          let cellId2 = "playerGroup" + rowIndex + "1";
          let cellId3 = "playerGroup" + rowIndex + "2";

          let cell1 = doc.getElementById(cellId1);
          let cell2 = doc.getElementById(cellId2);
          let cell3 = doc.getElementById(cellId3);

          cell1.innerText = playerObject.name;
          cell2.innerText = playerObject.charName;
          cell3.innerText = playerObject.classSpec;

          pMyDropdown.style.display = "none";
        });
      }
    });
  }
}

// let playerDrop = null;

// export function playerList() {
//   const table = document.querySelector("table");
//   table.addEventListener("click", function (event) {
//     if (event.target.matches("button")) {
//       const button = event.target;
//       const row = button.closest("tr");

//       const dropdown = createDropdown(playerObject);
//       doc.getElementById("pMenu").appendChild(dropdown);
//       console.log(dropdown);

//       function createDropdown(playerObject) {
//         if (!playerDrop) {
//           const localPlayerDrop = document.createElement("ul");
//           localPlayerDrop.classList.add("dropdown-menu");
//           localPlayerDrop.addEventListener("click", function (event) {
//             if (event.target.matches("li")) {
//               let selectedObject = playerObject.find(function (item) {
//                 return item.name === event.target.innerText;
//               });

//               let tds = row.querySelectorAll("td");
//               tds[0].innerText = selectedObject.name;
//               tds[1].innerText = selectedObject.CharName;
//               tds[2].innerText = selectedObject.classSpec;
//             }
//           });
//           const createdLi = new Set();
//           playerObject.forEach((obj) => {
//             if (!createdLi.has(obj.name)) {
//               const li = document.createElement("li");
//               li.textContent = obj.name;
//               playerDrop.appendChild(li);
//               createdLi.add(obj.name);
//             }
//           });
//           playerDrop = localPlayerDrop;
//         }
//         return playerDrop;
//       }
//     }
//   });
// }

// export function addStinky() {
//   let selectedObject = playerObject.find(function (item) {
//     return item.name === event.target.innerText;
//   });
//   let tds = row.querySelectorAll("td");
//   tds[0].innerText = selectedObject.name;
//   tds[1].innerText = selectedObject.CharName;
//   tds[2].innerText = selectedObject.classSpec;
// }

// export function createDropdown(playerObject) {
//   if (!playerDrop) {
//     playerDrop = document.createElement("ul");
//     playerDrop.classList.add("dropdown-menu");
//     playerDrop.addEventListener("click", function (event) {
//       if (event.target.matches("li")) {
//         let selectedObject = playerObject.find(function (item) {
//           return item.name === event.target.innerText;
//         });
//         let row = event.target.closest("tr");
//         let tds = row.querySelectorAll("td");
//         tds[0].innerText = selectedObject.name;
//         tds[1].innerText = selectedObject.CharName;
//         tds[2].innerText = selectedObject.classSpec;
//         dropdown.remove();
//       }
//     });
//     const createdLi = new Set();
//     playerObject.forEach((obj) => {
//       if (!createdLi.has(obj.name)) {
//         const li = document.createElement("li");
//         li.textContent = obj.name;
//         playerDrop.appendChild(li);
//         createdLi.add(obj.name);
//       }
//     });
//   }
//   return playerDrop;
// }

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

// let pDropDiv = doc.createElement("div");
// pDropDiv.setAttribute("class", "pDropdown");
// pDropDiv.setAttribute("id", "pDropdown");
// tDiv.appendChild(pDropDiv);

// let pDropdownDiv = doc.createElement("div");
// pDropdownDiv.setAttribute("id", "pMyDropdown");
// pDropdownDiv.setAttribute("class", "pDropdown-content");
// pDropDiv.appendChild(pDropdownDiv);

// let pMenuDiv = doc.createElement("div");
// pMenuDiv.setAttribute("class", "pMenu");
// pMenuDiv.setAttribute("id", "pMenu");
// pDropdownDiv.appendChild(pMenuDiv);
