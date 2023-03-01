/** @format */

export const dropBtn = document.getElementById("dropBtn");

export const banner = document.getElementById("banner");

export const specImages = banner.querySelectorAll("img");

export function dropImages() {
  const menu = document.getElementById("menu");
  for (let i = 0; i < specImages.length; i++) {
    const item = specImages[i];
    const listItemId = "listItem" + (i + 1);
    let listItem = document.getElementById(listItemId);

    if (!listItem) {
      listItem = document.createElement("li");
      listItem.setAttribute("class", "specList");
      listItem.setAttribute("id", listItemId);
      const listImage = document.createElement("img");
      const listImageId = "listImage" + (i + 1);
      listImage.setAttribute("class", "listImage");
      listImage.setAttribute("id", listImageId);
      listImage.setAttribute("src", item.src);
      listItem.appendChild(listImage);
      listItem.addEventListener(
        "click",
        (e) => {
          e.stopPropagation;
          selectionImage(listItemId);
        },
        false
      );
      menu.appendChild(listItem);
    }
  }
}

export function dropMenu() {
  document.getElementById("myDropdown").classList.toggle("show");
}

export function pDropMenu() {
  document.getElementById("pMyDropdown").classList.toggle("show");
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
  document.getElementById("dropBtn").style.padding = "0px";
  document.getElementById("dropBtn").style.backgroundColor = "#133c94";
  document.getElementById("myDropdown").classList.toggle("show");
}
