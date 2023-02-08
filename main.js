/* @format */

import {
  players,
  // data,
  tContainer,
  genTbl2,
  genTbl,
  editRelease,
  editButton,
  tblCloner,
  formHide,
  playerForms,
  // playerObjectData,
  // loadPlayer,
  playerList,
  consoleLogger,
  doc,
} from "./tableMaker.js";

import {
  modalBtn,
  span,
  // modalButton,
  // modalNone,
  // hideModal,
  modalMake,
  addPlayer,
} from "./modalWork.js";

import {
  banner,
  specImages,
  dropImages,
  dropMenu,
  dropDisplay,
  selectionImage,
  dropBtn,
  pDropMenu,
  pDropDisplay,
} from "./dropMenuMaker.js";

window.doc = doc;
window.genTbl2 = genTbl2;
window.genTbl = genTbl;
window.editRelease = editRelease;
window.editButton = editButton;
window.tblCloner = tblCloner;
modalBtn.onclick = modalMake;
// window.dropDisplay = dropDisplay;
window.dropMenu = dropMenu;
window.dropImages = dropImages;
window.specImages = specImages;
window.banner = banner;
window.selectionImage = selectionImage;
window.players = players;
// window.data = data;

window.tContainer = tContainer;
window.addPlayer = addPlayer;
// window.playerForms = playerForms;
// window.playerObjectData = playerObjectData;
// window.loadPlayer = loadPlayer;
window.dropBtn = dropBtn;
window.playerList = playerList;
window.pDropMenu = pDropMenu;
window.pDropDisplay = pDropDisplay;
window.consoleLogger = consoleLogger;
