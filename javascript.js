

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

let computerSelection;;
let playerSelection;

let playerScore = 0;
let computerScore = 0;

const buttons = document.querySelectorAll('button');

buttons.forEach((button) => {
  button.addEventListener('click', () => {
    console.log(button);
  })
})

function game() { 
  

 // for (let i = 0; i < 5; i++) { // play 5 rounds

 function playRound(playerSelection, computerSelection) {// player selection and computer selection are compared and a winner is declared for that round, score is increased
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

    console.log("Player: ", playerSelection);
    console.log("Computer: ",computerSelection);

  playRound();

    let roundResult = playRound(playerSelection, computerSelection);
    console.log(roundResult)
    console.log('Player: ', playerScore);
    console.log('Computer: ', computerScore);
  }

//}

//game();

let finalResult; // compare final scores from the 5 rounds and declare a winner
if (playerScore > computerScore) {
  finalResult = `You won a total of ${playerScore} rounds to win the game! Take that computer!`
} else if (playerScore < computerScore) {
  finalResult = `You lose! How could you only win ${playerScore} rounds? The computer is far superior.`
} else {
  finalResult = `Tie game! You and the computer both won ${playerScore} rounds. So close!`
}
//console.log(finalResult);
