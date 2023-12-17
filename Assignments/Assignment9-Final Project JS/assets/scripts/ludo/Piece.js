
// Piece.js
import { allBoxCoordinates } from "./Path.js";

class Piece {
  /**
   * 
   * @param {number} id 
   * @param {string} name 
   * @param {string} color 
   * @param {number} startingBoxIndex Box Index Number
   */
   
  constructor(id, name, color, startingBoxIndex) {
    this.id = id; //piece id
    this.name = name; //Piece name
    this.color = color; //Piece Color
    this.pathIndex=0; //tracks path(each colorpiece has different paths) for each separata color piece                
    this.boxIndex=startingBoxIndex    //Keep Piece in starting circle
    this.coordinate = allBoxCoordinates[this.boxIndex]; //startingCoordinates for all color pieces from allBoxCoordinates array of object.
    this.openToPlay = false; // Piece is in the home area initially
    this.homeGame = false; // After the piece reaches the home of the color
    this.radius = 10; 
  }

  // Array of all the Home Circle Boxes in the board
  static homeCirclePosition = [52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67];


  inStartingBox() {
   
  }

  
  // Check If Piece is Clicked
  isClicked(mouseX, mouseY,pathSize) {
    // Calculate the distance between the mouse click and the center of the circle
    const distance = Math.sqrt((mouseX - this.coordinate.x)**2 + (mouseY - this.coordinate.y)**2);
  
    // console.log(`Inside Piece Class -> Piece Position (${this.coordinate.x}, ${this.coordinate.y}), Clicked Area (${mouseX}, ${mouseY}), Distance: ${distance}, Radius: ${this.radius}`);
  
    // Check if the distance is less than or equal to the radius
    // For non-Home Circle Boxes, adjust the coordinate to the center of the Box
    if (Piece.homeCirclePosition.includes(this.boxIndex)) {
      return distance <= (this.radius + 5);
    } else {
      const adjustedX = this.coordinate.x + (pathSize / 2);
      const adjustedY = this.coordinate.y + (pathSize / 2);
      const adjustedDistance = Math.sqrt((mouseX - adjustedX)**2 + (mouseY - adjustedY)**2);
  
      return adjustedDistance <= (this.radius);
    }
  }
  


  movePieceToStart() {

  }

  movePiece(toBoxIndex) {
    // this.boxIndex += steps ;
    this.boxIndex=toBoxIndex;   //Move to this coordinate Box in the board
    this.coordinate = allBoxCoordinates[this.boxIndex]; 
  }

  

  drawPiece(context, pathSize) {
  // x and y coordinates
  let x, y;

  // Array of all the Home Circle Boxes in the board
  // const homeCirclePosition = [52, 53, 54, 55,56,57,58,59,60,61,62,63,64,65,66,67];

   // Check if the piece is in a Home Circle Boxes
   if (Piece.homeCirclePosition.includes(this.boxIndex)) {
    x = this.coordinate.x;
    y = this.coordinate.y;
  } else {
    // Adjust coordinate to the center of the Box that is not Home Circle Boxes
    x = this.coordinate.x + (pathSize / 2);
    y = this.coordinate.y + (pathSize / 2);
  }
    // console.log(`${this.name} Piece Class ${x} and ${y}`);

    context.lineWidth = 2; // Set the line width for the stroke
    context.fillStyle = this.color; // Set the fill color
    context.beginPath(); // Begin a new path
    context.arc(x, y, this.radius, 0, 2 * Math.PI); // Add an arc to the path (circle)
    context.fill(); // Fill the circle with the specified color
    context.stroke(); // Draw the stroke (outline) of the circle
  }
}

// Export the Board class
export default Piece;