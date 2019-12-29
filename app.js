const container = document.getElementById("container");
function makeRow(rows, cols) {
    container.style.setProperty('--grid-rows',rows);
    container.style.setProperty('--grid-cols',cols);
    for(c =0;c < rows * cols;c++) {
        let cell = document.createElement('div');
        cell.innerText = c+1;
        container.appendChild(cell).className = "grid-item";
    }
}
function promptMe() {
    var sides = prompt("Please provide your sides for grid");
    while(container.hasChildNodes()) {    
        container.removeChild(container.lastChild);   
    }
    makeRow(sides, sides);
}
