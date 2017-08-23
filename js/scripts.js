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
  this.lastRoll = 0;
}

Game.prototype.endTurn = function() {
  this.activePlayer.score += this.turnScore;
  if (this.activePlayer.isWinner()) {
    alert(this.activePlayer.name + "Wins!");
  }
  var lastPlayer = this.activePlayer;
  this.activePlayer = this.inactivePlayer;
  this.inactivePlayer = lastPlayer;
  this.turnScore = 0;
  this.lastRoll = 0;
  console.log("End of turn");
}

function diceRoll(){
  return parseInt(Math.random() * (7 - 1) + 1);
}

Game.prototype.roll= function() {
  this.lastRoll = diceRoll();
  if (this.lastRoll === 1) {
    this.turnScore = 0;
    this.endTurn();
  } else {
    this.turnScore += this.lastRoll;
  }
}

function gameSetUp(game) {
  $(".player1").text(game.activePlayer.name);
  $(".player2").text(game.inactivePlayer.name);
  $("#player1-score").text(game.activePlayer.score);
  $("#player2-score").text(game.inactivePlayer.score);
  $("#player-turn").text(game.activePlayer.name);
}

function updateTurn(game) {
  $("#player-turn").text(game.activePlayer.name);
  $("#roll").text(game.lastRoll);
  $("#turn-score").text(game.turnScore);
}

function updateScoreboard(player1, player2) {
  $("#player1-score").text(player1.score);
  $("#player2-score").text(player2.score);
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
      updateTurn(newGame);
      updateScoreboard(player1, player2);
      console.log(newGame);
    });
    $("button#roll").click(function() {
      newGame.roll()
      updateTurn(newGame);
      console.log(newGame);
    });
  });
});
