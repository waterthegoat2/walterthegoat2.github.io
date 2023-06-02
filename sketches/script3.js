//Declare your variables

//Create variables to hold the images
let bgimg;
let img1;
let img2;
let img3;

//Create a variable to move horizontally and set it to zero
let puck_x=0 ;

//This is the Setup Function which runs once
function setup() {
  createCanvas(windowWidth, windowHeight);

  //load the background image
  bgimg = loadImage('court2.jpeg');
  // load the other images
  img1 = loadImage('curry.jpeg');
  img2 = loadImage('LeBron.jpeg');
  img3 = loadImage('basketball.jpeg');
}


//This is the draw function which runs at 60 Hz
function draw() {

  //Draw the background image
  image(bgimg, 0, 0, width, height);
  
  //Draw the green jersey
  image(img1, 50, 300, 100, 100);

  //Draw the white jersey
  image(img2, 500, 300, 100, 100);

  //Draw the puck with a puck_x variable which moves it
  image(img3, 150 + puck_x, 350, 25, 25);
  
  //Increase the puck_x value 
  puck_x = puck_x + 1;
  
  //Use this to show the coordinates of the pointer
  noStroke()
  fill('black');
  text("(" + mouseX + ", " + mouseY + ")", mouseX, mouseY);
  
}