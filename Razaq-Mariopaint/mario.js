
var value = 0;

function setup() {
   createCanvas(900,900); 
   background(225);
    
}


 function mouseDragged() {
    //noStroke();
    fill(Math.floor(random() * 256), Math.floor(random() * 256), Math.floor(random() * 256));
    //fill(125);
    ellipse(mouseX, mouseY, 16, 16);
}

