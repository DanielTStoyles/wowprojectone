/**
 * /* when the user clicks on the bbutton toggle showing and hiding the dropdown content
 *
 * @format
 */

function dropMenu() {
  document.getElementById("myDropdown").classList.toggle("show");
}

/* close dropdown menu if user clicks outside of it */
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

// const element = document.getElementById("dropbtn");
// element.addEventListener("click", imgSources);

let image = document.createElement("img");
image.src = "images/unholydk.png";
document.querySelector(".dropbtn").appendChild(image);

const buttonElement = document.getElementById("listItemOne");
buttonElement.addEventListener("click", imgSources);

function grab() {
  document.getElementById("listItemOne");
}

function imgSources() {
  document.getElementById("yeah").innerHTML = grab();
}

// document.getElementById("imageInList").onclick = function () {
//   specImageDisplay();
// };

// function specImageDisplay() {
//   document.getElementById("imageInList").src = "blooddk.png";
// }
/* creates onclick event for list items */

// /* MAKE OPTIONS SELECTABLE THROUGH POTENTIALLY ON CLICK EVENTS INSIDE THE DROPDOWN MENU
// (STOP THINKING ABOUT THE DAMN IMAGES)
// CREATE AN OBJECT THAT IS REUSABLE FOR ALL LIST ITETMS*/
