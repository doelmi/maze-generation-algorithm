class HuntAndKill extends Matrix {
  constructor(n) {
    super(n);
    this.name = "Hunt and Kill";
    this.max = n * 2;
    this.min = 0;
  }

  huntProcess(matrik) {
    for (var i = 1; i < matrik.length; i += 2) {
      for (var j = 1; j < matrik[i].length; j += 2) {
        if (matrik[i][j] == 0) {
          if (i - 2 > this.min && matrik[i - 2][j] == 2) {
            matrik[i][j] = 2;
            matrik[i - 1][j] = 2;
            return [i, j];
          } else if (j + 2 < this.max && matrik[i][j + 2] == 2) {
            matrik[i][j] = 2;
            matrik[i][j + 1] = 2;
            return [i, j];
          } else if (i + 2 < this.max && matrik[i + 2][j] == 2) {
            matrik[i][j] = 2;
            matrik[i + 1][j] = 2;
            return [i, j];
          } else if (j - 2 > this.min && matrik[i][j - 2] == 2) {
            matrik[i][j] = 2;
            matrik[i][j - 1] = 2;
            return [i, j];
          }
        }
      }
    }
    return -1;
  }

  get Maze() {
    let matrik = this.Matrix;
    let i = this.randomOdd(this.min, this.max);
    let j = this.randomOdd(this.min, this.max);

    matrik[i][j] = 2;

    let hunt = true;
    while (hunt) {

      //Proses Walk
      let walk = true;
      let acakTemp = [];
      while (walk) {
        var acak = this.randomInt(1, 4);
        //urutan tetangga 1atas - 2kanan - 3bawah - 4kiri
        if (!acakTemp.includes(acak)) {
          acakTemp.push(acak);
        }

        switch (acak) {
          case 1:
            if (i - 2 > this.min && matrik[i - 2][j] != 2) {
              matrik[i - 2][j] = 2;
              matrik[i - 1][j] = 2;
              i = i - 2;
              acakTemp = [];
            }
            break;
          case 2:
            if (j + 2 < this.max && matrik[i][j + 2] != 2) {
              matrik[i][j + 2] = 2;
              matrik[i][j + 1] = 2;
              j = j + 2;
              acakTemp = [];
            }
            break;
          case 3:
            if (i + 2 < this.max && matrik[i + 2][j] != 2) {
              matrik[i + 2][j] = 2;
              matrik[i + 1][j] = 2;
              i = i + 2;
              acakTemp = [];
            }
            break;
          case 4:
            if (j - 2 > this.min && matrik[i][j - 2] != 2) {
              matrik[i][j - 2] = 2;
              matrik[i][j - 1] = 2;
              j = j - 2;
              acakTemp = [];
            }
            break;
        }

        if (acakTemp.length == 4) {
          walk = false;
        }

      }

      // Proses Hunt
      let getHunted = this.huntProcess(matrik);
      if (getHunted != -1) {
        i = getHunted[0];
        j = getHunted[1];
      } else {
        hunt = false;
      }
    }
    return matrik;
  }
}
