const MAP_CHOICES = {
  ROCK: 'rock',
  PAPER: 'paper',
  SCISSORS: 'scissors'
}

const getComputerChoice = () => {
  const choices = Object.values(MAP_CHOICES)

  return choices[Math.floor(Math.random() * choices.length)]
}

const getHumanChoice = () => {
  const input = prompt('Make your choice...')

  if (!input) {
    return getHumanChoice()
  }

  const inputPhrase = String(input).toLowerCase().trim()

  return Object.values(MAP_CHOICES).includes(inputPhrase) ? inputPhrase : getHumanChoice()
}

const playGame = () => {
  let humanScore = 0;
  let computerScore = 0;

  const playRound = (humanChoice, computerChoice) => {
    if (humanChoice === computerChoice) {
      console.log('It\'s a tie!');
    }
    else if ((humanChoice === 'rock' && computerChoice ==='scissors') ||
      (humanChoice === 'paper' && computerChoice === 'rock') ||
      (humanChoice ==='scissors' && computerChoice === 'paper')) {
        console.log(`You win! ${humanChoice} beats ${computerChoice}.`);
        humanScore++;
      }
      else {
        console.log(`Computer wins! ${computerChoice} beats ${humanChoice}.`);
        computerScore++;
      }
  }

  for (let i = 0; i < 5; i++) {
    playRound(getHumanChoice(), getComputerChoice());
    console.log(`Human vs Computer:\n ${humanScore} – ${computerScore}`);
  }
}

playGame();
