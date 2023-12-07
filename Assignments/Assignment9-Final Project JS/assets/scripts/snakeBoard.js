


class Snake {
    /**
     * 
     * @param {object} start contains start cell(x,y)
     * @param {object} end contains end cell(x,y)
     */
      constructor(start, end) {
          this.start = start;
          this.end = end;
      }
  }
  
  
  class Ladder {
    /**
     * 
     * @param {object} start contains start cell(x,y)
     * @param {object} end contains end cell(x,y)
     */
      constructor(start, end) {
          this.start = start;
          this.end = end;
      }
  }
  
  
  
  class Board {
      /**
       * 
       * @param {number} boardSize takes the size of board or number of columsn in  board
       * @param {string} canvasId the id name of the canvas board
       */
    constructor(boardSize, canvasId) {
      // this.rows = rows;
      // this.cols = cols;
      this.boardSize=boardSize;       //number of columns 
      this.canvas = document.getElementById(canvasId);
      this.context = this.canvas.getContext("2d");
      this.cellSize = this.canvas.width / boardSize;
      this.snakes = [];      //holds the array of all snakes
      this.ladders = [];     //holds array of all ladders
      this.cellIndices = []; // Array to store indices of cellNumbers coordinates
      this.initializeBoard(); //create the board grid and its cell number
    }
  
    initializeBoard() {
      // Implement logic to create the initial state of the board
      for (let row = 0; row < this.boardSize; row++) {
        for (let col = 0; col < this.boardSize; col++) {
  
          // Getting the cellNumber for each cell in snake board style
          let cellNumber =
            row % 2 === 0
              ? row * this.boardSize + col + 1
              : (row + 1) * this.boardSize - col;
          cellNumber = this.boardSize * this.boardSize - cellNumber + 1;
    
          // console.log(cellNumber);
    
          //x and y coordinates
          const x = col * this.cellSize;
          const y = row * this.cellSize;
  
          // Store the (x,y) of the current cellNumber
          const currentIndex = {
            x: x,
            y: y,
        };
  
        //populate the array of each board cell with a object that contains (x,y) coordinates
        this.cellIndices[cellNumber] = currentIndex;
    
          // Checkerboard color pattern
          this.context.fillStyle =
            row % 2 === 0 ? (col % 2 === 0 ? "#eee" : "#ddd") : (col % 2 === 0 ? "#ddd" : "#eee");
  
          // console.log(this.context.fillStyle);
    
          this.context.fillRect(x, y, this.cellSize, this.cellSize);
    
          this.context.strokeStyle = "#000";
    
          // Syntax -> strokeRect(x, y, width, height)
          this.context.strokeRect(x, y, this.cellSize, this.cellSize);
    
          // Color for text
          this.context.fillStyle = "#000";
    
          // Syntax -> fillText(text, x, y [, maxWidth])
          this.context.fillText(
            cellNumber,
            x + 0.5 * this.cellSize,
            y + 0.5 * this.cellSize
          );
        }
      }
      //to see the coordinates of each cell
      // console.log(this.cellIndices)
  
    }
    
  
    //main board and snake and players render
    render() {
      // Render the game board on the canvas
      this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
      this.initializeBoard();
      // Render snakes and ladders
      this.snakes.forEach((snake) => this.renderSnake(snake));
      this.ladders.forEach((ladder) => this.renderLadder(ladder));
  
      
    }
  
  
  
    //make the snake in the board
    renderSnake(snake) {
      // Render a snake on the board
      //getCoordinates() returns a object with (x,y)
      const startCell = this.getCoordinates(snake.start);
      const endCell = this.getCoordinates(snake.end);
  
      const numSegments = 70; // Increase the number of segments for a smoother curve
      const wavelength = 20; // Wavelength of the sine wave
      const amplitude = 20; // Amplitude of the sine wave
  
      this.context.beginPath();
      this.context.moveTo(startCell.x + 0.5 * this.cellSize, startCell.y + 0.5 * this.cellSize);
  
      const deltaX = (endCell.x - startCell.x) / numSegments;
      const deltaY = (endCell.y - startCell.y) / numSegments;
  
      for (let i = 1; i < numSegments; i++) {
          const x = startCell.x + i * deltaX;
          const y = startCell.y + i * deltaY + amplitude * Math.sin((2 * Math.PI * i) / wavelength);
  
          this.context.lineTo(x + 0.5 * this.cellSize, y + 0.5 * this.cellSize);
      }
  
      this.context.lineTo(endCell.x + 0.5 * this.cellSize, endCell.y + 0.5 * this.cellSize);
      this.context.strokeStyle = "#F00"; // red color
      this.context.lineWidth = 2;
      this.context.stroke();
  
  
      // const numSegments = 5;
      // const segmentLength=1;
      // this.context.beginPath();
      // this.context.moveTo(startCell.x + 0.5 * this.cellSize, startCell.y + 0.5 * this.cellSize);
  
      // const deltaX = (endCell.x - startCell.x) / numSegments;
      // const deltaY = (endCell.y - startCell.y) / numSegments;
  
      // for (let i = 1; i < numSegments; i++) {
      //     const x = startCell.x + i * deltaX + segmentLength;
      //     const y = startCell.y + i * deltaY + segmentLength;
  
      //     this.context.lineTo(x + 0.5 * this.cellSize, y + 0.5 * this.cellSize);
      // }
  
      // this.context.lineTo(endCell.x + 0.5 * this.cellSize, endCell.y + 0.5 * this.cellSize);
      // this.context.strokeStyle = "#0F0"; // Green color
      // this.context.lineWidth = 2;
      // this.context.stroke();
  
      // this.context.fillStyle = "red";   //for snake start
      // this.context.fillRect(
      //   startCell.x ,
      //   startCell.y ,
      //   this.cellSize,
      //   this.cellSize
      //   );
  
      // this.context.fillStyle = "red";   //for snake end
      // this.context.fillRect(          
      //   endCell.x,
      //   endCell.y ,
      //   this.cellSize,
      //   this.cellSize
      // )
  
      // this.context.fillStyle = "#000"; // Reset fill style
  
      }
        
        //make the ladder in the board
        renderLadder(ladder) {
        console.log("Rendering Ladder");
          // Render a ladder on the 
          //getCoordinates() returns a object with (x,y)
          const startCell = this.getCoordinates(ladder.start);
          const endCell = this.getCoordinates(ladder.end);
          
          this.context.strokeStyle = "blue"; // Set stroke color for the ladder line
          this.context.lineWidth = 3; // Set line width as needed
      
          // Draw a line from ladder start to ladder end
          this.context.beginPath();
          this.context.moveTo(startCell.x + 0.25 * this.cellSize, startCell.y + 0.75 * this.cellSize);
          this.context.lineTo(endCell.x + 0.25 * this.cellSize, endCell.y + 0.75 * this.cellSize);
          this.context.stroke();
  
          // Draw a Second line from ladder start to ladder end
          this.context.beginPath();
          this.context.moveTo(startCell.x + 0.75 * this.cellSize, startCell.y + 0.25 * this.cellSize);
          this.context.lineTo(endCell.x + 0.75 * this.cellSize, endCell.y + 0.25 * this.cellSize);
          this.context.stroke();
      
          this.context.strokeStyle = "#000"; // Reset stroke color
          this.context.lineWidth = 1; // Reset line width
          
  
          // console.log(startCell,endCell);
  
          // this.context.fillStyle = "blue"; // For ladder start
          // this.context.fillRect(
          //   startCell.x,
          //   startCell.y,
          //   this.cellSize,
          //   this.cellSize
          //   );
            
          // this.context.fillStyle = "blue"; // For ladder end
          // this.context.fillRect(
          //   endCell.x,
          //   endCell.y,
          //   this.cellSize,
          //   this.cellSize
          // )
  
          // this.context.fillStyle = "#000"; // Reset fill style
      }
  
    placeSnake(start, end) {
      // Place a snake on the board from start to end
      this.snakes.push(new Snake(start, end));
    }
  
    placeLadder(start, end) {
      // Place a ladder on the board from start to end
      this.ladders.push(new Ladder(start, end));
    }
    
    
    //gets the coordinates for each cell of Board (x,y)
    getCoordinates(cellNumber) {
        // // Convert cell number to x, y coordinates
        // const row = Math.floor((this.boardSize * this.boardSize - cellNumber) / this.boardSize);
        // const col = (this.boardSize - 1 - row % 2) * (cellNumber - 1) % this.boardSize;
  
        console.log(`Cell->${cellNumber} coordinates -> ${this.cellIndices[cellNumber].x}, ${this.cellIndices[cellNumber].y}`);
  
        //this gets the (x,y) coordinates containing [object]  of the cell
        let object = this.cellIndices[cellNumber];
        // return { x: col, y: row };
        return object;
      }
  
      
      movePlayer(playerPosition, diceValue) {
          // Move the player based on the dice value
          let newPosition = playerPosition + diceValue;
          const snake = this.snakes.find((s) => s.end === newPosition);
  
          if (snake) {
              console.log("Oops! You landed on a snake. Go back to ", snake.start);
              newPosition = snake.start;
          }
  
          const ladder = this.ladders.find((l) => l.start === newPosition);
  
          if (ladder) {
              console.log("Congratulations! You climbed a ladder to ", ladder.end);
              newPosition = ladder.end;
          }
  
          return newPosition;
      }
  
      //prompting the user for data
    //   setupGame() {
    //     const numSnakes = parseInt(prompt("Enter the number of snakes:"));
    //     for (let i = 0; i < numSnakes; i++) {
    //         const start = parseInt(prompt(`Enter the start position for snake ${i + 1}:`));
    //         const end = parseInt(prompt(`Enter the end position for snake ${i + 1}:`));
    //         this.placeSnake(start, end);
    //     }
  
    //     const numLadders = parseInt(prompt("Enter the number of ladders:"));
    //     for (let i = 0; i < numLadders; i++) {
    //         const start = parseInt(prompt(`Enter the start position for ladder ${i + 1}:`));
    //         const end = parseInt(prompt(`Enter the end position for ladder ${i + 1}:`));
    //         this.placeLadder(start, end);
    //     }
    // }
  }
      
  
  
  