
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var paper;
var ground;
var binside1,binside2,binside3;
function setup() {
 createCanvas(1280,685);
 engine = Engine.create();
 world = engine.world;
 ground=new Ground(width/2,height-10,width,20);
 paper= new Paper(200,200,40);
 binside1= new Bin(1000,560,20,200);
 binside2= new Bin(800,560,20,200);
 binside3= new Bin(900,650,200,20);
}
function draw() {
 rectMode(CENTER);
 background("black");
 Engine.update(engine);
 ground.display();
 paper.display();
 binside1.display();
 binside2.display();
 binside3.display();
 drawSprites();
}
function keyPressed(){
    if (keyCode === UP_ARROW) {
 Matter.Body.applyForce(paper.body,paper.body.position,{x:75,y:-75});}
}