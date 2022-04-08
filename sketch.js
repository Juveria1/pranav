const World=Matter.World;
const Engine=Matter.Engine;
const Bodies=Matter.Bodies;

var engine,world,object;

function setup() {
  createCanvas(400,400);
  engine=Engine.create(); //world is automatically creatd
  world=engine.world;

var options={
  isStatic:true
}

  object=Bodies.rectangle(200,100,50,50,options);
  World.add(world,object)
  console.log(object.position.x)
}

function draw() {
  background("black");  
  Engine.update(engine)
  rectMode(CENTER)
 rect(object.position.x,object.position.y,50,50     )
}