const choices = ["rock", "paper", "scissors"];
const winners = [];

function game() {
  for (let i = 1; i <= 5; i++) {
    playRound(i);
  }
  winCounter();
}

function computerChoice() {
  return choices[Math.floor(Math.random() * choices.length)];
}

function playRound(round) {
  const playerSelection = playerChoice();
  const computerSelection = computerChoice();
  const winner = checkWinner(playerSelection, computerSelection);
  winners.push(winner);
  logRound(playerSelection, computerSelection, winner, round);
}

function playerChoice() {
  let input = prompt("Rock, Paper, or Scissors?");
  while (input == null) {
    input = prompt("Rock, paper, or Scissors?");
  }
  input = input.toLowerCase();
  let check = validateInput(input);
  while (check == false) {
    input = prompt(
      "Type rock, paper, or scissors. Spelling needs to be exact, but capitalization does not matter"
    );
    while (input == null) {
      input = prompt("Rock, paper, or Scissors?");
    }
    input = input.toLowerCase();
    check = validateInput(input);
  }
  return input;
}

function validateInput(choice) {
  if (choices.includes(choice)) {
    return true;
  }
  return false;
}

function checkWinner(choicePlayer, choiceComputer) {
  if (choicePlayer === choiceComputer) {
    return "It's a tie!";
  } else if (
    (choicePlayer === "rock" && choiceComputer === "scissors") ||
    (choicePlayer === "paper" && choiceComputer === "rock") ||
    (choicePlayer === "scissors" && choiceComputer === "paper")
  ) {
    return "You win!";
  } else {
    return "You lose!";
  }
}

function winCounter() {
  let playerWins = winners.filter((wins) => wins == "You win!").length;
  let computerWins = winners.filter((wins) => wins == "You lose!").length;
  let ties = winners.filter((wins) => wins == "It's a tie!").length;
  console.log("Results:");
  console.log("Player Wins:", playerWins);
  console.log("Computer Wins:", computerWins);
  console.log("Ties:", ties);
}

function logRound(playerChoice, computerChoice, winner, round) {
  console.log("Round", round);
  console.log("You chose ", playerChoice);
  console.log("Computer chose ", computerChoice);
  console.log(winner, "wins the round!");
  console.log("---------------------------");
}

game();
