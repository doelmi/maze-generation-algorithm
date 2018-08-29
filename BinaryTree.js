class BinaryTree extends Matrix {
  constructor(n) {
    super(n);
    this.name = "Binary Tree";
  }
  get Maze() {
    let matrik = this.Matrix;
    var x = 1,
      y;
    while (x < matrik.length) {
      y = 1;
      while (y < matrik[x].length) {
        var acak = this.randomInt(0, 1);
        if (acak === 1) {
          if (y < matrik[x].length - 2) {
            matrik[x][y + 1] = 0;
          } else if (x < matrik.length - 2) {
            matrik[x + 1][y] = 0;
          }
        } else if (acak === 0) {
          if (x < matrik.length - 2) {
            matrik[x + 1][y] = 0;
          } else if (y < matrik[x].length - 2) {
            matrik[x][y + 1] = 0;
          }
        }
        y += 2;
      }
      x += 2;
    }
    return matrik;
  }
}
