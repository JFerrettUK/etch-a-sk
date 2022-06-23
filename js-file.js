// Create 16x16 DIV boxes

let container = document.getElementById("container");

function makeGrid(userNum) {
    for (x = 0; x < userNum; x++) {
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
}

function showAlert() {
    const boxes = document.querySelectorAll('.divBox');

    boxes.forEach(box => {
        box.remove();
    });
    
    let userNum = prompt("How many boxes in your Etch-a-Sketch? Choose between 1 and 300.");
    if (userNum > 300) {
        alert("That number is too high!")
    } else if (userNum < 0) {
        alert("You can't have a negative number of boxes...") 
    } else if (userNum > 0 && userNum < 300) {
        makeGrid(userNum);
    } else {
        alert("Please retry using the number keys!")
    }
}