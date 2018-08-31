class Wilsons extends Matrix {
  constructor(n) {
    super(n);
    this.name = "Wilson's";
    this.max = n * 2;
    this.min = 0;
  }

  randomNumber(min, max, ex) {
    let i = this.randomOdd(min, max);
    let j = this.randomOdd(min, max);

    let index = ex.findIndex(x => x.i == i && x.j == j);
    while (index != -1) {
      i = this.randomOdd(min, max);
      j = this.randomOdd(min, max);
      index = ex.findIndex(x => x.i == i && x.j == j);
    }

    return {
      i: i,
      j: j
    };
  }

  get Maze() {
    let matrik = this.Matrix;
    let x = this.randomOdd(this.min, this.max);
    let y = this.randomOdd(this.min, this.max);

    matrik[x][y] = 9;

    let ust = [];

    ust.push({
      i: x,
      j: y
    });

    while (ust.length < this.countRoom) {
      let randomPos = this.randomNumber(this.min, this.max, ust);

      let i = randomPos.i;
      let j = randomPos.j;

      let finding = true;

      while (finding) {
        var acak = this.randomInt(1, 4);;
        //urutan tetangga 1atas - 2kanan - 3bawah - 4kiri
        switch (acak) {
          case 1:
            if (i - 2 > this.min) {
              matrik[i][j] = 1 + 1;
              i = i - 2;
            }
            break;
          case 2:
            if (j + 2 < this.max) {
              matrik[i][j] = 2 + 1;
              j = j + 2;
            }
            break;
          case 3:
            if (i + 2 < this.max) {
              matrik[i][j] = 3 + 1;
              i = i + 2;
            }
            break;
          case 4:
            if (j - 2 > this.min) {
              matrik[i][j] = 4 + 1;
              j = j - 2;
            }
            break;
        }

        if (matrik[i][j] == 9) {
          finding = false;
        }
      }

      let createWay = true;

      i = randomPos.i;
      j = randomPos.j;

      while (createWay) {
        ust.push({
          i: i,
          j: j
        });

        if (matrik[i][j] == 2) {
          matrik[i][j] = 9;
          matrik[i - 1][j] = 9;
          i = i - 2;
        } else if (matrik[i][j] == 3) {
          matrik[i][j] = 9;
          matrik[i][j + 1] = 9;
          j = j + 2;
        } else if (matrik[i][j] == 4) {
          matrik[i][j] = 9;
          matrik[i + 1][j] = 9;
          i = i + 2;
        } else if (matrik[i][j] == 5) {
          matrik[i][j] = 9;
          matrik[i][j - 1] = 9;
          j = j - 2;
        }

        if (matrik[i][j] == 9) {
          createWay = false;
        }
      }
    }

    return matrik;
  }
}
