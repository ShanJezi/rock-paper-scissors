

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
  Repeat playRound until player or computer score is 5
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





// player selection and computer selection are compared and a winner is declared for that round
function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    return ("Tie")
  } else if (
    playerSelection === "ROCK" && computerSelection === "SCISSORS"
    || playerSelection === "PAPER" && computerSelection === "ROCK"
    || playerSelection === "SCISSORS" && computerSelection === "PAPER"
    ) {
      return (`You win! ${playerSelection} beats ${computerSelection}!`)
  } else if (
    playerSelection === "ROCK" && computerSelection === "PAPER"
    || playerSelection === "PAPER" && computerSelection === "SCISSORS"
    || playerSelection === "SCISSORS" && computerSelection === "ROCK"
  ) {
    return (`You lose! ${computerSelection} beats ${playerSelection}!`)
  } else {
    return ('You did not enter a valid option. Try again!')
  }
}



function game() { 
  let playerScore = 0;
  let computerScore = 0;
  
  for (let i = 0; i < 5; i++) { // play 5 rounds
    // Get new computer selection each round
    const computerSelection = getComputerChoice();
    // Get new player selection and convert to uppercase
    const playerSelection = prompt("Pick Rock, Paper, or Scissors", '').toUpperCase();
    console.log("Player: ", playerSelection);
    console.log("Computer: ",computerSelection);

    playRound(playerSelection, computerSelection);
    console.log(playRound(playerSelection, computerSelection))
  }
}

game()

