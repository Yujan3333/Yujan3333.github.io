
// Player.js
import Piece from "./Piece.js";

class Player {
  constructor(name, color,startingBoxIndex) {
    this.name = name;
    this.color = color;
    this.pieces = [];
    this.startingBoxIndex=startingBoxIndex;

    //Storing the 4 Pieces of each player
    for (let i = 0; i < 4; i++) {
      const piece = new Piece(i, `${color}Piece${i}`, color, this.getStartingBoxesIndex(i));
      this.addPiece(piece);    }
  }

  //Adding piece in the player
  addPiece(piece) {
    this.pieces.push(piece);
  }

  // Get the starting box index based on the startingBox Index for each player 
  getStartingBoxesIndex(pieceNumber) {
    return this.startingBoxIndex[pieceNumber];    //Starting Top Left Circle Coordinates 
  }

  // Draw all pieces of the player
  drawPieces(context, pathSize) {
    this.pieces.forEach((piece) => {
      piece.drawPiece(context, pathSize, piece.position);
      // console.log(piece.position);
    });
  }

  //Get the clicked piece of the player
  getClickedPiece(mouseX, mouseY,pathSize) {
    return this.pieces.find((piece) => piece.isClicked(mouseX, mouseY,pathSize));
  }
}

// Export the Board class
export default Player;