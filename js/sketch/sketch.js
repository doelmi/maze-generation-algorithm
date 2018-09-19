let mazeGeneration;
let maze;
let w;
let h;
let n = 10;
let s, e;
let theMaze;

function preload() {
  // mazeGeneration = new BinaryTree(n);
  // mazeGeneration = new AldousBroder(n);
  // mazeGeneration = new HuntAndKill(n);
  // mazeGeneration = new GrowingTree(n);
  // mazeGeneration = new Wilsons(n);

  // for (var i = 1; i <= 100; i++) {
  // console.log("------ ", i, " ------");
  mazeGeneration = new HuntAndKill(n);
  s = millis();
  theMaze = mazeGeneration.Maze;
  e = millis();
  maze = mazeGeneration.arrayMazeToMatrix(theMaze);
  console.log(e - s);
  console.log(mazeGeneration.name);
  console.log(mazeGeneration.numberOfIntersection(maze));
  // }
}

function setup() {
  createCanvas(500, 500, WEBGL);

  w = width / (n * 2 + 1);
  h = height / (n * 2 + 1);
  // console.log(maze);
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
  noLoop();
}
