//creates the variables
var car, wall;
var speed, weight;

function setup() {
 //creates the canvas
    createCanvas(1600,400);
 //creates the speed and weight
  speed = random(55,90);
  weight = random(400,1500);

  //creates the car
    car = createSprite(400, 200, 50, 50);
    //creates the wall
    wall = createSprite(1500,200,60,height/2);
    wall.shapeColor(80,80,80);
}

function draw() {
  //adds the background colour
    background(255,255,255);
  
  //draws the sprites
  drawSprites();
}