let n = 25;
let length = n * 2 + 1;
let w, h;
let grid;
let theGrid = new Grid(n);
let rooms;
let startTime, endTime;
let bolRandomStart = true,
  bolFinding = true,
  bolCreating = true;
let startCell, randomIndex, randomCell;
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

function removeCellUST(ust, cell) {
  let index = ust.findIndex(x => x.i == cell.i && x.j == cell.j);
  if (index != -1) {
    ust.splice(index, 1);
    return true;
  }
  return false;
}

function setup() {
  createCanvas(500, 500, WEBGL);

  w = width / length;
  h = height / length;

  grid = theGrid.grid;
  rooms = theGrid.cellOfRoom(grid);
  let index = theGrid.randomInt(0, rooms.length - 1);
  rooms[index].status = 2;
  rooms.splice(index, 1);

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

  if (rooms.length > 0) {
    if (startCell != null) {
      startCell.setColor(color(43, 244, 255));
    }
    if (bolRandomStart) {
      randomIndex = theGrid.randomInt(0, rooms.length - 1);
      randomCell = rooms[randomIndex];
      startCell = rooms[randomIndex];
      bolRandomStart = false;
      bolFinding = true;
    } else if (bolFinding) {
      if (randomCell.status != 2) {
        randomCell.higtlight();
        let acak = theGrid.randomInt(0, randomCell.neighborIndex.length - 1);
        let neighborIndex = randomCell.neighborIndex[acak];
        randomCell.choosedNeighbor = neighborIndex;
        randomCell = randomCell.neighbor[neighborIndex].cell;
      } else {
        bolFinding = false;
        bolCreating = true;
      }
    } else if (bolCreating) {
      if (startCell.status != 2) {
        if (removeCellUST(rooms, startCell)) {
          let neighborIndex = startCell.choosedNeighbor;
          startCell.status = 2;
          let neighbor = startCell.neighbor[neighborIndex];
          neighbor.side.status = 2;
          startCell = neighbor.cell;
        }
      } else {
        bolCreating = false;
        bolRandomStart = true;
        for (let cell of grid) {
          cell.choosedNeighbor = null;
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
