class Tank{
 constructor(x,y,width,height){
var options = {
   restitution :1.0,
   friction: 1.0,
   density: 1.0
}
this.body = Bodies.rectangle(x,y,width,height,options);
this.width = witdh;
this.height = height;
World.add(world,this.body);

 }
display(){
this.tank = loadImage("Tank.jpg");




}























}