/* @format */
import { tContainer, playerForms } from "./tableMaker.js";

export const modalBtn = document.getElementById("modalBtn");
export const modal = document.getElementById("myModal");
export const span = document.getElementsByClassName("close")[0];
export const focusColor = document.getElementById("focusColor");

export function modalButton() {
  modal.style.display = "flex";
  playerForms();
}

export function modalNone() {
  modal.style.display = "none";
}

export function hideModal(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

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
