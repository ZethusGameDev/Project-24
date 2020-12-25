
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper1, side1, side2, bottomSide;
var ground1;

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
   paper1 = new paper(100,690,20);
   
   ground1 = new ground(400,715,800,30);
   
   side1 = new dustbin(600,650,10,100);
   bottom = new dustbin(675,695,150,10);
   side2 = new dustbin(750,650,10,100);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255);
  
  paper1.display();
  
  ground1.display();

  side1.display();
  side2.display();
  bottom.display();

  drawSprites();
 
}

function keyPressed() {

	if(keyCode === UP_ARROW) {

		Matter.Body.applyForce(paper1.body,paper1.body.position,{x:55,y:-80})

	}
}

