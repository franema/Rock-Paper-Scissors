const $button = document.querySelector("button")
let computerCounter = 0
let playerCounter = 0

function manageRound() {
    if (computerCounter < 5 && playerCounter < 5) {
        const playerChoice = (document.querySelector("input").value).toLowerCase()
        const computerChoice = getComputerChoice()
        const results = compareChoices(computerChoice, playerChoice)
        if (results === "player win") {
            playerCounter = playerCounter + 1
        } else if (results === "computer win") {
            computerCounter = computerCounter + 1
        }
        const winner = checkWinner(computerCounter, playerCounter)
        console.log(playerCounter)
        console.log(computerCounter)
        showResults(computerChoice, playerChoice, results, winner, computerCounter.playerCounter)
    }
}

function getComputerChoice() {
    const randomChoice = Math.floor(Math.random() * 3)
    if (randomChoice === 0) {
        return "rock"
    } else if (randomChoice === 1) {
        return "paper"
    } else {
        return "scissors"
    }
}

function compareChoices(computerChoice, playerChoice) {
    let results = ""
    if (computerChoice === playerChoice) {
        results = "draw"
    } else if (playerChoice === "rock") {
        computerChoice === "scissors" ? results = "player win" : results = "computer win" //paper
    } else if (playerChoice === "scissors") {
        computerChoice === "paper" ? results = "player win" : results = "computer win" //rock
    } else if (playerChoice === "paper") {
        computerChoice === "rock" ? results = "player win" : results = "computer win" //scissors
    } else {
        results = "choose rock paper or scissors you moron"
    }
    return results
}

function checkWinner(computerCounter, playerCounter) {
    if (computerCounter === 5) {
        return "Computer wins!"
    } else if (playerCounter === 5) {
        return "Player wins!"
    }
}

function showResults(computerChoice, playerChoice, results, winner) {
    document.querySelector("#computer-choice").textContent = computerChoice
    document.querySelector("#player-choice").textContent = playerChoice
    document.querySelector("#results").textContent = results
    document.querySelector("#winner").textContent = winner
}


$button.addEventListener("click", manageRound)