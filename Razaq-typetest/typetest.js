/*function setup(){
    createCanvas(800,800);
    
}

var letters = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];

var x = 0;
var y = 0;
var random = letters[Math.floor((Math.random()*26)+1)];

function draw(){
    background(255);
    textSize(50);
    text(random, x, y)
    x++;
    y++;
} 


var score = 0;


var newSent = sentence.split("")


function setup(){
    createCanvas(800,800);
    background(250);
    textSize(20);
   
}

function draw(){
    text("Hello", 0, 100);
    text("There", 0 ,120);
    text("There you are", 0, 140);
    text("Yes", 0, 160);
    text("No", 0, 180);
    text("Your Score: " + score, 0, 220);
}

function keyTyped(){
    if (key == "Hello"){
        score++;
        fill
    } else if (key == "There"){
        score++;
    } else if (key == "There you are"){
        score++;
    } else if (key == "Yes"){
        score++;
    } else if (key == "No"){
        score++;
    } else {
        score = score;
    }

} */

var sentence = "Send a lightning bolt that would come down";
var arrSent = sentence.split("");
var userInput = "";

var score = 0;
var x = 50;
var i = 0;


function setup(){
    createCanvas(400,400);
}

function draw(){
    background(50);
    fill(255);
    text("Please type the sentence below", 50, 50)
    text(sentence, x, 100);
    text("Current Score", 50, 200);
    text(score, 135, 200);
    }

function keyTyped(){
    switch(key){
        case arrSent[i]:
            console.log("Success");
            score++;
            fill(50);
            userInput+=arrSent[i];
            console.log("Hit");
            x--;
            i++;
    }
}
