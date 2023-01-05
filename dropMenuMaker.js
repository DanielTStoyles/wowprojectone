/** @format */

const banner = document.getElementById("banner");

const specImages = banner.querySelectorAll("img");

for (let i = 0; i < specImages.length; i++) {
  let item = specImages[i];
  let listItem = document.createElement("li");
  let listItemId = "listItem";

  listItem.setAttribute("class", "specList");
  listItem.setAttribute("id", listItemId + (i + 1));

  let listImage = document.createElement("img");
  let listImageId = "listImage";
  listImage.setAttribute("class", "listImage");
  listImage.setAttribute("id", listImageId + (i + 1));
  let id = listItem.id;
  listImage.setAttribute("src", item.src);

  listItem.appendChild(listImage);
  document.getElementById("menu").appendChild(listItem);
  listItem.addEventListener(
    "click",
    (e) => {
      e.stopPropagation;
      selection(id);
    },
    false
  );
}

function dropMenu() {
  document.getElementById("myDropdown").classList.toggle("show");
}

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
