function diceRoll(){
  return parseInt(Math.random() * (7 - 1) + 1);
}

function turn(){
  var roll = diceRoll();
  console.log(roll);
  if (roll === 1){
    return 0;
  }
}



$(document).ready(function(){
  console.log(turn());
});
