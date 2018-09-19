class BinaryTree extends Matrix {
  constructor(n) {
    super(n);
    this.name = "Binary Tree";
  }
  get Maze() {
    let arrayMaze = this.Matrix;
    var x = 1,
      y;

    for (var i = 1; i < this.length; i += 2) {
      for (var j = 1; j < this.length; j += 2) {
        let acak = this.randomInt(0, 1);
        if (acak == 1) {
          if (j < this.max - 1) {
            let neighborIndex = this.positionToIndex(i, j + 1);
            arrayMaze[neighborIndex].status = 0;
          } else if (i < this.max - 1) {
            let neighborIndex = this.positionToIndex(i + 1, j);
            arrayMaze[neighborIndex].status = 0;
          }
        } else {
          if (i < this.max - 1) {
            let neighborIndex = this.positionToIndex(i + 1, j);
            arrayMaze[neighborIndex].status = 0;
          } else if (j < this.max - 1) {
            let neighborIndex = this.positionToIndex(i, j + 1);
            arrayMaze[neighborIndex].status = 0;
          }
        }
      }

    }
    return arrayMaze;
  }
}
