class Umbrella{
 constructor(x,y){
   var options={
       isStatic:true
   }
 this.body=Bodies.circle(x,y,50,options);
 this.x=x;
 this.y=y;
 this.radius=50;
 this.image=loadImage("proc41images/images/Walking Frame/walking_1.png");
 World.add(world,this.body);
 }
  display(){
 var pos = this.body.position;
 var angle = this.body.angle;
 push();
 translate(pos.x,pos.y);
 imageMode(CENTER);
 rotate(angle);
 image(this.image,0,pos.y-320,500,500);
 pop();
}
} 