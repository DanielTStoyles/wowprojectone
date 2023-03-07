/** @format */

const myArray = [
  { Name: "Wugz", Class: "druid", Role: "dps" },
  { Name: "Jet", Class: "warrior", Role: "tank" },
  { Name: "Ehm", Class: "mage", Role: "dps" },
  { Name: "Jonald", Class: "mage", Role: "dps" },
  { Name: "Tehroller", Class: "Paladin", Spec: "Holy", Role: "heals" },
];

const contentContainer = document.getElementById("contentContainer");

function groupTblMake() {
  let createTable = function (containerId) {
    let tableContainer = document.createElement("div");
    tableContainer.id = containerId;
    contentContainer.appendChild(tableContainer);

    let table = document.createElement("table");
    table.classList.add("table");

    let tableCaption = document.createElement("caption");
    tableCaption.classList.add("caption");
    tableCaption.textContent = "My Group Table";

    let editIcon = document.createElement("img");
    editIcon.classList.add("edit-icon");
    editIcon.src = "images/edit-box-icon.png";
    editIcon.alt = "Edit Icon";
    editIcon.addEventListener("click", function () {
      let captionInput = document.createElement("input");
      captionInput.type = "text";
      captionInput.value = tableCaption.textContent;
      captionInput.classList.add("caption-input", "fas", "fas-edit");

      captionInput.addEventListener("keydown", function (event) {
        if (event.key === "Enter") {
          tableCaption.textContent = this.value;
          this.blur();
          tableCaption.appendChild(editIcon);
        }
      });

      tableCaption.replaceWith(captionInput);
      captionInput.focus();
      captionInput.select();
    });

    tableCaption.appendChild(editIcon);
    table.appendChild(tableCaption);

    const wowImg = document.createElement("img");
    wowImg.src = "images/wowclassic.jpg";

    let headerRow = document.createElement("tr");
    let headerCell1 = document.createElement("th");
    headerCell1.appendChild(wowImg);
    let headerCell2 = document.createElement("th");
    headerCell2.textContent = "Character Name";
    let headerCell3 = document.createElement("th");
    headerCell3.textContent = "Class/Spec";
    let headerCell4 = document.createElement("th");
    headerCell4.textContent = "Role";
    headerRow.appendChild(headerCell1);
    headerRow.appendChild(headerCell2);
    headerRow.appendChild(headerCell3);
    headerRow.appendChild(headerCell4);
    table.appendChild(headerRow);

    for (let i = 0; i < 5; i++) {
      let row = document.createElement("tr");
      let cell1 = document.createElement("td");
      let button = document.createElement("button");
      button.classList.add("dropdown-btn");
      button.textContent = "Choose Player";
      cell1.appendChild(button);
      let cell2 = document.createElement("td");
      row.appendChild(cell1);
      row.appendChild(cell2);
      let cell3 = document.createElement("td");
      row.appendChild(cell3);
      let cell4 = document.createElement("td");
      row.appendChild(cell4);
      table.appendChild(row);
    }

    tableContainer.appendChild(table);

    let playerObject = JSON.parse(localStorage.getItem("playerList"));

    let dropdownMenu = document.createElement("div");
    dropdownMenu.classList.add("dropdown-menu");
    let ul = document.createElement("ul");
    dropdownMenu.appendChild(ul);

    for (let i = 0; i < playerObject.length; i++) {
      let li = document.createElement("li");
      li.classList.add("fill-cell");
      li.setAttribute("data-charName", playerObject[i].name);
      li.setAttribute("data-classSpec", playerObject[i].classSpec);
      li.setAttribute("data-role", playerObject[i].specialImage);
      li.textContent = playerObject[i].name;
      ul.appendChild(li);
    }

    contentContainer.appendChild(dropdownMenu);

    let currentRow = -1;

    let dropdownBtns = tableContainer.querySelectorAll(".dropdown-btn");
    for (let i = 0; i < dropdownBtns.length; i++) {
      dropdownBtns[i].addEventListener("click", function () {
        currentRow = this.parentNode.parentNode.rowIndex;
        showDropdownMenu(this, dropdownMenu);
      });
    }

    let fillCells = dropdownMenu.querySelectorAll(".fill-cell");
    for (let i = 0; i < fillCells.length; i++) {
      fillCells[i].addEventListener("click", function () {
        let tableRows = tableContainer.querySelectorAll("table tr");
        let tableCells = tableRows[currentRow].querySelectorAll("td");
        tableCells[1].textContent = this.getAttribute("data-charName");
        tableCells[2].textContent = this.getAttribute("data-classSpec");
        tableCells[3].innerHTML =
          '<img src="' +
          this.getAttribute("data-role") +
          '" alt="Class Spec Image">';
        hideDropdownMenu(dropdownMenu);
      });
    }

    let hideAllDropdownMenus = function () {
      let dropdownMenus = document.querySelectorAll(".dropdown-menu");
      for (let i = 0; i < dropdownMenus.length; i++) {
        dropdownMenus[i].style.display = "none";
      }
    };

    let showDropdownMenu = function (button, dropdownMenu) {
      hideAllDropdownMenus();
      dropdownMenu.style.display = "block";

      let buttonRect = button.getBoundingClientRect();
      let containerRect = button.offsetParent.getBoundingClientRect();
      let top = buttonRect.top - containerRect.top + buttonRect.height;
      let left = buttonRect.left - containerRect.left;

      dropdownMenu.style.top = top + "px";
      dropdownMenu.style.left = left + "px";
    };

    let hideDropdownMenu = function (dropdownMenu) {
      dropdownMenu.style.display = "none";
    };
  };

  createTable("table1");
}

function tblCloner() {
  let userValue = document.getElementById("userInput").value;
  let i = 0;
  for (i = 0; i < userValue; i++) {
    groupTblMake();
  }
  document.getElementById("tblNumber").reset();
}
