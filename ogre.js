var HP = 100;
var gold=0;
var numberDefeated=0;

function updateStats(){
$('#stats').text("HP: " + HP + "//Gold: " + gold + "//DEAD: " + numberDefeated);
}

function attack(){
    //When Player wins gold
    if(HP > 0){
        if(Math.random()*100>gold) {
            gold= gold+=10;
            numberDefeated++;
            $('#ogres').prepend(
                "<p style='color:green'>You WON 10 gold coins.</p>"
            );
        //When player loses 
        } else {
            gold--;
            HP--;
            $('ogres').prepend(
                "<p style='color: red'> YOU LOST -1 gold.</p>"
            );
        }
        updateStats();
        makeOgre();
    } else{
    $('#ogres').prepend(
        "<h1> GAME OVER!!!!!!!! </h1>"
    );
    }
}
function makeOgre(){
    $('#ogres').prepend(
        "<img src = 'https://media.licdn.com/mpr/mpr/shrinknp_200_200/AAEAAQAAAAAAAAwRAAAAJGUwYjdiODExLTg5OGQtNGNhNi1hOTRiLTJlOTQ3Nzg1NGFiMA.jpg'>"
    );
}

function setup(){
//Title
$("body").append(
    "<h1> Welcome to Ogre Fighter!!!!! </h1>"
    );

//Adds "stats" section which will be updated later
$("body").append(
    "<div> <h3> STATS </h3><p id ='stats'></p></div>"
);

//add an attack button
$("body").append(

"<button onClick='attack()'> Attack the OGRE! </button>"
);

$("body").append(
    "<div id= 'ogres'></div>"
);
$("body").css("background-color", "black");
$("body").css("color", "white");
$()

updateStats();


}

$(document).ready(setup);



