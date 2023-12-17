
import Board from "./Board.js";
import Player from "./Player.js";
import Piece from "./Piece.js";
import { rollDice } from './Dice.js';

document.onload = initGame();

function initGame() {
  const board = new Board("board-canvas");
  board.render();

  //gets the piece that is clicked
  board.getCanvas().addEventListener("click", function (event) {
    let currentPlayer = board.currentPlayer;
    const mouseX = event.offsetX;
    const mouseY = event.offsetY;

    //pathSize needed because the circle (x,y) are centered to each Box
    const clickedPiece = currentPlayer.getClickedPiece(
      mouseX,
      mouseY,
      board.pathSize
    );
    // console.log(`Clicked on ${clickedPiece.name}`);

    if (clickedPiece) {
      // Move the piece based on the dice roll
      board.handlePlayerPiece(clickedPiece);

      // // Change the current player
      // currentPlayer = board.getNextPlayer(currentPlayer);
    }
  });


  // Event listener for the dice roll
  document.getElementById("dice").addEventListener("click", function () {
    //its in dice.js generates a random number between 1 to 6 and animates the dice
    const rolledNumber = rollDice();
    console.log(`Dice roll is ${rolledNumber}`);

    let currentPlayer = board.currentPlayer;
    // Update the current player div
    document.getElementById("current-player").textContent = `Current Player: ${currentPlayer.name}`;

    // // Change the current player
    // currentPlayer = board.getNextPlayer(currentPlayer);

    // Store the random dice roll in the board
    board.setDiceRoll(rolledNumber);
  });
}
