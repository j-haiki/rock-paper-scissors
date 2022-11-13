// make random choice between 3 results
// 0 rock 1 paper 2 scissors
// let player choose an option
// compare between computer choice and player choice
// repeat 5 times

function computer() {
  let computerRNG = Math.floor(Math.random() * 2.99999999999);
  if (computerRNG == 0) {
    return "rock";
  } else if (computerRNG == 1) {
    return "paper";
  } else if (computerRNG == 2) {
    return "scissors";
  }
}

function player() {
  choice = prompt("make a choice!").toLowerCase();
  alert(`You chose ${choice}`);
  return choice;
}

let playerScore = 0;
let computerScore = 0;
let drawScore = 0;

function playRound(player, computer) {
  if (player == computer) {
    drawScore++;
    return "it's a tie";
  } else if (player == "rock" && computer == "scissors") {
    playerScore++;
    return "You Win! Rock beats Scissors";
  } else if (player == "rock" && computer == "paper") {
    computerScore++;
    return "You Lose! Paper beats Rock";
  } else if (player == "paper" && computer == "rock") {
    playerScore++;
    return "You Win! Paper beats Rock";
  } else if (player == "paper" && computer == "scissors") {
    computerScore++;
    return "You Lose! Scissors beats Paper";
  } else if (player == "scissors" && computer == "paper") {
    playerScore++;
    return "You Win! Scissors beats Paper";
  } else if (player == "scissors" && computer == "rock") {
    computerScore++;
    return "You Lose! Rock beats Scissors";
  } else if (player == "scissor" && computer == "paper") {
    playerScore++;
    return "You Win! Scissors beats Paper";
  } else if (player == "scissor" && computer == "rock") {
    computerScore++;
    return "You Lose! Rock beats Scissors";
  } else {
    computerScore++;
    return "You Lose! Please enter a valid choice next time"; // this is intentionally mean
  }
}

function game() {
  for (let i = 1; i <= 5; i++) {
    console.log(
      `ROUND: ${i} ${playRound(
        player(),
        computer()
      )} player: ${playerScore} Computer: ${computerScore}`
    );
  }

  if (playerScore > computerScore) {
    console.log("You Win!");
  } else if (computerScore > playerScore) {
    console.log("You Lose!");
  } else {
    console.log("its a Draw!");
  }
  console.log(
    `Final scores: You:${playerScore} Computer:${computerScore} Draws:${drawScore}`
  );
}

game();
