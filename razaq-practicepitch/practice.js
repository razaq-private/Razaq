
    var x = Math.floor((Math.random()*255) + 1);
    var y = Math.floor((Math.random()*255) + 1);
    var z = Math.floor((Math.random()*255) + 1);   
    var c = fill(x, y, z);  // Define color 'c'
 

function setup(){
    createCanvas(400,400);
    background(255);
}

function draw(){

}

function keyTyped(){
    if (key === 'a'){
        text("a", 50, 10);
        fill(c);
        
    }
}

/*function draw(){
    background(255);
    
    function keyTyped() {
        if (key === 'a') {
            print("a");
            fill(150);
    } if (key === 'b') {
        print("b");
        fill(50);
        
    }
    function keyTyped() {
    if (key === 'c') {
            fill(c);
    } if (key === 'd') {
            fill(c);
    }
    function keyTyped() {
    if (key === 'e') {
            fill(c);
    }  if (key === 'f') {
            fill(c);
    }
    function keyTyped() {
    if (key === 'g') {
            fill(c);
    } if (key === 'h') {
            fill(c);
    }
    function keyTyped() {
    if (key === 'i') {
            fill(c);
    } if (key === 'j') {
            fill(c);
    }
    }
    }
    }
    }
    }
}*/
  