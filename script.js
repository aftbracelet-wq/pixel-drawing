const square = document.getElementById('square');
const btn = document.getElementById('resetBtn');

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
length = boxes.length;
for (let k = 0;k<length;k++){
    boxes[k].addEventListener("mouseover",  (e) => {
    boxes[k].classList.add("hovered");
});
};
