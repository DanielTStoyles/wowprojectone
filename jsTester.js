/** @format */

let myArray = [
  { Name: "Wugz", Class: "druid", Role: "dps" },
  { Name: "Jet", Class: "warrior", Role: "tank" },
  { Name: "Ehm", Class: "mage", Role: "dps" },
  { Name: "Jonald", Class: "mage", Role: "dps" },
  { Name: "Tehroller", Class: "Paladin", Spec: "Holy", Role: "heals" },
];

// var myArray = [
//   {
//     name: "John",
//     age: 30,
//     city: "New York",
//   },
//   {
//     name: "Mary",
//     age: 25,
//     city: "Los Angeles",
//   },
//   {
//     name: "David",
//     age: 35,
//     city: "San Francisco",
//   },
// ];

var createTable = function (containerId) {
  var tableContainer = document.createElement("div");
  tableContainer.id = containerId;
  document.body.appendChild(tableContainer);

  var table = document.createElement("table");
  table.classList.add("table");

  var headerRow = document.createElement("tr");
  var headerCell1 = document.createElement("th");
  headerCell1.textContent = "Button";
  var headerCell2 = document.createElement("th");
  headerCell2.textContent = "Age";
  var headerCell3 = document.createElement("th");
  headerCell3.textContent = "City";
  headerRow.appendChild(headerCell1);
  headerRow.appendChild(headerCell2);
  headerRow.appendChild(headerCell3);
  table.appendChild(headerRow);

  for (var i = 0; i < 5; i++) {
    var row = document.createElement("tr");
    var cell1 = document.createElement("td");
    var button = document.createElement("button");
    button.classList.add("dropdown-btn");
    button.textContent = "Button " + (i + 1);
    cell1.appendChild(button);
    var cell2 = document.createElement("td");
    row.appendChild(cell1);
    row.appendChild(cell2);
    var cell3 = document.createElement("td");
    row.appendChild(cell3);
    table.appendChild(row);
  }

  tableContainer.appendChild(table);

  var dropdownMenu = document.createElement("div");
  dropdownMenu.classList.add("dropdown-menu");
  var ul = document.createElement("ul");
  dropdownMenu.appendChild(ul);

  for (var i = 0; i < myArray.length; i++) {
    var li = document.createElement("li");
    li.classList.add("fill-cell");
    li.setAttribute("data-age", myArray[i].Name);
    li.setAttribute("data-city", myArray[i].Class);
    li.textContent = myArray[i].Name;
    ul.appendChild(li);
  }

  document.body.appendChild(dropdownMenu);

  var currentRow = -1;

  var dropdownBtns = tableContainer.querySelectorAll(".dropdown-btn");
  for (var i = 0; i < dropdownBtns.length; i++) {
    dropdownBtns[i].addEventListener("click", function () {
      currentRow = this.parentNode.parentNode.rowIndex;
      showDropdownMenu(this, dropdownMenu);
    });
  }

  var fillCells = dropdownMenu.querySelectorAll(".fill-cell");
  for (var i = 0; i < fillCells.length; i++) {
    fillCells[i].addEventListener("click", function () {
      var tableRows = tableContainer.querySelectorAll("table tr");
      var tableCells = tableRows[currentRow].querySelectorAll("td");
      tableCells[1].textContent = this.getAttribute("data-age");
      tableCells[2].textContent = this.getAttribute("data-city");
      hideDropdownMenu(dropdownMenu);
    });
  }

  var hideAllDropdownMenus = function () {
    var dropdownMenus = document.querySelectorAll(".dropdown-menu");
    for (var i = 0; i < dropdownMenus.length; i++) {
      dropdownMenus[i].style.display = "none";
    }
  };

  var showDropdownMenu = function (button, dropdownMenu) {
    hideAllDropdownMenus();
    dropdownMenu.style.display = "block";
    var buttonPosition = button.getBoundingClientRect();
    dropdownMenu.style.top = buttonPosition.bottom + "px";
    dropdownMenu.style.left = buttonPosition.left + "px";
  };

  var hideDropdownMenu = function (dropdownMenu) {
    dropdownMenu.style.display = "none";
  };
};

createTable("table1");
createTable("table2");
