
const game = () =>{
    let pScore = 0;
    let cScore =0; 
    
   
    const startGame = () => {
        const playBtn = document.querySelector('.intro button');
        const introScreen = document.querySelector('.intro');
        const match = document.querySelector('.match')


        playBtn.addEventListener('click', ()=>{
            introScreen.classList.add('fadeOut');
            match.classList.add('fadeIn')
        })
    }

const playMatch = () => {
  
    const options = document.querySelectorAll('.options button');
    const playerHand = document.querySelector('.player-hand');
    const computerHand = document.querySelector('.computer-hand')

    const computerOptions = ['rock', 'paper', 'scissors'];
    

options.forEach(options =>{ 
    options.addEventListener('click', function(){
        var sound = new Howl({
            src: ['./assets/rock-sound.mp3']
          });
        sound.play()
        const computerNum= Math.floor(Math.random()*3);
        const computerChoice = computerOptions[computerNum];
    const playerChoice = options.textContent;
        compareHands(playerChoice,computerChoice)

        playerHand.src=`./assets/${playerChoice}.png`;
        computerHand.src=`./assets/${computerChoice}.png`;


    })
} )


}

const updateScore = () => {
     let playerScore = document.querySelector('.player-score p');
     let computerScore = document.querySelector('.computer-score p')
     playerScore.textContent = pScore
     computerScore.textContent = cScore
    }


const compareHands = (playerChoice,computerChoice) => {
    const winner = document.querySelector('.winner')
if (playerChoice === computerChoice) {
    winner.textContent = 'It is a tie';
    return;
}
if (playerChoice === 'rock') {
    if (computerChoice === 'scissors') {
        winner.textContent = 'Player wins!'
        pScore++
        updateScore()
        return;
    } else {
        winner.textContent = 'Computer wins!'
        cScore++
        updateScore()
        return
    }
    
}
if (playerChoice === 'paper') {
    if (computerChoice === 'scissors') {
        winner.textContent = 'Computer wins!'
        cScore++
        updateScore()
        return;
    } else {
        winner.textContent = 'Player wins!'
        pScore++
        updateScore()
        return
    }
} 
if (playerChoice === 'scissors') {
    
if (computerChoice === 'rock') {
        winner.textContent = 'Computer wins!'
        cScore++
        updateScore()
        return;
    } else {
        winner.textContent = 'Player wins!'
        pScore++
        updateScore()
        return
    }

} 



}


startGame();
playMatch();




}
game()



