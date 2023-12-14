let app 
  function setup() {
  createCanvas(windowWidth, windowHeight)
    background(120)
    app = new App()
    textSize(12)
}


function draw() {
  app.dibujar()
}

function mouseClicked() {
  app.mouseClicked()
}

function keyPressed(){
    app.keyPressed()
   
}
function keyReleased(){
    app.keyReleased()
}
