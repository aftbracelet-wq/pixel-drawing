const square = document.getElementById('square');

function makeRow(num){
    for (i=0;i < num;i++){
        square.appendChild(document.createElement("div"));
    }
}

function makeGrid(rows){
    for (i = 0; i < rows;i++){
        makeRow(rows);
    }
}

makeGrid(16);