let binaryTree;
let aldousBroder;
let huntAndKill;
let w;
let h;
let n = 10;
let s, e;

function preload() {
  binaryTree = new BinaryTree(n);
  s = millis();
  aldousBroder = new AldousBroder(n);
  huntAndKill = new HuntAndKill(n);
  maze = huntAndKill.Maze;
  e = millis();
}

function setup() {
  createCanvas(500, 500, WEBGL);

  w = width / (n * 2 + 1);
  h = height / (n * 2 + 1);
  console.log(maze);
  console.log(e, s, e-s);
}

function draw() {
  background(0, 123, 255, 100);
  translate(-width / 2, -height / 2, 0);
  for (var i = 0; i < maze.length; i++) {
    for (var j = 0; j < maze[i].length; j++) {
      if (maze[i][j] == 1) {
        fill(0);
        noStroke();
        rect(i * w, j * h, w, h);
      }
    }
  }
}
