
var monkey , monkey_running;
var banana ,bananaImage, obstacle, obstacleImage;
var foodGroup, obstacleGroup;
var score;
var ground;
var survivalTime = 0;

function preload(){
  
monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
  
  foodGroup = new Group();
  obstacleGroup = new Group();
  
 
}



function setup() {
monkey = createSprite(80,315,20,20);
monkey.addAnimation("moving", monkey_running);
monkey.scale = 0.1;
  
ground = createSprite(400,350,900,10);
ground.velocityX = -4; 
console.log(ground.x);

  
}


function draw() {
background("darkgreen");
  
if(ground.x<0){
 ground.x = ground.width/2; 
}

if(keyDown("space")){
  monkey.velocityY = -12;
}
  monkey.velocityY = monkey.velocityY + 0.8;
  
monkey.collide(ground); 
  
stroke("black");
textSize(20);
fill("black");
survivalTime = Math.ceil(frameCount/frameRate())
text("Survival Time:"+ survivalTime, 100, 50);

  
if (World.frameCount % 300 === 0) {
  obstacles();
}
if (World.frameCount % 80 === 0) {
  food();
}
  
 
drawSprites(); 
}

function food () {
   var banana = createSprite(170,Math.round(170,230),10,10);
    banana.addImage(bananaImage);
    banana.scale = 0.1;
    banana.lifetime = 150;
    banana.velocityX = -3;
    foodGroup.add(banana);
} 

function obstacles () {
  if(frameCount % 300 === 0) {
 var obstacle = createSprite(400,330,15,15);
  obstacle.addImage(obstacleImage);
  obstacle.scale = 0.1;
  obstacle.lifetime = 250;
  obstacle.velocityX = -6;
  obstacle.y = Math.round(random(300,340));
  obstacleGroup.add(obstacle);
  
  
    
    
    
 }
} 







