const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground,ball;
var box1,box2;

function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;

    

var ball_options ={
    restitution:5.0
}
ground = new Ground (200,390,400,10);
ball = Bodies.circle(100,100,20,ball_options);
World.add(world,ball);
    console.log(ball);
    box1 = new Box(200,300,50,50);
    box2 = new Box(239,100,50,70);
}

function draw(){
    background(0);
    Engine.update(engine);
    ground.display();
    box1.display();
box2.display();
}