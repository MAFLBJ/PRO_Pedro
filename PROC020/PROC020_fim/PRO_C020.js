var retMov, retFixo;
var distPontos, distYmax, distXmax;
var distX, distY, distPontos;

function setup() {
  createCanvas(600 , 400);
  retMov = createSprite(370, 200, 100, 50);
  retMov.debug = true;
  retFixo = createSprite(220, 150, 150, 80);
  retFixo.debug = true;

  distXMin = retMov.width/2 + retFixo.width/2;
  distYMin = retMov.height/2 + retFixo.height/2; 
}

function draw() {
  background("black");  
    
  retMov.x = mouseX;
  retMov.y = mouseY;
  
  distX = Math.abs(retMov.x - retFixo.x);
  distY = Math.abs(retMov.y - retFixo.y); 
  
  retMov.shapeColor = "green";
  retFixo.shapeColor = "green";

  colisao();
  drawSprites();
  
}


function colisao(){
  if ((distY <= distYMin && distX <= distXMin)) {
    retMov.shapeColor = "red";
    retFixo.shapeColor = "red";
  }
}






 