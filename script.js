// Function to randomly select computer's choice
function computerChoice() {
    const choices = ["rock", "paper", "scissors"];
    return choices[Math.floor(Math.random() * choices.length)];
  }
  
  // Function to determine the winner
  function decideWinner(playerChoice, computerChoice) {
    if (
      (playerChoice === "rock" && computerChoice === "scissors") ||
      (playerChoice === "paper" && computerChoice === "rock") ||
      (playerChoice === "scissors" && computerChoice === "paper")
    ) {
      return "You win!";
    } else if (
      (playerChoice === "rock" && computerChoice === "paper") ||
      (playerChoice === "paper" && computerChoice === "scissors") ||
      (playerChoice === "scissors" && computerChoice === "rock")
    ) {
      return "You lose!";
    } else {
      return "It's a tie!";
    }
  }
  
  // Function to handle game play
  function playGame(playerChoice) {
    const computer = computerChoice();
    const result = decideWinner(playerChoice, computer);
    document.getElementById("result").textContent = result;
  }
  