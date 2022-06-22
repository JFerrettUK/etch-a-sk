// Create 16x16 DIV boxes

let container = document.getElementById("container");

for (x = 0; x < 256; x++) {
    let divBox = document.createElement("div");
    divBox.className = "divBox";
    document.getElementById("container").appendChild(divBox);
}

const boxSel = document.getElementsByClassName("divBox");

for (let i = 0, len = boxSel.length; i < len; i++) {
    boxSel[i].id = "box" + i;
}

for (let i = 0, len = boxSel.length; i < len; i++) {
    let targetBox = document.getElementById("box" + i);
    targetBox.addEventListener("mouseover", function( event ) {
        event.target.style.backgroundColor = 'salmon';
    });
}  