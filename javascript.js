console.log('Hello World')

/* 
Computer generates a random option to play against user
    Generate random integer from 0 to 2
    if 0 choose Rock
    if 1 choose Paper
    if 2 choose Scissors
User is prompted to enter Rock, Paper, or Scissors
    Users entry is made case insensitive
User option is compared to Computer option
  Rock beats Scissors
  Scissors beats Paper
  Paper beats Rock
  Computer and User pick same option results in a tie
Winner is declared for that round
Best of 5

*/

function getComputerChoice() { // Randomly generate computer's choice
  let x = Math.floor(Math.random()* 3); // Generate random integer 0,1,2
  if (x === 0) { // Convert integer to string option
    return("ROCK");
  } else if (x === 1) {
    return("PAPER");
  } else {
    return("SCISSORS");
  }
}

const computerSelection = getComputerChoice();


function playRound(playerSelection, computerSelection) {

}
