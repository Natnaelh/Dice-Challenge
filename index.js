var randomNumber1 = Math.floor(Math.random()*6)+1;
var randomNumber2 = Math.floor(Math.random()*6)+1;

var randomImageSource1 = "images/dice"+randomNumber1+".png";
var randomImageSource2 = "images/dice"+randomNumber2+".png";

document.querySelectorAll("img")[0].setAttribute("src",randomImageSource1);
document.querySelectorAll("img")[1].setAttribute("src",randomImageSource2);


var whoWins = document.querySelector("h1");

function winner(score1, score2){
  if (score1 > score2){
    whoWins.innerHTML = "Player 1 Wins"
  }
  else if(score2 > score1){
    whoWins.innerHTML = "Player 2 Wins"
  }
  else{
    whoWins.innerHTML = "No one Wins"
  }
}

winner(randomNumber1,randomNumber2);
