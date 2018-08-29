class AldousBroder extends Matrix {
  constructor(n) {
    super(n);
    this.name = "Aldous-Broder";
    this.max = n * 2;
    this.min = 0;
  }
  get Maze() {
    //0 = Ruang, 1 = Pagar, 2 = Ruang Dikunjungi
    let matrik = this.Matrix;
    let roomRemaining = this.countRoom - 1;
    // let i = 5,
    //   j = 7;
    let i = this.randomInt(this.min, this.max);
    let j = this.randomInt(this.min, this.max);

    while (i % 2 == 0) {
      i = this.randomInt(this.min, this.max);
    }
    while (j % 2 == 0) {
      j = this.randomInt(this.min, this.max);
    }

    matrik[i][j] = 2;

    while (roomRemaining > 0) {

      var acak = this.randomInt(1, 4);;
      // console.log(roomRemaining, acak, i, j);
      //urutan tetangga 1atas - 2kanan - 3bawah - 4kiri
      switch (acak) {
        case 1:
          if (i - 2 > this.min) {
            if (matrik[i - 2][j] != 2) {
              matrik[i - 2][j] = 2;
              matrik[i - 1][j] = 2;
              roomRemaining -= 1;
            }
            i = i - 2;
          }

          break;
        case 2:
          if (j + 2 < this.max) {
            if (matrik[i][j + 2] != 2) {
              matrik[i][j + 2] = 2;
              matrik[i][j + 1] = 2;
              roomRemaining -= 1;
            }
            j = j + 2;
          }
          break;
        case 3:
          if (i + 2 < this.max) {
            if (matrik[i + 2][j] != 2) {
              matrik[i + 2][j] = 2;
              matrik[i + 1][j] = 2;
              roomRemaining -= 1;
            }
            i = i + 2;
          }
          break;
        case 4:
          if (j - 2 > this.min) {
            if (matrik[i][j - 2] != 2) {
              matrik[i][j - 2] = 2;
              matrik[i][j - 1] = 2;
              roomRemaining -= 1;
            }
            j = j - 2;
          }
          break;
      }
    }

    return matrik;
  }
}
