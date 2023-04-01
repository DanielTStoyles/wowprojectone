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
