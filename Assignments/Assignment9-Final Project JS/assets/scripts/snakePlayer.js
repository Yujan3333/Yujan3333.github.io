class Player {
    constructor(name, initialPosition) {
        this.name = name;
        this.position = initialPosition; // Start at the first cell
    }

    
    move(diceValue) {
        // Move the player based on the dice value
        this.position = myBoard.movePlayer(this.position, diceValue);
    }
}
