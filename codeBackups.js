/** @format */

// window.onclick = function (event) {
//   if (!event.target.matches(".dropbtn")) {
//     let dropdowns = document.getElementsByClassName("dropdown-content");
//     let i;
//     for (i = 0; i < dropdowns.length; i++) {
//       let openDropdown = dropdowns[i];
//       if (openDropdown.classList.contains("show")) {
//         openDropdown.classList.remove("show");
//       }
//     }
//   }
// };

// function selection(id) {
//   document.getElementById("selectionText").innerHTML =
//     document.getElementById(id).innerHTML;
// }

// function playerForms() {
//   let playerForm = document.createElement("form");
//   playerForm.setAttribute("method", "post");
//   playerForm.setAttribute("id", "playerForm");

//   let pN = document.createElement("input");
//   pN.setAttribute("id", "name");
//   pN.setAttribute("type", "text");
//   pN.setAttribute("placeholder", "Player Name");

//   let classSpec = document.createElement("input");
//   classSpec.setAttribute("id", "classSpec");
//   classSpec.setAttribute("type", "text");
//   classSpec.setAttribute("placeholder", "Class/Spec");

//   playerForm.appendChild(pN);
//   playerForm.appendChild(classSpec);
//   document.getElementById("formP").appendChild(playerForm);

//   let dataBtn = document.createElement("button");
//   dataBtn.setAttribute("type", "submit");
//   dataBtn.setAttribute("id", "dataBtn"), (dataBtn.textContent = "Save");
//   document.getElementById("formP").appendChild(dataBtn);
//   dataBtn.addEventListener(
//     "click",
//     (e) => {
//       e.stopPropogation;
//       addPlayer();
//       formHide();
//     },
//     false
//   );
// }

// function formHide(id) {
//   let form = document.getElementById("playerForm");
//   form.remove();
//   document.getElementsByClassName(id).remove();
// }

// let myTbl = document.getElementById("myTbl");
// let container = document.getElementById("tContainer");

// function tblCloner(userValue) {
//   for (i = 0; i < userValue; i++) {
//     // container.appendChild(myTbl.cloneNode(true));
//     genTbl2();
//   }
//   document.getElementById("tblNumber").reset();
// }

// let table = document.querySelector("table");
// let data = Object.keys(players[0]);
// const tContainer = document.getElementById("tContainer");

// function genTHead() {
//   let tHead = document.querySelector("table").createTHead();
//   let row = tHead.insertRow();
//   for (let key of data) {
//     let th = document.createElement("th");
//     let text = document.createTextNode(key);
//     th.appendChild(text);
//     row.appendChild(th);
//   }
// }

// function genTbl() {
//   //Create the table element, create table body and append it to the table
//   let table = document.createElement("table");
//   let tableBody = document.createElement("tbody");
//   table.appendChild(tableBody);
//   table.setAttribute("id", Date.now());
//   table.setAttribute("class", "groupTable");

//   //Create, populate, and append table rows
//   function generateTable(tablebody, data) {
//     for (let element of data) {
//       let newRow = tablebody.insertRow();
//       for (key in element) {
//         let cell = newRow.insertCell();
//         let text = document.createTextNode(element[key]);
//         cell.appendChild(text);
//       }
//     }
//   }
//   generateTable(table, players);
//   document.getElementById("tContainer").appendChild(table);
//   genTHead();
// }

// function genTbl2() {
//   let table = document.createElement("table");
//   let caption = document.createElement("caption");
//   caption.setAttribute("class", "caption");
//   let newText = document.createElement("input");
//   newText.setAttribute("class", "caption");
//   newText.setAttribute("type", "text");
//   newText.setAttribute("placeHolder", "Group #");

//   caption.appendChild(newText);
//   //   newText.addEventListener("onkeydown", editRelease());
//   let tableBody = document.createElement("tbody");
//   table.setAttribute("id", Date.now());
//   table.setAttribute("class", "groupTable");

//   for (let i = 0; i < 5; i++) {
//     const row = document.createElement("tr");

//     for (let j = 0; j < 1; j++) {
//       const cell = document.createElement("td");
//       // const cellText = document.createTextNode(`text ${i}, text ${j}`);
//       // cell.appendChild(cellText);
//       let button = document.createElement("button");
//       button.setAttribute("id", "dropBtn");
//       button.setAttribute("class", "dropbtn");
//       button.textContent = "Class/Spec";
//       button.addEventListener("click", () => {
//         document.getElementById("myDropdown").classList.toggle("show");
//       });
//       cell.appendChild(button);
//       row.appendChild(cell);
//       tableBody.appendChild(row);
//     }
//   }

//   let tHead = table.createTHead();
//   let tRow = tHead.insertRow();
//   for (let key of data) {
//     let th = document.createElement("th");
//     let text = document.createTextNode(key);
//     th.appendChild(text);
//     tRow.appendChild(th);
//   }
//   table.appendChild(caption);
//   table.appendChild(tRow);
//   table.appendChild(tableBody);
//   tContainer.appendChild(table);
// }

// let tableCount = document.getElementsByClassName("groupTable");

// function caption(text) {
//   let caption = table.createCaption();

//   for (let i = 0; i < tableCount.length; i++) {
//     let newText = document.createTextNode(text + (i + 1));
//     caption.appendChild(newText);
//     table.appendChild(caption);
//   }
//   console.log(tableCount);
// }

// const banner = document.getElementById("banner");

// const specImages = banner.querySelectorAll("img");

// for (let i = 0; i < specImages.length; i++) {
//   let item = specImages[i];
//   let listItem = document.createElement("li");
//   let listItemId = "listItem";

//   listItem.setAttribute("class", "specList");
//   listItem.setAttribute("id", listItemId + (i + 1));

//   let listImage = document.createElement("img");
//   let listImageId = "listImage";
//   listImage.setAttribute("class", "listImage");
//   listImage.setAttribute("id", listImageId + (i + 1));
//   let id = listItem.id;
//   listImage.setAttribute("src", item.src);

//   listItem.appendChild(listImage);
//   document.getElementById("menu").appendChild(listItem);
//   listItem.addEventListener(
//     "click",
//     (e) => {
//       e.stopPropagation;
//       selection(id);
//     },
//     false
//   );
// }

// let specImages = [];
// let img = document.getElementsByTagName("img");

// function imgCall() {
//   for (let i = 0; i < img.length; i++) {
//     let imageItem = document.createElement("li");
//     imageItem.setAttribute("id", "img" + i);
//     imageItem.addEventListener("click", selection(imageItem.id));
//     specImages.push(img.item(i).src);
//   }
// }

// console.log(img);
// console.log(specImages);

//   for (let i = 0; i < specImages.length; i++) {
//     specList.appendChild(specImages.src);
//   }
//   tContainer.appendChild(specList);

// const modalBtn = document.getElementById("modalBtn");
// const modal = document.getElementById("myModal");
// const span = document.getElementsByClassName("close")[0];

// modalBtn.onclick = function () {
//   modal.style.display = "block";
//   console.log("true");
// };

// span.onclick = function () {
//   modal.style.display = "none";
// };

// window.onclick = function (event) {
//   if (event.target == modal) {
//     modal.style.display = "none";
//   }
// };

// Ideas for the next steps: Create a seperate table generation that doesn't read from a saved array of data,
//make it the create new group ones.
//basically the one that is created as a new group is blank minus the choose player/create new player option which will append the dropmenu
//and other user value input fields, Ideally the create new player button eventually opens a modal that then accomplishes all of this

// modalSpan.addEventListener(
//   "click",
//   (e) => {
//     e.stopPropagation;
//     modalReset();
//   },
//   true
// );

// const template = document.createElement("template");
// template.innerHTML = `

// <style>

// </style>

// <div class="tooltip-container">
// test
// </div>

// `;

// class FormMake extends HTMLElement {
//   constructor() {
//     super();
//     this.attachShadow({ mode: "open" });
//     this.shadowRoot.appendChild(template.content.cloneNode(true));
//   }

//   connectedCallback() {}
// }

// window.customElements.define("form-make", FormMake);

// HTML CODE BELOW HERE

// <!--
//       <div id="myModal" class="modal">
//         <div class="modal-content">
//           <span class="close" id="modalSpan">&times;</span>

//                               <div class="formDiv">
//                                 <form id="playerForm">
//                                   <p id="modalCaption">Player Profile</p>
//                                     <p id="pF1"></p>
//                                     <p id="pF2"></p>
//                                     <p id="pF3"> Class/Spec: <div class="dropdown">
//                                       <button type="button" onclick="dropMenu() , dropImages()"
//                                  class="dropbtn" id="dropBtn">Class/Spec</button>
//                                    <div id="myDropdown" class="dropdown-content">
//                                          <div class="menu" id="menu">

//                                          </div>

//                                      </div>
//                                     </p>
//                                     <p id="pF4"> </p>
//                                  <p id="pF5">

//                                     </p>

//                                   <div id="selectionBox">
//                                   <p id="selectionText" ></p>
//                                   </div>
//                                   </form>
//                                 </div
//                           </div>

//         </div>
//         </div>

//         <div class="compTest">
// <h1>the ol tooltip </h1>
// <p>Lorem ipsum dolor sit amet<form-make></form-make> consectetur adipisicing elit. Voluptas, eius.</p>
//         </div> -->

//       <!-- </div> -->
// <!--
// <table class="groupTable" id="myTbl">

//     <caption>
// <input type="text" class="caption" id="caption" placeholder="Group #" autocomplete="off" >

//     </caption>

//     <thead>
//                 <tbody class="tbody"> -->

//                     <!-- <tr>

//                         <td>

//                                 <label for="Class/Spec" id="classspec"></label>
//                                 <input type="text" id="cname" name="cname">
//                                 <select name="class" id="class" autocomplete="off">

//                                     <option value="holder" selected>Select Class & Spec</option>

//                                     <optgroup label="Death Knight">
//                                         <option value="blood">Blood</option>
//                                         <option value="frost">Frost</option>
//                                         <option value="unholy">Unholy</option>
//                                     </optgroup>

//                                     <optgroup label="Druid">
//                                         <option value="bear">Bear</option>
//                                         <option value="cat">Cat</option>
//                                         <option value="balance">Balance</option>
//                                         <option value="resto">Resto</option>
//                                     </optgroup>

//                                     <optgroup label="Hunter">
//                                         <option value="beast">Beast Master</option>
//                                         <option value="marks">Marksman</option>
//                                         <option value="survival">Survival</option>
//                                     </optgroup>

//                                     <optgroup label="Mage">
//                                         <option value="arcane">arcane</option>
//                                         <option value="fire">Fire</option>
//                                         <option value="frost">Frost</option>
//                                     </optgroup>

//                                     <optgroup label="Paladin">
//                                         <option value="holy">Holy</option>
//                                         <option value="prot">Prot</option>
//                                         <option value="ret">Ret</option>
//                                     </optgroup>

//                                     <optgroup label="Priest">
//                                         <option value="disc">Disc</option>
//                                         <option value="holy">Holy</option>
//                                         <option value="shadow">Shadow</option>
//                                     </optgroup>

//                                     <optgroup label="Rogue">
//                                         <option value="assasin">Assasin</option>
//                                         <option value="combat">Combat</option>
//                                         <option value="sub">Sub</option>
//                                     </optgroup>

//                                     <optgroup label="Shaman">
//                                         <option value="enhace">Enhancement</option>
//                                         <option value="ele">Ele</option>
//                                         <option value="restor">Resto</option>
//                                     </optgroup>

//                                     <optgroup label="Warlock">
//                                         <option value="affliction">Affliction</option>
//                                         <option value="demon">Demonology</option>
//                                         <option value="destro">Destruction</option>
//                                     </optgroup>

//                                     <optgroup label="Warrior">
//                                         <option value="arms">Arms</option>
//                                         <option value="fury">Fury</option>
//                                         <option value="protec">Prot</option>

//                                     </optgroup>

//                                 </select>
//                                 <input type="submit" value="Submit" />

//                         </td>

//                     </tr> -->

//                     <!-- <tr class="tableRow" >

//                         <td id="tdone">
//                             <div>
//                         <select id="playerName" name="playerName" autocomplete="off">
//                             <option value="playerHolder" id="playerHolder">Choose Player</option>
//                             <option id="testerino" value="createNewPlayer" onClick="playerForms()" > + Create New Player</option>

//                         </div> -->

//                             <!-- </select>
//                         <div id="selectionBox">
//                         <p id="selectionText" ></p>
//                         </div> -->

//                             <!-- <div class="dropdown">
//                                  <button onclick="dropMenu()"
//                             class="dropbtn" id="dropBtn">Class/Spec</button>
//                               <div id="myDropdown" class="dropdown-content">
//                                     <div class="menu" id="menu">

//                                     </div>

//                                 </div>

//                               <div class="formDiv">
//                                     <p id="formP">

//                                     </p>
//                                 </div
//                           </div> -->

//                       <!-- </td>
//                 -->

//                <!-- </ul>

//                     </tr>

//                     <tr>

//                     </tr>

//                     </tr> -->
