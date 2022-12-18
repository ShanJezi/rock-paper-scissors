
let computerSelection;;
let playerSelection;
let computerIcon;
let playerIcon;

let playerScore = 0;
let computerScore = 0;

const container = document.querySelector('.final-result');
const buttons = document.querySelectorAll('.weapon');
const weaponChoices = document.querySelector('weapon-choices');
const rockBtn = document.querySelector('#rock');
const paperBtn = document.querySelector('#paper');
const scissorsBtn = document.querySelector('#scissors');

const rockImg = document.createElement('img');
rockImg.src = ("./icons/rock.png");
rockImg.setAttribute('style', 'width: 100px; height: 100px;');
const paperImg = document.createElement('img');
paperImg.src = ("./icons/copy.png");
paperImg.setAttribute('style', 'width: 100px; height: 100px;');
const scissorsImg = document.createElement('img');
scissorsImg.src = ("./icons/scissors.png");
scissorsImg.setAttribute('style', 'width: 100px; height: 100px;');



const playerChoiceDisplay = document.querySelector('#player-choice');
const computerChoiceDisplay = document.querySelector('#computer-choice');
const roundResultDisplay = document.querySelector('.round-result');
const playerScoreDisplay = document.querySelector('#player-score');
const computerScoreDisplay = document.querySelector('#computer-score');
const finalResultDisplay = document.querySelector('.final-result');

const playAgain = document.createElement('button');
playAgain.classList.add('playAgain');
playAgain.textContent = 'Play Again?';




function getComputerChoice() {
  let x = Math.floor(Math.random()* 3);
  if (x === 0) {
    return("ROCK");
  } else if (x === 1) {
    return("PAPER");
  } else {
    return("SCISSORS");
  }
};



buttons.forEach((button) => {
  button.addEventListener('mouseover', () => {
    button.classList.add('hover');
  });
  button.addEventListener('mouseout', () => {
    button.classList.remove('hover');
  });
  const buttonHandler = () => { // Plays round when clicked
    button.classList.add('select');
    playerSelection = button.id.toUpperCase();
    computerSelection = getComputerChoice();
    playRound(playerSelection, computerSelection);
    if (playerScore === 5 || computerScore === 5) {
      declareWinner();
    }
  };
  button.addEventListener('click', buttonHandler);
  button.addEventListener('transitionend', removeTransition);
});

function removeTransition(e) {
  if(e.propertyName !== 'transform') return;
  this.classList.remove('select');
}

function updateChoices (playerSelection, computerSelection) {
  switch (playerSelection) {
    case 'ROCK':
      playerIcon = rockImg;
      break;

  }
}


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
    result = ('Something went horribly wrong. Try again!')
  }

  updateChoices(playerSelection, computerSelection);

  playerChoiceDisplay.textContent = `You chose ${playerSelection}`;
  computerChoiceDisplay.textContent = `Computer chose ${computerSelection}`;
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
}

playAgain.addEventListener('click', resetGame)

function resetGame() {
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
