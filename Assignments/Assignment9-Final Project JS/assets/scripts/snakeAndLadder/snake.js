// Retrieving form input values from localStorage that was saved by snake-form script
const snake1Start = parseInt(localStorage.getItem("snake1Start"));
const snake1End = parseInt(localStorage.getItem("snake1End"));

const snake2Start = parseInt(localStorage.getItem("snake2Start"));
const snake2End = parseInt(localStorage.getItem("snake2End"));

const snake3Start = parseInt(localStorage.getItem("snake3Start"));
const snake3End = parseInt(localStorage.getItem("snake3End"));

const snake4Start = parseInt(localStorage.getItem("snake4Start"));
const snake4End = parseInt(localStorage.getItem("snake4End"));

const ladder1Start = parseInt(localStorage.getItem("ladder1Start"));
const ladder1End = parseInt(localStorage.getItem("ladder1End"));

const ladder2Start = parseInt(localStorage.getItem("ladder2Start"));
const ladder2End = parseInt(localStorage.getItem("ladder2End"));

const ladder3Start = parseInt(localStorage.getItem("ladder3Start"));
const ladder3End = parseInt(localStorage.getItem("ladder3End"));


const boardSize = 10;
const myBoard = new Board(10, "gameCanvas");

// // Add some snakes
// myBoard.placeSnake(18, 2);
// myBoard.placeSnake(49, 6);
// myBoard.placeSnake(60, 22);
// myBoard.placeSnake(76, 51);
// myBoard.placeSnake(99, 9);

// //place ladders
// myBoard.placeLadder(8, 23);
// myBoard.placeLadder(11, 55);
// myBoard.placeLadder(70, 85);

// // Render the initial board
// myBoard.render();


// Render User inputted snake
myBoard.placeSnake(snake1Start, snake1End);
myBoard.placeSnake(snake2Start, snake2End);
myBoard.placeSnake(snake3Start, snake3End);
myBoard.placeSnake(snake4Start, snake4End);

//render user input ladder
myBoard.placeLadder(ladder1Start, ladder1End);
myBoard.placeLadder(ladder2Start, ladder2End);
myBoard.placeLadder(ladder3Start, ladder3End);

// Render the initial board
myBoard.render();

// Event listener for the dice roll
document.getElementById("dice").addEventListener("click", function () {
  //its in dice.js generates a random number between 1 to 6 and animates the dice
  const rolledNumber = rollDice();
  //console.log(rolledNumber);

  // Move players based on dice value
  myBoard.handlePlayerTurn(rolledNumber);

  // Check if the game is won after the dice roll
  if (myBoard.checkGameWon()) {
    return; // Game is won, no need to continue
  }
});

function animate() {
  //maintains refresh rate of the canvas board
  requestAnimationFrame(animate);

  // Render the updated board
  myBoard.render();
}

animate();
