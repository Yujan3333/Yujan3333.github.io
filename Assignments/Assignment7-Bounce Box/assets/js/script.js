const viewport = document.querySelector(".container");
// const ball=document.querySelector(".ball");

// Array to store balls
const ballsArray = [];

// Create balls and store in arraya
for (let i = 0; i < BALL_COUNT; i++) {
//   let radius = 10;

  // generate random x and y coordinate for cirlce

//   let x = getRandomNumber(0, VIEWPORT_WIDTH - radius * 2);
  let x = getRandomNumber(0, VIEWPORT_WIDTH - 20);
//   let y = getRandomNumber(0, VIEWPORT_HEIGHT - radius * 2);
  let y = getRandomNumber(0, VIEWPORT_HEIGHT - 20);

  // creates a object ball
  const ball = new Ball(x, y);

  // add the new ball to array
  ballsArray.push(ball);
}

// Add balls to viewport
ballsArray.forEach((ball) => {
  viewport.appendChild(ball.getElement());
});

// draw the ball and move it in the container
function render() {
  ballsArray.forEach((ball) => {
    ball.draw();
    ball.move();

    ball.checkWallCollision(0, 0, VIEWPORT_WIDTH, VIEWPORT_HEIGHT);
  });

  // Check for ball collisions
  for (let i = 0; i < ballsArray.length; i++) {
    for (let j = i + 1; j < ballsArray.length; j++) {
        ballsArray[i].checkBallCollision(ballsArray[j]);
    }
}


  //maintains framerate and continous animation
  requestAnimationFrame(render);
}

render();
