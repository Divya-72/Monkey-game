
var monkey , monkey_running;
var banana ,bananaImage, obstacle, obstacleImage;
var FoodGroup, ObstacleGroup;
var score;
var monkey_collided;


function preload(){
monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png");
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
  monkey_collided=loadAnimation("sprite_1.png")
 
}



function setup() {
 createCanvas(600,600);
  
  monkey=createSprite(80,340,20,20);
  monkey.addAnimation("running",monkey_running);
  monkey.scale=0.1;
  
  ground=createSprite(400,350,900,10);
  ground.velocityX=-4;
  ground.x=ground.width/2;
  console.log(ground.x);
  
 // banana=createSprite(120,200,20,20);
 // banana.addImage(bananaImage);
 // banana.scale=0.1;
  
  score=0;
  
  FoodGroup=new Group();
  ObstacleGroup=new Group();
  
  FoodGroup=createGroup();
  ObstacleGroup=createGroup();
  
  var survivalTime=0;
  

  
}


function draw() {
background(255);
  
 ground.x=ground.width/2;
  
monkey.velocityY=monkey.velocityY+0.8;
monkey.collide(ground);
  
if(keyDown("space")){
  monkey.velocityY=-12;
   }
  
if(ground.x<0){
  ground.x=ground.width/2;
  
}
  
if(ObstacleGroup.isTouching(monkey)){
  ground.velocityX=0;
  monkey.velocityY=0;
  ObstacleGroup.setVelocityXEach(0);
  FoodGroup.setVelocityXEach(0);
  FoodGroup.setLifetimeEach(-1);
  ObstacleGroup.setLifetimeEach(-1);
  spawnFood.setvelocityX(0)
}
   stroke("black");
  textSize(20);
  fill("black");
  survivalTime=Math.ceil(frameCount/frameRate())
  text("survival Time: "+survivalTime,100,50);




  stroke("white");
  textSize(20);
  fill("black");
  text("score: "+score,500,50);

spawnFood();
spawnObstacles();
  
drawSprites();
}
function spawnFood(){
  if(World.frameCount%80===0){
  banana=createSprite(400,200,20,20);
  banana.addImage(bananaImage);
  banana.scale=0.1;
  banana.lifetime=70;
  banana.y=Math.round(random(120,200));
  banana.velocityX=-6;
  FoodGroup.add(banana);
}
}
function spawnObstacles(){
  if(World.frameCount%300===0){
  obstacle=createSprite(400,320,20,20);
  obstacle.addImage(obstacleImage);
  obstacle.scale=0.2;
  obstacle.lifetime=70;

  obstacle.velocityX=-6;
  ObstacleGroup.add(obstacle);
  
}
}




