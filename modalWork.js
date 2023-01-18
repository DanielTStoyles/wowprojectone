/* @format */
import { dropDisplay } from "./dropMenuMaker.js";
import { tContainer, playerForms } from "./tableMaker.js";

export const modalBtn = document.getElementById("modalBtn");
// export const modal = document.getElementById("myModal");
// export const span = document.getElementsByClassName("close")[0];
// export const focusColor = document.getElementById("focusColor");

// export function modalButton() {
//   modal.style.display = "flex";
//   playerForms();
// }

// export const modalNone = (modal.style.display = "none");

// export const hideModal = (event) => {
//   if (event.target == modal) {
//     modal.style.display = "none";
//   }
// };

// **This is the popup-window code if ever needed**

// function popup(mylink, windowname) {
//   if (!window.focus) return true;
//   var href;
//   if (typeof mylink == "string") href = mylink;
//   else href = mylink.href;
//   window.open(href, windowname, "width=400,height=200,scrollbars=yes");
//   return false;
// }

// export function pageShade() {
//   if (modal.style.display != "none") {
//     focusColor.style.backgroundColor = "rgba(0,0,0,0.8)";
//     tContainer.style.backgroundColor = "rgba(0,0,0,0.5)";
//   } else {
//     if ((focusColor.style.backgroundColor = "rgba(0,0,0,0.8)")) {
//       focusColor.style.backgroundColor = "#133c94";
//       tContainer.style.backgroundColor = "#133c94";
//     }
//     console.log("pageShade");
//   }
// }

export function modalForm() {
  let form = document.createElement("form");
  let input = document.createElement("input");
  form.setAttribute("class", "modal-content");
  input.setAttribute("type", "text");
  input.setAttribute("class", "playerNameEntry");
  input.setAttribute("id", "playerNameInput");
  input.setAttribute("placeholder", "Player Name");
  form.appendChild(input);
  modal.appendChild(form);
}

export function modalReset() {
  let form = document.getElementById("playerForm");
  modal.style.display = "none";
  span.style.display = "none";
  document.querySelector(".modal").removeChild(form);
}

export function classBtn() {
  let div = document.createElement("div");
  div.setAttribute("class", "dropdown");
  let cSpecBtn = document.createElement("button");
  cSpecBtn.setAttribute("type", "button");
  cSpecBtn.setAttribute("class", "dropbtn");
  cSpecBtn.setAttribute("id", "dropBtn");
}

export function modalMake() {
  let modal = document.createElement("div");
  modal.id = "myModal";
  modal.className = "modal";
  tContainer.appendChild(modal);
  let close = document.createElement("span");
  close.innerHTML = "&times";
  close.className = "close";
  modal.appendChild(close);

  let modalContent = document.createElement("div");
  modalContent.className = "modal-content";
  modal.appendChild(modalContent);

  let formDiv = document.createElement("div");
  formDiv.className = "formDiv";

  let playerForm = document.createElement("form");
  playerForm.setAttribute("method", "post");
  playerForm.setAttribute("id", "playerForm");
  formDiv.appendChild(playerForm);

  for (let i = 0; i < 5; i++) {
    let p = document.createElement("p");
    let pId = "pF";

    p.setAttribute("id", pId + (i + 1));
    playerForm.appendChild(p);
  }

  // let pN = document.createElement("input");
  // pN.setAttribute("id", "name");
  // pN.setAttribute("type", "text");
  // pN.setAttribute("placeholder", "Player Name");

  // let charName = document.createElement("input");
  // charName.setAttribute("id", "charName");
  // charName.setAttribute("type", "text");
  // charName.setAttribute("placeholder", "Character Name");

  // let alternateRole = document.createElement("input");
  // alternateRole.setAttribute("id", "alternateRole");
  // alternateRole.setAttribute("type", "text");
  // alternateRole.setAttribute("placeholder", "Alternate Role (optional)");

  // document.getElementById("pF1").appendChild(pN);
  // document.getElementById("pF2").appendChild(charName);
  // document.getElementById("pF4").appendChild(alternateRole);

  // let dataBtn = document.createElement("button");
  // dataBtn.setAttribute("type", "submit");
  // dataBtn.setAttribute("id", "dataBtn"), (dataBtn.textContent = "Save");
  // document.getElementById("pF5").appendChild(dataBtn);

  // modalContent.appendChild(formDiv);
  // modal.appendChild(modalContent);
}
