var ritam,ritam2,ritam3,ritam4,rocket,asteroid,meteors,planet1,planet2,planet3,planet4,planet5,planet1Image,planet2Image,sun;
var background1,rocketImage,asteroidImage,asteroidGroup,spawnAsteroids,newGroup,sunImage,planet3Image,planet4Image,planet5Image;
var PLAY = 1;
var END = 0;
var gameState = PLAY;
var gameOver, restart;

function preload(){
        outerSpace=loadImage("outerSpace.jpg");
        rocketImage=loadImage("rocketImage.png");
        asteroidImage=loadImage("asteroidImage.png");
        sunImage=loadImage("sunImage.png");
        planet1Image=loadImage("planet1Image.png");
        planet2Image=loadImage("planet2Image.png");
        planet3Image=loadImage("planet3Image.png");
        planet4Image=loadImage("planet4Image.png");
        planet5Image=loadImage("planet5Image.png");
}

function setup() {
        createCanvas(1536,800);
        sun=createSprite(90,100,5,5);
        background1 = createSprite(800,100,100,800);
        background1.addImage(outerSpace);
        rocket=createSprite(500,500,100,150);
        //gameOver = createSprite(width/2,height/2);
        //restart = createSprite(width/2,height/2+35);
        planet1=createSprite(1000,60,10,10);
        planet2=createSprite(600,80,10,10);
        planet3=createSprite(340,220,10,10);
        planet4=createSprite(1300,500,10,10);
        planet5=createSprite(130,620,10,10);
        asteroidGroup=new Group();
}


function draw() {

  background(0);
  background1.velocityY =6;
  
  
  if (background1.y > 600){ 
      background1.y = background1.height/2;
  }

if(keyIsDown(DOWN_ARROW)){
  rocket.y+=4;
}
if(keyIsDown(UP_ARROW)){
  rocket.y-=4;
}
if(keyIsDown(LEFT_ARROW)){
  rocket.x-=4;
}
if(keyIsDown(RIGHT_ARROW)){
  rocket.x+=4;
}
  
if(mousePressedOver(planet1)) {
    text("Planet A34D-435",1000,1000);
    wait(1000);
    text("Oxygen level < 10%",768,390);
    wait(1000);
    text("Planet Rejected",768,420);
}

 /* if (gameState===PLAY){
   
    if(rocket.isTouching(asteroid)){
            gameState = END;
        }
      }
    
      else if (gameState === END) {
        gameOver.visible = true;
        restart.visible = true;
        background.velocityY = 0;
        rocket.velocityY = 0;
        rocket.velocityX = 0;
        asteroidGroup.setVelocityXEach(0);
        
      }*/

  rocket.addImage(rocketImage);
  rocket.scale=0.15;
  sun.addImage(sunImage);
  sun.scale=0.8;

  planet1.addImage(planet1Image);
  planet2.addImage(planet2Image);
  planet3.addImage(planet3Image);
  planet4.addImage(planet4Image);
  planet5.addImage(planet5Image);

  planet1.scale=0.1;
  planet2.scale=0.1;
  planet3.scale=0.1;
  planet4.scale=0.1;
  planet5.scale=0.1;

  background1.depth=rocket.depth;
  rocket.depth=rocket.depth+1;

  background1.depth=planet1.depth;
  planet1.depth=planet1.depth+1;
  background1.depth=planet2.depth;
  planet2.depth=planet2.depth+1;
  background1.depth=planet1.depth;
  planet3.depth=planet3.depth+1;
  background1.depth=planet1.depth;
  planet4.depth=planet4.depth+1;
  background1.depth=planet1.depth;
  planet5.depth=planet5.depth+1;

  background1.depth=sun.depth;
  sun.depth=sun.depth+1;
  spawnAsteroids();

  drawSprites();
}

function spawnAsteroids() {
  if(frameCount % 400 === 0) {
    var asteroid = createSprite(800,0,10,40);
    var rand = Math.round(random(1,2));
    switch(rand) {
      case 1: asteroid.addImage(asteroidImage);
              break;
      case 2: asteroid.addImage(asteroidImage);
              break;
      default: break;
    }
    //add each obstacle to the group
    asteroidGroup.add(asteroid);
    asteroid.scale=0.1;
    asteroid.velocityY=1;
    background1.depth=asteroid.depth;
    asteroid.depth=asteroid.depth+1;
  }
} 

/*criteria
oxygen leel>10 %
adequate distence from sun
should hae atmoshpehre
should have water
prper rotation speed*/