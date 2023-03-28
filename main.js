/* @format */

import {
  tContainer,
  genTbl2,
  genTbl,
  editRelease,
  editButton,
  tblCloner,
  doc,
  playerWindow,
} from "./tableMaker.js";

import { modalBtn, span, modalMake, addPlayer } from "./modalWork.js";

import {
  banner,
  specImages,
  dropImages,
  dropMenu,
  dropDisplay,
  selectionImage,
  dropBtn,
} from "./dropMenuMaker.js";

window.doc = doc;
// window.genTbl2 = genTbl2;
// window.genTbl = genTbl;
// window.editRelease = editRelease;
// window.editButton = editButton;
// window.tblCloner = tblCloner;
modalBtn.onclick = modalMake;
window.dropMenu = dropMenu;
window.dropImages = dropImages;
window.specImages = specImages;
window.banner = banner;
window.selectionImage = selectionImage;

window.tContainer = tContainer;
window.addPlayer = addPlayer;
window.dropBtn = dropBtn;
window.dropDisplay = dropDisplay;
window.playerWindow = playerWindow;

playerWindow();
