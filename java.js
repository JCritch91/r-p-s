const buttons = document.querySelectorAll('button');
const restart = document.getElementById('restart');
const finalScoreText = document.getElementById("final-score");
const currentScoreText = document.getElementById("current-score");
const playerSelectionText = document.getElementById('player-selection');
const compSelectionText = document.getElementById("comp-selection");
const roundResultText = document.getElementById("round-result");
let compScore = 0;
let playerScore = 0;

buttons.forEach((button) => {
  button.addEventListener('click', () => {
    initialise(button.id);
  });
});

restart.addEventListener('click', restartGame);

function initialise (playerSelection) {
    if (compScore === 5 || playerScore === 5)  {
    
        if (compScore > playerScore) {
            finalScoreText.textContent= "Computer Wins " + compScore + " - " + playerScore
            return
        }
        else if (playerScore > compScore) {
            finalScoreText.textContent= "Player Wins " + playerScore + " - " + compScore
            return
        }
        else {
            finalScoreText.textContent= "Its a Draw " + compScore + " - " + playerScore
            return
        }
    }
    
    else {
    console.log("Current score: Player " + playerScore + " Comp " + compScore);
    currentScoreText.textContent = "Current score: Player " + playerScore + " Comp " + compScore

    const play = game(playerSelection)
    } 
}

function game(playerSelection) {
    const compChoice = getComputerChoice();

    playerSelectionText.textContent = "Player Selected " + playerSelection;
    compSelectionText.textContent = "Computer Selected " + compChoice
    result = playRound(playerSelection, compChoice)
    roundResultText.textContent = result

    function playRound(playerSelection, compChoice)  {

        if (playerSelection === "Rock" && compChoice === "Rock") {
            compScore ++;
            playerScore ++;
            return  "It's a draw!" 
        }
        else if (playerSelection === "Rock" && compChoice === "Paper") {
            compScore ++;
            return  "Computer Wins! Paper beats Rock"
        }
        else if (playerSelection === "Rock" && compChoice === "Scissors") {
            playerScore ++;
            return  "You Win! Rock beats Scissors"
        }
        else if (playerSelection === "Paper" && compChoice === "Paper") {
            compScore ++;
            playerScore ++;
            return  "It's a draw!"
        }
        else if (playerSelection === "Paper" && compChoice === "Rock") {
            playerScore ++
            return  "You Win! Paper beats Rock"
        }
        else if (playerSelection === "Paper" && compChoice === "Scissors") {
            compScore ++;
            return  "Computer Wins! Scissors beat Paper"
        }
        else if (playerSelection === "Scissors" && compChoice === "Paper") {
            playerScore ++;
            return  "You Win! Scissors beats Paper"
        }
        else if (playerSelection === "Scissors" && compChoice === "Rock") {
            compScore ++;
            return  "Computer Wins! Rock beats Scissors"
        }
        else if (playerSelection === "Scissors" && compChoice === "Scissors") {
            compScore ++;
            playerScore ++;
            return "It's a draw!"
        }
    }

// Function to randomly generate a number between 1-3, round to whole number
// and assign rock / paper / scissors to a number (Computer Choice)
    function getComputerChoice() {
    let compChoice = Math.floor(Math.random()*3)+1; {
    
    if (compChoice === 1) {
       return "Rock"
    }
    else if (compChoice ===2) {
        return "Paper"
    }
    else if (compChoice ===3) {
        return "Scissors"
    }
    }
    }
}

// Function to restart the game
function restartGame() {
    playerScore = 0
    compScore = 0
    finalScoreText.textContent= ""
    currentScoreText.textContent = ""
    playerSelectionText.textContent = ""
    compSelectionText.textContent = ""
    roundResultText.textContent = ""
}