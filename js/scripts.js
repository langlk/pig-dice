function diceRoll(){
  return parseInt(Math.random() * (7 - 1) + 1);
}

function turn(){
  var roll = diceRoll();
  var action = " ";
  var total = 0;
  while (roll !== 1){
    total += roll;
    action = promptPlayer(total);
    if (action === "hold") {
      return total;
    } else {
      roll = diceRoll();
    }
  }
  alert("You rolled a one!");
  return 0;
}

function promptPlayer(score) {
  var action = prompt("Your score is " + score + ". Roll or Hold?");
  return action.toLowerCase();
}

$(document).ready(function(){
  console.log(turn());
});
