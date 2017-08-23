function Player(name, initialScore) {
  this.name = name;
  this.score = initialScore;
}

Player.prototype.isWinner = function() {
  return this.score >= 100;
}

function diceRoll(){
  return parseInt(Math.random() * (7 - 1) + 1);
}

function turn(player){
  var roll = diceRoll();
  var action = " ";
  var total = 0;
  while (roll !== 1){
    total += roll;
    action = promptPlayer(player,total);
    if (action === "hold") {
      return total;
    } else {
      roll = diceRoll();
    }
  }
  alert("You rolled a one!");
  return 0;
}

function promptPlayer(player, score) {
  var action = prompt(player.name + ", your score is " + score + ". Roll or Hold?");
  return action.toLowerCase();
}

$(document).ready(function(){
  var player1 = new Player("Kelsey",0);
  var player2 = new Player("Linda", 0);
  while(!player1.isWinner() && !player2.isWinner()) {
    player1.score += turn(player1);
    console.log("Player 1's Score is " + player1.score);
    if (player1.isWinner()) {
      break;
    }
    player2.score += turn(player2);
    console.log("Player 2's Score is " + player2.score);
  }
  if (player1.isWinner()) {
    console.log("Player 1 Wins!");
  } else {
    console.log("Player 2 Wins!");
  }
});
