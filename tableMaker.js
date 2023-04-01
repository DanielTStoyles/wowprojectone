

// export function genTbl2() {
//   let tDiv = doc.createElement("div");
//   tDiv.setAttribute("class", "tDiv");
//   tContainer.appendChild(tDiv);
//   let table = doc.createElement("table");

//   let caption = doc.createElement("caption");
//   caption.setAttribute("class", "caption");

//   let newText = doc.createElement("input");
//   newText.setAttribute("class", "caption");
//   newText.setAttribute("type", "text");
//   newText.setAttribute("placeHolder", "Group #");

//   caption.appendChild(newText);

//   newText.addEventListener("keydown", editRelease);

//   let tableBody = doc.createElement("tbody");
//   table.setAttribute("id", Date.now());
//   table.setAttribute("class", "groupTable");

//   for (let i = 0; i < 5; i++) {
//     const row = doc.createElement("tr");

//     for (let j = 0; j < 3; j++) {
//       const cellId = "playerGroup" + [i] + [j];
//       let cell = doc.createElement("td");
//       cell.id = cellId;

//       if (j === 0) {
//         let playerBtn = doc.createElement("button");

//         playerBtn.id = "playerBtn" + i + j;
//         playerBtn.innerText = "Select Player";
//         playerBtn.setAttribute("type", "button");

//         cell.appendChild(playerBtn);
//         playerBtn.addEventListener("click", function () {
//           pMyDropdown.style.display = "block";

//           const currentButton = this;
//           console.log(currentButton);

//           for (let i = 0; i < playerObject.length; i++) {
//             let playerObjects = Object.values(playerObject[i]);
//             console.log(playerObjects);

//             if (!createdList.has(playerObjects[1].innerText)) {
//               let listyWisty = doc.createElement("li");
//               listyWisty.innerText = playerObjects[1];
//               createdList.add(playerObjects[1].innerText);
//               listyWisty.addEventListener("click", function () {
//                 event.stopPropagation();
//                 const location = currentButton;
//                 let rows = location.parentNode.parentNode;
//                 let tds = rows.getElementsByTagName("td");
//                 let specialImage = document.createElement("img");
//                 for (let j = 0; j < tds.length; j++) {
//                   let cellOne = tds[0];
//                   let cellTwo = tds[1];
//                   let cellThree = tds[2];

//                   specialImage.src = playerObjects[4];

//                   cellOne.innerText = playerObjects[1];
//                   cellTwo.innerText = playerObjects[2];
//                   cellThree.appendChild(specialImage);

//                   pMyDropdown.style.display = "none";
//                 }
//               });

//               pMenuDiv.appendChild(listyWisty);
//             }
//           }

//           cell.appendChild(playerBtn);
//         });
//       }
//       row.appendChild(cell);
//     }
//     tableBody.appendChild(row);
//   }
//   let tHead = table.createTHead();
//   let tRow = tHead.insertRow();

//   let thOne = doc.createElement("th");
//   let textOne = doc.createTextNode("Name");
//   thOne.appendChild(textOne);

//   let thTwo = doc.createElement("th");
//   let textTwo = doc.createTextNode("Role");
//   thTwo.appendChild(textTwo);

//   let thThree = doc.createElement("th");
//   let textThree = doc.createTextNode("Class & Spec");
//   thThree.appendChild(textThree);

//   tRow.append(thOne, thTwo, thThree);
//   table.append(caption, tRow, tableBody);
//   tDiv.appendChild(table);

//   let pDropDiv = doc.createElement("div");
//   pDropDiv.setAttribute("class", "pDropdown");
//   pDropDiv.setAttribute("id", "pDropdown");
//   tDiv.appendChild(pDropDiv);

//   let pDropdownDiv = doc.createElement("div");
//   pDropdownDiv.setAttribute("id", "pMyDropdown");
//   pDropdownDiv.setAttribute("class", "pDropdown-content");
//   pDropDiv.appendChild(pDropdownDiv);
//   pMyDropdown.style.display = "none";

//   let pMenuDiv = doc.createElement("div");
//   pMenuDiv.setAttribute("class", "pMenu");
//   pMenuDiv.setAttribute("id", "pMenu");
//   pDropdownDiv.appendChild(pMenuDiv);
// }

// export function genTbl() {
//   //Create the table element, create table body and append it to the table
//   let table = document.createElement("table");
//   let tableBody = document.createElement("tbody");
//   table.appendChild(tableBody);
//   table.setAttribute("id", Date.now());
//   table.setAttribute("class", "groupTable");

//   //Create, populate, and append table rows
//   function generateTable(tableBody, data) {
//     for (let element of data) {
//       let newRow = tableBody.insertRow();
//       console.log(element);
//       for (const key in element) {
//         let cell = newRow.insertCell();
//         let text = document.createTextNode(element[key]);
//         cell.appendChild(text);
//         tableBody.appendChild(newRow);
//       }
//     }
//   }
//   generateTable(table, playerObject);
//   tContainer.appendChild(table);
//   let tHead = document.querySelector("table").createTHead();
//   let row = tHead.insertRow();
//   let newData = Object.keys(playerObject[0]);
//   console.log(newData);

//   for (let key of newData) {
//     let th = document.createElement("th");
//     let text = document.createTextNode(key);
//     th.appendChild(text);
//     row.appendChild(th);
//   }
// }

// export function genTHead() {
//   let tHead = document.querySelector("table").createTHead();
//   let row = tHead.insertRow();
//   for (let key of data) {
//     let th = document.createElement("th");
//     let text = document.createTextNode(key);
//     th.appendChild(text);
//     row.appendChild(th);
//   }
// }

// export function tblCloner() {
//   let userValue = document.getElementById("userInput").value;
//   let i = 0;
//   for (i = 0; i < userValue; i++) {
//     genTbl2();
//   }
//   document.getElementById("tblNumber").reset();
// }

// export function editRelease() {
//   let captionList = document.getElementsByClassName("caption");

//   if (event.key === "Enter") {
//     for (i = 0; i < captionList.length; i++) {
//       let captionItem = captionList[i];
//       captionItem.blur(captionItem[i]);
//       console.log("functioning", captionList, captionItem);
//     }
//   } else {
//     console.log("this is the else function");
//   }
// }

// export function editButton() {
//   document.getElementById("caption").setAttribute("contenteditable", true);
// }

// export function formHide(id) {
//   let form = document.getElementById("playerForm");
//   form.remove();
//   document.getElementsByClassName(id).remove();
// }

// export function playerForms() {
//   const playerForm = document.getElementById("playerForm");
//   playerForm.setAttribute("method", "post");

//   const pN = document.createElement("input");
//   pN.setAttribute("id", "name");
//   pN.setAttribute("type", "text");
//   pN.setAttribute("placeholder", "Player Name");

//   const charName = document.createElement("input");
//   charName.setAttribute("id", "charName");
//   charName.setAttribute("type", "text");
//   charName.setAttribute("placeholder", "Character Name");

//   const alternateRole = document.createElement("input");
//   alternateRole.setAttribute("id", "alternateRole");
//   alternateRole.setAttribute("type", "text");
//   alternateRole.setAttribute("placeholder", "Alternate Role (optional)");

//   document.querySelector("#pF1").appendChild(pN);
//   document.querySelector("#pF2").appendChild(charName);
//   document.querySelector("#pF4").appendChild(alternateRole);

//   const dataBtn = document.createElement("button");
//   dataBtn.setAttribute("type", "submit");
//   dataBtn.setAttribute("id", "dataBtn");
//   dataBtn.textContent = "Save";
//   document.querySelector("#pF5").appendChild(dataBtn);
//   dataBtn.addEventListener("click", onSubmit);

//   function onSubmit(e) {
//     e.preventDefault();
//     addPlayer();
//     formHide();
//   }
// }

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
  document.getElementById("contentContainer").appendChild(playerWindow);
  makeList();
}

// export function groupTblMake() {
//   let createTable = function () {
//     let tableContainer = document.createElement("div");
//     tableContainer.classList.add("table-container");
//     contentContainer.appendChild(tableContainer);

//     let table = document.createElement("table");
//     table.classList.add("table");

//     let tableCaption = document.createElement("div");

//     let tableCaptionWrapper = document.createElement("caption");
//     tableCaptionWrapper.classList.add("caption-wrapper");

//     tableCaption.classList.add("caption");
//     tableCaption.textContent = "My Group Table";

//     let editIcon = document.createElement("img");
//     editIcon.classList.add("edit-icon");
//     editIcon.src = "images/edit-box-icon.png";
//     editIcon.alt = "Edit Icon";
//     tableCaptionWrapper.appendChild(tableCaption);

//     editIcon.addEventListener("click", function () {
//       let captionInput = document.createElement("input");
//       captionInput.type = "text";
//       captionInput.value = tableCaption.textContent;
//       captionInput.classList.add("caption-input", "fas", "fas-edit");

//       captionInput.addEventListener("keydown", function (event) {
//         if (event.key === "Enter") {
//           tableCaption.textContent = this.value;
//           this.blur();
//         }
//       });

//       captionInput.addEventListener("blur", function () {
//         tableCaption.appendChild(editIcon);
//         this.replaceWith(tableCaption);
//       });

//       tableCaption.replaceWith(captionInput);
//       captionInput.focus();
//       captionInput.select();
//     });

//     tableCaption.appendChild(editIcon);
//     table.appendChild(tableCaptionWrapper);

//     const wowImg = document.createElement("img");
//     wowImg.src = "images/wowclassic.jpg";

//     let headerRow = document.createElement("tr");
//     let headerCell1 = document.createElement("th");
//     headerCell1.appendChild(wowImg);
//     let headerCell2 = document.createElement("th");
//     headerCell2.textContent = "Name";
//     let headerCell3 = document.createElement("th");
//     headerCell3.textContent = "Role";
//     let headerCell4 = document.createElement("th");
//     headerCell4.textContent = "Class";
//     headerRow.appendChild(headerCell1);
//     headerRow.appendChild(headerCell2);
//     headerRow.appendChild(headerCell3);
//     headerRow.appendChild(headerCell4);
//     table.appendChild(headerRow);

//     for (let i = 0; i < 5; i++) {
//       let row = document.createElement("tr");
//       let cell1 = document.createElement("td");
//       let button = document.createElement("button");
//       button.classList.add("dropdown-btn");
//       button.textContent = "Choose Player";
//       cell1.appendChild(button);
//       let cell2 = document.createElement("td");
//       row.appendChild(cell1);
//       row.appendChild(cell2);
//       let cell3 = document.createElement("td");
//       row.appendChild(cell3);
//       let cell4 = document.createElement("td");
//       row.appendChild(cell4);
//       table.appendChild(row);
//     }

//     tableContainer.appendChild(table);

//     let playerObject = JSON.parse(localStorage.getItem("playerList"));

//     let dropdownMenu = document.createElement("div");
//     dropdownMenu.classList.add("dropdown-menu");
//     let ul = document.createElement("ul");
//     dropdownMenu.appendChild(ul);
//     console.log(dropdownMenu);

//     for (let i = 0; i < playerObject.length; i++) {
//       let li = document.createElement("li");
//       li.classList.add("fill-cell");
//       li.setAttribute("data-charName", playerObject[i].name);
//       li.setAttribute("data-classSpec", playerObject[i].classSpec);
//       li.setAttribute("data-role", playerObject[i].specialImage);
//       li.textContent = playerObject[i].name;
//       ul.appendChild(li);
//     }

//     tableContainer.appendChild(dropdownMenu);

//     let currentRow = -1;

//     let dropdownBtns = tableContainer.querySelectorAll(".dropdown-btn");
//     for (let i = 0; i < dropdownBtns.length; i++) {
//       dropdownBtns[i].addEventListener("click", function () {
//         currentRow = this.parentNode.parentNode.rowIndex;
//         showDropdownMenu(this, dropdownMenu, tableContainer);
//       });
//     }

//     let fillCells = dropdownMenu.querySelectorAll(".fill-cell");
//     for (let i = 0; i < fillCells.length; i++) {
//       fillCells[i].addEventListener("click", function () {
//         let tableRows = tableContainer.querySelectorAll("table tr");
//         let tableCells = tableRows[currentRow].querySelectorAll("td");
//         tableCells[1].textContent = this.getAttribute("data-charName");
//         tableCells[2].textContent = this.getAttribute("data-classSpec");
//         tableCells[3].innerHTML =
//           '<img src="' +
//           this.getAttribute("data-role") +
//           '" alt="Class Spec Image">';
//         hideDropdownMenu(dropdownMenu);
//       });
//     }

//     let hideAllDropdownMenus = function () {
//       let dropdownMenus = document.querySelectorAll(".dropdown-menu");
//       for (let i = 0; i < dropdownMenus.length; i++) {
//         dropdownMenus[i].style.display = "none";
//       }
//     };

//     let showDropdownMenu = function (button, dropdownMenu, tableContainer) {
//       hideAllDropdownMenus();
//       dropdownMenu.style.display = "block";

//       let buttonRect = button.getBoundingClientRect();
//       let containerRect = tableContainer.getBoundingClientRect();
//       let top = buttonRect.bottom - containerRect.top;
//       let left = buttonRect.left - containerRect.left;

//       dropdownMenu.style.top = top + "px";
//       dropdownMenu.style.left = left + "px";
//     };

//     let hideDropdownMenu = function (dropdownMenu) {
//       dropdownMenu.style.display = "none";
//     };
//   };

//   createTable("table1");
// }

// let createdList = new Set();