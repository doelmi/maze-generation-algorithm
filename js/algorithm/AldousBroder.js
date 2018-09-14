class AldousBroder extends Matrix {
  constructor(n) {
    super(n);
    this.name = "Aldous-Broder";
  }
  get Maze() {
    //0 = Ruang, 1 = Pagar, 2 = Ruang Dikunjungi
    let arrayMaze = this.Matrix;
    let roomRemaining = this.countRoom - 1;
    let index = this.positionToIndex(this.randomOdd(this.min, this.max), this.randomOdd(this.min, this.max));
    let cell = arrayMaze[index];
    cell.status = 2;
    while (roomRemaining > 0) {
      let acak = this.randomInt(0, cell.neighborIndex.length - 1);
      let indexNeighbor = cell.neighborIndex[acak];
      let neighbor = cell.neighbor[indexNeighbor];
      if (neighbor.cell.status != 2) {
        neighbor.cell.status = 2;
        neighbor.side.status = 2;
        roomRemaining -= 1;
      }
      cell = neighbor.cell;
    }
    return arrayMaze;
  }
}
