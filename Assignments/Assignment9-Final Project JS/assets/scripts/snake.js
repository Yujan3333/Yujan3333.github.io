const canvas = document.getElementById("snakeAndLadderBoard");
const ctx = canvas.getContext("2d");

const gridSize = 50;
const boardSize = 10;
const cellSize = canvas.width / boardSize;

const snakesAndLadders = {};

//Stores all the objects of class cellNumberValue
const cellNumberValues = []; // Array to store instances of NumberValue Class that stores the x and y coordinates


//class to store the coordinates of each cell
class cellNumberValue {
  /**
   * 
   * @param {number} cellNumber the value of cell
   * @param {number} x x coordinates
   * @param {number} y y coordinates
   */
  constructor(cellNumber, x, y) {
    this.cellNumber = cellNumber;
    this.x = x;
    this.y = y;
  }
}


function drawBoard() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);


  for (let row = 0; row < boardSize; row++) {
    for (let col = 0; col < boardSize; col++) {
      let cellNumber =
        row % 2 === 0
          ? row * boardSize + col + 1
          : (row + 1) * boardSize - col;
      cellNumber = boardSize * boardSize - cellNumber + 1;
      const x = col * cellSize;
      const y = row * cellSize;

      //creating a instance of cellNumberValue Class and storing its x and y coordinates in cellNumberValues array
      const numberValue = new cellNumberValue(cellNumber, x, y);
      cellNumberValues.push(numberValue);

      ctx.fillStyle =
        row % 2 === 0
          ? col % 2 === 0
            ? "#eee"
            : "#ddd"
          : col % 2 === 0
            ? "#ddd"
            : "#eee";

      ctx.fillRect(x, y, cellSize, cellSize);
      ctx.strokeStyle = "#000";
      ctx.strokeRect(x, y, cellSize, cellSize);
      ctx.fillStyle = "#000";
      ctx.fillText(cellNumber, x + 0.5 * cellSize, y + 0.5 * cellSize);


      // console.log(`Row->${row} Col->${col} CellNumber->${cellNumber} x:${x} y:${y}`);
    }
  }

  console.log(cellNumberValues);
  
}


drawBoard();













// function animate(){
//   requestAnimationFrame(animate);
//   ctx.clearRect(0,0,canvas.width,canvas.height);
  
//   //drawing the board in the canvas after continous refresh
// }

// animate();