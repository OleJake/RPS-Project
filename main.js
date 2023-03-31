const choices = ["rock", "paper", "scissors"];

function game() {
  playRound();
}

function computerChoice() {
  return choices[Math.floor(Math.random() * choices.length)];
}

function playRound() {
  const playerSelection = playerChoice();
  const computerSelection = computerChoice();
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
}

function validateInput(choice) {
  if (choices.includes(choice)) {
    return true;
  }
  return false;
}

game();
