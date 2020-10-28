var r1,r2,r3
function setup() {

  createCanvas(1200,800);
  r1=createSprite(600,400,50,80)
  r1.shapeColor="green"
  r1.debug=true
  r2=createSprite(400,200,80,30)
  r2.shapeColor="green"
  r2.debug=true
  r3=createSprite(230,120,50,80)
  r3.shapeColor="green"
  r3.debug=true
   
}

function draw() {
  background("black");  
r2.x=World.mouseX;
r2.y=World.mouseY;
;
  
if(isTouching(r2,r3)){
r2.shapeColor="red"
r3.shapeColor="red"



}
else{
r2.shapeColor= "green";
r3.shapeColor= "green";
}







  drawSprites();
}
function isTouching(object1,object2){
  if(object1.x-object2.x<object2.width/2+object1.width/2 &&
    object2.x-object1.x<object2.width/2+object1.width/2 &&
    object1.y-object2.y<object2.height/2+object1.height/2 &&
    object2.y-object1.y<object2.height/2+object1.height/2){
 return true
  
    }
    else{
     return  false
    }

    }
