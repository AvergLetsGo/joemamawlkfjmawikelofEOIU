function preload(){
BG = loadImage("space.jpg")
UFO = loadImage("ufo.png")
joemama = loadSound("joemama.mp3")
}


function setup() {
  createCanvas(windowWidth, windowHeight);
  BGI = createSprite(400, 200, width, height);
  BGI.addImage("star", BG)
  BGI.scale = 2
  ufo = createSprite(400, 200, 100, 100)
  ufo.addImage("ufoi", UFO)
  ufo.scale = 0.1;
  Edges = createEdgeSprites()
  deathGroup = new Group()
  score = 0;
}

function draw() {
  background(255,255,255); 
  if(keyDown(RIGHT_ARROW)){
    ufo.x = ufo.x + 10
  }
  if(keyDown(LEFT_ARROW)){
    ufo.x = ufo.x - 10
  }
  if(keyDown(UP_ARROW)){
    ufo.y = ufo.y - 10
  }
  if(keyDown(DOWN_ARROW)){
    ufo.y = ufo.y + 10
  }
  SpawnDeath();
  drawSprites();
  fill("purple")
  textSize(101)
  text("Score  = " + score, windowWidth/2, windowHeight/2)
  if(ufo.isTouching(deathGroup)){
    joemama.play();
    score = 0;
    deathGroup.destroyEach();
  }
}


function SpawnDeath(){
if(frameCount % 10 === 0){
  var death = createSprite(random(0, windowWidth), random(0, windowHeight), 25, 25)
 death.shapeColor = "red"
death.bounceOff(Edges);
death.velocityX = (random(-3,3))
death.velocityY = (random(-3,3))
deathGroup.add(death)
death.bounceOff(deathGroup);
score = score + 10;
}





}
