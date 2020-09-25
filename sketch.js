
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var bg,  ground, paper1, paper, dustbin, dustbin1;


function preload() {
	
	
	bg= loadImage("bg.jpg");



}

function setup() {
	createCanvas(800, 700);



	paper = createSprite(200, 630);
	paper.addImage(paper1)
	paper.scale = 0.5;

	dustbin = createSprite(700, 555, 10, 10);
	dustbin.addImage(dustbin1)
	dustbin.scale = 0.7;



	engine = Engine.create();
	world = engine.world;



	ground = new Ground(400, 680, 800, 20);







	Engine.run(engine);

}


function draw() {
	rectMode(CENTER);
	background(bg);



	// Engine.update(engine);


	ground.display();
	dustbin.display();
	dustbin.addImage(dustbin1)
	paper.display();
	paper.addImage([paper1])
	



	drawSprites();

}

function keyPressed() {
	if (keyCode === UP_ARROW) {

		Matter.Body.applyForce(paperObject.ball, paperObject.ball.position, { x: 85, y: -85 });
	}
}