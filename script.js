let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

let generateTarget = () => {
  return Math.floor(Math.random() * 10);
};
let compareGuesses = (userGuess, computerGuess, generateTarget) => {
  const userDifference = Math.abs(generateTarget - userGuess);
  const computerDifference = Math.abs(generateTarget - computerGuess);

  if (userDifference <= computerDifference) {
    return true;
  } else {
    return false;
  }
};

let updateScore = (winner) => {
  if (winner === "human") {
    humanScore++;
  } else if (winner === "computer") {
    computerScore++;
  }
};

let advanceRound = () => {
  currentRoundNumber++;
};
