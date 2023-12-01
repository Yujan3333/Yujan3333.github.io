/**
 * Class for Ball
 */

class Ball {
  /**
   *
   * @param {*} x // x-coordinate
   * @param {*} y //y-coordinate
   * @param {*} dx //speed x-axis
   * @param {*} dy //speed y-axis
   * @param {*} radius
   */

  //   initialize at first
  constructor(x, y) {
    //x and y coordinates
    this.x = x;
    this.y = y;

    //x-axis and y axis speed
    // this.dx = getRandomNumber(-1, 1);
    this.dx = (Math.random()-0.5) * 2
    // this.dy = getRandomNumber(-1, 1);
    this.dy = (Math.random() - 0.5) * 2;

    //radius
    // this.radius = radius;

    //creating a div and adding class with ball
    this.element = document.createElement("div");
    this.element.classList.add("ball");
  }

  /**
   * @returns HTMLDivElement
   */
  getElement = () => this.element;

  //   returns x-coordinates of ball
  getX = () => this.x;

  //returns y-coordinates of ball
  getY = () => this.y;

  //set x-coordinates of ball
  setX = (x) => {
    this.x = x;
  };

  //set y-coordinates of ball
  setY = (y) => {
    this.y = y;
  };

  // set position of ball in x and y axis or left and top of the relative div
  draw = () => {
    this.element.style.left = this.x + "px";
    this.element.style.top = this.y + "px";
  };

  //move ball to position with relative speed
  move = () => {
    this.x += this.dx * SPEED;
    this.y += this.dy * SPEED;
  };

  // wall detection
//   checkWallCollision = (
//     boundaryLeft,
//     boundaryTop,
//     boundaryWidth,
//     boundaryHeight
//   ) => {
//     if (this.x <= boundaryLeft || this.x + this.r * 2 >= boundaryWidth) {
//       this.dx *= -1;
//       this.x =
//         this.x <= boundaryLeft ? boundaryLeft : boundaryWidth - this.r * 2;
//     }
//     if (this.y <= boundaryTop || this.y + this.r * 2 >= boundaryHeight) {
//       this.dy *= -1;
//       this.y =
//         this.y <= boundaryTop ? boundaryTop : boundaryHeight - this.r * 2;
//     }
//   };


// wall detection
checkWallCollision = (boundaryLeft, boundaryTop, boundaryWidth, boundaryHeight) => {
    // Check for left boundary
    if (this.x <= boundaryLeft) {
      this.dx = Math.abs(this.dx); // Set speed to positive
      this.x = boundaryLeft;
    }
  
    // Check for right boundary
    if (this.x + BALL_WIDTH >= boundaryWidth) {
      this.dx = -Math.abs(this.dx); // Set speed to negative
      this.x = boundaryWidth - BALL_WIDTH;
    }
  
    // Check for top boundary
    if (this.y <= boundaryTop) {
      this.dy = Math.abs(this.dy); // Set speed to positive
      this.y = boundaryTop;
    }
  
    // Check for bottom boundary
    if (this.y + BALL_HEIGHT >= boundaryHeight) {
      this.dy = -Math.abs(this.dy); // Set speed to negative
      this.y = boundaryHeight - BALL_HEIGHT;
    }
  };
  

}
