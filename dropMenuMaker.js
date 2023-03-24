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
  const listItem = document.getElementById(id);
  const listImage = listItem.querySelector("img");
  const imageUrl = listImage.getAttribute("src");
  const imageWidth = listImage.clientWidth;
  const imageHeight = listImage.clientHeight;

  const scaleFactor = 1.4;
  const scaledWidth = imageWidth * scaleFactor;
  const scaledHeight = imageHeight * scaleFactor;

  const dropBtn = document.getElementById("dropBtn");
  dropBtn.innerHTML = "";
  const newImage = document.createElement("img");
  newImage.setAttribute("src", imageUrl);
  newImage.style.width = scaledWidth + "px";
  newImage.style.height = scaledHeight + "px";

  newImage.addEventListener("click", function (event) {
    if (event.target === newImage) {
      dropMenu(event), dropImages();
    }
  });

  dropBtn.appendChild(newImage);

  dropBtn.style.backgroundColor = "transparent";
  dropBtn.style.border = "none";
  dropBtn.style.padding = "0px";

  document.getElementById("myDropdown").classList.remove("show");
}
