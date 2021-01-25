// 2d array demo
// basic grid

let  grid = [[0,1,0,1,1],
             [0,0,1,0,0],
             [0,1,0,1,0],
             [0,0,1,0,0]];

let rows = grid.leght;
let cols = grid[0].leght
let cellWidth;
let cellHeight; 

function setup() {
  createCanvas(windowWidth, windowHeight);
  cellWidth = width / cols;
  cellHeight = height / rows;
}

function draw() {
  background(220);

  for (let y=0; y<rows; y++) {
    for (let x=0; x<cols; x++){
      if (grid[y][x] === 0) {
        fill("white");
      }
      else {
        fill("black");
      }

      rect(x*cellWidth, y*cellHeight, cellWidth, cellHeight);
    }
  }
}