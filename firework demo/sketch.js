//firework OOP demo

let fireworks = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  

}

function draw() {
  background("black");
  for (let i=0; i<fireworks.length; i++){
    fireworks[i].move();
    firework[i].display();

  }
}

function mousePressed(){
  for (let i=0; i<fireworks.length; i++){
     let someParticle = new Particle(width/2, height/2, random(-5, 5), random(-5, 5), 255, 0, 0, 255)
      fireworks.push(someParticle)
  }
 

}

class Particle {
  constructor(x, y, dx, dy, theCoulor){
    this.x = x;
    this.y = y;
    this.dx = dx;
    this.dy = dy;
    this.g = g;
    this.r = r;
    this.b = b;
    this.a = a;
    this.diameter = 5;
  }

  move() {
    this.x += this.dx;
    this.y += this.dy;
    this.a -= 1; //fade AWAY
  }

  display() {
    fill(this.r, this.g, this.b, this.a);
    ellipse(this.x, thia.y, this.diameter, this.diameter)
  }

}
