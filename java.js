const buttons = document.querySelectorAll('button');
const restart = document.getElementById('restart');
const finalScoreText = document.getElementById("final-score");
const currentScoreText = document.getElementById("current-score");
const playerSelectionText = document.getElementById('player-selection');
const compSelectionText = document.getElementById("comp-selection");
const roundResultText = document.getElementById("round-result");
const chooseWeapon = document.getElementById("choose-weapon");

let compScore = 0;
let playerScore = 0;
chooseWeapon.textContent ="Choose Your Weapon!"


buttons.forEach((button) => {
  button.addEventListener('click', () => {
    initialise(button.id);
  });
});

restart.addEventListener('click', restartGame);



function initialise (playerSelection) {
    chooseWeapon.textContent =""
    if (compScore === 5 || playerScore === 5)  {
        return
    }
    
    else {
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
            currentScoreText.textContent = "Current score: Player " + playerScore + " Comp " + compScore
            checkScore();
            return  "It's a draw!" 
        }
        else if (playerSelection === "Rock" && compChoice === "Paper") {
            compScore ++;
            currentScoreText.textContent = "Current score: Player " + playerScore + " Comp " + compScore
            checkScore();
            return  "Computer Wins! Paper beats Rock"
        }
        else if (playerSelection === "Rock" && compChoice === "Scissors") {
            playerScore ++;
            currentScoreText.textContent = "Current score: Player " + playerScore + " Comp " + compScore
            checkScore();
            return  "You Win! Rock beats Scissors"
        }
        else if (playerSelection === "Paper" && compChoice === "Paper") {
            currentScoreText.textContent = "Current score: Player " + playerScore + " Comp " + compScore
            checkScore();
            return  "It's a draw!"
        }
        else if (playerSelection === "Paper" && compChoice === "Rock") {
            playerScore ++
            currentScoreText.textContent = "Current score: Player " + playerScore + " Comp " + compScore
            checkScore();
            return  "You Win! Paper beats Rock"
        }
        else if (playerSelection === "Paper" && compChoice === "Scissors") {
            compScore ++;
            currentScoreText.textContent = "Current score: Player " + playerScore + " Comp " + compScore
            checkScore();
            return  "Computer Wins! Scissors beat Paper"
        }
        else if (playerSelection === "Scissors" && compChoice === "Paper") {
            playerScore ++;
            currentScoreText.textContent = "Current score: Player " + playerScore + " Comp " + compScore
            checkScore();
            return  "You Win! Scissors beats Paper"
        }
        else if (playerSelection === "Scissors" && compChoice === "Rock") {
            compScore ++;
            currentScoreText.textContent = "Current score: Player " + playerScore + " Comp " + compScore
            checkScore();
            return  "Computer Wins! Rock beats Scissors"
        }
        else if (playerSelection === "Scissors" && compChoice === "Scissors") {
            currentScoreText.textContent = "Current score: Player " + playerScore + " Comp " + compScore
            checkScore();
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
    chooseWeapon.textContent ="Choose Your Weapon!"
}

function checkScore() {
    if (compScore === 5 || playerScore === 5)  {
    
        if (compScore > playerScore) {
            finalScoreText.textContent= "Computer Wins " + compScore + " - " + playerScore
            playerSelectionText.textContent = "Player Selected " + playerSelection;
            compSelectionText.textContent = "Computer Selected " + compChoice
            return
        }
        else if (playerScore > compScore) {
            finalScoreText.textContent= "Player Wins " + playerScore + " - " + compScore
            playerSelectionText.textContent = "Player Selected " + playerSelection;
            compSelectionText.textContent = "Computer Selected " + compChoice
            return
        }
        else {
            playerSelectionText.textContent = "Player Selected " + playerSelection;
            compSelectionText.textContent = "Computer Selected " + compChoice
            finalScoreText.textContent= "Its a Draw " + compScore + " - " + playerScore
            return
        }
    }
    
    else {
    return
    } 
}