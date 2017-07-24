function setup() {
    canvasCreate(600, 600);
} 

var x =60;
var y = 60;
var xSpeed = 10;
var ySpeed = 10;

function draw(){
    background(255, 153, 204);
    ellipse(x, y, 16, 16);
 
    //X DIRECTION
    if(x >= 600-60){
        xSpeed =-xSpeed
    } else if (x<=0+30){
        xSpeed =- xSpeed;
    }
    x+=xSpeed //Makes ball move

    //y direction
    if (y >= 600-60){
        ySpeed 
    }
     
}