
class Player {
    constructor(name, color, startPosition, endPosition) {
      this.name = name;
      this.color = color;
      this.startPosition = startPosition;
      this.endPosition = endPosition;
      this.pieces = [];
  
      // Create player pieces and add them to the pieces array
      for (let i = 0; i < 4; i++) {
        this.pieces.push(new Piece(this, this.startPosition));
      }
    }
  
    addPiece(piece) {
      this.pieces.push(piece);
    }
  }

// Export the Player class
export default Player;
