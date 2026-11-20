const square = document.getElementById('square');

function makeRow(num){
    for (j=0;j < num;j++){
        square.appendChild(document.createElement("div")).className = "box";
    }
}

function makeGrid(rows){
    for (i = 0; i < rows;i++){
        makeRow(rows);
    }
}

makeGrid(16);

const boxes = document.getElementsByClassName("box");

boxes.forEach(box => {
    box.addEventListener("mouseover",  (e) => {
    box.style.backGroundColor = black;
});
});
