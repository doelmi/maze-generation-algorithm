class Wilsons extends Matrix {
  constructor(n) {
    super(n);
    this.name = "Wilson's";
    this.max = n * 2;
    this.min = 0;
  }

  removeCellUST(ust, cell) {
    let index = ust.findIndex(x => x.i == cell.i && x.j == cell.j);
    if (index != -1) {
      ust.splice(index, 1);
      return true;
    }
    return false;
  }

  get Maze() {
    let arrayMaze = this.Matrix;
    let ust = this.cellOfRoom(arrayMaze);
    let randomVisited = this.randomInt(0, ust.length - 1);

    ust[randomVisited].status = 2;

    ust.splice(randomVisited, 1);

    while (ust.length > 0) {
      let randomIndex = this.randomInt(0, ust.length - 1);
      let randomCell = ust[randomIndex];

      while (randomCell.status != 2) {
        let acak = this.randomInt(0, randomCell.neighborIndex.length - 1);
        let neighborIndex = randomCell.neighborIndex[acak];
        randomCell.choosedNeighbor = neighborIndex;
        randomCell = randomCell.neighbor[neighborIndex].cell;
      }

      let creatingCell = ust[randomIndex];
      while (creatingCell.status != 2) {
        if (this.removeCellUST(ust, creatingCell)) {
          let neighborIndex = creatingCell.choosedNeighbor;
          creatingCell.status = 2;
          let neighbor = creatingCell.neighbor[neighborIndex];
          neighbor.side.status = 2;
          creatingCell = neighbor.cell;
        }
      }
    }

    return arrayMaze;
  }
}
