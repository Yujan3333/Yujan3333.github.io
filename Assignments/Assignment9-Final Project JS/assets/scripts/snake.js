const boardSize = 10;
const myBoard = new Board(boardSize, "gameCanvas");

// Add some snakes and ladders
myBoard.placeSnake(18, 5);
myBoard.placeSnake(99,10);
myBoard.placeSnake(90,20);
myBoard.placeLadder(8, 23);
// myBoard.placeLadder(11, 33);

// Render the initial board
myBoard.render();

// Create players with initial positions
const player1 = new Player("Player 1", 1); // Starting position is 1
const player2 = new Player("Player 2", 1); // Starting position is 1


// Set up the game with user input for snakes and ladders
// myBoard.setupGame();



function animate() {
    requestAnimationFrame(animate);

    // // trying to simulate dice roll (1 to 6) 
    // const diceValue = Math.floor(Math.random() * 6) + 1;

    // // Move players based on dice value
    // player1.move(diceValue);
    // player2.move(diceValue);
    
    // Render the updated board
    myBoard.render();
}

// animate();