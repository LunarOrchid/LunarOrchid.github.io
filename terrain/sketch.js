// Perlin Noise
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"


let rectHeights;

function setup() {
  createCanvas(windowWidth, windowHeight);
  rectHeights = generateHeights();
  console.log(rectHeights);
}

function draw() {
  background(220);

  for (let i=0; i<100; i++) {
    rect(0, height-rectHeights[i], rectWidth)
  }
 

  rect(0, height-rectHeight, 50, rectHeight);

}

function generateHeights() {
  let theHeights = [];
  for (let i=0; i<5000; i++) {
     let rectHeights = noise(i*0.01) * height;
    theHeights.push(rectHeights);
  }
  return theHeights;
}