class Box {
  constructor(x,y,width,height){
      var options = {
          restitution:0.8,
          friction:0.3,
        density:1.0
      }  
this.body = Bodies.rectangle(x,y,width,height,options);
this.width = width;
this.height = height;
World.add(world,this.body);
    }
display() {
 var cbse = this.body.position;
 var angle = this.body.angle;
 push();
 translate(cbse.x,cbse.y);
 rotate(angle);
 rectMode(CENTER);
 fill(125);
 rect(0,0,this.width,this.height);
 pop();
 
}
};