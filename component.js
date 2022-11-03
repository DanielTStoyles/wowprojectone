/** @format */

function dropMenu() {
  document.getElementById("myDropdown").classList.toggle("show");
}

// /* close dropdown menu if user clicks outside of it */
window.onclick = function (event) {
  if (!event.target.matches(".dropbtn")) {
    let dropdowns = document.getElementsByClassName("dropdown-content");
    let i;
    for (i = 0; i < dropdowns.length; i++) {
      let openDropdown = dropdowns[i];
      if (openDropdown.classList.contains("show")) {
        openDropdown.classList.remove("show");
      }
    }
  }
};

function selection(id) {
  document.getElementById("selectionText").innerHTML =
    document.getElementById(id).innerHTML;
}

function playerForms() {
  let playerForm = document.createElement("form");
  playerForm.setAttribute("method", "post");
  playerForm.setAttribute("action", "submit.php");

  let pN = document.createElement("input");
  pN.setAttribute("type", "text");
  pN.setAttribute("playerName", "PlayerName");
  pN.setAttribute("placeholder", "Player Name");

  let s = document.createElement("input");
  s.setAttribute("type", "submit");
  s.setAttribute("value", "Submit");

  playerForm.appendChild(pN);
  playerForm.appendChild(s);
  document.getElementById("here").appendChild(playerForm);
}

// function hide() {
//   let selectionItem = document.getElementById("selectionText");
//   if (selectionItem.dataset.selection >= "0") {
//     specList.style.display = "none";
//   } else {
//     specList.style.display = "block";
//   }
// }

// let lis = document.querySelectorAll("li");

// let lis_array = Array.from(lis);

// lis_array.forEach(function (elem) {
//   elem.addEventListener("click", function (e) {
//     if (elem.dataset.selection >= "0") {
//       elem.style.display = "none";
//     }
//   });
// });

// function imgTest() {
//   let imageTest = document.createElement("IMG");
//   imageTest.addEventListener("click", function (e) {
//     console.log(e.target.src);
//   });
//   imageTest.setAttribute("src", e.target.src);
//   imageTest.setAttribute("width", "40");
//   imageTest.setAttribute("height", "40");
//   document.getElementById("tester").appendChild(imageTest);
// }

// function removeText() {
//   originalText = document.getElementById("tester").textContent;
//   newText = originalText.replace(originalText, "");
//   document.getElementById("tester").textContent = newText;

// }
