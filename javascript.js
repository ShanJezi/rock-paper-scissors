// Git push test

/* 
Computer generates a random option to play against user
    Generate random integer from 0 to 2
    if 0 choose Rock
    if 1 choose Paper
    if 2 choose Scissors
User is prompted to enter Rock, Paper, or Scissors
    Users entry is made case insensitive
    Verify user entered a valid option
User option is compared to Computer option
  Rock beats Scissors
  Scissors beats Paper
  Paper beats Rock
  Computer and User pick same option results in a tie
Winner is declared for that round
Best of 5
  Create game function
  Keep track of player score and computer score
  insert playRound function into game function
  Repeat playRound for 5 rounds
  compare final scores
  Declare game winner

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

let playerScore = 0;
let computerScore = 0;

function game() { 
  

  for (let i = 0; i < 5; i++) { // play 5 rounds
    // Get new computer selection each round
    const computerSelection = getComputerChoice();
    // Get new player selection and convert to uppercase
    const playerSelection = prompt("Pick Rock, Paper, or Scissors", '').toUpperCase();
    console.log("Player: ", playerSelection);
    console.log("Computer: ",computerSelection);

    // player selection and computer selection are compared and a winner is declared for that round, score is increased
    function playRound(playerSelection, computerSelection) {
      const playerWin = (`You win this round! ${playerSelection} beats ${computerSelection}!`);
      const playerLose = (`You lose this round! ${computerSelection} beats ${playerSelection}!`);
      const tie = (`This round is a tie! ${playerSelection} and ${computerSelection} are an even match!`);
      let result;
      if (playerSelection === computerSelection) {
        result = tie
      } else if (
        playerSelection === "ROCK" && computerSelection === "SCISSORS"
        || playerSelection === "PAPER" && computerSelection === "ROCK"
        || playerSelection === "SCISSORS" && computerSelection === "PAPER"
        ) {
          result = playerWin;
          playerScore++; // increase playerScore by 1
      } else if (
        playerSelection === "ROCK" && computerSelection === "PAPER"
        || playerSelection === "PAPER" && computerSelection === "SCISSORS"
        || playerSelection === "SCISSORS" && computerSelection === "ROCK"
      ) {
        result = playerLose;
        computerScore++; // increase computerScore by 1
      } else {
        result = ('You did not enter a valid option. Try again!')
      }
      return result;
    }

    let roundResult = playRound(playerSelection, computerSelection);
    console.log(roundResult)
    console.log('Player: ', playerScore);
    console.log('Computer: ', computerScore);
  }

}

game();

let finalResult; // compare final scores from the 5 rounds and declare a winner
if (playerScore > computerScore) {
  finalResult = `You won a total of ${playerScore} rounds to win the game! Take that computer!`
} else if (playerScore < computerScore) {
  finalResult = `You lose! How could you only win ${playerScore} rounds? The computer is far superior.`
} else {
  finalResult = `Tie game! You and the computer both won ${playerScore} rounds. So close!`
}
console.log(finalResult);
