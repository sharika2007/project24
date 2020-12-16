
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


var engine,block1,block2,block3,paper;
function preload()
{
	
}

function setup() {
	createCanvas(1200, 600);
   rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;
	Engine.run(engine);

	//Create the Bodies Here.
    Engine.run(engine);
	

	block1Sprite=createSprite(900,550,200,20);
	block1Sprite.shapeColor=color("white");

	block2Sprite=createSprite(990,520,23,100);
	block2Sprite.shapeColor=color("white");
	
	block3Sprite=createSprite(800,520,23,100);
	block3Sprite.shapeColor=color("white");

   paper = new Paper(150,545,20);
	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color("yellow")

	
}


function draw() {
  rectMode(CENTER);
  background(0);
 
  paper.display();

  drawSprites();
 
}

function KeyPressed(){
	if (keyCode === UP_ARROW){
		Matter.Body.applyForce(paper.body,paper.body.position,{
			x: 12,
			y: -13

		});
	}
}

