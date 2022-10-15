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

/* creates onclick event for list items */

function btnImage() {
  getElementByClassName("dropbtn");
}

// /*Custom event for onClick return in list item*/

/* Making the on click function for the event*/

// /* MAKE OPTIONS SELECTABLE THROUGH POTENTIALLY ON CLICK EVENTS INSIDE THE DROPDOWN MENU
// (STOP THINKING ABOUT THE DAMN IMAGES)
// CREATE AN OBJECT THAT IS REUSABLE FOR ALL LIST ITETMS*/
