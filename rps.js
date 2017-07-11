var playerChoice = prompt("Rock, Paper or Scissors");
var choices = ["Rock","Paper","Scissors"];
var compChoice = choices[Math.floor(Math.random()*3)];

if (playerChoice == "Rock" && compChoice == "Paper"){
    console.log("You have won");
} else if (playerChoice == "Rock" && compChoice == "Scissors"){
    console.log("You have won");
} else if (playerChoice == "Paper" && compChoice == "Rock"){
    console.log("You have won");
} else if (playerChoice == "Paper" && compChoice == "Scissors"){
    console.log("You have lost");
} else if (playerChoice == "Scissors" && compChoice == "Paper"){
    console.log("You have won");
} else if (playerChoice == "Scissors" && compChoice == "Rock"){
    console.log("You have lost");
} else if (playerChoice == compChoice){
    console.log("It is a tie");
}



