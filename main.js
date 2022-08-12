const $buttons = document.querySelectorAll("button");
let computerCounter = 0;
let playerCounter = 0;

function manageRound(e) {
    if (computerCounter === 5 || playerCounter === 5) {
        restartRound();
    }
    console.log(this.className)
    const playerChoice = this.className
    const computerChoice = getComputerChoice();
    const results = compareChoices(computerChoice, playerChoice);
    if (results === "player win") {
        playerCounter = playerCounter + 1;
    } else if (results === "computer win") {
        computerCounter = computerCounter + 1;
    }
    const winner = checkWinner(computerCounter, playerCounter);
    showResults(computerChoice, playerChoice, results, winner, computerCounter, playerCounter);
    if (winner) {
        removeResults();
    }
}

function getComputerChoice() {
    const randomChoice = Math.floor(Math.random() * 3);
    if (randomChoice === 0) {
        return "rock";
    } else if (randomChoice === 1) {
        return "paper";
    } else {
        return "scissors";
    }
}

function compareChoices(computerChoice, playerChoice) {
    let results = "";
    if (computerChoice === playerChoice) {
        results = "draw";
    } else if (playerChoice === "rock") {
        computerChoice === "scissors" ? results = "player win" : results = "computer win"; //computer choosed paper
    } else if (playerChoice === "scissors") {
        computerChoice === "paper" ? results = "player win" : results = "computer win"; //computer choosed rock
    } else if (playerChoice === "paper") {
        computerChoice === "rock" ? results = "player win" : results = "computer win"; //computer choosed scissors
    } else {
        results = "choose rock paper or scissors";
    }
    return results;
}

function checkWinner(computerCounter, playerCounter) {
    if (computerCounter === 5) {
        return "Computer wins!";
    } else if (playerCounter === 5) {
        return "Player wins!";
    }
}

function showResults(computerChoice, playerChoice, results, winner, computerCounter, playerCounter) {
    document.querySelector("#computer-choice").textContent = `Computer chose: ${computerChoice}`;
    document.querySelector("#player-choice").textContent = `Player chose: ${playerChoice}`;
    document.querySelector("#results").textContent = results;
    document.querySelector("#winner").textContent = winner;
    document.querySelector("#counter").textContent = `Computer ${computerCounter} - Player ${playerCounter}`;
}

function removeResults() {
    document.querySelector("#computer-choice").textContent = "";
    document.querySelector("#player-choice").textContent = "";
    document.querySelector("#results").textContent = "";
}

function restartRound() {
    computerCounter = 0;
    playerCounter = 0;
    document.querySelector("#winner").textContent = "";
    document.querySelector("#counter").textContent = `Computer ${computerCounter} - Player ${playerCounter}`;
}

$buttons.forEach(button => {
    button.addEventListener("click", manageRound)
})