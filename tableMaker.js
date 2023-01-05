/**
 * table file
 *
 * @format
 */

function genTbl2() {
  let table = document.createElement("table");
  let caption = document.createElement("caption");
  caption.setAttribute("class", "caption");
  let newText = document.createElement("input");
  newText.setAttribute("class", "caption");
  newText.setAttribute("type", "text");
  newText.setAttribute("placeHolder", "Group #");

  caption.appendChild(newText);
  // newText.addEventListener("onkeydown", editRelease());
  let tableBody = document.createElement("tbody");
  table.setAttribute("id", Date.now());
  table.setAttribute("class", "groupTable");

  for (let i = 0; i < 5; i++) {
    const row = document.createElement("tr");

    for (let j = 0; j < 1; j++) {
      const cell = document.createElement("td");
      // const cellText = document.createTextNode(`text ${i}, text ${j}`);
      // cell.appendChild(cellText);
      let button = document.createElement("button");
      button.setAttribute("id", "dropBtn");
      button.setAttribute("class", "dropbtn");
      button.textContent = "Class/Spec";
      button.addEventListener("click", () => {
        document.getElementById("myDropdown").classList.toggle("show");
      });
      cell.appendChild(button);
      row.appendChild(cell);
      tableBody.appendChild(row);
    }
  }

  let tHead = table.createTHead();
  let tRow = tHead.insertRow();
  for (let key of data) {
    let th = document.createElement("th");
    let text = document.createTextNode(key);
    th.appendChild(text);
    tRow.appendChild(th);
  }
  table.appendChild(caption);
  table.appendChild(tRow);
  table.appendChild(tableBody);
  tContainer.appendChild(table);
}
