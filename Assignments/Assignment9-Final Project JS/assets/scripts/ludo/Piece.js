
class Piece {
    constructor(player, startPosition) {
      this.player = player;
      this.position = startPosition;
      this.openToPlay = false;  // Piece is in the home area initially
    }
  
    move(steps) {
      if (this.openToPlay && steps === 6) {
        // If the piece is in the home area and a 6 is rolled, move it to the starting position
        this.openToPlay = true;
        this.position = this.player.startPosition;
      } else if (!this.openToPlay) {
        // Move the piece forward based on the number of steps
        this.position += steps;
  
        // Implement rules for reaching the end of the path and entering the safe zone
        
      }
    }
  }

// Export the Piece class
export default Piece;
