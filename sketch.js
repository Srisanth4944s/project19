var monkey,monkeyimage,banana,bananagroup,bananaimage,obstaclegroup,obstacle,obstacleimage,back,backimage,score

function preload(){
  monkeyimage = loadAnimation("Monkey_01.png","Monkey_02.png","Monkey_03.png","Monkey_04.png","Monkey_05.png","Monkey_06.png","Monkey_07.png","Monkey_08.png","Monkey_09.png","Monkey_10.png")
 bananaimage = loadImage("banana.png")
 obstacleimage = loadImage("stone.png")
  backimage = loadImage("jungle.jpg")
}
function setup() {
  createCanvas(800, 400);
  
  back = createSprite(0,0,800,400)
  back.addImage(backimage)
  back.x = back.width/2
  back.scale = 1.5
  back.velocityX = -3
  
  monkey = createSprite(50,340,20,20)
  monkey.addAnimation("running",monkeyimage)
  monkey.scale = 0.1
  
  ground = createSprite(400,350,800,10)
  ground.visible = false
  
  bananagroup = new Group()
  obstaclegroup = new Group()
  
  score = 0
}

function draw() {
  background(220);
  if(back.x<100){
    back.x = back.width/2
  }
  if(keyDown("space")){
    monkey.velocityY = -10
  }
  monkey.velocityY = monkey.velocityY+0.5
  if(bananagroup.isTouching(monkey)){
    bananagroup.destroyEach()
    score = score+2
  }
  switch(score){
    case 10:monkey.scale = 0.12
      break;
      case 20:monkey.scale = 0.14
      break;
      case 30:monkey.scale = 0.16
      break;
      case 40:monkey.scale = 0.18
      break;
      default:break
  }
  if(obstaclegroup.isTouching(monkey)){
    monkey.scale = 0.08
  }
  fruits()
  enemey()
  monkey.collide(ground)
  drawSprites()
  textSize(25)
  text("SCORE: "+score,600,50)
}
function fruits(){
  if(frameCount %80 === 0) {
  var fruits = createSprite(800,250);
  fruits.addImage (bananaimage);
  fruits.scale = 0.05;
 fruits.velocityX = -5;
  fruits.y = Math.round(random(200,250));
    bananagroup.add(fruits)
}
}

function enemey() {
  if (frameCount % 300 === 0) {
    var enemey = createSprite(800,360);
    enemey.addImage(obstacleimage)
    enemey.scale =0.2
    enemey.velocityX = -5
    obstaclegroup.add(enemey)
  }
}