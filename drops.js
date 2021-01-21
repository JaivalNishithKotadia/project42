class createDrops{
    constructor(x,y){
      var options={
          friction: 0.001,
          restitution:0.1  
      }
    this.body=Bodies.circle(x,y,10,options);
    this.x=x;
    this.y=y;
    this.radius=10;
    World.add(world,this.body);
    }
   update(){
    if (this.body.position.y>height){
        Matter.Body.setPosition(this.body,{x:random(0,400),y:random(0,400)})
      }
   
   }
   
   display(){
    fill("blue")
    ellipseMode(CENTER);
    ellipse(this.body.position.x,this.body.position.y,this.radius,this.radius);
}
   

   } 