//board
let board;
let boardWidth = 360; //width of bg image
let boardHeight = 576; //height of bg image
let context; //canvas 2d

//doodler
let doodlerWidth = 46;
let doodlerHeight = 46;
let doodlerX = boardWidth / 2 - doodlerWidth / 2;
let doodlerY = (boardHeight * 7) / 8 - doodlerHeight;
let doodlerRightImg;
let doodlerLeftImg;

//doodler object contains the following
let doodler = {
  img: null, //to show left side doodler and right side doodler
  x: doodlerX,
  y: doodlerY,
  width: doodlerWidth,
  height: doodlerHeight,
};

//physics velocity
let velocityX = 0; //for left and right movement
let velocityY = 0; //for up and down  movement
let initialVelocityY = -8; //start velocity of Y
let gravity = 0.4; // makes the Y postive to move down

//platforms
let platformArray = [];
let platformWidth = 60;
let platformHeight = 18;
let platformImg;

//score
let score = 0;
let maxScore=0;       //temporary score
let gameOver=false;

/**
 * first load of the page
 */

window.onload = function () {
  board = document.getElementById("board");

  //setting height and width of canvas
  board.height = boardHeight;
  board.width = boardWidth;
  context = board.getContext("2d"); //used for drawing on the board

  //draw doodler
  //   context.fillStyle = "green";
  //   context.fillRect(doodler.x, doodler.y, doodler.width, doodler.height);

  //doodler left and right images load canvas property
  doodlerRightImg = new Image(); //canvas property
  doodlerRightImg.src = "assets/image/doodler-right.png"; //path starts from index.html
  doodler.img = doodlerRightImg;

  //For initial page load the following is set
  doodlerRightImg.onload = function () {
    // draw image in canvas
    context.drawImage(
      doodler.img,
      doodler.x,
      doodler.y,
      doodler.width,
      doodler.height
    );
  };

  //load left doodler img in canvas
  doodlerLeftImg = new Image();
  doodlerLeftImg.src = "assets/image/doodler-left.png"; //path starts from index.html

  //load platform img in canvas
  platformImg = new Image();
  platformImg.src = "assets/image/platform.png";

  //setting the initial velocity in Y
  velocityY = initialVelocityY;
  // function places the platform on the canvas
  placePlatforms();

  //game loop - changes the x and y coordinates in the game whent the page refreshes
  requestAnimationFrame(update);

  //on keydown moveDoodler func runs
  document.addEventListener("keydown", moveDoodler);
};

/**
 * function to update X and Y
 * constantly draws the doodler in the canvas
 */

function update() {
  //animation loop //Schedules the next frame
  requestAnimationFrame(update);

  // gameOver stop updating the canvas
  if (gameOver) {
    return;
}

  //clear the canvas
  context.clearRect(0, 0, board.width, board.height);

  //update the X value of doodler before drawing
  doodler.x += velocityX;

  //doodler goes to left to right and vice versa
  if (doodler.x > boardWidth) {
    doodler.x = 0;
  } else if (doodler.x + doodler.width < 0) {
    doodler.x = boardWidth;
  }

  // doodler comes back down in Y direction
  velocityY += gravity;
  //Updating the Y direction of doodler
  doodler.y += velocityY;

  //doodler falls below the canvas height
  if (doodler.y > board.height) {
    gameOver = true;
}

  // draws the doodler
  context.drawImage(
    doodler.img,
    doodler.x,
    doodler.y,
    doodler.width,
    doodler.height
  );

  //draw the platforms
  for (let i = 0; i < platformArray.length; i++) {
    let platform = platformArray[i];

    //doodler is above the 3/4 height of the board and everything falls down
    if (velocityY < 0 && doodler.y < (boardHeight * 3) / 4) {
      platform.y -= initialVelocityY; //slide platform down
    }

    //doodler only jumps of the platform when it stops moving up
    if (detectCollision(doodler, platform) && velocityY >= 0) {
      velocityY = initialVelocityY; //jump
    }
    context.drawImage(
      platform.img,
      platform.x,
      platform.y,
      platform.width,
      platform.height
    );
  }

  // clear platforms and add new platform
  while (platformArray.length > 0 && platformArray[0].y >= boardHeight) {
    //array not empty and platform Y becomes greater then canvas height
    platformArray.shift(); //removes first element from the array of platforms
    newPlatform(); //replace with new platform on top
  }

  //score
  updateScore();
  context.fillStyle = "black";
  context.font = "16px sans-serif";
  context.fillText(score, 5, 20);

  // gameover condition true
  if (gameOver) {
    context.fillText(
      "Game Over: Press 'Space' to Restart",
      boardWidth / 7,
      (boardHeight * 7) / 8
    );
  }
}



/**
 *
 * @param {event} keyboard event
 * on keydown this executes
 */

function moveDoodler(e) {
  if (e.code == "ArrowRight" || e.code == "KeyD") {
    //move right
    velocityX = 4;
    doodler.img = doodlerRightImg; //set right doodler img
  } else if (e.code == "ArrowLeft" || e.code == "KeyA") {
    //move left
    velocityX = -4;
    doodler.img = doodlerLeftImg; //set left doodler img
  }
  else if (e.code == "Space" && gameOver) {       //gameOver Condition and restart
    //reset to initial condition
    doodler = {
        img : doodlerRightImg,
        x : doodlerX,
        y : doodlerY,
        width : doodlerWidth,
        height : doodlerHeight
    }

    velocityX = 0;
    velocityY = initialVelocityY;
    score = 0;
    maxScore = 0;
    gameOver = false;
    placePlatforms();
}
}



/**
 * randomly place platform on canvas
 */

function placePlatforms() {
  // clears the array for the new game
  platformArray = [];

  //starting platforms
  let platform = {
    img: platformImg,
    x: boardWidth / 2,
    y: boardHeight - 50,
    width: platformWidth,
    height: platformHeight,
  };

  //add the initial platform
  platformArray.push(platform);

  //6 randomly generated platform
  for (let i = 0; i < 6; i++) {
    let randomX = Math.floor((Math.random() * boardWidth * 3) / 4); //(0-1) * boardWidth*3/4
    let platform = {
      img: platformImg,
      x: randomX,
      y: boardHeight - 75 * i - 150, //equal spacing of 75px
      width: platformWidth,
      height: platformHeight,
    };

    platformArray.push(platform);
  }
}



/**
 * generate new platforms by sliding down the prev
 */
function newPlatform() {
  let randomX = Math.floor((Math.random() * boardWidth * 3) / 4); //(0-1) * boardWidth*3/4
  let platform = {
    img: platformImg,
    x: randomX,
    y: -platformHeight, //platform will be just above the canvas in Y //default Y=0
    width: platformWidth,
    height: platformHeight,
  };

  platformArray.push(platform);
}



/**
 * collision detection with platform
 * should pass from below and bounce from above
 */

function detectCollision(a, b) {
  //a and b overlap, the function will return true, indicating a collision. If not, it will return false.
  return (
    a.x < b.x + b.width && //a's top left corner doesn't reach b's top right corner //a is to the left of b.
    a.x + a.width > b.x && //a's top right corner passes b's top left corner // a is to the right of b.
    a.y < b.y + b.height && //a's top left corner doesn't reach b's bottom left corner //a is above b.
    a.y + a.height > b.y
  ); //a's bottom left corner passes b's top left corner //a is below b.
}



/**
 *  update the score in the game 
 */

function updateScore() {
  let points = Math.floor(50 * Math.random()); //(0-1) *50 --> (0-50)
  // let points= 50;

  if (velocityY < 0) {    //neg going up increase points
    //negative going up
    maxScore += points;       //maxScore to store the temporary score // add points going up
    if (score < maxScore) {
      score = maxScore;       //store the max score 
    }
  } else if (velocityY >= 0) {
    maxScore -= points;     //deduct points going down
  }
}
