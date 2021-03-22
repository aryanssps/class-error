const Engine = Matter.Engine
const World = Matter.World
const Bodies = Matter.Bodies

var engine,world;
var ground;

function Setup(){
  createCanvas(1200,650)

 
  engine = Engine.create();
  world = engine.world;

 ground=new Ground(600,640,1200,10)

}

function draw(){
  background(255)

  Engine.update(engine)

  ground.display();
  drawSprites();
}