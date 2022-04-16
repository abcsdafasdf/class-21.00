
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ball
var leftwall
var rightwall
var bottomwall
function preload()
{
	
}

function setup() {
	createCanvas(1200, 700);


	engine = Engine.create();
	world = engine.world;
	var ball_options={
		isStatic:false,
		restitution:0.1,
		friction:3,
		denstiy:3	
	}
	//Create the Bodies Here.
   ball = Bodies.circle(200,200,20,20)
   World.add(world,ball) 
   ground = new Ground(600,680,1200,20)
   leftwall = new Ground(800,630,20,80)
   rightwall = new Ground(950,630,20,80)
   bottomwall = new Ground(870,660,150,20)
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  ellipseMode(RADIUS)
  background(0);
  ellipse(ball.position.x,ball.position.y,20,20)
  ground.display()
  leftwall.display()
  rightwall.display()
  bottomwall.display()
  drawSprites();
 
}
function keyPressed(){
	if(keyCode == UP_ARROW){
		Matter.Body.applyForce(ball,ball.position,{x:0.5,y:-0.5})
	}
}



