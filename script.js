const square = document.getElementById('square');
const btn = document.getElementById('resetBtn');

function makeRow(num){
    square.appendChild(document.createElement("div")).className = "row"; 
    const row = document.getElementsByClassName("row");
    for (let j=0;j < num;j++){
        row[i].appendChild(document.createElement("div")).className = "box";
    }
}

function makeGrid(rows){
    for (i = 0; i < rows;i++){
        makeRow(rows);

        const boxes = document.getElementsByClassName("box");
        length = boxes.length;

        for (let k = 0;k<length;k++){
            boxes[k].addEventListener("mouseenter",  (e) => {
            boxes[k].classList.add("hovered");
        });
        };
    }
}

btn.addEventListener('click', (f) => {
    while (square.hasChildNodes()){
        square.removeChild(square.lastChild);
    }
    let stringSize = prompt("how big do you want it?",16);
    let size = parseInt(stringSize);
    if (isNaN(size) == true){
        alert("Invalid input, resetting to standard");
        makeGrid(16);
    } else if (size > 100){
        alert("Input to high, resetting to max");
        makeGrid(100);
    } else {
        makeGrid(size);
    }
})

makeGrid(16);


