//console.log("Hello there");
//console.log(getComputerChoice());
//console.log(getHumanChoice());
let humanScore = 0;
let computerScore = 0;
let roundNumber = 1;
//playGame();
//playRound(playerChoice, computerChoice);

const rockButton = document.querySelector("#rock-button");
const paperButton = document.querySelector("#paper-button");
const scissorsButton = document.querySelector("#scissors-button");

rockButton.addEventListener('click', () => playRound("rock", getComputerChoice()));
paperButton.addEventListener('click', () => playRound("paper", getComputerChoice()));
scissorsButton.addEventListener('click', () => playRound("scissors", getComputerChoice()));

const playerScoreDisplay = document.getElementById("player-score");
const compScoreDisplay = document.getElementById("computer-score");

const roundNumberDisplay = document.getElementById("round-number");

const playerMoveDisplay = document.getElementById("player-move");
const compMoveDisplay = document.getElementById("computer-move");

const winnerText = document.getElementById("winner");


//const roundResults = document.createElement("div");
//content.appendChild(roundResults);

function playGame() {
    let computerChoice;
    let playerChoice;
    for (let i = 1; i <= 5; i++) {
        computerChoice = getComputerChoice();
        playerChoice = getHumanChoice();
        console.log(`Round ${i} begins`);
        playRound(playerChoice, computerChoice);
        printScores();
    }
}

function printScores() {
    console.log(`Scores are Human ${humanScore} and Computer ${computerScore}`);
}


function playRound(humanChoice, computerChoice) {
    console.log(`Human choice is ${humanChoice}`);
    console.log(`Computer choice is ${computerChoice}`);

    playerMoveDisplay.textContent = humanChoice;
    compMoveDisplay.textContent = computerChoice;
    roundNumberDisplay.textContent = roundNumber;
    roundNumber += 1;
    if (humanChoice === computerChoice) {
        console.log("Draw");
        winnerText.textContent = "Draw";

    }
    else if (humanChoice == "rock") {
        if (computerChoice == "scissors") {
            //console.log("Player Wins");
            winnerText.textContent = "Player Wins";
            humanScore = humanScore + 1;
            playerScoreDisplay.textContent = humanScore;

        }
        else {
            console.log("Computer Wins");
            winnerText.textContent = "Computer Wins";
            computerScore = computerScore + 1;
            compScoreDisplay.textContent = computerScore;
        }
    }
    else if (humanChoice == "paper") {
        if (computerChoice == "rock") {
            console.log("Player Wins");
            winnerText.textContent = "Player Wins";
            humanScore = humanScore + 1;
            playerScoreDisplay.textContent = humanScore;
        }
        else {
            console.log("Computer Wins");
            winnerText.textContent = "Computer Wins";
            computerScore = computerScore + 1;
            compScoreDisplay.textContent = computerScore;
        }
    }
    else if (humanChoice == "scissors") {
        if (computerChoice == "paper") {
            console.log("Player Wins");
            winnerText.textContent = "Player Wins";
            humanScore = humanScore + 1;
            playerScoreDisplay.textContent = humanScore;
        }
        else {
            console.log("Computer Wins");
            winnerText.textContent = "Computer Wins";
            computerScore = computerScore + 1;
            compScoreDisplay.textContent = computerScore;
        }
    }

    checkGameOver();
}

function getComputerChoice() {
    let rand = Math.random();
    if (rand >= 0 && rand <= 0.33)
        return "rock";
    else if (rand > 0.33 && rand <= 0.66)
        return "scissors";
    else
        return "paper";
}

function getHumanChoice() {
    let choice = prompt("What's your move?");
    choice = choice.toLowerCase(choice);
    if (['rock', 'paper', 'scissors'].indexOf(choice) >= 0)
        return choice;
    else {
        console.log("Invalid Choice");
        return getHumanChoice();
    }
}

function resetScores()
{
    humanScore = 0;
    computerScore = 0;
    roundNumber = 1;
    playerScoreDisplay.textContent = humanScore;
    compScoreDisplay.textContent = computerScore;
    roundNumberDisplay.textContent = "";
    playerMoveDisplay.textContent = "";
    compMoveDisplay.textContent = "";
    winnerText.textContent = "";



}

function checkGameOver() {
    if (humanScore >= 5) {
        alert("Player Victory");
        resetScores();
    }
    else if (computerScore >= 5) {
        alert("Computer Victory");
        resetScores();

    }


}