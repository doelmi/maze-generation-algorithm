let n = 25;
let length = n * 2 + 1;
let w, h;
let grid;
let theGrid = new Grid(n);
let rooms;
let current;
let counter;
let startTime, endTime;
let frameRate1 = [];

function sumArray(array){
  let total = 0;
  for (var i = 0; i < array.length; i++) {
    total+=array[i];
  }
  return total;
}

function avgArray(array){
  let value = sumArray(array);
  let avg = value/array.length;
  return avg;
}

function setup() {
  createCanvas(500, 500, WEBGL);

  w = width / length;
  h = height / length;

  grid = theGrid.grid;
  rooms = theGrid.cellOfRoom(grid);
  let index = theGrid.randomInt(0, rooms.length - 1);
  current = rooms[index];
  current.status = 2;

  counter = theGrid.countRoom - 1;
  startTime = millis();

}

function draw() {
  frameRate1.push(frameRate());
  background(0, 123, 255, 100);
  translate(-width / 2, -height / 2, 0);
  for (let cell of grid) {
    cell.show();
  }

  if (counter > 0) {
    current.higtlight();
    current.higtlightNeighbor();
    let acak = theGrid.randomInt(0, current.neighborIndex.length - 1);
    let indexNeighbor = current.neighborIndex[acak];
    let neighbor = current.neighbor[indexNeighbor];
    neighbor.cell.setColor(color(28, 124, 36));
    if (neighbor.cell.status != 2) {
      neighbor.cell.status = 2;
      neighbor.side.status = 2;
      counter -= 1;
    }
    current = neighbor.cell;
  } else {
    noLoop();
    endTime = millis();
    console.log("waktu eksekusi : ", endTime - startTime);

    let maze = theGrid.arrayMazeToMatrix(grid);
    console.log(theGrid.numberOfIntersection(maze));
    console.log("avg frameRate : ",avgArray(frameRate1));
  }
}
