//Create global variables for the sprites
var bullet , wall;
var speed , weight , thickness;
var lbullet,lwall,bulletRightEdge,wallLeftEdge;

function setup() {

  createCanvas(1600,400);

  //Assign random values to speed & weight
  speed = random(223,321)
  weight = random(30,52)
  thickness = random(22,83);

  //Create the sprites
  bullet  = createSprite(50,200,15,50);

  wall = createSprite(1200,200,thickness,height/2)
  wall.shapeColor = color(80,80,80)

  
}

function draw() {
  background(300);  
  
  bullet.velocityX = speed;

  if (hasCollided(bullet , wall))
  {
    bullet.velocityX = 0;
    var damage = 0.5 * weight * speed * speed/(thickness * thickness * thickness);
  }

  if(damage>10)
  {
    wall.shapeColor = color(255,0,0);
  }

  if (damage<10)
  {
    wall.shapeColor = color(0,255,0)
  }
  

  drawSprites();
}

function hasCollided(lbullet , lwall){
  bulletRightEdge = lbullet.x + lbullet.width
  wallLeftEdge = lwall.x;
  if (bulletRightEdge>=wallLeftEdge)
  {
    return true;
  }  
  
  return false;

}








