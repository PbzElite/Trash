
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var dustbinObj,groundObject	
var world;
var trash;

function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;
	
	trash = new Trash(600,450,20);

	groundObject=new ground(width/2,670,width,20);
	dustbinObj=new dustbin(1200,650);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(100);
 
  trash.display();
  groundObject.display();
  dustbinObj.display();
  //trash.display();

  trash.depth = dustbinObj.depth -1;
}


function keyPressed (){
    if(keyDown("up")){
        Matter.Body.applyForce(trash.body,trash.body.position,{x:50,y:-100});
    }
}