const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body

let engine;
let world;

var ground;
var left;
var right;
var ball;

function setup() {
  createCanvas(1600, 1700);
  engine = Engine.create();
  world = engine.world;
  
  ground =new Ground(width / 2, 670, width, 20);
  right = new Ground(1350, 600, 20, 120);
  left = new Ground(1100, 600, 20, 120);
  var ball_options = {
    restitution: 0.3, 
    isStatic: false,
    friction: 0,
    density: 1.2,
  }
  ball = Bodies.circle(200, 100, 20, ball_options);
  World.add(world, ball)
  rectMode(CENTER);
  ellipseMode(RADIUS);
}

function draw()
{
  background(51);
  ground.show();
  ellipse(ball.position.x, ball.position.y, 20)
  left.show();
  right.show();
  Engine.update(engine);
}
function keyPressed(){
  if (keyCode === UP_ARROW){
    Matter.Body.applyForce(ball, ball.position, {x: 85, y:-85})
  }

}

