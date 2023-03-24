/* @format */
// import { dropDisplay } from "./dropMenuMaker.js";
import { tContainer, playerForms, playerObject, doc } from "./tableMaker.js";

export const modalBtn = document.getElementById("modalBtn");

export const span = document.getElementsByClassName("close")[0];
export const focusColor = document.getElementById("focusColor");

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
  const close = document.createElement("span");
  close.innerHTML = "&times";
  close.className = "close";
  close.id = "closeSpan";
  close.addEventListener("click", function (event) {
    if (event.target === close) {
      modalReset();
    }
  });
  document.addEventListener("keydown", function (event) {
    if (event.key === "Escape" && tContainer.contains(modal)) {
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

  let alternateRole = document.createElement("input");
  alternateRole.setAttribute("id", "alternateRole");
  alternateRole.setAttribute("type", "text");
  alternateRole.setAttribute("placeholder", "Role");

  document.getElementById("pF1").appendChild(pN);
  document.getElementById("pF2").appendChild(alternateRole);

  let dataBtn = document.createElement("button");
  dataBtn.setAttribute("type", "button");
  dataBtn.setAttribute("id", "dataBtn"), (dataBtn.textContent = "Save");
  document.getElementById("pF5").appendChild(dataBtn);
  dataBtn.addEventListener("click", function (event) {
    if (event.target === dataBtn) {
      addPlayer();
      console.log(originalDropBtnStyle);
      classBtn.innerHTML = originalDropBtnStyle.innerHTML;
      classBtn.style.padding = originalDropBtnStyle.padding;
      classBtn.backgroundColor = classBtn.style.backgroundColor = "#632908b7";
    }
  });

  let dropdownWrapper = doc.createElement("div");
  document.getElementById("pF3").appendChild(dropdownWrapper);
  let classBtn = document.createElement("button");
  let textNode = document.createTextNode("Class/Spec");
  classBtn.setAttribute("id", "dropBtn");
  classBtn.setAttribute("class", "dropBtn");
  classBtn.setAttribute("type", "button");
  classBtn.appendChild(textNode);
  dropdownWrapper.appendChild(classBtn);

  const originalDropBtnStyle = {
    innerHTML: classBtn.innerHTML,
    padding: (classBtn.style.padding = "16px"),
  };

  classBtn.addEventListener("click", function (event) {
    if (event.target === classBtn) {
      dropMenu(event), dropImages();
    }
  });

  let dropDiv = document.createElement("div");
  dropDiv.setAttribute("class", "dropdown");
  dropDiv.setAttribute("id", "dropdown");
  dropdownWrapper.appendChild(dropDiv);

  let dropdownDiv = document.createElement("div");
  dropdownDiv.setAttribute("id", "myDropdown");
  dropdownDiv.setAttribute("class", "dropdown-content");
  dropDiv.appendChild(dropdownDiv);

  let menuDiv = document.createElement("div");
  menuDiv.setAttribute("class", "menu");
  menuDiv.setAttribute("id", "menu");
  dropdownDiv.appendChild(menuDiv);
}

export function addPlayer() {
  const dropButn = document.getElementById("dropBtn");

  let player = {
    id: Date.now(),
    name: document.getElementById("name").value,
    classSpec: document.getElementById("alternateRole").value,
    specialImage: dropButn.querySelector("img").src,
  };

  playerObject.push(player);
  console.warn("added", { playerObject });

  function modalFormReset() {
    let playerForm = document.getElementById("playerForm");
    playerForm.reset();
  }
  localStorage.setItem("playerList", JSON.stringify(playerObject));
  modalFormReset();
}
