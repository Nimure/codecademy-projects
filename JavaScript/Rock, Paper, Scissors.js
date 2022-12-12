//fucntion for user choice
const getUserChoice = userInput => {
    userInput = userInput.toLowerCase();
    if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors' || userInput === 'bomb'){
      return userInput;
    } else {
      console.log('Error: User must pick rock, paper, or scissors.');
    }
  };
  
//console.log(getUserChoice('rock'));

//function for computer choice
const getComputerChoice = () => {
    num = Math.floor(Math.random() * 3);
    if (num === 0){
      return 'rock';
    } else if (num === 1){
      return 'paper';
     } else if (num === 2){
      return 'scissors';
    };
};

//console.log(getComputerChoice());

// function to determine winner
const determineWinner = (userChoice, computerChoice) => {
  if (userChoice === computerChoice) {
    return 'The game was a tie!';
  } 
  if (userChoice === 'rock') {
    if (computerChoice === 'paper') {
      return 'Sorry, computer won!';
    } else {
      return 'Congrats! You won!';
    }
  }
  if (userChoice === 'paper') {
    if (computerChoice === 'scissors') {
      return 'Sorry, computer won!';
    } else {
      return 'Congrats! You won!';
    }
  }
  if (userChoice === 'scissors') {
    if (computerChoice === 'rock') {
      return 'Sorry, computer won!';
    } else {
      return 'Congrats! You Won!';
    }
  }
  if (userChoice === 'bomb') {
    return 'Congrats! You Won!';
  }
};

/* Function test:
console.log(determineWinner('rock', 'scissors'));
console.log(determineWinner('rock', 'paper'));
console.log(determineWinner('rock', 'rock')); */

//funtion to play game and log results
const playGame = () => {
  const userChoice = getUserChoice('rock');
  const computerChoice = getComputerChoice();
  console.log(`You chose: ${userChoice}`)
  console.log(`Computer chose: ${computerChoice}`)
  console.log(determineWinner(userChoice, computerChoice));
};

playGame()