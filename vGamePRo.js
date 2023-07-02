// Array to store the winners
let winners = [];

// Array of choices
const choices = ["rock", "paper", "scissors"];

// Function to reset the game
function resetGame() {
  // Clear the winners array
  winners = [];

  // Reset the scores and hands in the HTML
  document.querySelector(".player-score p").textContent = "0";
  document.querySelector(".computer-score p").textContent = "0";
  document.querySelector(".winner").textContent = "";
  document.querySelector(".player-hand").src = "./assets/rock.png";
  document.querySelector(".computer-hand").src = "./assets/rock.png";

  // Add fade out effect to the match section
  let matchday = document.querySelector(".match")
  matchday.classList.add("fadeOut");
}

// Function to start the game
function startGame() {
// this adds sound to the game after the 'start game' is clicked on and the game starts till the round ends
    var sound = new Howl({
        src: ['./assets/finalsound.mp3']
      });

      
  // Hide the intro and remove fade out effect from the match section when the button is clicked
  document.querySelector(".intro button").addEventListener("click", () => {
    let introScreen = document.querySelector(".intro").style.display = "none";
    document.querySelector(".match").classList.remove("fadeOut");

    sound.play()
  });

  // Add event listeners to the buttons for player's choices
  const buttons = document.querySelectorAll(".options button");
  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      playRound(button.classList[0]);
    });
  });
}

// Function to play a round
function playRound(playerChoice) {
  // Check if any player has already won
  // also reloads the start game screen after 5 tries.
  let wins = checkWins();

  if (wins >= 5) {
  const introScreen = document.querySelector(".intro");
  const matchScreen = document.querySelector(".match");

  introScreen.style.display = "flex";
  matchScreen.style.display = "none";
  resetGame(); // Reset the game when reaching 5 wins
//incomplete, please try hands on to see!
  return;
}


  // Get the computer's choice
  const computerChoice = getComputerChoice();

  // Update the hands with the choices
  updateHands(playerChoice, computerChoice);

  // Determine the winner of the round
  const winner = getWinner(playerChoice, computerChoice);

  // Update the score and display the result
  updateScore(winner);

  // Reset the hands after a delay
  setTimeout(() => {
    resetHands();
  }, 2000);
//plays a sound at the click of a game button
  var sound = new Howl({
    src: ['./assets/rock-sound.mp3']
  });

  sound.play()
}



// Reset the game and start it
resetGame();
startGame();
