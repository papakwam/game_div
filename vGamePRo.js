let winners = []; //Array to store winners
let playerNumberOfWins = 0; // Current number of wins for the player
let computerNumberOfWins = 0; //Current number of wins for Computer
const choices = ["rock", "paper", "scissors"]; //Array of choices

function resetGame() {
  winners = [];
  document.querySelector(".player-score p").textContent = "0";
  document.querySelector(".computer-score p").textContent = "0";
  document.querySelector(".winner").textContent = "";
  document.querySelector(".player-hand").src = "./assets/rock.png";
  document.querySelector(".computer-hand").src = "./assets/rock.png";
  document.querySelector(".match").classList.add("fadeOut");
  document.querySelector(".intro").style.display = "flex"; // Display the intro div once again
}

function startGame() {
  document.querySelector(".intro button").addEventListener("click", () => {
    document.querySelector(".intro").style.display = "none";
    document.querySelector(".match").classList.remove("fadeOut");
    var sound = new Howl({
      src: ['./assets/finalsound.mp3'],
      html5: true
    });
    sound.play();
  });

  const buttons = document.querySelectorAll(".options button");
  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      playRound(button.classList[0]);
    });
  });
}

function playRound(playerChoice) {
  const computerChoice = getComputerChoice();
  const playerHand = document.querySelector(".player-hand");
  const computerHand = document.querySelector(".computer-hand");

  playerHand.src = `./assets/${playerChoice}.png`;
  computerHand.src = `./assets/${computerChoice}.png`;

  if (playerChoice === computerChoice) {
    document.querySelector(".winner").textContent = "It's a tie!";
  } else if (
    (playerChoice === "rock" && computerChoice === "scissors") ||
    (playerChoice === "paper" && computerChoice === "rock") ||
    (playerChoice === "scissors" && computerChoice === "paper")
  ) {
    document.querySelector(".winner").textContent = "You win!";
    updateScore(".player-score p", "player");
  } else {
    document.querySelector(".winner").textContent = "Computer wins!";
    updateScore(".computer-score p", "computer");
  }
}

function getComputerChoice() {
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
}

function updateScore(scoreSelector, competitor) {
  const scoreElement = document.querySelector(scoreSelector);
  let score = parseInt(scoreElement.textContent);
  score++;

  // Check the type of competitor and update its number of wins with the current score
  if (competitor === "player") {
    playerNumberOfWins = score;
  }
  else {
    computerNumberOfWins = score;
  }
  scoreElement.textContent = score.toString();

  console.log("player number of wins is " + playerNumberOfWins);
  console.log("computer number of wins is " + computerNumberOfWins);
  if (playerNumberOfWins === 5 || computerNumberOfWins === 5) {
    //first player to reach 5 wins  is the winner!!
    if (playerNumberOfWins > computerNumberOfWins) {
      document.querySelector(".intro > h1").textContent = "YOU WON!!!!";
    }
    else {
      document.querySelector(".intro > h1").textContent = "YOU LOST!!!!";
    }


    // reset game
    resetGame();
  }
}


startGame();
