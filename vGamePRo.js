let winners = []; //Array to store winners
const choices = ["rock", "paper", "scissors"]; //Array of choices

function resetGame() {
  winners = [];
  document.querySelector(".player-score p").textContent = "0";
  document.querySelector(".computer-score p").textContent = "0";
  document.querySelector(".winner").textContent = "";
  document.querySelector(".player-hand").src = "./assets/rock.png";
  document.querySelector(".computer-hand").src = "./assets/rock.png";
  document.querySelector(".match").classList.add("fadeOut");
}
// Reset the scores and hands in the HTML

function startGame() {
  // Hide the introduction and remove fadeOut class from match element
  document.querySelector(".intro button").addEventListener("click", () => {
    document.querySelector(".intro").style.display = "none";
    document.querySelector(".match").classList.remove("fadeOut");
    var sound = new Howl({
              src: ['./assets/finalsound.mp3']
               });

               sound.play()
  
  });
  // Add click event listeners to option buttons
  const buttons = document.querySelectorAll(".options button");
  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      playRound(button.classList[0]);
    });
  });
}

function playRound(playerChoice) {
  let wins = checkWins();
  if (wins >= 5) {
    return;
  }
}
function getComputerChoice() {
    // Generate a random index to select a choice from the choices array
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
  }

function updateHands(playerChoice, computerChoice) {
    document.querySelector(".player-hand").src = `./assets/${playerChoice}.png`;
    document.querySelector(".computer-hand").src = `./assets/${computerChoice}.png`;
   }
   
   function resetHands() {
    document.querySelector(".player-hand").src = "./assets/rock.png";
    document.querySelector(".computer-hand").src = "./assets/rock.png";
   }

resetGame()
startGame()