let n = 15;
let length = n * 2 + 1;
let w, h;
let grid;
let theGrid = new Grid(n);
let rooms;
let current;
let counter = 0;
let startTime, endTime;

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
    console.log(endTime - startTime);
  }
}
