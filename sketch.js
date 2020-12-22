
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var world,engine;

var bin,ground,paper;

function setup() {
	createCanvas(800, 650);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground  = new Ground(400,380,800,10);
		
	paper = new Paper(50,303,50);


 	bin = new Bin();
	
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(173);
  ground.display();
 
  paper.display();

  bin.display();
  

  drawSprites();
 
}


function keyPressed(){
	if(keyCode === UP_ARROW){
			Matter.Body.applyForce(paper.body,paper.body.position,{x:25,y:-50});
	}
}

