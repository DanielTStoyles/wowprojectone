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
  imgTest(id);
}

function imgTest() {
  let imageTest = document.createElement("IMG");
  imageTest.setAttribute("src", listImage.getAttribute("src"));
  imageTest.setAttribute("width", "40");
  imageTest.setAttribute("height", "40");
  removeText();
  document.getElementById("selectionText").appendChild(imageTest);
}

function removeText() {
  originalText = document.getElementById("selectionText").textContent;
  newText = originalText.replace(originalText, "");
  document.getElementById("selectionText").textContent = newText;
}

let listImage = document.getElementById("listImage");
