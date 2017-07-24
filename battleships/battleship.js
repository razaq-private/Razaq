


/*function setup(){
    createCanvas(100, 100);
    createCanvas(200, 100);
    createCanvas(300, 100);
    createCanvas(100, 200);
    createCanvas(100, 300);
    createCanvas(200, 200);
    createCanvas(300, 300);
    background(250);
} 

function mousePressed() {
    if (mouseX <= shipx+100 && mouseX >= shipx-100 && mouseY <= shipy+100 && mouseY >= shipy-100){
        c = [0, 255, 0];
    } else {
        c = [255, 0, 0];
    }
}*/

/*var c = 225

function setup(){
    createCanvas(600,600);
    background(250);

}
function draw(){
    background(c);
    for (var i = 0; i<width/100; i++) {
        fill("black");
        stroke(2);
        line(i*100, 0, i*100, height);
        line(0, i*100, width, i*100);
    }
    
}

function mousePressed() {
    if (mouseX <= shipx+100 && mouseX >= shipx-100 && mouseY <= shipy+100 && mouseY >= shipy-100){
        c = [0, 255, 0];
    } else {
        c = [255, 0, 0];
    }
}

var c = 100;
var ca = 100;
function setup(){
   for (var i = 0; i <36; i++)
        createCanvas(c, ca);
        background(100);
        c+=100;
        ca+=100;
}*/

function setup() {
  var cnv = createCanvas(100, 100);
  var x = (windowWidth - width) / 2;
  var y = (windowHeight - height) / 2;
  cnv.position(x, y);
  background(255, 0, 200);
}