/* @format */

const modalBtn = document.getElementById("modalBtn");
const modal = document.getElementById("myModal");
const span = document.getElementsByClassName("close")[0];

modalBtn.onclick = function () {
  modal.style.display = "block";
  console.log("true");
};

span.onclick = function () {
  modal.style.display = "none";
};

window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

// function popup(mylink, windowname) {
//   if (!window.focus) return true;
//   var href;
//   if (typeof mylink == "string") href = mylink;
//   else href = mylink.href;
//   window.open(href, windowname, "width=400,height=200,scrollbars=yes");
//   return false;
// }
