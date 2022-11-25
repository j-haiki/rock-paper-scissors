// make random choice between 3 results
// 0 rock 1 paper 2 scissors
// let player choose an option
// compare between computer choice and player choice
// repeat 5 times
//--------

function computerChoice() {
  let computerRNG = Math.floor(Math.random() * 2.99999999999);
  if (computerRNG == 0) {
    return "rock";
  } else if (computerRNG == 1) {
    return "paper";
  } else if (computerRNG == 2) {
    return "scissors";
  }
}

let playerScore = 0;
let computerScore = 0;
let drawScore = 0;

function playRound(player, computer) {
  console.log("pog");
  if (player == computer) {
    drawScore++;
    //("it's a tie");
  } else if (player == "rock" && computer == "scissors") {
    playerScore++;
    //alert("You Win! Rock beats Scissors");
  } else if (player == "rock" && computer == "paper") {
    computerScore++;
    //alert("You Lose! Paper beats Rock");
  } else if (player == "paper" && computer == "rock") {
    playerScore++;
    //alert("You Win! Paper beats Rock");
  } else if (player == "paper" && computer == "scissors") {
    computerScore++;
    //alert("You Lose! Scissors beats Paper");
  } else if (player == "scissors" && computer == "paper") {
    playerScore++;
    //alert("You Win! Scissors beats Paper");
  } else if (player == "scissors" && computer == "rock") {
    computerScore++;
    //alert("You Lose! Rock beats Scissors");
  }
  youChose = document.getElementById("selection");
  youChose.innerText = `You Chose ${player} Computer Chose ${computer}`;

  resultUpdate = document.getElementById("results");
  resultUpdate.innerText = `Player: ${playerScore}⠀⠀⠀⠀Computer: ${computerScore}⠀⠀⠀⠀Draws: ${drawScore}`;

  if (playerScore == 5) {
    playerScore = 0;
    computerScore = 0;
    drawScore = 0;
    youChose.innerText = `You Win!!`;
  } else if (computerScore == 5) {
    playerScore = 0;
    computerScore = 0;
    drawScore = 0;
    youChose.innerText = `You Lose :(`;
  }
  //return resultUpdate;
}
