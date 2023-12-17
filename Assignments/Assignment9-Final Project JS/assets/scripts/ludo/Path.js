/**
 * Path.js
 * All the places in the board where player piece can move
 */
export const allBoxCoordinates = [
    //Total Boxes available for All Players Movement
    //Red 1st Row Right to Left
    { box: 0, x: 560, y: 320 },
    { box: 1, x: 520, y: 320 }, //Red piece Starting point
    { box: 2, x: 480, y: 320 },
    { box: 3, x: 440, y: 320 },
    { box: 4, x: 400, y: 320 },
    { box: 5, x: 360, y: 320 },
    //Green 3rd Column Top Down
    { box: 6, x: 320, y: 360 },
    { box: 7, x: 320, y: 400 },
    { box: 8, x: 320, y: 440 },
    { box: 9, x: 320, y: 480 },
    { box: 10, x: 320, y: 520 },
    { box: 11, x: 320, y: 560 },
    //Green 2nd Column Only One
    { box: 12, x: 280, y: 560 },
    //Green 1st Row Down Up
    { box: 13, x: 240, y: 560 },
    { box: 14, x: 240, y: 520 }, //Green piece Starting Point
    { box: 15, x: 240, y: 480 },
    { box: 16, x: 240, y: 440 },
    { box: 17, x: 240, y: 400 },
    { box: 18, x: 240, y: 360 },
    //Blue 3rd Row Right to Left
    { box: 19, x: 200, y: 320 },
    { box: 20, x: 160, y: 320 },
    { box: 21, x: 120, y: 320 },
    { box: 22, x: 80, y: 320 },
    { box: 23, x: 40, y: 320 },
    { box: 24, x: 0, y: 320 },
    //Blue 2nd Row Only One
    { box: 25, x: 0, y: 280 },
    //Blue 1st Row Left to Right
    { box: 26, x: 0, y: 240 },
    { box: 27, x: 40, y: 240 }, //Blue Piece Starting Point
    { box: 28, x: 80, y: 240 },
    { box: 29, x: 120, y: 240 },
    { box: 30, x: 160, y: 240 },
    { box: 31, x: 200, y: 240 },
    //Yellow 3rd Column Bottom to Up
    { box: 32, x: 240, y: 200 },
    { box: 33, x: 240, y: 160 },
    { box: 34, x: 240, y: 120 },
    { box: 35, x: 240, y: 80 },
    { box: 36, x: 240, y: 40 },
    { box: 37, x: 240, y: 0 },
    //Yellow 2nd Column Only One
    { box: 38, x: 280, y: 0 },
    //Yellow 1st Row Top Down
    { box: 39, x: 320, y: 0 },
    { box: 40, x: 320, y: 40 }, //Yellow piece Starting Point
    { box: 41, x: 320, y: 80 },
    { box: 42, x: 320, y: 120 },
    { box: 43, x: 320, y: 160 },
    { box: 44, x: 320, y: 200 },
    //Red 3rd Row  Left to Right
    { box: 45, x: 360, y: 240 },
    { box: 46, x: 400, y: 240 },
    { box: 47, x: 440, y: 240 },
    { box: 48, x: 480, y: 240 },
    { box: 49, x: 520, y: 240 },
    { box: 50, x: 560, y: 240 },
    //Red 2nd Row Only One
    { box: 51, x: 560, y: 280 },
    //END****
  
    //Red Home Starting Circle
    { box: 100, x: 440, y: 440 }, //1st top left
    { box: 101, x: 520, y: 440 }, //2nd top right
    { box: 102, x: 440, y: 520 }, //3rd bottom left
    { box: 103, x: 520, y: 520 }, //4th bottom right
  
    //Green Home Starting Circle
    { box: 200, x: 80, y: 440 }, //1st top left
    { box: 202, x: 160, y: 440 }, //2nd top right
    { box: 201, x: 80, y: 520 }, //3rd bottom left
    { box: 203, x: 160, y: 520 }, //4th bottom right
  
    //Blue Home Starting Circle
    { box: 300, x: 80, y: 80 }, //1st top left
    { box: 301, x: 160, y: 80 }, //2nd top right
    { box: 302, x: 80, y: 160 }, //3rd bottom left
    { box: 303, x: 160, y: 160 }, //4th bottom right
  
    //Yellow Home Starting Circle
    { box: 400, x: 440, y: 80 }, //1st top left
    { box: 401, x: 520, y: 80 }, //2nd top right
    { box: 402, x: 440, y: 160 }, //3rd bottom left
    { box: 403, x: 520, y: 160 }, //4th bottom right
  
    //Red Home Stretch Box
    { box: 110, x: 520, y: 280 }, //Enters the Red Final path boxes to center
    { box: 111, x: 480, y: 280 },
    { box: 112, x: 440, y: 280 },
    { box: 113, x: 400, y: 280 },
    { box: 114, x: 360, y: 280 },
  
    //Green Home Stretch Box
    { box: 210, x: 280, y: 520 }, //Enters the Green Final Path boxes to center
    { box: 211, x: 280, y: 480 },
    { box: 212, x: 280, y: 440 },
    { box: 213, x: 280, y: 400 },
    { box: 214, x: 280, y: 360 },
  
    //Blue Home Stretch Box
    { box: 310, x: 40, y: 280 }, //Enters the Blue Final Path boxes to center
    { box: 311, x: 80, y: 280 },
    { box: 312, x: 120, y: 280 },
    { box: 313, x: 160, y: 280 },
    { box: 314, x: 200, y: 280 },
  
    //Yellow Home Stretch Box
    { box: 410, x: 280, y: 40 }, //Enters the Yellow Final Path boxes to center
    { box: 411, x: 280, y: 80 },
    { box: 412, x: 280, y: 120 },
    { box: 413, x: 280, y: 160 },
    { box: 414, x: 280, y: 200 },
  ];
  
  //Path for Red Pieces-> all the box that red piece can travel - it is index of allBoxCoordinates
  export const redPathIndices = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22,
    23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41,
    42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 68, 69, 70, 71, 72,
  ];
  
  
  
  //Path for Green Pieces
  export const greenPathIndices = [
    14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32,
    33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 0,
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 73, 74, 75, 76, 77,
  ];
  
  //Path for Blue Pieces
  export const bluePathIndices = [
    27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45,
    46, 47, 48, 49, 50, 51, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15,
    16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 78, 79, 80, 81, 82,
  ];
  
  //Path for Yellow Pieces
  export const yellowPathIndices = [
    40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9,
    10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28,
    29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 83, 84, 85, 86, 87,
  ];
  
  //all the stars in the board
  export const safePaths=[
    //planning add the stars
  ]
  
  
  /** 
   * To visualize the index of each box above in allBoxCoordinates
   */
  
  // Index: {Object}
  
  // 0: {box: 0, x: 560, y: 320}
  // 1: {box: 1, x: 520, y: 320}                    //Red piece Starting point
  // 2: {box: 2, x: 480, y: 320}
  // 3: {box: 3, x: 440, y: 320}
  // 4: {box: 4, x: 400, y: 320}
  // 5: {box: 5, x: 360, y: 320}
  // 6: {box: 6, x: 320, y: 360}
  // 7: {box: 7, x: 320, y: 400}
  // 8: {box: 8, x: 320, y: 440}
  // 9: {box: 9, x: 320, y: 480}
  // 10: {box: 10, x: 320, y: 520}
  // 11: {box: 11, x: 320, y: 560}
  // 12: {box: 12, x: 280, y: 560}
  // 13: {box: 13, x: 240, y: 560}
  // 14: {box: 14, x: 240, y: 520}                   //Green piece Starting Point
  // 15: {box: 15, x: 240, y: 480}
  // 16: {box: 16, x: 240, y: 440}
  // 17: {box: 17, x: 240, y: 400}
  // 18: {box: 18, x: 240, y: 360}
  // 19: {box: 19, x: 200, y: 320}
  // 20: {box: 20, x: 160, y: 320}
  // 21: {box: 21, x: 120, y: 320}
  // 22: {box: 22, x: 80, y: 320}
  // 23: {box: 23, x: 40, y: 320}
  // 24: {box: 24, x: 0, y: 320}
  // 25: {box: 25, x: 0, y: 280}
  // 26: {box: 26, x: 0, y: 240}
  // 27: {box: 27, x: 40, y: 240}                     //Blue Piece Starting Point
  // 28: {box: 28, x: 80, y: 240}
  // 29: {box: 29, x: 120, y: 240}
  // 30: {box: 30, x: 160, y: 240}
  // 31: {box: 31, x: 200, y: 240}
  // 32: {box: 32, x: 240, y: 200}
  // 33: {box: 33, x: 240, y: 160}
  // 34: {box: 34, x: 240, y: 120}
  // 35: {box: 35, x: 240, y: 80}
  // 36: {box: 36, x: 240, y: 40}
  // 37: {box: 37, x: 240, y: 0}
  // 38: {box: 38, x: 280, y: 0}
  // 39: {box: 39, x: 320, y: 0}
  // 40: {box: 40, x: 320, y: 40}                     //Yellow piece Starting Point
  // 41: {box: 41, x: 320, y: 80}
  // 42: {box: 42, x: 320, y: 120}
  // 43: {box: 43, x: 320, y: 160}
  // 44: {box: 44, x: 320, y: 200}
  // 45: {box: 45, x: 360, y: 240}
  // 46: {box: 46, x: 400, y: 240}
  // 47: {box: 47, x: 440, y: 240}
  // 48: {box: 48, x: 480, y: 240}
  // 49: {box: 49, x: 520, y: 240}
  // 50: {box: 50, x: 560, y: 240}
  // 51: {box: 51, x: 560, y: 280}
  
  /** 
   * Red Home Starting Circle
   */
  
  // 52: {box: 100, x: 440, y: 440}
  // 53: {box: 101, x: 520, y: 440}
  // 54: {box: 102, x: 440, y: 520}
  // 55: {box: 103, x: 520, y: 520}
  
  /**
   * Green Home Starting Circle
   */
  
  // 56: {box: 200, x: 80, y: 440}
  // 57: {box: 202, x: 160, y: 440}
  // 58: {box: 201, x: 80, y: 520}
  // 59: {box: 203, x: 160, y: 520}
  
  /**
   * Blue Home Starting Circle
  */
  
  // 60: {box: 300, x: 80, y: 80}
  // 61: {box: 301, x: 160, y: 80}
  // 62: {box: 302, x: 80, y: 160}
  // 63: {box: 303, x: 160, y: 160}
  
  
  /**
   * Yellow Home Starting Circle
  */
  
  // 64: {box: 400, x: 440, y: 80}
  // 65: {box: 401, x: 520, y: 80}
  // 66: {box: 402, x: 440, y: 160}
  // 67: {box: 403, x: 520, y: 160}
  
  
  /**
   * Red Home Stretch Boxes
   */
  
  // 68: {box: 110, x: 520, y: 280}
  // 69: {box: 111, x: 480, y: 280}
  // 70: {box: 112, x: 440, y: 280}
  // 71: {box: 113, x: 400, y: 280}
  // 72: {box: 114, x: 360, y: 280}
  
  
  /**
   * Green Home Stretch Boxes
   */
  
  // 73: {box: 210, x: 280, y: 520}
  // 74: {box: 211, x: 280, y: 480}
  // 75: {box: 212, x: 280, y: 440}
  // 76: {box: 213, x: 280, y: 400}
  // 77: {box: 214, x: 280, y: 360}
  
  /**
   * Blue Home Stretch Boxes
   */
  
  // 78: {box: 310, x: 40, y: 280}
  // 79: {box: 311, x: 80, y: 280}
  // 80: {box: 312, x: 120, y: 280}
  // 81: {box: 313, x: 160, y: 280}
  // 82: {box: 314, x: 200, y: 280}
  
  /**
   * Yellow Home Stretch Boxes
   */
  
  
  // 83: {box: 410, x: 280, y: 40}
  // 84: {box: 411, x: 280, y: 80}
  // 85: {box: 412, x: 280, y: 120}
  // 86: {box: 413, x: 280, y: 160}
  // 87: {box: 414, x: 280, y: 200}