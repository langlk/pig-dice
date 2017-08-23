# Pig Dice

## Specifications

* Program will roll die, returning a random number from 1 to 6.
  * Example input: [Roll]
  * Example output: 3

* If roll is a one, turn is over, and turn score of zero is returned.
  * Example input: Roll = 1
  * Example output: Turn Score = 0

* If roll is a number besides one, the number is added to the turn score.
  * Example input: Roll = 2
  * Example output: Turn Score += 2

* When player chooses to hold, turn is over and turn score is returned.
  * Example input: [Hold]
  * Example output: Turn Score = 2

* Program tracks a player's total score.
  * Example input: Total Score += 10
  * Example output: Total Score = 10

* Program adds a player's turn score to the total score at end of turn.
  * Example input: Turn Score = 5
  * Example output: Total Score = Total Score + 5

* If player's total score reaches 100, they are the winner.
  * Example input: Total Score = 101
  * Example output: "You win!"

* Program tracks two player's total scores.
  * Example input: Player1 Score = 0, Player2 Score = 0
  * Example output: Player1 Score = 0, Player2 Score = 0

* Program alternates players' turns.
  * Example Input: [Player1 Holds]
  * Example Output: "Player2's turn!"
