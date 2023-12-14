
import Board from "./Board.js";
import Player from "./Player.js";
import Piece from "./Piece.js";
import Dice from "./Dice.js";

document.onload = initGame();

function initGame() {
  const board = new Board("board-canvas");
  board.paint();

  const dice = new Dice("dice-canvas");

  document.body.onkeydown = function (e) {
    if (e.keyCode == 32) {
      dice.roll();
    }
  }
}
