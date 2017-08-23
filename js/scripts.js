function Player(name, initialScore) {
  this.name = name;
  this.score = initialScore;
}

Player.prototype.isWinner = function() {
  return this.score >= 100;
}

function Game(player1, player2) {
  this.activePlayer = player1;
  this.inactivePlayer = player2;
  this.turnScore = 0;
}

Game.prototype.endTurn = function() {
  this.activePlayer.score += this.turnScore;
  var lastPlayer = this.activePlayer;
  this.activePlayer = this.inactivePlayer;
  this.inactivePlayer = lastPlayer;
  this.turnScore = 0;
  console.log("End of turn");
}

function diceRoll(){
  return parseInt(Math.random() * (7 - 1) + 1);
}

Game.prototype.roll= function() {
  var roll = diceRoll();
  if (roll === 1) {
    this.turnScore = 0;
    this.endTurn();
  } else {
    this.turnScore += roll;
  }
}

function gameSetUp(game) {
  $(".player1").text(game.activePlayer.name);
  $(".player2").text(game.inactivePlayer.name);
  $("#player1-score").text(game.activePlayer.score);
  $("#player2-score").text(game.inactivePlayer.score);
  $("#player-turn").text(game.activePlayer.name);
}

$(document).ready(function(){
  $("#newGame").submit(function(event) {
    event.preventDefault();
    var player1Input = $("input#player1-name").val();
    var player2Input = $("input#player2-name").val();
    var player1 = new Player(player1Input, 0);
    var player2 = new Player(player2Input, 0);
    var newGame = new Game(player1, player2);
    gameSetUp(newGame)
    $("button#hold").click(function() {
      newGame.endTurn();
      console.log(newGame);
    });
    $("button#roll").click(function() {
      newGame.roll()
      console.log(newGame);
    });
    // while(!player1.isWinner() && !player2.isWinner()) {
    //   player1.score += turn(player1);
    //   console.log("Player 1's Score is " + player1.score);
    //   if (player1.isWinner()) {
    //     break;
    //   }
    //   player2.score += turn(player2);
    //   console.log("Player 2's Score is " + player2.score);
    // }
    // if (player1.isWinner()) {
    //   console.log("Player 1 Wins!");
    // } else {
    //   console.log("Player 2 Wins!");
    // }
  });
});
