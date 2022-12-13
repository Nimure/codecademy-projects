let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:

const generateTarget = () => {
  return randomNumber = Math.floor(Math.random() * 10)
};

const compareGuesses = (userGuess, computerGuess, secretNum) => {
  const absUser = Math.abs(secretNum - userGuess)
  const absComp = Math.abs(secretNum - computerGuess)
  if (absUser < absComp) {
    return true
  }
  if (absComp < absUser) {
    return false
  }
   if (absComp === absUser) {
    return true
  }
};

const updateScore = (winner) => {
  if (winner === 'human') {
    humanScore += 1
  }
  if (winner === 'computer') {
    computerScore =+ 1
  }
};

const advanceRound = () => {
  currentRoundNumber += 1
};