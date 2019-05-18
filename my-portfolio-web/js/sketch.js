function setup() {
  createCanvas(400, 400, WEBGL);
}

function draw() {
  stroke(random(235), random(215), random(255));

  
  rotateY(frameCount * 0.0000000000001);
  cylinder(809);
  
  fill(random (255), 50);

  
  rotateX(frameCount * 0.02);
  fill(random(300), random (600), 50);
  sphere(100);
  
  fill( random(255),random (255), 50);
fill(random(255), random(255),random (255), 50);
  rotateY(frameCount * 0.999);
  box(500);
  
  fill(random(220), random(255), 50);
 
  let locX = mouseX - height / 2;
  let locY = mouseY - width / 2;

  ambientLight(50);
  directionalLight(255, 19, 0, 50, 0.25, 0);
  pointLight(0, 0, 255, locX, locY, 250);
  
translate(-220, 0, 0);
  push();
  
  pop();
  translate(440, 0, 0);
  


  

  
         }