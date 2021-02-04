const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var drops = []
var maxDrops=100;
function preload(){
    
imagee=loadImage("1.png")
imagee1=loadImage("2.png")
imagee2=loadImage("3.png")
imagee3=loadImage("4.png")

}

function setup(){
    createCanvas(370,710);
    engine = Engine.create();
    world = engine.world;

    Ground = new Bl(185,700,400,5);
    man = new umbrella(185,510,100);

    for (var num = 0; num < maxDrops; num++) {

      drops.push(new drop(random(0,370),random(0,370)));

    }

    Engine.run(engine);

}

function draw(){
    background(0,0,42);
    Engine.update(engine);

rand = Math.round(random(1,2));
if (frameCount%80===0){
thunderCreatedFrame=frameCount

thunder = createSprite(random(10,370),random(10,30),10,10);
switch(rand){

case 1:
     thunder.addImage(imagee);
break;
case 2:
     thunder.addImage(imagee1);
break;
default:
    break;

}
thunder.scale=random(0.3,0.5);
thunder.lifetime=25;
}

Ground.display();
man.display();

for (var i = 0; i < maxDrops; i++) {
  drops[i].display();
  drops[i].update();
}

drawSprites();

}