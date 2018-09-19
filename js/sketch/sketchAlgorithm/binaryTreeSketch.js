let n = 25;
let length = n * 2 + 1;
let w, h;
let grid;
let theGrid = new Grid(n);
let rooms;
let current;
let counter = 0;
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
  current = rooms[counter];
  startTime = millis();
}

function draw() {
  // frameRate(1)
  frameRate1.push(frameRate());

  background(0, 123, 255, 100);
  translate(-width / 2, -height / 2, 0);
  for (let cell of grid) {
    cell.show();
  }
  if (counter < rooms.length) {
    current.higtlight();
    current.higtlightNeighbor();

    current.status = 2;
    let random = theGrid.randomInt(1, 2);
    let neighbor = current.neighbor[random];
    if (neighbor != null) {
      neighbor.side.status = 2;
      neighbor.cell.setColor(color(28, 124, 36));
    } else if (current.neighbor[2] != null) {
      current.neighbor[2].side.status = 2;
      current.neighbor[2].cell.setColor(color(28, 124, 36));
    } else if (current.neighbor[1] != null) {
      current.neighbor[1].side.status = 2;
      current.neighbor[1].cell.setColor(color(28, 124, 36));
    }
    counter++;
    current = rooms[counter]
  } else {
    noLoop();
    endTime = millis();
    console.log("waktu eksekusi : ", endTime - startTime);

    let maze = theGrid.arrayMazeToMatrix(grid);
    console.log(theGrid.numberOfIntersection(maze));
    console.log("avg frameRate : ",avgArray(frameRate1));
  }
}
