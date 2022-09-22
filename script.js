const container = document.getElementById("container");

function makeRows(rows, cols) {
  container.style.setProperty('--grid-rows', rows);
  container.style.setProperty('--grid-cols', cols);
  for (c = 0; c < (rows * cols); c++) {
      let cell = document.createElement("div");
      // cell.innerText = (c + 1);
      cell.addEventListener('mouseover', 
        e => e.target.classList.add('my-color-class')
        )
      container.appendChild(cell).className = "grid-item";
    };
};

makeRows(16, 16);

const btnsquares = document.getElementById("btnsquares");

btnsquares.addEventListener("click", defineSquares);

function defineSquares() {
    do {
        nbSquares = prompt("Define the number of squares: ");}
    while (nbSquares > 100);
    document.getElementById("container").innerHTML = "";
    makeRows(nbSquares, nbSquares);
};

const resetbtn = document.getElementById("resetbtn");
resetbtn.addEventListener("click", reset)

function reset() {
    console.log("test")
    divblank = document.getElementsByClassName("grid-item");
    console.log(divblank);
    for (var j = 0; j < divblank.length; j++){
        divblank[j].classList.remove('my-color-class') ;
    }
}