var dragon,dragonImg;
var bg,bgImg; 
var runner,runnerImg;
var coin,coinImg;
var stone,stoneImg
var coin,coinImg;

function preload(){
  dragonImg = loadAnimation("Dragon1.png","Dragon2.png","Dragon3.png","Dragon4.png","Dragon5.png","Dragon6.png");
  runnerImg = loadAnimation("R1.png","R2.png","R3.png","R4.png","R5.png","R6.png","R7.png","R8.png","R9.png","R10.png","R11.png","R12.png","R13.png");
  bgImg = loadImage("BG.jpg");
  stoneImg = loadImage("stone.png.jpg");
  coinImg = loadAnimation("coin1.png","coin2.png","coin3.png","coin4.png","coin5.png");
  
}
function setup() {
  createCanvas(displayWidth,displayHeight);
  dragon = createSprite(100,100,10,10);
  dragon.addAnimation("dragonFlying",dragonImg);
  runner = createSprite(350,350,1,1);
  runner.addAnimation("runnerRunning",runnerImg);
  coin = createSprite(400,400,2,2);
  coin.addAnimation("coin");
  stone = createSprite(400,400,1,1);
  stone.addImage(stoneImg);
}

function draw() {
  background(bgImg);  
  drawSprites();
  if(keyCode === 32){
    runner.velocityX = 2;
  }
}