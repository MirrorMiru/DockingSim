var iss,spacecraft,checker
var hasDocked = false


function preload(){
  issI = loadImage("iss.png")
  bgI = loadImage("spacebg.jpg")
  ship = loadImage("spacecraft1.png")
  shipE = loadImage("spacecraft2.png")
  shipL = loadImage("spacecraft3.png")
  shipR = loadImage("spacecraft4.png")
}


function setup() {
  createCanvas(800,400);
  iss = createSprite(400,100, 50, 50);
  iss.addImage(issI)
  iss.scale = 0.4

  checker = createSprite(375,109,10,3)
  checker.visible = false

  spacecraft = createSprite(400,250,20,20)
  spacecraft.addImage(shipR)
  spacecraft.addImage(shipL)
  spacecraft.addImage(shipE)
  spacecraft.addImage(ship)
  spacecraft.scale = 0.1
}

function draw() {
  background(bgI);
  //spacecraft.debug = true
  spacecraft.setCollider("rectangle", 0,0, 250,400)

  if(keyWentDown("R")){
    spacecraft.x = 400
    spacecraft.y = 250
    hasDocked = false
  }

  if(!hasDocked){
  if(keyDown(UP_ARROW)){
   // spacecraft.addImage(shipE)
    spacecraft.y = spacecraft.y - 2
  }
  if(keyWentUp(UP_ARROW) || keyWentUp(DOWN_ARROW)||keyWentUp(RIGHT_ARROW)||keyWentUp(LEFT_ARROW) ){
    spacecraft.addImage(ship)
  }

  if(keyDown(DOWN_ARROW)){
    spacecraft.addImage(shipE)
    //spacecraft.y = spacecraft.y + 2
  }
  if(keyDown(RIGHT_ARROW)){
    spacecraft.addImage(shipL)
    spacecraft.x = spacecraft.x + 2
  }
  if(keyDown(LEFT_ARROW)){
    spacecraft.addImage(shipR)
    spacecraft.x = spacecraft.x - 2
  }

 
}

if (spacecraft.isTouching(checker)){
  hasDocked = true
}

  drawSprites();

  push()
  fill("red")
  textSize(15)
  text("push R to reset", 10, 20)
  pop()

  if(hasDocked === true){
    if(keyWentDown(32)){
      spacecraft.x = random(50,750)
      spacecraft.y = random(320,250)
      hasDocked = false
    }
    textSize(30)
    fill("white")
    text("[DOCKING SUCCESFUL]",200,200)
    textSize(15)
    text("Space to Retry", 310,220)
  }
}



