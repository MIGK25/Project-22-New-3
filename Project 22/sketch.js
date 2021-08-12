const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var roof;
//Create multiple bobs, mulitple ropes varibale here
var ball,ball2,ball3,ball4,ball5;
var rope1,rope2,rope3,rope4,rope5;

function setup() {
	createCanvas(800, 600);
	rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;

	var ball_options = {
		restitution: 0.8
	  }

	  ball = Bodies.circle(300,300,10,ball_options);
	  World.add(world,ball);
	  ball2 = Bodies.circle(330,300,10,ball_options);
	  World.add(world,ball2);
	  ball3 = Bodies.circle(360,300,10,ball_options);
	  World.add(world,ball3);
	  ball4 = Bodies.circle(390,300,10,ball_options);
	  World.add(world,ball4);
	  ball5 = Bodies.circle(420,300,10,ball_options);
	  World.add(world,ball5);

	  rope1 = new rope(ball,roof,-80, 0);
	  rope2 = new rope(ball2,roof,-40, 0);
	  rope3 = new rope(ball3,roof,-0, 0);
	  rope4 = new rope(ball4,roof,40, 0);
	  rope5 = new rope(ball5,roof,80, 0);
	
	  var roof_options={
		isStatic:true			
	}

	roof = Bodies.rectangle(400,100,230,20,roof_options);
    World.add(world,roof);

	Engine.run(engine);
	
  
}

function draw() {
  rectMode(CENTER);
  background("#99004d");

  rect(roof.position.x,roof.position.y,230,20);

  //call display() to show ropes here
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
  //create ellipse shape for multiple bobs here
  ellipse(ball.position.x,ball.position.y,30);
  ellipse(ball2.position.x,ball2.position.y,30);
  ellipse(ball3.position.x,ball3.position.y,30);
  ellipse(ball4.position.x,ball4.position.y,30);
  ellipse(ball5.position.x,ball5.position.y,30);
}

//Write keyPressed function and apply force on pressing up_arrow key on the first bob.
