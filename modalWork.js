/* @format */

export const modalBtn = document.getElementById("modalBtn");
export const modal = document.getElementById("myModal");
export const span = document.getElementsByClassName("close")[0];

export function modalButton() {
  modal.style.display = "block";
  console.log("true");
}

export function modalNone() {
  modal.style.display = "none";
}

export function hideModal(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

// This is the popup-window code if ever needed

// function popup(mylink, windowname) {
//   if (!window.focus) return true;
//   var href;
//   if (typeof mylink == "string") href = mylink;
//   else href = mylink.href;
//   window.open(href, windowname, "width=400,height=200,scrollbars=yes");
//   return false;
// }

export const pageShade = () => {
  if ((modal.style.display = "block")) {
    pageBody.style.backgroundColor = rgba(0, 0, 0, 0.5);
  }
};
