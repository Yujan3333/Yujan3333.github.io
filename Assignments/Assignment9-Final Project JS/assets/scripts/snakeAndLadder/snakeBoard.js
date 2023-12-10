class Snake {
  /**
   *
   * @param {object} start contains start cell(x,y)
   * @param {object} end contains end cell(x,y)
   */
  constructor(start, end) {
    this.start = start;
    this.end = end;
    this.initialAmplitude = 20;
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

class Player {
  /**
   *
   * @param {string} name
   * @param {string} color
   * @param {number} position Position of the player in board
   */
  constructor(name, color, position) {
    this.name = name;
    this.color = color;
    this.position = position;
    this.inGame = false; // to check the player has entered the game or not
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
    this.boardSize = boardSize; //number of columns
    this.canvas = document.getElementById(canvasId);
    this.context = this.canvas.getContext("2d");
    this.cellSize = this.canvas.width / boardSize;
    this.snakes = []; //holds the array of all snakes
    this.ladders = []; //holds array of all ladders
    this.cellIndices = []; // Array to store indices of cellNumbers coordinates
    this.player1 = new Player("Player 1", "#FFF", 0); //white color
    this.player2 = new Player("Player 2", "#FF0", 0); //yellow color
    this.currentPlayer = this.player1; // Start with player 1
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
          row % 2 === 0
            ? col % 2 === 0
              ? "#eee"
              : "#ddd"
            : col % 2 === 0
            ? "#ddd"
            : "#eee";

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
  }

  //main board and snake, ladder and players render
  render() {
    // Render the game board on the canvas
    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    this.initializeBoard();
    // Render snakes and ladders
    this.snakes.forEach((snake) => this.renderSnake(snake));
    this.ladders.forEach((ladder) => this.renderLadder(ladder));
    //render players
    this.renderPlayer(this.player1);
    this.renderPlayer(this.player2);
  }

  //make the snake in the board
  renderSnake(snake) {
    // Render a snake on the board
    //getCoordinates() returns a object with (x,y)
    const startCell = this.getCoordinates(snake.start);
    const endCell = this.getCoordinates(snake.end);

    const numSegments = 70; // Increase the number of segments for a smoother curve
    const wavelength = 30; // Wavelength of the sine wave
    // const amplitude = 20; // Amplitude of the sine wave
    let amplitude = snake.initialAmplitude;
    // console.log(amplitude)

    this.context.beginPath();
    this.context.moveTo(
      startCell.x + 0.5 * this.cellSize,
      startCell.y + 0.5 * this.cellSize
    );

    const deltaX = (endCell.x - startCell.x) / numSegments;
    const deltaY = (endCell.y - startCell.y) / numSegments;

    for (let i = 1; i < numSegments; i++) {
      const x = startCell.x + i * deltaX;
      const y =
        startCell.y +
        i * deltaY +
        amplitude * Math.sin((2 * Math.PI * i) / wavelength);

      // Decrease amplitude over time
      amplitude *= 0.99;

      this.context.lineTo(x + 0.5 * this.cellSize, y + 0.5 * this.cellSize);
    }

    this.context.lineTo(
      endCell.x + 0.5 * this.cellSize,
      endCell.y + 0.5 * this.cellSize
    );
    this.context.strokeStyle = snake.color; // Green color
    this.context.lineWidth = 2;
    this.context.stroke();

  }



  //make the ladder in the board
  renderLadder(ladder) {

    //getCoordinates() returns a object with (x,y)
    const startCell = this.getCoordinates(ladder.start);
    const endCell = this.getCoordinates(ladder.end);

    this.context.strokeStyle = "blue"; // Set stroke color for the ladder line
    this.context.lineWidth = 3; // Set line width as needed

    // Draw a line from ladder start to ladder end
    this.context.beginPath();
    this.context.moveTo(
      startCell.x + 0.35 * this.cellSize,
      startCell.y + 0.55 * this.cellSize
    );
    this.context.lineTo(
      endCell.x + 0.35 * this.cellSize,
      endCell.y + 0.55 * this.cellSize
    );
    this.context.stroke();

    // Draw a Second line from ladder start to ladder end
    this.context.beginPath();
    this.context.moveTo(
      startCell.x + 0.55 * this.cellSize,
      startCell.y + 0.35 * this.cellSize
    );
    this.context.lineTo(
      endCell.x + 0.55 * this.cellSize,
      endCell.y + 0.35 * this.cellSize
    );
    this.context.stroke();

    this.context.strokeStyle = "#000"; // Reset stroke color
    this.context.lineWidth = 1; // Reset line width
  }

  //render the player on the board
  renderPlayer(player) {
    // Render a player token on the board
    const playerPosition = player.position;
    const playerColor = player.color;

    const cellCoordinates = this.getCoordinates(playerPosition);
    const x = cellCoordinates.x + 0.5 * this.cellSize;
    const y = cellCoordinates.y + 0.5 * this.cellSize;

    this.context.beginPath();
    this.context.arc(x, y, 0.4 * this.cellSize, 0, 2 * Math.PI);
    this.context.fillStyle = playerColor;
    this.context.fill();
    this.context.strokeStyle = "#000";
    this.context.lineWidth = 2;
    this.context.stroke();
    // Display the player's position in the "player-position" div
    this.updatePlayerPositions();
  }

  // update the content of the "player-position" div with current positions
  updatePlayerPositions() {
    const player1PositionDiv = document.getElementById("player1-position");
    const player2PositionDiv = document.getElementById("player2-position");

    player2PositionDiv.innerHTML = `<h3>Player 2 Position: ${this.player2.position}</h3>`;
    player1PositionDiv.innerHTML = `<h3>Player 1 Position: ${this.player1.position}</h3>`;
  }


  //for setting snake start and end
  placeSnake(start, end) {
    // Place a snake on the board from start to end
    const snake = new Snake(start, end);
    snake.color = this.getRandomSnakeColor();
    snake.initialAmplitude = Math.random() * 30 + 10; // Random initial amplitude between 10 and 40
    this.snakes.push(snake);
  }


  //for generating random snake color
  getRandomSnakeColor() {
    const colors = ["red", "green", "purple", "orange"];
    const randomIndex = Math.floor(Math.random() * colors.length);
    return colors[randomIndex];
  }

  //add new ladder to the ladder array with its start and end cell
  placeLadder(start, end) {
    // Place a ladder on the board from start to end
    this.ladders.push(new Ladder(start, end));
  }

  // //gets the coordinates for each cell of Board (x,y)
  getCoordinates(cellNumber) {
    //initial position is 0 till players enter the game
    if (cellNumber === 0) {
      return { x: 0, y: 540 }; // Return a default value or handle the error appropriately
    }

    if (this.cellIndices[cellNumber]) {
      return this.cellIndices[cellNumber];
    } else {
      return { x: 0, y: 0 }; // Return a default value or handle the error appropriately
    }
  }

  //switch turn
  switchPlayer() {
    this.currentPlayer =
      this.currentPlayer === this.player1 ? this.player2 : this.player1;

    //To show whose turn is it now
    let playerTurnDiv = document.getElementById("player-turn");
    playerTurnDiv.innerHTML = `<h2>Current Turn: ${this.currentPlayer.name}</h2>`;
  }


  //move and update the position of the players on the board
  movePlayer(player, diceValue) {

    //show the snakeLadderMsg in the left div 
    let snakeAndLadderMsg = document.getElementById("snake-ladder");

    // Show what is rolled in the left section
    let playerRollDiv = document.getElementById("player-roll");
    let playerSituation = `${player.name} rolled ${diceValue}`;
    playerRollDiv.innerHTML = playerSituation;

    //updating the position of the current player accr to dice rolled
    let newPosition = player.position + diceValue;

    // Show the current player's position before the move
    console.log(`Player ${player.name}'s current position: ${player.position}`);

    // Check for snakes
    const snake = this.snakes.find((s) => s.start === newPosition);
    if (snake) {
      let snakeOutput = `Oops! ${player.name} landed on a snake. Go back to ${snake.end}`;
      snakeAndLadderMsg.innerHTML = snakeOutput;
      console.log(snakeOutput);

      newPosition = snake.end;
    }

    //check for ladders
    const ladder = this.ladders.find((l) => l.start === newPosition);
    if (ladder) {
      let ladderOutput = `Congratulations! ${player.name} climbed a ladder to ${ladder.end}`;
      snakeAndLadderMsg.innerHTML = ladderOutput;
      console.log(ladderOutput);

      newPosition = ladder.end;
    }

    player.position = newPosition;

    console.log(`Player ${player.name}'s new position: ${newPosition}`);

    //resetting the snakeLadderMsg in the left div after 3 sec
    setTimeout(() => {
      snakeAndLadderMsg.innerHTML = "";
    }, 3000);

    this.renderPlayer(player);

    // Switch to the next player
    this.switchPlayer();

    // Render the updated board and players
    this.render();

    // Check if the player won exactly at 100
    if (newPosition === 100) {
      console.log(`Player ${player.name} wins!`);
    } else {
      // Switch to the next player
      this.switchPlayer();
    }

    // Render the updated board and players
    this.render();
  }

  //Main function that is called onclick
  handlePlayerTurn(rolledNumber) {
    console.log(`Dice rolled: ${rolledNumber}`);

    //To show what the player rolled in the browser
    let playerRollDiv = document.getElementById("player-roll");

    // Check if the current player is already in the game
    if (this.currentPlayer.inGame) {
      // Calculate the next position based on the rolled dice value
      const nextPosition = this.currentPlayer.position + rolledNumber;

      // Check if the next position exceeds 100
      if (nextPosition > 100) {
        console.log(
          `${this.currentPlayer.name} stays in the same position: ${this.currentPlayer.position}`
        );

        // Check if the player rolled a 6
        if (rolledNumber === 6) {
          console.log(
            `${this.currentPlayer.name} rolled a 6 and gets another turn!`
          );
          // Do not switch to the next player, allow the current player to roll again
          return;
        }

        this.switchPlayer();
      } else {
        // Move the current player to the next position
        const newPosition = this.movePlayer(this.currentPlayer, rolledNumber);

        // Check if the player won exactly at 100
        if (newPosition === 100) {
          this.currentPlayer.inGame = false; //take the player out of the game

          let winMsg = `Player ${this.currentPlayer.name} wins!`;
          console.log(winMsg);
          this.displayWinningMessage(winMsg); // Call alert function to display winning message
          return;
        }

        // Check if the player rolled a 6
        // Do not switch to the next player, allow the current player to roll again
        if (rolledNumber === 6) {
          console.log(
            `${this.currentPlayer.name} rolled a 6 and gets another turn!`
          );
          playerRollDiv.innerHTML = `${this.currentPlayer.name} rolled a 6 and gets another turn!`;
          return;
        }

        // Switch to the next player
        this.switchPlayer();
      }
    } else {
      // Player is not in the game
      if (rolledNumber === 6) {
        // Player rolled a six to enter the game
        this.currentPlayer.inGame = true;
        console.log(
          `${this.currentPlayer.name} rolled ${rolledNumber}  ${this.currentPlayer.name} entered the game!`
        );
        //display that player entered the game in the browser
        playerRollDiv.innerHTML = `${this.currentPlayer.name} rolled ${rolledNumber} <br> ${this.currentPlayer.name} entered the game!`;
      } else {
        // Player did not roll a six, switch to the next player
        console.log(
          `${this.currentPlayer.name} rolled ${rolledNumber} stays out of the game.`
        );
        //to show what the player roll when they have not entererd the game
        playerRollDiv.innerHTML = `${this.currentPlayer.name} rolled ${rolledNumber} <br> ${this.currentPlayer.name} stays out of the game.`;

        this.switchPlayer();
      }
    }

    // Render the updated board and players
    this.render();
  }

  //alert is not working inside the above code due to multiple renders
  displayWinningMessage(message) {
    // to display the winning message to the user.
    alert(message);
  }

  //when one player wins stop the game
  checkGameWon() {
    if (this.currentPlayer.position === 100) {
      let winMsg = `Player ${this.currentPlayer.name} wins!`;
      console.log(winMsg);
      this.displayWinningMessage(winMsg); // Display winning message through a alert
      return true; // Game is won
    }
    return false; // Game is not won
  }
}
