class HuntAndKill extends Matrix {
  constructor(n) {
    super(n);
    this.name = "Hunt and Kill";
  }

  hunting(rooms) {
    for (let cell of rooms) {
      if (cell.status == 0) {
        let neighborIndex = [...cell.neighborIndex];
        while (neighborIndex.length > 0) {
          let random = this.randomInt(0, neighborIndex.length - 1);
          let indexNeighbor = cell.neighborIndex[random];
          let neighbor = cell.neighbor[indexNeighbor];
          neighborIndex.splice(random, 1);
          if (neighbor.cell.status == 2) {
            neighbor.side.status = 2;
            cell.status = 2;
            return cell;
          }
        }
      }
    }
    return null;
  }

  get Maze() {
    let arrayMaze = this.Matrix;
    let rooms = this.cellOfRoom(arrayMaze);
    let randomVisited = this.randomInt(0, rooms.length - 1);
    let currentCell = rooms[randomVisited];
    currentCell.status = 2;

    while (currentCell != null) {
      if (currentCell.neighborIndex.length > 0) {
        let random = this.randomInt(0, currentCell.neighborIndex.length - 1);
        let neighborIndex = currentCell.neighborIndex[random];
        let neighbor = currentCell.neighbor[neighborIndex];
        currentCell.neighborIndex.splice(random, 1);
        if (neighbor.cell.status != 2) {
          neighbor.cell.status = 2;
          neighbor.side.status = 2;
          currentCell = neighbor.cell;
        }
      }
      if (currentCell.neighborIndex.length == 0) {
        let hunted = this.hunting(rooms);
        currentCell = hunted;
      }
    }

    return arrayMaze;
  }
}
