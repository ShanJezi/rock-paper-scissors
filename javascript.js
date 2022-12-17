
let computerSelection;;
let playerSelection;

let playerScore = 0;
let computerScore = 0;

const container = document.querySelector('.weapon-choices');
const buttons = document.querySelectorAll('.weapon');
const rockBtn = document.querySelector('#rock');
const paperBtn = document.querySelector('#paper');
const scissorsBtn = document.querySelector('#scissors');


const playerChoiceDisplay = document.querySelector('.player-choice');
const computerChoiceDisplay = document.querySelector('.computer-choice');
const roundResultDisplay = document.querySelector('.round-result');
const playerScoreDisplay = document.querySelector('.player-score');
const computerScoreDisplay = document.querySelector('.computer-score');
const finalResultDisplay = document.querySelector('.final-result');

const playAgain = document.createElement('button');
playAgain.classList.add('playAgain');
playAgain.textContent = 'Play Again?';


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


buttons.forEach((button) => {
  const buttonHandler = () => {
    playerSelection = button.id.toUpperCase();
    computerSelection = getComputerChoice();
    playRound(playerSelection, computerSelection);
    if (playerScore === 5 || computerScore === 5) {
      declareWinner();
    }
  };
  button.addEventListener('click', buttonHandler);
})

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
      playerScore++;
  } else if (
    playerSelection === "ROCK" && computerSelection === "PAPER"
    || playerSelection === "PAPER" && computerSelection === "SCISSORS"
    || playerSelection === "SCISSORS" && computerSelection === "ROCK"
  ) {
    result = playerLose;
    computerScore++;
  } else {
    result = ('You did not enter a valid option. Try again!')
  }
  playerChoiceDisplay.textContent = `Player chooses ${playerSelection}`;
  computerChoiceDisplay.textContent = `Computer chooses ${computerSelection}`;
  roundResultDisplay.textContent = result;
  playerScoreDisplay.textContent = `Player Score: ${playerScore}`;
  computerScoreDisplay.textContent = `Computer Score: ${computerScore}`;
}


function declareWinner() {
  let finalResult;
  playerScore > computerScore
  ? (finalResult = `You won the game! The computer only won ${computerScore} rounds! Take that computer!`)
  : (finalResult = `You lose! How could you only win ${playerScore} rounds? The computer is far superior.`)

  finalResultDisplay.textContent = finalResult;
  container.appendChild(playAgain); 
  rockBtn.disabled = true;
  paperBtn.disabled = true;
  scissorsBtn.disabled = true;
}

playAgain.addEventListener('click', resetGame)

function resetGame() {
  rockBtn.disabled = false;
  paperBtn.disabled = false;
  scissorsBtn.disabled = false;
  container.removeChild(playAgain);
  playerScore = 0;
  computerScore = 0;
  playerChoiceDisplay.textContent = '';
  computerChoiceDisplay.textContent = '';
  roundResultDisplay.textContent = '';
  playerScoreDisplay.textContent = '';
  computerScoreDisplay.textContent = ''
  finalResultDisplay.textContent = '';
}
