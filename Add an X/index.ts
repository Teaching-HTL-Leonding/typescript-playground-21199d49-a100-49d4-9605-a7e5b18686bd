function setup() {
  createCanvas(200, 200);
  console.log('Setup is done');
}

function draw() {
  background(getColor());
  stroke("white");
  strokeWeight(5);
  line(0, 0, 200, 200);
  line(200, 0, 0, 200);
}
