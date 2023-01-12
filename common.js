/* @format */

function editRelease() {
  let captionList = document.getElementsByClassName("caption");

  if (event.key === "Enter") {
    for (i = 0; i < captionList.length; i++) {
      let captionItem = captionList[i];
      captionItem.blur(captionItem[i]);
      console.log("functioning", captionList, captionItem);
    }
  } else {
    console.log("this is the else function");
  }
}

function editButton() {
  document.getElementById("caption").setAttribute("contenteditable", true);
}

function formMake() {
  let div = document.createElement("div");

  let form = document.createElement("form");

  let p = document.createElement("p");

  let span = document.createElement("span");
}
