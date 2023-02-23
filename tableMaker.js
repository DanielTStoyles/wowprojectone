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

export const playerObject = [];

export const tContainer = doc.getElementById("tContainer");

// let createdList = new Set();

export function genTbl2() {
  let tDiv = doc.createElement("div");

  tDiv.setAttribute("class", "tDiv");
  tContainer.appendChild(tDiv);

  let table = doc.createElement("table");
  table.setAttribute("id", Date.now());
  table.setAttribute("class", "groupTable");

  let caption = doc.createElement("caption");
  caption.setAttribute("class", "caption");

  let newText = doc.createElement("input");
  newText.setAttribute("class", "caption");
  newText.setAttribute("type", "text");
  newText.setAttribute("placeHolder", "Group #");

  caption.appendChild(newText);

  let tableBody = doc.createElement("tbody");

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

  const pDropMenuDiv = doc.createElement("div");
  const pDropUl = doc.createElement("ul");
  pDropMenuDiv.appendChild(pDropUl);

  for (let i = 0; i < 5; i++) {
    const row = doc.createElement("tr");

    for (let j = 0; j < 3; j++) {
      // const cellId = "playerGroup" + [i] + [j];
      let cell = doc.createElement("td");
      // cell.id = cellId;

      if (j === 0) {
        let playerBtn = doc.createElement("button");
        playerBtn.innerText = "Select Player";
        playerBtn.setAttribute("type", "button");
        playerBtn.setAttribute("class", "pDropdownBtn");
        cell.appendChild(playerBtn);

        let currentRow = -1;

        let dropdownBtns = doc.querySelectorAll(".pDropdownBtn");
        for (let i = 0; i < dropdownBtns.length; i++) {
          dropdownBtns[i].addEventListener("click", function () {
            currentRow = this.parentNode.parentNode.rowIndex;
            showDropdownMenu(this);
          });
        }
        let fillCells = doc.querySelectorAll("fill-cell");
        for (let i = 0; i < fillCells.length; i++) {
          fillCells[i].addEventListener("click", function () {
            let tableRows = doc.querySelectorAll("table tr");
            let tableCells = tableRows[currentRow].querySelectorAll("td");
            for (let i = 1; i < tableCells; i++) {
              tableCells[i].textContent = this.getAttribute("data-text");
            }
            hideDropdownMenu();
          });
        }

        function showDropdownMenu(button) {
          let dropdownMenu = doc.querySelector(".dropdown-menu");
          dropdownMenu.style.display = "block";
          let buttonPosition = button.getBoundingClientRect();
          dropdownMenu.style.top = buttonPosition.bottom + "px";
          dropdownMenu.style.left = buttonPosition.left + "px";
        }

        function hideDropdownMenu() {
          let dropdownMenu = doc.querySelector(".dropdown-menu");
          dropdownMenu.style.display = "none";
        }
        // playerBtn.addEventListener("click", function () {
        //   pMyDropdown.style.display = "block";

        //   for (let i = 0; i < playerObject.length; i++) {
        //     let playerObjects = Object.values(playerObject[i]);

        //     if (!createdList.has(playerObjects[i].innerText)) {
        //       let listyWisty = doc.createElement("li");
        //       let rowId = event.currentTarget.parentNode.parentNode.id;
        //       playerBtn.setAttribute("data-row-id", rowId);
        //       listyWisty.innerText = playerObjects[1];
        //       listyWisty.id = "listyWisty" + i;
        //       createdList.add(playerObjects[1].innerText);

        //       listyWisty.addEventListener("click", function () {
        //         event.stopPropagation();

        //         const rows = document.getElementById(
        //           playerBtn.getAttribute("data-row-id")
        //         );
        //         let tds = rows.getElementsByTagName("td");
        //         let specialImage = document.createElement("img");
        //         for (let j = 0; j < tds.length; j++) {
        //           let cellOne = tds[0];
        //           let cellTwo = tds[1];
        //           let cellThree = tds[2];

        //           specialImage.src = playerObjects[4];
        //           cellOne.innerText = playerObjects[1];
        //           cellTwo.innerText = playerObjects[2];
        //           cellThree.appendChild(specialImage);

        //           pMyDropdown.style.display = "none";
        //         }
        //       });

        //       pMenuDiv.appendChild(listyWisty);
        //     }
        //   }

        //   cell.appendChild(playerBtn);
        // });
      }
      row.appendChild(cell);
    }
    tableBody.appendChild(row);
  }

  // let pDropDiv = doc.createElement("div");
  // pDropDiv.setAttribute("class", "pDropdown");
  // pDropDiv.setAttribute("id", "pDropdown");
  // tDiv.appendChild(pDropDiv);

  // let pDropdownDiv = doc.createElement("div");
  // pDropdownDiv.setAttribute("id", "pMyDropdown");
  // pDropdownDiv.setAttribute("class", "pDropdown-content");
  // pDropDiv.appendChild(pDropdownDiv);
  // pMyDropdown.style.display = "none";

  // let pMenuDiv = doc.createElement("div");
  // pMenuDiv.setAttribute("class", "pMenu");
  // pMenuDiv.setAttribute("id", "pMenu");
  // pDropdownDiv.appendChild(pMenuDiv);
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
