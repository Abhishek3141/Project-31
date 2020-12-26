
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
plinkos = []
particles = []

function preload()
{
	
}

function setup() {
	createCanvas(480,800);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	ground = new Ground(240,775, 500, 15 )
	pillar1 = new Ground(15,683, 15, 200)
	pillar2 = new Ground(75,683, 15, 200)
	pillar3 = new Ground(135,683, 15, 200)
	pillar4 = new Ground(195,683, 15, 200)
	pillar5 = new Ground(255,683, 15, 200)
	pillar6 = new Ground(315,683, 15, 200)
	pillar7 = new Ground(375,683, 15, 200)
	pillar8 = new Ground(435,683, 15, 200)
	pillar9 = new Ground(475,683, 15, 200)
	for(j = 40; j<= width; j = j + 50){
		plinkos.push(new plinko(j,75))
	}
	for(j = 15; j<= width; j = j + 50){
		plinkos.push(new plinko(j,175))
	}
	for(j = 10; j<= width; j = j + 50){
		plinkos.push(new plinko(j,275))
	}
	for(j = 20; j<= width; j = j + 50){
		plinkos.push(new plinko(j,35))
	}
	if(frameCount%90==0){
		particles.push( new ball(random(width/2-10,width/2+10), 10,10))
	}
	Engine.run(engine);
  
}
--0987654322111111111`12345678function draw() {
  rectMode(CENTER);
  background("black");
  ground.display();
  pillar1.display();
  pillar2.display();
  pillar3.display();
  pillar4.display();
  pillar5.display();
  pillar6.display();
  pillar7.display();
  pillar8.display();
  pillar9.display();
	
  for(j = 40; j< plinkos.length; j = j + 50){
	plinkos[j].display();
}
for(j = 15; j<plinkos.length; j = j + 50){
	plinkos[j].display();
}
for(j = 10; j<plinkos.length; j = j + 50){
	plinkos[j].display();
}
for(j = 20; j<plinkos.length; j = j + 50){
	plinkos[j].display();
}
for(j = 0; j<particles.length; j ++){
	particles[j].display();
}
  drawSprites();
 
}



