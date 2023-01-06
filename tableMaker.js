/* @format */

// let table = document.querySelector("table");
export let players = [
  { Name: "Wugz", Class: "druid", Spec: "Feral", Role: "dps" },
  { Name: "Jet", Class: "warrior", Spec: "Prot", Role: "tank" },
  { Name: "Ehm", Class: "mage", Spec: "Fire", Role: "dps" },
  { Name: "Jonald", Class: "mage", Spec: "Arcane", Role: "dps" },
  { Name: "Tehroller", Class: "Paladin", Spec: "Holy", Role: "heals" },
];

export let data = Object.keys(players[0]);
export const tContainer = document.getElementById("tContainer");

export function genTbl2() {
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

    for (let j = 0; j < 1; j++) {
      const cell = document.createElement("td");
      // const cellText = document.createTextNode(`text ${i}, text ${j}`);
      // cell.appendChild(cellText);
      let button = document.createElement("button");
      button.setAttribute("id", "dropBtn");
      button.setAttribute("class", "dropbtn");
      button.textContent = "Class/Spec";
      button.addEventListener("click", () => {
        document.getElementById("myDropdown").classList.toggle("show");
      });
      cell.appendChild(button);
      row.appendChild(cell);
      tableBody.appendChild(row);
    }
  }

  let tHead = table.createTHead();
  let tRow = tHead.insertRow();
  for (let key of data) {
    let th = document.createElement("th");
    let text = document.createTextNode(key);
    th.appendChild(text);
    tRow.appendChild(th);
  }
  table.appendChild(caption);
  table.appendChild(tRow);
  table.appendChild(tableBody);
  tContainer.appendChild(table);
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
  generateTable(table, players);
  tContainer.appendChild(table);
  genTHead();
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
