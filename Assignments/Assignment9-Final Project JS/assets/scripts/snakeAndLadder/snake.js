const boardSize = 10;
const myBoard = new Board(10, "gameCanvas");

// Add some snakes 
myBoard.placeSnake(18, 2);
myBoard.placeSnake(49, 6);
myBoard.placeSnake(60, 22);
myBoard.placeSnake(76, 51);
myBoard.placeSnake(99, 9);

//place ladders
myBoard.placeLadder(8, 23);
myBoard.placeLadder(11, 55);
myBoard.placeLadder(70, 85);

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
