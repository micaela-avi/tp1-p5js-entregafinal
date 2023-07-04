//DECLARO VARIABLES

let titilando = false; // Variable de estado para controlar el titilado
let grosorTitilante = 2; // Grosor de línea titilante

function setup() {
  createCanvas(512, 512);
}

function draw() {
  background(220);
  //background(255); // blanco fondo
  //background (200); // gris oscuro

  // Utilizo la función if para generar una interacción con el mouse. Al presionar el mouse el grosor de las figuras titila en loop.
  
  push();
  if (mouseIsPressed && !titilando) {
  titilando = true; // Activar el titilado al presionar el mouse una vez
  }
  if (titilando) {
    if (frameCount % 50 < 15) {
    } else {
      strokeWeight(grosorTitilante); // Grosor de línea titilante
    }
  }

  
  //FIGURAS PRIMITIVAS
  
  //QUAD
  
  push();
  strokeWeight(3);
  noFill();
  quad(15, 100, 45, 420, 470, 450, 500, 25); //figura 12
  pop();

  noFill();
  quad(5, 15, 15, 450, 500, 480, 480, 70); //figura 11
  quad(30, 50, 30, 350, 450, 420, 470, 100); //figura 10
  quad(50, 80, 80, 320, 405, 390, 440, 160); // figura 9
  quad(80, 100, 100, 300, 395, 370, 400, 140); // figura 8

  push();
  strokeWeight(3);
  noFill();
  quad(100, 130, 120, 320, 380, 350, 390, 120); // figura 7
  pop();

  push();
  noFill();
  strokeWeight(4);
  quad(130, 165, 140, 310, 330, 350, 380, 160); // figura 6
  pop();

  noFill();
  quad(140, 150, 150, 300, 300, 320, 360, 190); // figura 5

  push();
  noFill();
  strokeWeight(3);
  //quad (160,180,180,290,300,305,350,190);
  quad(160, 185, 170, 295, 300, 305, 340, 200); // figura 4 
  pop();

  noFill();
  quad(180, 195, 180, 290, 300, 305, 320, 215); // figura 3  
  
  //RECTANGULOS

  noFill();
  strokeWeight(2); //rectangulo 2
  rect(196, 205, 100, 80);
  pop();

  push();
  noFill();
  //fill(0);
  rect(210, 215, 70, 60); // rectangulo 1 - el más pequeño
  pop();
}
