

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(255);
  background('grey');
}

function draw() {
  background('grey');
  
  //The Ground
  noStroke();
  fill('green');
  rect(0,400,windowWidth,100);

  //The House
  fill('pink');
  stroke('black');
  rect(50,200,220,200);

  //chimney
  fill('pink');
  rect(210,125,50,75)
  
  //door
  fill('red');
  stroke('black');
  rect(125,325,50,75);
  
  //Windows
  fill('white');
  strokeWeight(10);
  stroke('black');
  rect(80,250,50,50);
  rect(180,250,50,50);

  //Triangle
  fill('red');
  triangle(50,200, 100,100,270,200);

  //Trampoline
  fill('black');
  rect(0,450,200,30)
  fill('lightblue');
  ellipse(100,450,200,30)

  //Sun
  fill('yellow');
  stroke('yellow');
  circle(9,15,125);
  
  noStroke();
    text("(" + mouseX + ", " + mouseY + ")", mouseX, mouseY);
}