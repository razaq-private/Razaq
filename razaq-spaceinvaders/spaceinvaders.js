//called when successful user log in
function onSignIn(googleUser) {
    console.log('User signed in!');
    var profile = googleUser.getBasicProfile();
    //change userName text, img source, & email text based on profile
    $(".userName").text(profile.getName());
    $("img").attr("src", profile.getImageUrl());
    $(".email").text(profile.getEmail());
}

//called when "sign out" button clicked
function onSignOut() {
    //should sign user out and toggleHidden
    var auth2 = gapi.auth2.getAuthInstance();
    auth2.signOut().then(function () {
        console.log('User signed out.')
        //setting back to default
        $(".userName").text("USER_NAME");
        $("img").attr("src", "assets/placeholder.png");
        $(".email").text("example@example.com");
    });
}



var x = 300;
var y = 500;
var img;
var enemyimg;

/*function setup(){
    createCanvas(630,600);
    
    
}

function preload(){
    img = loadImage("spaceshipicon.png");
    enemyimg = loadImage("enemyship.jpg")
}

function draw (){
    background(0);
    image(img, x, y, 50, 50);
    fill("green");
    image(enemyimg,50, 50, 40, 40);
    image(enemyimg,110, 50, 40, 40);
    image(enemyimg,170, 50, 40, 40);
    image(enemyimg,230, 50, 40, 40);
    image(enemyimg,290, 50, 40, 40);
    image(enemyimg,350, 50, 40, 40);
    image(enemyimg,410, 50, 40, 40);
    image(enemyimg,470, 50, 40, 40);
    image(enemyimg,530, 50, 40, 40);
    image(enemyimg,590, 50, 40, 40);
    fill("red");
    
    if (keyIsDown(LEFT_ARROW) && x != 0){
        x-=5;
    } else if (keyIsDown(RIGHT_ARROW) && x != 570){
        x+=5;
    }

    if (x >= 630-60){
        x+=0;
    } else if (x <= 0+30){
        x+=0;
    }
}*/
function setup(){
    createCanvas(700,600);
    
}

function preload(){
    enemyimg = loadImage("enemyship.jpg");
    img = loadImage("spaceshipicon.png");
}

 
var bullet1;
var x = 400;
var motion = 550;
function Enemy(hateX, hateY){
    this.hateX = hateX;
    this.hateY = hateY
}

var enemy1 = new Enemy(50, 50);
var enemy2 = new Enemy(120, 50);
var enemy3 = new Enemy(190, 50);
var enemy4 = new Enemy(260, 50);
var enemy5 = new Enemy(330, 50);
var enemy6 = new Enemy(400, 50);
var enemy7 = new Enemy(470, 50);
var enemy8 = new Enemy(540, 50);
var enemy9 = new Enemy(610, 50);



function Bullet(shootX, shootY){
    this.shootX = shootX;
    this.shootY = shootY;
}

function keyPressed() {
    if (keyCode == 32){
        bullet1 = new Bullet(x, y);

   }
}
var enemies = [];
for (var i = 0; i < 9; i++){
    currentEnemy=newEnemy(i*70, 50)
    enemies.push
}

function draw(){
    stroke("white");
    fill("white");
    background(0);
    image(img, x, y, 50, 50);
 
    image(enemyimg,enemy1.hateX, enemy1.hateY, 40, 40);
    image(enemyimg,enemy2.hateX, enemy2.hateY, 40, 40);
    image(enemyimg,enemy3.hateX, enemy3.hateY, 40, 40);
    image(enemyimg,enemy4.hateX, enemy3.hateY, 40, 40);
    image(enemyimg,enemy5.hateX, enemy3.hateY, 40, 40);
    image(enemyimg,enemy6.hateX, enemy3.hateY, 40, 40);
    image(enemyimg,enemy7.hateX, enemy3.hateY, 40, 40);
    image(enemyimg,enemy8.hateX, enemy3.hateY, 40, 40);
    image(enemyimg,enemy9.hateX, enemy3.hateY, 40, 40);
  

   if (keyIsDown(LEFT_ARROW) && x!=10){
        x -= 5;
    }

   if (keyIsDown(RIGHT_ARROW) && x!=650){
        x += 5;
    }
    
   if (typeof bullet1 !== 'undefined'){
        fill("white");
        ellipse(bullet1.shootX, bullet1.shootY, 5, 5);
        bullet1.shootY -= 10;
        fill(0);
    if (bullet1.shootX >= 20 && bullet1.shootX <= 70 && bullet1.shootY >= 20 && bullet1.shootY <= 70) {
      fill(0);
        }
    }

 

}
