// Dice.js

class Dice {
    constructor(canvasId) {
        this.diceCanvas = document.getElementById(canvasId);
        this.diceContext = this.diceCanvas.getContext('2d');
        this.diceContext.fillStyle = '#000000';
    }

    roll() {
        console.log('rollTheDice');
        var diceInterval = setInterval(() => {
            var nextNumber = 1 + Math.floor(Math.random() * 6);
            this.diceContext.clearRect(0, 0, this.diceCanvas.width, this.diceCanvas.height);
            var image = new Image();
            image.src = 'assets/images/dice2/dice' + nextNumber + '.png';
            this.diceContext.drawImage(image, 1, 1, 48, 48);
        }, 50);
    
        setTimeout(() => {
            clearInterval(diceInterval);
        }, 1000);
    }
}

// Export the Dice class
export default Dice;
