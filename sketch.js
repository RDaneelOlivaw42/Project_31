const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground;
var particles = [];
var plinkos = [];
var divisions = [];
var divisionHeight = 300;

function setup() {
  engine = Engine.create();
  world = engine.world;
  createCanvas(800,800);
  
  ground = new Ground(400, 795, 800, 10);

  for(var f = 0; f <= width; f = f + 80){
    divisions.push(new Divisions(f, height-divisionHeight/2, 10, divisionHeight));
  }

  for(var k = 0; k <= width; k = k + 50){
    plinkos.push(new Plinko(k, 75));
  }

  for(var k = 0; k <= width; k = k + 75){
    plinkos.push(new Plinko(k, 150));
  }

  for(var k = 0; k <= width; k = k + 50){
    plinkos.push(new Plinko(k, 225));
  }

  for(var k = 0; k <= width; k = k + 75){
    plinkos.push(new Plinko(k, 300));
  }

  for(var k = 0; k <= width; k = k + 50){
    plinkos.push(new Plinko(k, 375));
  }
  
}

function draw() {
  background("black");
  Engine.update(engine);
  
  ground.display();

  for(var j = 0; j < particles.length; j++){
    particles[j].display();
  }

  if(frameCount%60 === 0){
    particles.push(new Particle(random(width/2-30, width/2+30), 10, 10));
  }    

  for(var f = 0; f < divisions.length; f++){
    divisions[f].display();
  }

  for(var k = 0; k < plinkos.length; k++){
    plinkos[k].display()
  }

  drawSprites();
}