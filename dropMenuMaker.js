/** @format */

export const dropBtn = document.getElementById("dropBtn");

export const banner = document.getElementById("banner");

export const specImages = banner.querySelectorAll("img");

// export let dropImages = () => {
export function dropImages() {
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
        selectionImage(id);
      },
      false
    );
  }
}

export function dropMenu() {
  document.getElementById("myDropdown").classList.toggle("show");
}

export const dropDisplay = (event) => {
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

export function selectionImage(id) {
  document.getElementById("dropBtn").innerHTML =
    document.getElementById(id).innerHTML;
  dropBtn.style.padding = "0px";
  dropBtn.style.backgroundColor = "#133c94";
  document.getElementById("myDropdown").classList.toggle("show");
}
