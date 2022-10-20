/**
 * /* when the user clicks on the bbutton toggle showing and hiding the dropdown content
 *
 * @format
 */

function dropMenu() {
  document.getElementById("myDropdown").classList.toggle("show");
}

/* NEED TO FIGURE OUT WHAT IS WRITTEN INCORRECTLY IN THIS DROPDOWN FUNCTION BELOW
- IT IS CLOSING THE MENU WHEN I CLICK ON LIST ITEMS, NEED IT TO ONLY CLOSE WHEN I CLICK 
OUTSIDE THE MENU/BUTTON OR ONCE A LIST ITEM IS CLICKED */

// // /* close dropdown menu if user clicks outside of it */
// window.onclick = function (event) {
//   if (!event.target.matches(".dropbtn")) {
//     let dropdowns = document.getElementsByClassName("dropdown-content");
//     let i;
//     for (i = 0; i < dropdowns.length; i++) {
//       let openDropdown = dropdowns[i];
//       if (openDropdown.classList.contains("show")) {
//         openDropdown.classList.remove("show");
//       }
//     }
//   }
// };

let image = document.createElement("img");
image.src = "images/unholydk.png";
document.querySelector(".dropbtn").appendChild(image);

function selection() {
  document.getElementById("selection").innerHTML =
    document.getElementById("listItem").innerHTML;
}
