class Matrix {
  constructor(n) {
    this.n = n;
    this.countRoom = Math.pow(n, 2);
  }

  randomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  get Matrix() {
    var matrik = [];
    for (var i = 0; i < this.n * 2 + 1; i++) {
      matrik[i] = [];
      for (var j = 0; j < this.n * 2 + 1; j++) {
        //ngeprint tok
        matrik[i][j] = 0;

        //pagar dan ruang
        if (i % 2 === 0 || j % 2 === 0) {
          matrik[i][j] = 1;
        }
      }
    }
    return matrik;
  }
}
