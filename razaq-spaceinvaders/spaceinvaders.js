
function setup(){
    createCanvas(630,600);
   
}

/*var spaceshipx = 300;
var spaceshipy = 500;

/*function Bullet(x, y){
    Bullet.x=x;
    Bullet.y=y;
}

function keyPressed(){
    var bullet1 = new Bullet(spaceshipx, spaceshipy)
} 


function draw (){
    background(50);
    fill("green")
    ellipse(50, 50, 40, 40);
    ellipse(110, 50, 40, 40);
    ellipse(170, 50, 40, 40);
    ellipse(230, 50, 40, 40);
    ellipse(290, 50, 40, 40);
    ellipse(350, 50, 40, 40);
    ellipse(410, 50, 40, 40);
    ellipse(470, 50, 40, 40);
    ellipse(530, 50, 40, 40);
    ellipse(590, 50, 40, 40);
    fill("red");
    rect(spaceshipx,spaceshipy,30,50);
    if (keyIsDown(LEFT_ARROW) && spaceshipx != 0){
        x-=4;
    } else if (keyIsDown(RIGHT_ARROW) && spaceshipx != 600){
        x+=4;
    }
    ellipse(bullet1.x, bullet1.y)
    bullet1-=10


    if (x >= 630-60){
        x+=0;
    } else if (x <= 0+30){
        x+=0;
    }
}*/


function setup(){
    createCanvas(630,600);
   
}

var x = 300;
var y = 500;

function draw (){
    background(50);
    fill("green")
    ellipse(50, 50, 40, 40);
    ellipse(110, 50, 40, 40);
    ellipse(170, 50, 40, 40);
    ellipse(230, 50, 40, 40);
    ellipse(290, 50, 40, 40);
    ellipse(350, 50, 40, 40);
    ellipse(410, 50, 40, 40);
    ellipse(470, 50, 40, 40);
    ellipse(530, 50, 40, 40);
    ellipse(590, 50, 40, 40);
    fill("red");
    rect(x,y,30,50);
    if (keyIsDown(LEFT_ARROW) && x != 0){
        x-=5;
    } else if (keyIsDown(RIGHT_ARROW) && x != 600){
        x+=5;
    }

    if (x >= 630-60){
        x+=0;
    } else if (x <= 0+30){
        x+=0;
    }
}
