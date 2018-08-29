class GrowingTree extends Matrix {
  constructor(n) {
    super(n);
    this.name = "Growing Tree (Recursive Backtracker)";
    this.max = n * 2;
    this.min = 0;
  }

  get Maze() {
    let matrik = this.Matrix;
    let list = [];

    let i = this.randomInt(this.min, this.max);
    let j = this.randomInt(this.min, this.max);
    while (i % 2 == 0) {
      i = this.randomInt(this.min, this.max);
    }
    while (j % 2 == 0) {
      j = this.randomInt(this.min, this.max);
    }

    let pos = {
      "i": i,
      "j": j
    };

    list.push(pos);
    matrik[i][j] = 2;

    let acakTemp = [];
    while (list.length > 0) {

      var acak = this.randomInt(1, 4);

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

            let nextPos = {
              "i": i,
              "j": j
            };
            list.push(nextPos);
          }
          break;
        case 2:
          if (j + 2 < this.max && matrik[i][j + 2] != 2) {
            matrik[i][j + 2] = 2;
            matrik[i][j + 1] = 2;
            j = j + 2;

            acakTemp = [];

            let nextPos = {
              "i": i,
              "j": j
            };
            list.push(nextPos);
          }
          break;
        case 3:
          if (i + 2 < this.max && matrik[i + 2][j] != 2) {
            matrik[i + 2][j] = 2;
            matrik[i + 1][j] = 2;
            i = i + 2;

            acakTemp = [];

            let nextPos = {
              "i": i,
              "j": j
            };
            list.push(nextPos);
          }
          break;
        case 4:
          if (j - 2 > this.min && matrik[i][j - 2] != 2) {
            matrik[i][j - 2] = 2;
            matrik[i][j - 1] = 2;
            j = j - 2;

            acakTemp = [];

            let nextPos = {
              "i": i,
              "j": j
            };
            list.push(nextPos);
          }
          break;
      }
      if (acakTemp.length == 4) {
        let newPos = list.pop();
        i = newPos.i;
        j = newPos.j;
        acakTemp = [];
      }

    }

    return matrik;
  }
}
