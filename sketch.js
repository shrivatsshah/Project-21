var bullet, wall;
var speed,weight;
var thickness;
var obj1edge,obj2edge;
function setup() {
  createCanvas(1600,400);
 bullet= createSprite(50,200, 50, 50);
 bullet.shapeColor="white";
 thickness=random(22,83);
speed=random(223,321);
weight=random(30,52);
wall=createSprite(1200,200,thickness,height/2);
wall.shapeColor=color(80,80,80);
bullet.velocityX=speed;
}
function draw() {
  background("black");  
  if(collide(bullet,wall)){
   bullet.velocityX=0;
    var damage=(0.5*weight*speed*speed)/(thickness*thickness*thickness);
  if(damage>10)
  wall.shapeColor=color(255,0,0);
  else
  wall.shapeColor=color(0,255,0);
  }
  drawSprites();
}
  function collide(obj1,obj2){
   obj1edge=obj1.x+obj1.width;
  obj2edge=obj2.x;
  if(obj1edge>=obj2edge)
  return true;
 else 
 return false;
  }
 // function collide(obj1,obj2){
  //  if(obj1.x-obj2.x<obj1.width/2+obj2.width/2&&
     // obj2.x-obj1.x<obj1.width/2+obj2.width/2&&
    //  obj1.y-obj2.y<obj1.height/2+obj2.height/2&&
     // obj2.y-obj1.y<obj1.height/2+obj2.height/2)
     // return true;
      //else
      //return false;
  //}