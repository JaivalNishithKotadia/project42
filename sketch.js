const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
var engine, world;
var umbrella;
var drops=[];
var thunderbolt1,thunderbolt2,thunderbolt3,thunderbolt4,thunder;
var maxDrops=100;
var thunderCreatedFrame=0;
function preload(){
  thunderbolt1=loadImage("proc41images/images/thunderbolt/1.png");
  thunderbolt2=loadImage("proc41images/images/thunderbolt/2.png");
  thunderbolt3=loadImage("proc41images/images/thunderbolt/3.png");
  thunderbolt4=loadImage("proc41images/images/thunderbolt/4.png");
}

function setup(){
    createCanvas(500,1000);
    engine = Engine.create();
    world = engine.world;
    umbrella = new Umbrella(200,500);
    if (frameCount %150 ===0){
    for(var i=0;i<maxDrops;i++){
      drops.push(new createDrops(random(0,400),random(0,400)))
    }
  }
}

function draw(){
    background("black");
    Engine.update(engine);
    rand = Math.round(random(1,4));
    if (frameCount%150===0){
      thunderCreatedFrame=frameCount;
     thunder=createSprite(random(10,370), random(10,30), 10, 10)
      switch(rand){
       case 1:
         thunder.addImage(thunderbolt1);
         break;
       case 2:
         thunder.addImage(thunderbolt2);
         break;
       case 3:
         thunder.addImage(thunderbolt3);
         break;
       case 4:
         thunder.addImage(thunderbolt4);
         default: break;
      }
      thunder.scale = random(0.3,0.6)
    }
    if(thunderCreatedFrame + 10 ===frameCount && thunder){
      thunder.destroy();
  }
    
   
    //displaying rain drops
    for(var i = 0; i<maxDrops; i++){
      drops[i].display();
      drops[i].update();
      
  }

    umbrella.display();
  drawSprites();
}   

