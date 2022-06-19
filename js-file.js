// Create 16x16 DIV boxes

const container = document.getElementById("container");

for(x=0; x<256; x++) {
    var divBox = document.createElement("div");
    document.getElementById("container").appendChild(divBox);
}

container.addEventListener("click", backgroundChange);
function backgroundChange() {
    document.body.style.backgroundColor = 'salmon';
}