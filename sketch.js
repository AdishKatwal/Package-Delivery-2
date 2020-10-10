//these are just making the variables
var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
var wall1, wall2, wall3;
//this is setting up the physics engine
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	//this is loading the images
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	
    //this creates the package
	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	//this creates the helicopter
	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	//this creates the ground
	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)

	wallSprite1 = createSprite(400,650,200,20);
	wallSprite1.shapeColor = color("red");
	
	wallSprite2 = createSprite(300,610,20,100);
	wallSprite2.shapeColor = color("red");

	wallSprite3 = createSprite(500,610,20,100);
	wallSprite3.shapeColor = color("red");

    //this is setting up the physics engine
	engine = Engine.create();
	world = engine.world;
	
	//this is just giving the package a body 
	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.5, isStatic:true});
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);
    //creating walls
	wall1 = Bodies.rectangle(width/2, 630, width, 20, {isStatic:true} );
 	World.add(world, wall1);

	wall2 = Bodies.rectangle(300, 610, 20, 100 ,{isStatic:true} );
	World.add(world, wall2);
	 
	wall3 = Bodies.rectangle(500, 610, 20, 100 , {isStatic:true} );
	World.add(world, wall3);
	 
	Engine.run(engine);
}


function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
  keyPressed();
  drawSprites();
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
    // Look at the hints in the document and understand how to make the package body fall only on
    Matter.Body.setStatic(packageBody,false);
  }
  else{
	  fill("red");
	  text("Press the Down Arrow to drop the package",300,100);
  }
  if(packageBody.position.y > 550){
	  fill("green");
	  text("Nice Job!",375,100);
  }
}