function setup(){
    createCanvas(400,300);
    background(200);
} 

var playerHealth = 100;
var enemyHealth = 100;
var playerMoves = ["Thunder Shock", "Flamethrower", "Water Gun"];

/*function draw(){
    background(0, 153, 0);
    ellipse(200,500,55,55);
    ellipse(400,250,55,55);
    text("Player Health: " + playerHealth, 100, 200);
    text("Enemy Health: " + enemyHealth, 280, 130);
    rect(100, 210, hp, 5);
    rect(280, 140, hp2, 5); 
}*/

function draw(){
    background(0, 255, 0);
    stroke("black");
    fill("white");
    rect(100, 140, 20, 40);
    rect(300, 160, 40, 20);
    fill("black");
    text("Player Health: " + playerHealth, 100, 200);
    fill("red");
    text("Enemy Health: " + enemyHealth, 280, 130);
    fill("white");
    rect(100, 210, playerHealth, 5);
    rect(280, 140, enemyHealth, 5);
    fill(225 );
    rect(290, 220, 120, 80);
    fill("black");
    text("Attacks: ",295, 233);
    text(playerMoves[0], 295, 244);
    text(playerMoves[1], 295, 255);
    text(playerMoves[2], 295, 266);





    
}