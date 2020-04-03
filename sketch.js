const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var engine, world;

var sun,earth;
var c1;

function setup() {
  var canvas = createCanvas(1000,1000);
  engine = Engine.create();
  world = engine.world;


  sun = new Planet(500,500,40);
  earth= new Planet(600,600,15);


  engine.world.gravity.y = 0;


 //Body.setVelocity(earth, {x: 10, y: -10});

//c1 = new constraint(sun.body,earth.body,100);



}

function draw() {
  background(0);  

  Engine.update(engine);

  text(mouseX + ',' + mouseY, 10, 15);

  sun.display();
  earth.display();

  //c1.display();
}