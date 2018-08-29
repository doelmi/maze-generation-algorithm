class Matrix {
  constructor(n) {
    this.n = n;
    this.countRoom = Math.pow(n, 2);
  }

  randomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  randomOdd(min, max) {
    let number = this.randomInt(min, max);
    while (number % 2 == 0) {
      number = this.randomInt(min, max);
    }
    return number;
  }

  get Matrix() {
    var matrik = [];
    for (var i = 0; i < this.n * 2 + 1; i++) {
      matrik[i] = [];
      for (var j = 0; j < this.n * 2 + 1; j++) {
        matrik[i][j] = 0;

        //pagar dan ruang
        if (i % 2 === 0 || j % 2 === 0) {
          matrik[i][j] = 1;
        }
      }
    }
    return matrik;
  }

  numberOfIntersection(maze) {
    let min = 0;
    let max = maze.length - 1;
    let counterDeadend = 0;
    let counter2way = 0;
    let counter3way = 0;
    let counter4way = 0;
    for (var i = 1; i < maze.length; i += 2) {
      for (var j = 1; j < maze[i].length; j += 2) {
        let counterNeighbor = 0;

        //atas
        if (i - 2 > min) {
          if (maze[i - 1][j] != 1) {
            counterNeighbor += 1;
          }
        }

        //kanan
        if (j + 2 < max) {
          if (maze[i][j + 1] != 1) {
            counterNeighbor += 1;
          }
        }

        //bawah
        if (i + 2 < max) {
          if (maze[i + 1][j] != 1) {
            counterNeighbor += 1;
          }
        }

        //kiri
        if (j - 2 > min) {
          if (maze[i][j - 1] != 1) {
            counterNeighbor += 1;
          }
        }

        if (counterNeighbor == 1) {
          counterDeadend += 1;
        } else if (counterNeighbor == 2) {
          counter2way += 1;
        } else if (counterNeighbor == 3) {
          counter3way += 1;
        } else if (counterNeighbor == 4) {
          counter4way += 1;
        }
      }
    }
    return {
      OneWay : counterDeadend,
      TwoWay : counter2way,
      ThreeWay : counter3way,
      FourWay : counter4way
    };
  }

}
