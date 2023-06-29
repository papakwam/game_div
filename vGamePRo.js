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
  document.querySelector(".intro button").addEventListener("click", () => {
    document.querySelector(".intro").style.display = "none";
    document.querySelector(".match").classList.remove("fadeOut");
  });
}
