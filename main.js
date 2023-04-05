import { playerWindow } from "./tableMaker.js";

import { modalBtn, span, modalMake, addPlayer, playerObject, doc } from "./modalWork.js";

import {
  banner,
  specImages,
  dropImages,
  dropMenu,
  dropDisplay,
  selectionImage,
  dropBtn,
} from "./dropMenuMaker.js";

import { contentContainer, groupTblMake, tblCloner } from "./groupPage.js";

const cloneButton=document.getElementById("clones");
cloneButton.addEventListener("click", function() {
  tblCloner(document.getElementById("userInput").value);
});

const tabButton = document.getElementById("tabButton");
tabButton.addEventListener("click", function() {
  const sidePanel = document.getElementById("sidePanel");
  const tabButton = document.getElementById("tabButton");
  if (sidePanel.style.right === "0px") {
    sidePanel.style.right = "-25rem";
    tabButton.style.right = "0px";
  } else {
    sidePanel.style.right = "0px";
    if (window.innerWidth <= 800) {
      tabButton.style.right = "calc(100% - 22rem)";
    } else {
      tabButton.style.right = "25rem";
    }
  }
});


window.doc = doc;
modalBtn.onclick = modalMake;
window.dropMenu = dropMenu;
window.dropImages = dropImages;
window.specImages = specImages;
window.banner = banner;
window.selectionImage = selectionImage;
// window.tContainer = tContainer;
window.addPlayer = addPlayer;
window.dropBtn = dropBtn;
window.dropDisplay = dropDisplay;
window.playerWindow = playerWindow;
window.contentContainer = contentContainer;
window.groupTblMake = groupTblMake;
window.dropBtn = dropBtn;
window.tblCloner = tblCloner;

playerWindow();
