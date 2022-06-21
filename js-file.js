// Create 16x16 DIV boxes

const container = document.getElementById("container");

for (x = 0; x < 256; x++) {
    var divBox = document.createElement("div");
    divBox.className = "divBox";
    document.getElementById("container").appendChild(divBox);
}

const boxSel = document.getElementsByClassName("divBox");

for (var i = 0, len = boxSel.length; i < len; i++) {
    boxSel[i].id = "box" + i;
    boxSel[i].onmouseover = logMouseOver;
}


function logMouseOver(i) {
    boxSel[i].style.backgroundColor = 'yellow';
    console.log("mouseover")
}
