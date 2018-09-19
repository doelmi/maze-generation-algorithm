class Cell {
  constructor(i, j, status) {
    this.i = i;
    this.j = j;
    this.status = status;
    this.neighborIndex = [];
    this.neighbor = [];
    this.choosedNeighbor = null;
  }
}
