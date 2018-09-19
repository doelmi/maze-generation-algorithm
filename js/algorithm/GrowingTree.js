class GrowingTree extends Matrix {
  constructor(n) {
    super(n);
    this.name = "Growing Tree (Recursive Backtracker)";
  }

  get Maze() {
    let arrayMaze = this.Matrix;
    let list = [];
    let index = this.positionToIndex(this.randomOdd(this.min, this.max), this.randomOdd(this.min, this.max));
    let cell = arrayMaze[index];
    list.push(cell);
    cell.status = 2;
    while (list.length > 0) {
      if (cell.neighborIndex.length > 0) {
        let acak = this.randomInt(0, cell.neighborIndex.length - 1);
        let indexNeighbor = cell.neighborIndex[acak];
        let neighbor = cell.neighbor[indexNeighbor];
        cell.neighborIndex.splice(acak, 1);
        if (neighbor.cell.status != 2) {
          neighbor.cell.status = 2;
          neighbor.side.status = 2;
          list.push(neighbor.cell);
          cell = neighbor.cell;
        }
      }
      if (cell.neighborIndex.length == 0) {
        cell = list.pop();
      }
    }
    return arrayMaze;
  }
}
