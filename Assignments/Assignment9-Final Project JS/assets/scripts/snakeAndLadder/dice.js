
function rollDice() {
    /**
     * returns the random number generated and animates the image of dice
     */
    let dice = document.getElementById('dice');
    let animation = setInterval(animate, 50);
    let rotationAngle = 45;
    let framesUp = 6;
    let diceNum = Math.floor(Math.random() * 6 + 1);

    //animates the dice
    function animate() {
        if (framesUp > 1) {
            dice.src = `./assets/images/dice/dice${framesUp}.png`;
            dice.style.transform = `rotate(${rotationAngle}deg)`;
            framesUp--;
            rotationAngle *= 2;
        } else if (framesUp === 1) {
            dice.src = `./assets/images/dice/dice${diceNum}.png`;
            framesUp--;
        } else {
            clearInterval(animation);
        }
    }

    return diceNum;
}

