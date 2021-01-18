
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine,world

function setup() {
	createCanvas(800, 700);
     

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	 paper = new Paper(100,600,15);
	 ground = new Ground(400,680,15,100);
	 left = new Dustbin(550,620,20,100);
	 right = new Dustbin(670,620,20,100);
	 bottom = new Dustbin(610,660,100,20);


	 Engine.run(engine);
     
}


function draw() {
  rectMode(CENTER);
  background(0);
  Engine.update(engine);
  paper.display();
  ground.display();
  right.display();
  left.display();
  bottom.display();
  drawSprites();
 
}

function key(){
if(keyCode === UP_ARROW){
Matter.body.applyForce(paper.body,paper.body.positio,{x:15, y:15})
}
}

