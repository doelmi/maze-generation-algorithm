let n = 25;
let length = n * 2 + 1;
let w, h;
let grid;
let theGrid = new Grid(n);
let rooms;
let startTime, endTime;
let currentCell;
let counter = 0;
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

function hunting(counter, rooms) {
  let cell = rooms[counter];
  cell.checked = true;
  cell.setColor(color(255, 91, 91));
  cell.higtlightNeighborVisited();
  if (cell.status == 0) {
    let neighborIndex = [...cell.neighborIndex];
    while (neighborIndex.length > 0) {
      let random = theGrid.randomInt(0, neighborIndex.length - 1);
      let indexNeighbor = cell.neighborIndex[random];
      let neighbor = cell.neighbor[indexNeighbor];
      neighborIndex.splice(random, 1);
      if (neighbor.cell.status == 2) {
        neighbor.cell.setColor(color(28, 124, 36));
        neighbor.side.status = 2;
        cell.status = 2;
        return cell;
      }
    }
  }
  return null;
}

function setup() {
  createCanvas(500, 500, WEBGL);

  w = width / length;
  h = height / length;

  grid = theGrid.grid;
  rooms = theGrid.cellOfRoom(grid);
  let index = theGrid.randomInt(0, rooms.length - 1);

  currentCell = rooms[index];
  currentCell.status = 2;

  startTime = millis();

}

function draw() {
  // frameRate(5)
  frameRate1.push(frameRate());

  background(0, 123, 255, 100);
  translate(-width / 2, -height / 2, 0);
  for (let cell of grid) {
    cell.show();
  }

  if (currentCell != null) {
    currentCell.deleteNeighborVisited();
    currentCell.higtlight();
    currentCell.higtlightNeighbor();
    if (currentCell.neighborIndex.length > 0) {
      let random = theGrid.randomInt(0, currentCell.neighborIndex.length - 1);
      let neighborIndex = currentCell.neighborIndex[random];
      let neighbor = currentCell.neighbor[neighborIndex];
      currentCell.neighborIndex.splice(random, 1);
      if (neighbor.cell.status != 2) {
        neighbor.cell.setColor(color(28, 124, 36));
        neighbor.cell.status = 2;
        neighbor.side.status = 2;
        currentCell = neighbor.cell;
      }
    }
    if (currentCell.neighborIndex.length == 0) {
      let hunted = hunting(counter, rooms);
      // console.log(counter);
      if (hunted == null && counter < rooms.length - 1) {
        counter++;
      } else {
        currentCell = hunted;
        counter = 0;
        for (let cell of grid) {
          cell.checked = false;
        }
      }
    }
  } else {
    noLoop();
    endTime = millis();
    console.log("waktu eksekusi : ", endTime - startTime);
    let maze = theGrid.arrayMazeToMatrix(grid);
    console.log(theGrid.numberOfIntersection(maze));
    console.log("avg frameRate : ",avgArray(frameRate1));
  }
}
