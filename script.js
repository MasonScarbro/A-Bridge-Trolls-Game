// This is advanced AI to choose rock, paper, or scissors (It's not)
function getComputerChoice() {
    let compChoice = "";
    let random = Math.floor(Math.random() * 3);
    if (random === 0) {
        compChoice = "ROCK";
    }
    else if (random === 1) { 
        compChoice = "SCISSORS";
    } else {
        compChoice = "PAPER";
    }
    return compChoice;
}

// Updates what the troll says each "round" (talkinShit), updates the score
function updateDisplay(roundResult, compScore, playerScore) {
    const talkinShit = document.querySelector('p');
    talkinShit.textContent = roundResult;
    
    const playaScore = document.querySelector('.playaScore');
    playaScore.textContent = "Player Score: " + playerScore;
    const computerScore = document.querySelector('.computerScore');
    computerScore.textContent = "Computer Score: " + compScore;
}
// Displays The Poop Up Box
function popUpBx() {
    
    var popUp = document.querySelector('.popUpBg');
    popUp.classList.add('popUpActive');
    const restartBtn = document.querySelector('.restartBtn');
    restartBtn.addEventListener('click', () => {
        popUp.classList.remove('popUpActive');
        const playaScore = document.querySelector('.playaScore');
        playaScore.textContent = "Player Score: " + '0';
        const computerScore = document.querySelector('.computerScore');
        computerScore.textContent = "Computer Score: " + '0';
    });
}
// Chooses who wins and also updates trolls dialog, Also uses the popUpBx
function whoWon() {
    if (compScore == 5) {
        const talkinShit = document.querySelector('p');
        talkinShit.textContent = "Ha you lost you play again";
        var h4 = document.querySelector('h4');
        h4.textContent = "YOOOOOUUUU SHALL NOT.... PAAAAASSSS!";
        popUpBx();
        compScore = 0;
        playerScore = 0;
    } else if (playerScore == 5){
        const talkinShit = document.querySelector('p');
        talkinShit.textContent = "What noooooo!!!";
        var h4 = document.querySelector('h4');
        h4.textContent = "You... you cheated I demand another game!";
        popUpBx();
        compScore = 0;
        playerScore = 0;
        winCounter++;
    }
}

let playerSelection = "";
let computerSelection = "";
// It... Plays the game, each time you select a button it calls play round and decides who won For each symbol
function entireGame() {
    const symbol1 = document.querySelector('.symbol1');
    symbol1.addEventListener('click', () => {
       
            playerSelection = "ROCK";
            computerSelection = getComputerChoice();
            roundResult = playRound(playerSelection, computerSelection);
            updateDisplay(roundResult, compScore, playerScore);
            whoWon();
            
        
    });
    const symbol2 = document.querySelector('.symbol2');
    symbol2.addEventListener('click', () => {
       
            playerSelection = "SCISSORS";
            computerSelection = getComputerChoice();
            roundResult = playRound(playerSelection, computerSelection);
            updateDisplay(roundResult, compScore, playerScore);
            whoWon();
        
    });
    const symbol3 = document.querySelector('.symbol3');
    symbol3.addEventListener('click', () => {

            playerSelection = "PAPER";
            computerSelection = getComputerChoice();
            roundResult = playRound(playerSelection, computerSelection);
            updateDisplay(roundResult, compScore, playerScore);
            whoWon();
        
    });
   
}



let compScore = 0;
let playerScore = 0;
let winCounter = 0;
// This plays a round and returns banter from the troll and a score 
function playRound(playerSelection, computerSelection) {
    
    if (computerSelection === playerSelection) {
        return "we are on equal footing (tie)";
    } 
    switch(playerSelection) {
        case "ROCK": if (computerSelection === "PAPER") {
            compScore++;
            return "Ha ha you lost # beats @";
        } else if (computerSelection === "SCISSORS"){
            playerScore++;
            return "Grrh @ beats ^";
        }
        break;
        case "PAPER": if (computerSelection === "ROCK") {
            playerScore++;
            return "Beginners Luck! # beats @";
           
        } else if (computerSelection === "SCISSORS"){
            compScore++;
            return "Haha I win ^ beats #";
            
        }
        break;
        case "SCISSORS": if (computerSelection === "PAPER") {
            playerScore++;
            return "augh ^ beats #";
        } else if (computerSelection === "ROCK"){
            compScore++;
            return "You lose!!! @ beats ^";
        }
        break;
        default:
        return "Invalid input. Please choose Rock, Paper, or Scissors.";
        break;
    }
}

entireGame();

// PROVIDED BY HELP FROM OUTSIDE SOURCES. CREDIT: RANDOM PEOPLE ON A DISCORD (I dont know your githubs or names sorry, If you see this Ill credit You)
// I'll try and explain as best I can 

const paragraphs = document.querySelectorAll('.speechBubbleDef p');
let delay = 0; // delay starts at 0

// forEach 'loop' that checks for each paragraph, for each paragraph set te animation delay, and delay incrementes by 3s for each paragraph 
paragraphs.forEach((paragraph, index) => {
  paragraph.style.animationDelay = `${delay}s`; 
  delay += 3; // Arbitraury number just means 3 seconds can be any amount you want
});

/* for each paragraph make it vsible after the timeot (delay) */
/* for each paragraph go ahead and start the animation (switch playstate from paused to running) */
function showParagraphs() {
    
  paragraphs.forEach((paragraph, index) => {
    setTimeout(() => {
      paragraph.style.opacity = 1; 
      paragraph.style.animationPlayState = 'running'; 
    }, index * 3000); // Delay each paragraph by 3 seconds
  });
}

setTimeout(showParagraphs, 100); // Delay the animation start by 100ms

// This Is the skip button so that the display can be hidden when its clicked
const btnSkip = document.querySelector('.btnSkip');
const displayDef = document.querySelector('.allContainerDef')
const actualGame = document.querySelector('.actualGame')
btnSkip.addEventListener('click', () => {
        displayDef.style.display = 'none';
        actualGame.style.display = 'block';
});


if (winCounter === 100) {
    var h4 = document.querySelector('h4');
    h4.textContent = "Fine I... Give Up...Who Even Tries This Hard"
    popUpBx();
}