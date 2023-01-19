/* @format */
import { dropDisplay } from "./dropMenuMaker.js";
import { tContainer, playerForms } from "./tableMaker.js";

export const modalBtn = document.getElementById("modalBtn");

export const span = document.getElementsByClassName("close")[0];
export const focusColor = document.getElementById("focusColor");

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

export let playerData = [];

export function modalReset() {
  let modal = document.getElementById("myModal");
  modal.removeChild(document.getElementById("modalCont"));
  tContainer.removeChild(modal);
}

export function modalMake() {
  let modal = document.createElement("div");
  modal.id = "myModal";
  modal.className = "modal";
  tContainer.appendChild(modal);
  let close = document.createElement("span");
  close.innerHTML = "&times";
  close.className = "close";
  close.id = "closeSpan";
  close.addEventListener("click", function (event) {
    if (event.target === close) {
      modalReset();
    }
  });

  let modalContent = document.createElement("div");
  modalContent.id = "modalCont";
  modalContent.className = "modal-content";
  modal.appendChild(modalContent);
  modalContent.appendChild(close);

  let formDiv = document.createElement("div");
  formDiv.className = "formDiv";
  modalContent.appendChild(formDiv);

  let playerForm = document.createElement("form");
  playerForm.setAttribute("method", "post");
  playerForm.setAttribute("id", "playerForm");
  formDiv.appendChild(playerForm);

  let modalCaption = document.createElement("p");
  modalCaption.setAttribute("id", "modalCaption");
  modalCaption.textContent = "New Player Profile";
  playerForm.appendChild(modalCaption);

  for (let i = 0; i < 5; i++) {
    let p = document.createElement("p");
    let pId = "pF";

    p.setAttribute("id", pId + (i + 1));
    playerForm.appendChild(p);
  }

  let pN = document.createElement("input");
  pN.setAttribute("id", "name");
  pN.setAttribute("type", "text");
  pN.setAttribute("placeholder", "Player Name");

  let charName = document.createElement("input");
  charName.setAttribute("id", "charName");
  charName.setAttribute("type", "text");
  charName.setAttribute("placeholder", "Character Name(s)");

  let alternateRole = document.createElement("input");
  alternateRole.setAttribute("id", "alternateRole");
  alternateRole.setAttribute("type", "text");
  alternateRole.setAttribute("placeholder", "Alternate Role (optional)");

  document.getElementById("pF1").appendChild(pN);
  document.getElementById("pF2").appendChild(charName);
  document.getElementById("pF4").appendChild(alternateRole);

  let dataBtn = document.createElement("button");
  dataBtn.setAttribute("type", "button");
  dataBtn.setAttribute("id", "dataBtn"), (dataBtn.textContent = "Save");
  document.getElementById("pF5").appendChild(dataBtn);
  dataBtn.addEventListener("click", function (event) {
    if (event.target === dataBtn) {
      addPlayer();
    }
  });

  let classBtn = document.createElement("button");
  let textNode = document.createTextNode("Class/Spec");
  classBtn.setAttribute("id", "dropBtn");
  classBtn.setAttribute("class", "dropBtn");
  classBtn.setAttribute("type", "button");
  classBtn.appendChild(textNode);
  document.getElementById("pF3").appendChild(classBtn);
  classBtn.addEventListener("click", function (event) {
    if (event.target === classBtn) {
      dropMenu(), dropImages();
    }
  });

  let dropDiv = document.createElement("div");
  dropDiv.setAttribute("class", "dropdown");
  dropDiv.setAttribute("id", "dropdown");
  document.getElementById("pF3").appendChild(dropDiv);

  let dropdownDiv = document.createElement("div");
  dropdownDiv.setAttribute("id", "myDropdown");
  dropdownDiv.setAttribute("class", "dropdown-content");
  dropDiv.appendChild(dropdownDiv);

  let menuDiv = document.createElement("div");
  menuDiv.setAttribute("class", "menu");
  menuDiv.setAttribute("id", "menu");
  dropdownDiv.appendChild(menuDiv);
}

export function makeBtn() {
  let classBtn = document.createElement("button");
  classBtn.setAttribute("id", "dropBtn");
  classBtn.setAttribute("class", "dropBtn");
  classBtn.setAttribute("type", "button");
  document.getElementById("pF3").appendChild(classBtn);
  classBtn.addEventListener("click", dropMenu(), dropImages());
}

export function addPlayer() {
  let player = {
    id: Date.now(),
    name: document.getElementById("name").value,
    classSpec: document.getElementById("alternateRole").value,
  };
  playerData.push(player);
  console.warn("added", { playerData });
  localStorage.setItem("playerList", JSON.stringify(playerData));
  modalReset();
}
