// Create 16x16 DIV boxes

const container = document.getElementById("container");

for(x=0; x<256; x++) {
    var divBox = document.createElement("div");
    divBox.className = "divBox";
    document.getElementById("container").appendChild(divBox);
}

const boxSel = document.getElementsByClassName("divBox");

boxSel.onmouseover = logMouseOver;
boxSel.onmouseout = logMouseOut;
function logMouseOver() {
    container.style.backgroundColor = 'yellow';
    console.log("mouseover")
}
  
function logMouseOut() {
    container.style.backgroundColor = 'transparent';
    console.log("mouseover")
  }
  