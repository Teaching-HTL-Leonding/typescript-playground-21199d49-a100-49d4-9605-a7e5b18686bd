function setup() {
  // Create the canvas (German: "Leinwand")
  createCanvas(400, 500);

  // Set the background color
  background("red");

  // Set line color and thickness (=weight)
  stroke("white");
  strokeWeight(5);

  // Fill color
  fill("orange");

  // The following functions draw different shapes.
  // Play with the parameters and/or read the docs
  // to figure out what they do.

  // Draw a line
  line(20, 20, width - 20, 20);

  // Draw a rectangle
  rect(20, 40, width - 20 - 20, 20);

  // Draw a circle
  circle(width / 2, 60 + width / 2, width - 40);
}