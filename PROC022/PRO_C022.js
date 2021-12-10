/*
● Usar um mecanismo de física para criar um mundo com objetos nele.
● Integrar o mecanismo de física com o código p5 para criar objetos interativos,
  seguindo as regras da física neste mundo.
● Ajustar o mecanismo de física para mudar o comportamento
  dos objetos no seu mundo.

Alguma bibliotecas com Mecanismos de Física: Existem muitos tipos diferentes de
bibliotecas para o mecanismo de física em javascript. Algumas das mais populares são:
 box2d, matter.js e p2.js.

Com base na Matter.js usaremos três objetos principais -> Mundo, Mecanismo e Corpos.
a partir dos módulos : Matter.Engine, Matter.World/Composite e Matter.Bodies

Sobre a Matter.js:
referencia: https://brm.io/matter-js/
Documentação: https://brm.io/matter-js/docs/			

É um mecanismo de fisica 2D para a web.
hospedada: <script src="https://cdnjs.cloudflare.com/ajax/libs/matter-js/0.12.0/matter.js" type="text/javascript"></script>
            https://github.com/liabru/matter-js/tree/master/build;
        	
_________________________________________________________________________________________________
*/

//1. Salvamos em um alias (alias apelido-atalho ou namespace) os 3 principais Módulos que precisaramos:

const Engine = Matter.Engine;// responsável pela engrenagem do nosso mundo
const Composite = Matter.Composite;//Matter.World -> conjunto de corpos e das leis fisícas que os regem;
const Bodies = Matter.Bodies;// responsável pela criação dos corpos;


//2. Definição das variáveis:
var canvas;
var engine, world;
var corpo;
function setup() {


    canvas = createCanvas(400, 400);
    //3.1 Criação das leis de fisica que irão reger o nosso mundo:
    engine = Engine.create();
 
    //4. Criação do mundo:
    world = engine.world;

    //5.1 Criação do corpo solo como um corpo retangular:
    corpo = Bodies.rectangle(200, 200, width, 50, {isStatic: true});
  
    //5.2 Adição do corpo solo ao mundo criado:
    Composite.add(world, corpo);
    
    
}

function draw() {
    background(0);
    rectMode(CENTER);
    rect(corpo.position.x, corpo.position.y, width, 50);
    console.log(corpo.position.y)
    //3.2 Atualização - efeito das leis da física:
    Engine.update(engine);
    
    // 5.3 Damos a vestimenta para nosso corpo: 
    
}