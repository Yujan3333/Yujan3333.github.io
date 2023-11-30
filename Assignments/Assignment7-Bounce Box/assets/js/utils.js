// This should be able to use in another js aswells

/**
 * 
 * @param {number} min 
 * @param {number} max 
 * @returns {number} random number between min and max is returned
 */
function getRandomNumber(min, max) {
    let diff = max - min;
    return Math.floor(Math.random() * diff) + min;
}

// console.log(getRandomNumber(0,100));

