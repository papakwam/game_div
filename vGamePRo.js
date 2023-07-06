// Array to store the winners of each round
let winners = [];

// Variables to keep track of the current number of wins for the player and the computer
let playerNumberOfWins = 0;
let computerNumberOfWins = 0;

// Array of available choices for the game
const choices = ["rock", "paper", "scissors"];

// Function to reset the game
function resetGame() {
  // Resets the winners array
  winners = [];

  // Resets the player and computer scores to zero
  document.querySelector(".player-score p").textContent = "0";
  document.querySelector(".computer-score p").textContent = "0";

  // Clears the winner display
  document.querySelector(".winner").textContent = "";

  // Resets the hand images to display the rock image
  document.querySelector(".player-hand").src = "./assets/rock.png";
  document.querySelector(".computer-hand").src = "./assets/rock.png";

  // Add the "fadeOut" class to fade out the match section
  document.querySelector(".match").classList.add("fadeOut");

  // Displays the intro section
  document.querySelector(".intro").style.display = "flex";
}

// Function to start the game
function startGame() {
  // Adds event listener to the start game button in the intro section
  document.querySelector(".intro button").addEventListener("click", () => {
    // Hide the intro section
    document.querySelector(".intro").style.display = "none";

    // Removes the "fadeOut" class to fade in the match section
    document.querySelector(".match").classList.remove("fadeOut");

    // Plays a sound using the Howler library
    var sound = new Howl({
      src: ["./assets/finalsound.mp3"],
      html5: true,
    });
    sound.play();
  });

  // Selects all the buttons in the options section
  const buttons = document.querySelectorAll(".options button");



  // Adds click event listeners to each button
  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      // Calls the playRound function with the class name of the clicked button as the argument
      playRound(button.classList[0]);

      // Resets the hand images to display the rock image after a delay of 3 seconds
      setTimeout(() => {
        document.querySelector(".player-hand").src = "./assets/rock.png";
        document.querySelector(".computer-hand").src = "./assets/rock.png";
      }, 3000);
    });
  });
}

// Function to play a round of the game
function playRound(playerChoice) {
  // Generates the computer's choice
  const computerChoice = getComputerChoice();

  // Selects the player's and computer's hand elements in the HTML
  const playerHand = document.querySelector(".player-hand");
  const computerHand = document.querySelector(".computer-hand");

  // Updates the source (src) attribute of the player's and computer's hand images to display the corresponding images based on the choices made
  playerHand.src = `./assets/${playerChoice}.png`;
  computerHand.src = `./assets/${computerChoice}.png`;

  // Compares the player's choice and the computer's choice to determine the winner
  if (playerChoice === computerChoice) {
    // Displays "It's a tie!" in the winner display
    document.querySelector(".winner").textContent = "It's a tie!";
  } else if (
    (playerChoice === "rock" && computerChoice === "scissors") ||
    (playerChoice === "paper" && computerChoice === "rock") ||
    (playerChoice === "scissors" && computerChoice === "paper")
  ) {
    // Displays "You win!" in the winner display
    document.querySelector(".winner").textContent = "You win!";

    // Updates the player's score
    updateScore(".player-score p", "player");
  } else {
    // Displays "Computer wins!" in the winner display
    document.querySelector(".winner").textContent = "Computer wins!";

    // Update the computer's score
    updateScore(".computer-score p", "computer");
  }
}

// Function to generate a random computer choice from the available choices
function getComputerChoice() {
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
}

// Function to update the score based on the winner of a round
function updateScore(scoreSelector, competitor) {
  // Selects the score element using the provided scoreSelector
  const scoreElement = document.querySelector(scoreSelector);

  // Parse the current score from the score element's text content and increment it by 1
  let score = parseInt(scoreElement.textContent);
  score++;
  // Updates the number of wins for the player or the computer based on the competitor
  if (competitor === "player") {
    playerNumberOfWins = score;
  } else {
    computerNumberOfWins = score;
  }
  scoreElement.textContent = score.toString();

  // Logs the current number of wins for the player and the computer to the console
  console.log("player number of wins is " + playerNumberOfWins);
  console.log("computer number of wins is " + computerNumberOfWins);

  // Checks if either the player or the computer has reached 5 wins
  if (playerNumberOfWins === 5 || computerNumberOfWins === 5) {
    // Displays the appropriate message in the intro heading based on the winner
    if (playerNumberOfWins > computerNumberOfWins) {
      document.querySelector(".intro > h1").textContent = "You Won!!!";

      
    } else {
      document.querySelector(".intro > h1").textContent = "Computer  Won!!!";
    }

    // Resets the game and starts a new game
    resetGame()
  }
}
startGame();