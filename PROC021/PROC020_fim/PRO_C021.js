var retMov, retFixo;
var distPontos, distYmax, distXmax;
var distX, distY, distPontos;

function setup() {
  createCanvas(600, 400);
  retMov = createSprite(370, 200, 100, 50);
  retMov.debug = true;
  retFixo = createSprite(220, 150, 150, 80);
  retFixo.debug = true;

  //distXMin = retMov.width / 2 + retFixo.width / 2;
  //distYMin = retMov.height / 2 + retFixo.height / 2;
}

function draw() {
  background("black");

  retMov.x = mouseX;
  retMov.y = mouseY;
  if (estaTocando(retFixo, retMov)) {
    retMov.shapeColor = "red";
    retFixo.shapeColor = "red";
  } else {
    retMov.shapeColor = "green";
    retFixo.shapeColor = "green";
  }


  //distX = Math.abs(retMov.x - retFixo.x);
  //distY = Math.abs(retMov.y - retFixo.y);



  //colisao();
  drawSprites();

}


function colisao() {
  if ((distY <= distYMin && distX <= distXMin)) {
    retMov.shapeColor = "red";
    retFixo.shapeColor = "red";
  }
}

function estaTocando(objeto1, objeto2) {
  var distXMin = objeto1.width / 2 + objeto2.width / 2;
  var distYMin = objeto1.height / 2 + objeto2.height / 2;
  var distX = Math.abs(objeto1.x - objeto2.x);
  var distY = Math.abs(objeto1.y - objeto2.y);

  if (distY <= distYMin && distX <= distXMin) {
    return true;
  } else {
    return false;
  }
}


function soma(a, b) {
  return a + b

}

console.log(soma(2, 4))





