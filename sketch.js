
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint=Matter.Constraint;

var gorund;




function preload(){

}

function setup() {
	createCanvas(1300, 600);
	engine = Engine.create();
	world = engine.world;

    ground=new Ground(100,100,200,20)





    Engine.run(engine);
}

function draw() {

    background(230);







ground.display();


}