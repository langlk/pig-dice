# Pig Dice

#### _Epicodus Practice in JavaScript, HTML, and CSS, August 23, 2017_

#### By Kelsey Langlois and Linda Luu

## Description

This is a site that lets two players play [Pig Dice](https://en.wikipedia.org/wiki/Pig_(dice_game)) with each other. The rules of Pig Dice are as follows:

* _Player rolls two dice._
* _If one of the dice is a one, the player's turn is over and they receive no points._
* _If both of the dice are ones, the player's total score is reset to zero and their turn is over._
* _Otherwise, the total of the two dice is added to the turn score._
* _At any point the player can "Hold" and their turn score is added to their total score._
* _First player to 100 wins._

## Setup/Installation Requirements

_To install on your own computer, follow the steps below:_

* Clone this repository
* Open index.html in web browser of your choice

## Specifications

* Program will roll two dice, returning two random numbers from 1 to 6.
  * Example input: [Roll]
  * Example output: 3, 5

* If one die in a roll is a one, turn is over, and turn score of zero is returned.
  * Example input: Roll = 1, 6
  * Example output: Turn Score = 0

* If both dice in a roll are one, turn is over, and player's score is set to zero.
  * Example input: Roll = 1, 1
  * Example output: Player Score = 0

* If both dice roll to numbers besides one, the numbers are added to the turn score.
  * Example input: Roll = 2, 4
  * Example output: Turn Score += 6

* When player chooses to hold, turn is over and turn score is returned.
  * Example input: [Hold]
  * Example output: Turn Score = 6

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

## Support and contact details

_Please contact Kelsey Langlois and Linda Luu with questions, comments, or issues._

## Technologies Used

* HTML
* CSS
* Bootstrap
* JavaScript

### License

Copyright (c) 2017 **Kelsey Langlois, Linda Luu**

*This software is licensed under the MIT license.*
