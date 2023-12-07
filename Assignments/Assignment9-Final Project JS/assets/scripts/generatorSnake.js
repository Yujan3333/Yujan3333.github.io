class Snake {
  constructor(start, end) {
    this.start = start;
    this.end = end;
  }

  getEncounterMessage() {
    return `Oops! ${this.userName} has encountered a snake and is moved from ${this.start} to ${this.end}.`;
  }
}

class Ladder {
  constructor(start, end) {
    this.start = start;
    this.end = end;
  }

  getEncounterMessage() {
    return `Hurray! ${this.userName} has encountered a ladder and is moved from ${this.start} to ${this.end}.`;
  }
}

class Player {
  constructor(userName, position = 1) {
    this.userName = userName;
    this.position = position;
  }
}

class DiceService {
  roll(numberOfSides) {
    return Math.floor(Math.random() * numberOfSides) + 1;
  }
}

class Board {
  constructor(totalCellCount) {
    this.totalCellCount = totalCellCount;
    this.entities = [];
  }

  setEntity(entity) {
    this.entities.push(entity);
  }

  getEntity(position) {
    return this.entities.find((entity) => entity.start === position);
  }

  hasSnakeOrLadder(position) {
    return this.entities.some((entity) => entity.start === position);
  }
}

class Game {
  constructor(diceCount, dimention) {
    this.diceCount = diceCount;
    this.dimention = dimention;
    this.diceService = new DiceService();
    this.board = new Board(dimention * dimention);
  }

  launch() {
    console.log("Game is starting...");
  }

  makeMove(player) {
    const rollResult = this.diceService.roll(this.diceCount);
    const newPosition = player.position + rollResult;

    if (newPosition > this.dimention * this.dimention) {
      console.log(`${player.userName} won the game!`);
      return;
    }

    if (this.board.hasSnakeOrLadder(newPosition)) {
      const entity = this.board.getEntity(newPosition);
      console.log(entity.getEncounterMessage());
      player.position = entity.end;
    } else {
      player.position = newPosition;
    }

    console.log(`Current position of ${player.userName}: ${player.position}`);
  }
}

const game = new Game(6, 10);
game.board.setEntity(new Snake(9, 3));
game.board.setEntity(new Ladder(2, 8));

const player = new Player("Alice");
game.launch();
game.makeMove(player);
