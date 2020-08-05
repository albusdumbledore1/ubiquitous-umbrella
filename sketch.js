const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

const Body = Matter.Body;


var dustbinObject,paperObject,groundObject,paperObjectImg,slingShot;
var world;
var packageBody,ground


function preload(){
//kkm;////paperObjectImg = loadImage("imAGES/paperIma.png");
	
}

function setup() {
	createCanvas(1200, 700);


	engine = Engine.create();
	world = engine.world;

	dustbinObject = new Dustbin(900,650);
	paperObject = new Paper(200,450,20);
	slingShot = new Slingshot(paperObject.body,{x:200,y:100});
	console.log(paperObject)

	
	paperObject.debug = true;
	groundObject = new Ground(width/2,670,width,20);
	

	//packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:1.5, isStatic:false});
	//World.add(world, packageBody);
	

	//Create a Ground
	//ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	//World.add(world, ground);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(245,245,245);
  
  drawSprites();
 paperObject.display();
 dustbinObject.display();
 groundObject.display();

 


}






	


function keyPressed() {
	if (keyCode === 32 ) {
	  Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:77,y:-75});
	}

	if (keyCode === DOWN_ARROW) {
		Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:-25,y:-55});
	  }
}

