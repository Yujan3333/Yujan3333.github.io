
// Board.js
class Board {
    constructor(canvasId) {
      this.boardCanvas = document.getElementById(canvasId);
      this.boardContext = this.boardCanvas.getContext("2d");
      this.boardContext.fillStyle = "#000000";
  
      
  
      // Adjust sizes based on the canvas size
      this.canvasSize = Math.min(this.boardCanvas.width, this.boardCanvas.height);
  
      // Originally was made perfect for canvas of width and height 375 so readjustment according to canvas width and height.
      this.homeSize = (this.canvasSize / 375) * 150;
      this.pathSize = (this.canvasSize / 375) * 25;
      this.homeCircleSize = (this.pathSize / 2) * 1.5;
      this.starSize = (this.canvasSize / 375) * 20;
    }
  
    paint() {
  
      // Set up canvas styles
      this.boardContext.lineWidth = 1;
      this.boardContext.strokeStyle = "#000000";
  
      // Define player colors
      let colors = ["blue", "yellow", "green", "red"];
  
      // Set the starting position for the top-left home circle
      let topLeftHomeCircleX = 2 * this.pathSize;
      let topLeftHomeCircleY = 2 * this.pathSize;
  
      // Create an image object for stars
      let starImage = new Image(this.pathSize, this.pathSize);
      starImage.src = "assets/images/star.svg";
  
      /**
       * Draw the game board quadrants (top-left, top-right, bottom-left, bottom-right)
       * main top-left board BLUE HOME
       */
      this.boardContext.fillStyle = colors[0];
  
      //Makes the HOME RECT
      // context.fillRect(x,y,width,height);
      this.boardContext.fillRect(0, 0, this.homeSize, this.homeSize);
      //Outline the Blue Home Rect
      this.boardContext.strokeRect(0, 0, this.homeSize, this.homeSize);
  
      /**
       *1st Row Blue Home Rect Bottom
       */
      for (let i = 0; i < 6; i++) {
        // Calculate the x-coordinate for each rectangle
        const rectX = i * this.pathSize;
        const rectY = this.homeSize;
  
        // Set the fill style based on the value of i
        if (i === 1) {
          this.boardContext.fillStyle = colors[0]; // Set to blue
        } else {
          this.boardContext.fillStyle = "#FFFFFF"; // Set to white for other rectangles
        }
  
        // Draw the filled rectangle
        this.boardContext.fillRect(rectX, rectY, this.pathSize, this.pathSize);
  
        // Draw the outline for each rectangle
        this.boardContext.strokeRect(rectX, rectY, this.pathSize, this.pathSize);
      }
  
      /**
       * 2nd row Blue Bottom-> Blue Home Strecth boxes
       */
      for (let i = 0; i < 6; i++) {
        // Calculate the x-coordinate for each rectangle
        const rectX = i * this.pathSize;
        const rectY = this.homeSize + this.pathSize;
  
        //Setting the first box of 2nd row as white in color others would be blue
        if (i == 0) {
          this.boardContext.fillStyle = "#FFFFFF";
        } else {
          this.boardContext.fillStyle = colors[0];
        }
  
        // Draw the filled rectangle
        this.boardContext.fillRect(rectX, rectY, this.pathSize, this.pathSize);
  
        // Draw the outline for each rectangle
        this.boardContext.strokeRect(rectX, rectY, this.pathSize, this.pathSize);
      }
  
      /**
       * 3rd row Blue Bottom
       */
      for (let i = 0; i < 6; i++) {
        // Calculate the x-coordinate for each rectangle
        const rectX = i * this.pathSize;
        const rectY = this.homeSize + 2 * this.pathSize;
  
        //SETTING the box color as white
        this.boardContext.fillStyle = "#FFFFFF"; //white
  
        // Draw the filled rectangle
        this.boardContext.fillRect(rectX, rectY, this.pathSize, this.pathSize);
  
        // Draw the outline for each rectangle
        this.boardContext.strokeRect(rectX, rectY, this.pathSize, this.pathSize);
      }
  
      // // Triangular shape - Makes the BLUE TRIANGLE in HOME
      this.boardContext.fillStyle = colors[0];
      this.boardContext.beginPath();
      this.boardContext.moveTo(this.homeSize, this.homeSize);
      this.boardContext.lineTo(
        this.boardCanvas.width / 2,
        this.boardCanvas.height / 2
      );
      this.boardContext.lineTo(this.homeSize, this.homeSize + 3 * this.pathSize);
      this.boardContext.closePath();
      this.boardContext.fill();
  
      //For the White Circle inside of BLUE HOME
      this.boardContext.fillStyle = "#FFFFFF";
      topLeftHomeCircleX = 2 * this.pathSize;
      topLeftHomeCircleY = 2 * this.pathSize;
      for (let i = 0; i < 2; i++) {
        for (let j = 0; j < 2; j++) {
          this.boardContext.beginPath();
  
          //syntax arc(x,y,radius,start_angle,end_angle,)
          this.boardContext.arc(
            topLeftHomeCircleX + i * 2 * this.pathSize,
            topLeftHomeCircleY + j * 2 * this.pathSize,
            this.homeCircleSize, //increasing the arc size
            0,
            2 * Math.PI
          );
          this.boardContext.fill();
        }
      }
  
      //this generates a line in bottom of BLUE HOME
      this.boardContext.beginPath();
      this.boardContext.moveTo(0, this.homeSize);
      this.boardContext.lineTo(this.homeSize, this.homeSize);
      this.boardContext.stroke();
  
      // this generates a line in right of BLUE HOME
      this.boardContext.beginPath();
      this.boardContext.moveTo(this.homeSize, 0);
      this.boardContext.lineTo(this.homeSize, this.homeSize);
      this.boardContext.stroke();
  
      /**
       * top-right
       * YELLOW HOME RECTANGLE
       */
  
      //Yellow color
      this.boardContext.fillStyle = colors[1];
  
      //Yellow Home Rectangle
      this.boardContext.fillRect(
        this.boardCanvas.width - this.homeSize,
        0,
        this.homeSize,
        this.homeSize
      );
  
      /**
       * 1st Column Yellow Home Rect Left side
       */
      for (let i = 0; i < 6; i++) {
        // Calculate the position for each rectangle
        const rectX = this.homeSize + 2 * this.pathSize;
        const rectY = i * this.pathSize;
  
        if (i == 1) {
          this.boardContext.fillStyle = colors[1]; //yellow
        } else {
          this.boardContext.fillStyle = "#FFFFFF"; //white
        }
  
        // Draw the filled rectangle
        this.boardContext.fillRect(rectX, rectY, this.pathSize, this.pathSize);
  
        // Draw the outline for each rectangle
        this.boardContext.strokeRect(rectX, rectY, this.pathSize, this.pathSize);
      }
  
      /**
       * 2nd Column Yellow Home Rect Left side
       */
      for (let i = 0; i < 6; i++) {
        // Calculate the position for each rectangle
        const rectX = this.homeSize + this.pathSize;
        const rectY = i * this.pathSize;
  
        if (i == 0) {
          this.boardContext.fillStyle = "#FFFFFF"; //white
        } else {
          this.boardContext.fillStyle = colors[1]; //yellow
        }
  
        // Draw the filled rectangle
        this.boardContext.fillRect(rectX, rectY, this.pathSize, this.pathSize);
  
        // Draw the outline for each rectangle
        this.boardContext.strokeRect(rectX, rectY, this.pathSize, this.pathSize);
      }
  
      /**
       * 3rd Column Yellow Home Rect Left side
       */
      for (let i = 0; i < 6; i++) {
        // Calculate the position for each rectangle
        const rectX = this.homeSize;
        const rectY = i * this.pathSize;
  
        //Every box is white in color
        this.boardContext.fillStyle = "#FFFFFF"; //white
  
        // Draw the filled rectangle
        this.boardContext.fillRect(rectX, rectY, this.pathSize, this.pathSize);
  
        // Draw the outline for each rectangle
        this.boardContext.strokeRect(rectX, rectY, this.pathSize, this.pathSize);
      }
  
      //Triangular Shape Yellow
      this.boardContext.fillStyle = colors[1]; //yellow
      this.boardContext.beginPath();
      this.boardContext.moveTo(this.homeSize, this.homeSize);
      this.boardContext.lineTo(
        this.boardCanvas.width / 2,
        this.boardCanvas.height / 2
      );
      this.boardContext.lineTo(
        this.boardCanvas.width - this.homeSize,
        this.homeSize
      );
      this.boardContext.closePath();
      this.boardContext.fill();
  
      //WHITE Circles Of Yellow Home
      this.boardContext.fillStyle = "#FFFFFF";
      topLeftHomeCircleX =
        this.boardCanvas.width - this.homeSize + 2 * this.pathSize;
      topLeftHomeCircleY = 2 * this.pathSize;
      for (let i = 0; i < 2; i++) {
        for (let j = 0; j < 2; j++) {
          this.boardContext.beginPath();
          this.boardContext.arc(
            topLeftHomeCircleX + i * 2 * this.pathSize,
            topLeftHomeCircleY + j * 2 * this.pathSize,
            this.homeCircleSize,
            0,
            2 * Math.PI
          );
          this.boardContext.fill();
        }
      }
  
      //Vertical Line of Yellow Home
      this.boardContext.beginPath();
      this.boardContext.moveTo(this.boardCanvas.width - this.homeSize, 0);
      this.boardContext.lineTo(
        this.boardCanvas.width - this.homeSize,
        this.homeSize
      );
      this.boardContext.stroke();
  
      //Horizontal Line of Yellow Home
      this.boardContext.beginPath();
      this.boardContext.moveTo(
        this.boardCanvas.width - this.homeSize,
        this.homeSize
      );
      this.boardContext.lineTo(this.boardCanvas.width, this.homeSize);
      this.boardContext.stroke();
  
      /**
       * bottom-left GREEN HOME
       */
  
      //Set Green color
      this.boardContext.fillStyle = colors[2];
  
      //Green Home Rectangle
      this.boardContext.fillRect(
        0,
        this.boardCanvas.height - this.homeSize,
        this.homeSize,
        this.homeSize
      );
  
      /**
       * 1st Column Green Home Rectangle Right Side
       */
      for (let i = 0; i < 6; i++) {
        // Calculate the position for each rectangle
        const rectX = this.homeSize;
        const rectY = this.homeSize + (3 + i) * this.pathSize;
  
        //Start for Green Players
        if (i == 4) {
          this.boardContext.fillStyle = colors[2];
        } else {
          this.boardContext.fillStyle = "#FFFFFF";
        }
  
        // Draw the filled rectangle
        this.boardContext.fillRect(rectX, rectY, this.pathSize, this.pathSize);
  
        // Draw the outline for each rectangle
        this.boardContext.strokeRect(rectX, rectY, this.pathSize, this.pathSize);
      }
  
      /**
       * 2nd Column Green Home Rectangle Right side
       * Green Home Final Path Multile Paths
       */
      for (let i = 0; i < 6; i++) {
        // Calculate the position for each rectangle
        const rectX = this.homeSize + this.pathSize;
        const rectY = this.homeSize + (3 + i) * this.pathSize;
  
        if (i == 5) {
          this.boardContext.fillStyle = "#FFFFFF";
        } else {
          this.boardContext.fillStyle = colors[2];
        }
  
        // Draw the filled rectangle
        this.boardContext.fillRect(rectX, rectY, this.pathSize, this.pathSize);
  
        // Draw the outline for each rectangle
        this.boardContext.strokeRect(rectX, rectY, this.pathSize, this.pathSize);
      }
  
      /**
       * 3rd Column Green Home Rectangle Right Side
       */
      for (let i = 0; i < 6; i++) {
        // Calculate the position for each rectangle
        const rectX = this.homeSize + 2 * this.pathSize;
        const rectY = this.homeSize + (3 + i) * this.pathSize;
  
        //BOX has size white color
        this.boardContext.fillStyle = "#FFFFFF";
  
        // Draw the filled rectangle
        this.boardContext.fillRect(rectX, rectY, this.pathSize, this.pathSize);
  
        // Draw the outline for each rectangle
        this.boardContext.strokeRect(rectX, rectY, this.pathSize, this.pathSize);
  
        //resetting the green color
        this.boardContext.fillStyle = colors[2];
      }
  
      //Green Triangle
      this.boardContext.beginPath();
      this.boardContext.moveTo(this.homeSize, this.homeSize + 3 * this.pathSize);
      this.boardContext.lineTo(
        this.boardCanvas.width / 2,
        this.boardCanvas.height / 2
      );
      this.boardContext.lineTo(
        this.boardCanvas.width - this.homeSize,
        this.boardCanvas.height - this.homeSize
      );
      this.boardContext.closePath();
      this.boardContext.fill();
  
      //White Circles inside the Green Home Rectangle
      this.boardContext.fillStyle = "#FFFFFF";
  
      topLeftHomeCircleX = 2 * this.pathSize;
      topLeftHomeCircleY =
        this.boardCanvas.height - this.homeSize + 2 * this.pathSize;
      for (let i = 0; i < 2; i++) {
        for (let j = 0; j < 2; j++) {
          this.boardContext.beginPath();
          this.boardContext.arc(
            topLeftHomeCircleX + i * 2 * this.pathSize,
            topLeftHomeCircleY + j * 2 * this.pathSize,
            this.homeCircleSize,
            0,
            2 * Math.PI
          );
          this.boardContext.fill();
        }
      }
  
      //Horizontal Line
      this.boardContext.beginPath();
      this.boardContext.moveTo(0, this.boardCanvas.height - this.homeSize);
      this.boardContext.lineTo(
        this.homeSize,
        this.boardCanvas.height - this.homeSize
      );
      this.boardContext.stroke();
  
      //Vertical Line
      this.boardContext.beginPath();
      this.boardContext.moveTo(
        this.homeSize,
        this.boardCanvas.height - this.homeSize
      );
      this.boardContext.lineTo(this.homeSize, this.boardCanvas.height);
      this.boardContext.stroke();
  
      /**
       * bottom-right
       * RED HOME SECTION
       */
  
      //Red color
      this.boardContext.fillStyle = colors[3];
  
      //Red Home Rectangle
      this.boardContext.fillRect(
        this.boardCanvas.width - this.homeSize,
        this.boardCanvas.height - this.homeSize,
        this.homeSize,
        this.homeSize
      );
  
      /**
       * 1st Row above Red Home Rectangle
       */
      for (let i = 0; i < 6; i++) {
        let rectX = this.boardCanvas.width - this.homeSize + i * this.pathSize;
        let rectY = this.homeSize + 2 * this.pathSize;
  
        //Red Start Position
        if (i === 4) {
          this.boardContext.fillStyle = colors[3]; // Red color
        } else {
          this.boardContext.fillStyle = "#FFFFFF"; // White color
        }
  
        // Draw the filled rectangle
        this.boardContext.fillRect(rectX, rectY, this.pathSize, this.pathSize);
  
        // Draw the outline for each rectangle
        this.boardContext.strokeRect(rectX, rectY, this.pathSize, this.pathSize);
  
        //Resetting the color back to red
        this.boardContext.fillStyle = colors[3]; // Red color
      }
  
      /**
       * 2nd Row RED HOME TOP - Red Final Path Multile Boxes
       */
      for (let i = 0; i < 6; i++) {
        // Calculate the x-coordinate for each rectangle
        const rectX = this.boardCanvas.width - this.homeSize + i * this.pathSize;
        const rectY = this.homeSize + this.pathSize;
  
        //the last box has white background
        if (i === 5) {
          this.boardContext.fillStyle = "#FFFFFF"; // White color
        } else {
          this.boardContext.fillStyle = colors[3]; // Red color
        }
  
        // Draw the filled rectangle
        this.boardContext.fillRect(rectX, rectY, this.pathSize, this.pathSize);
  
        // Draw the outline for each rectangle
        this.boardContext.strokeRect(rectX, rectY, this.pathSize, this.pathSize);
  
        //Resetting the color back to red
        this.boardContext.fillStyle = colors[3]; // Red color
      }
  
      /**
       * 3rd Row RED HOME TOP
       */
      for (let i = 0; i < 6; i++) {
        // Calculate the x-coordinate for each rectangle
        const rectX = this.boardCanvas.width - this.homeSize + i * this.pathSize;
        const rectY = this.homeSize;
  
        //every box has white background
        this.boardContext.fillStyle = "#FFFFFF"; // White color
  
        // Draw the filled rectangle
        this.boardContext.fillRect(rectX, rectY, this.pathSize, this.pathSize);
  
        // Draw the outline for each rectangle
        this.boardContext.strokeRect(rectX, rectY, this.pathSize, this.pathSize);
  
        //Resetting the color back to red
        this.boardContext.fillStyle = colors[3]; // Red color
      }
  
      //Red Triangle in center
      this.boardContext.beginPath();
      this.boardContext.moveTo(this.homeSize + 3 * this.pathSize, this.homeSize);
      this.boardContext.lineTo(
        this.boardCanvas.width / 2,
        this.boardCanvas.height / 2
      );
      this.boardContext.lineTo(
        this.homeSize + 3 * this.pathSize,
        this.homeSize + 3 * this.pathSize
      );
      this.boardContext.closePath();
      this.boardContext.fill();
  
      //White Circles Inside the Red Home Rectangle
      this.boardContext.fillStyle = "#FFFFFF";
  
      topLeftHomeCircleX =
        this.boardCanvas.width - this.homeSize + 2 * this.pathSize;
      topLeftHomeCircleY =
        this.boardCanvas.height - this.homeSize + 2 * this.pathSize;
      for (let i = 0; i < 2; i++) {
        for (let j = 0; j < 2; j++) {
          this.boardContext.beginPath();
          this.boardContext.arc(
            topLeftHomeCircleX + i * 2 * this.pathSize,
            topLeftHomeCircleY + j * 2 * this.pathSize,
            this.homeCircleSize,
            0,
            2 * Math.PI
          );
          this.boardContext.fill();
        }
      }
  
      //Red Horizontal Line
      this.boardContext.beginPath();
      this.boardContext.moveTo(
        this.boardCanvas.width - this.homeSize,
        this.boardCanvas.height - this.homeSize
      );
      this.boardContext.lineTo(
        this.boardCanvas.width,
        this.boardCanvas.height - this.homeSize
      );
      this.boardContext.stroke();
  
      //Red Vertical Line
      this.boardContext.beginPath();
      this.boardContext.moveTo(
        this.boardCanvas.width - this.homeSize,
        this.boardCanvas.height - this.homeSize
      );
      this.boardContext.lineTo(
        this.boardCanvas.width - this.homeSize,
        this.boardCanvas.height
      );
      this.boardContext.stroke();
  
      // Center Triangles Outline
      this.boardContext.fillStyle = "#000000";
      this.boardContext.rect(
        this.homeSize,
        this.homeSize,
        3 * this.pathSize,
        3 * this.pathSize
      );
      this.boardContext.stroke();
  
      //Inside triangle top left to bottom right line
      this.boardContext.beginPath();
      this.boardContext.moveTo(this.homeSize, this.homeSize);
      this.boardContext.lineTo(
        this.boardCanvas.width - this.homeSize,
        this.boardCanvas.height - this.homeSize
      );
      this.boardContext.stroke();
  
      // Inside triangle bottom left to top right line
      this.boardContext.beginPath();
      this.boardContext.moveTo(
        this.boardCanvas.width - this.homeSize,
        this.homeSize
      );
      this.boardContext.lineTo(
        this.homeSize,
        this.boardCanvas.height - this.homeSize
      );
      this.boardContext.stroke();
  
      /**
       * STARS
       */
      starImage.onload = () => {
        // top
        this.boardContext.drawImage(
          starImage,
          this.homeSize + 3,
          2 * this.pathSize + 2,
          this.starSize,
          this.starSize
        );
  
        // right
        this.boardContext.drawImage(
          starImage,
          this.boardCanvas.width - 3 * this.pathSize + 3,
          this.homeSize + 2,
          this.starSize,
          this.starSize
        );
  
        // bottom
        this.boardContext.drawImage(
          starImage,
          this.homeSize + 2 * this.pathSize + 3,
          this.boardCanvas.height - 3 * this.pathSize + 2,
          this.starSize,
          this.starSize
        );
  
        // Left
        this.boardContext.drawImage(
          starImage,
          2 * this.pathSize + 3,
          this.homeSize + 2 * this.pathSize + 2,
          this.starSize,
          this.starSize
        );
  
        //Blue Home Star
        this.boardContext.drawImage(
          starImage,
          this.pathSize + 3,
          this.homeSize + 2,
          this.starSize,
          this.starSize
        );
  
        //Yellow Home Star
        this.boardContext.drawImage(
          starImage,
          this.homeSize + 2 * this.pathSize + 3,
          this.pathSize + 2,
          this.starSize,
          this.starSize
        );
  
        //Red Home Star
        this.boardContext.drawImage(
          starImage,
          this.boardCanvas.width - 2 * this.pathSize + 3,
          this.homeSize + 2 * this.pathSize + 2,
          this.starSize,
          this.starSize
        );
  
        //Green Home Star
        this.boardContext.drawImage(
          starImage,
          this.homeSize + 3,
          this.boardCanvas.height - 2 * this.pathSize + 2,
          this.starSize,
          this.starSize
        );
      };
    }
  
    renderPlayerPieces(playerColor) {
      // Set the fill style based on the player's color
      this.boardContext.fillStyle = playerColor;
  
      // Set the starting position for the top-left home circle based on player color
      let topLeftHomeCircleX, topLeftHomeCircleY;
  
      if (playerColor === "blue") {
        topLeftHomeCircleX = this.pathSize + this.homeCircleSize + 10;
        topLeftHomeCircleY = this.pathSize + this.homeCircleSize + 10;
      } else if (playerColor === "yellow") {
        topLeftHomeCircleX =
          this.boardCanvas.width -
          this.homeSize +
          this.pathSize +
          this.homeCircleSize +
          10;
        topLeftHomeCircleY = this.pathSize + this.homeCircleSize + 10;
      } else if (playerColor === "green") {
        topLeftHomeCircleX = this.pathSize + this.homeCircleSize + 10;
        topLeftHomeCircleY =
          this.boardCanvas.height -
          this.homeSize +
          this.pathSize +
          this.homeCircleSize +
          10;
      } else if (playerColor === "red") {
        topLeftHomeCircleX =
          this.boardCanvas.width -
          this.homeSize +
          this.pathSize +
          this.homeCircleSize +
          10;
        topLeftHomeCircleY =
          this.boardCanvas.height -
          this.homeSize +
          this.pathSize +
          this.homeCircleSize +
          10;
      }
    }
  }
  
  // Export the Board class
  export default Board;
  