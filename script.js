let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
const generateTarget = () => {
  return Math.floor(Math.random() * 10);
}

const compareGuesses = (humanGuess, computerGuess, targetNum) => {
  if (Math.abs(computerGuess - targetNum) === Math.abs(humanGuess - targetNum)) {
    return true;
  } else if (Math.abs(humanGuess - targetNum) < Math.abs(computerGuess - targetNum)) {
    return true;
  } else if (Math.abs(computerGuess - targetNum) < Math.abs(humanGuess - targetNum)) {
    return false;
  } 
}

const updateScore = winner => {
  winner++;
}

const advanceRound = () => {
  currentRoundNumber++;
}