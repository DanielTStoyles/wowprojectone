/* @format */

export const doc = document;

export const playerObject = [];

export const tContainer = doc.getElementById("tContainer");

let createdList = new Set();

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
          pMyDropdown.style.display = "block";

          const currentButton = this;
          console.log(currentButton);

          for (let i = 0; i < playerObject.length; i++) {
            let playerObjects = Object.values(playerObject[i]);
            console.log(playerObjects);

            if (!createdList.has(playerObjects[1].innerText)) {
              let listyWisty = doc.createElement("li");
              listyWisty.innerText = playerObjects[1];
              createdList.add(playerObjects[1].innerText);
              listyWisty.addEventListener("click", function () {
                event.stopPropagation();
                const location = currentButton;
                let rows = location.parentNode.parentNode;
                let tds = rows.getElementsByTagName("td");
                let specialImage = document.createElement("img");
                for (let j = 0; j < tds.length; j++) {
                  let cellOne = tds[0];
                  let cellTwo = tds[1];
                  let cellThree = tds[2];

                  specialImage.src = playerObjects[4];

                  cellOne.innerText = playerObjects[1];
                  cellTwo.innerText = playerObjects[2];
                  cellThree.appendChild(specialImage);

                  pMyDropdown.style.display = "none";
                }
              });

              pMenuDiv.appendChild(listyWisty);
            }
          }

          cell.appendChild(playerBtn);
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
  const playerForm = document.getElementById("playerForm");
  playerForm.setAttribute("method", "post");

  const pN = document.createElement("input");
  pN.setAttribute("id", "name");
  pN.setAttribute("type", "text");
  pN.setAttribute("placeholder", "Player Name");

  const charName = document.createElement("input");
  charName.setAttribute("id", "charName");
  charName.setAttribute("type", "text");
  charName.setAttribute("placeholder", "Character Name");

  const alternateRole = document.createElement("input");
  alternateRole.setAttribute("id", "alternateRole");
  alternateRole.setAttribute("type", "text");
  alternateRole.setAttribute("placeholder", "Alternate Role (optional)");

  document.querySelector("#pF1").appendChild(pN);
  document.querySelector("#pF2").appendChild(charName);
  document.querySelector("#pF4").appendChild(alternateRole);

  const dataBtn = document.createElement("button");
  dataBtn.setAttribute("type", "submit");
  dataBtn.setAttribute("id", "dataBtn");
  dataBtn.textContent = "Save";
  document.querySelector("#pF5").appendChild(dataBtn);
  dataBtn.addEventListener("click", onSubmit);

  function onSubmit(e) {
    e.preventDefault();
    addPlayer();
    formHide();
  }
}

export function playerWindow() {
  const playerWindow = doc.createElement("div");
  playerWindow.class = "playerWindow";
  playerWindow.id = "playerWindow";
  const titleText = doc.createElement("p");
  titleText.class = "titleText";
  titleText.innerText = "Saved Players";
  let listOfP = doc.createElement("ul");
  playerWindow.appendChild(titleText);
  playerWindow.appendChild(listOfP);

  function makeList() {
    let listOfPlayers = JSON.parse(localStorage.getItem("playerList"));
    for (let i = 0; i < listOfPlayers.length; i++) {
      const listItem = doc.createElement("li");
      listItem.innerText = listOfPlayers[i].name;
      listOfP.appendChild(listItem);
    }
  }
  document.getElementById("tContainer").appendChild(playerWindow);
  makeList();
}
