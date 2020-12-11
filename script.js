let round = 0;
let yourScore = 0;
let computerScore = 0;
let message;

document.getElementById("rock").addEventListener("click", function() {
    [result, message] = playRound('rock', computerPlay());
    checkResult(result, message);
});

document.getElementById("paper").addEventListener("click", function() {
    [result, message] = playRound('paper', computerPlay());
    checkResult(result, message);
});

document.getElementById("scissors").addEventListener("click", function() {
    [result, message] = playRound('scissors', computerPlay());
    checkResult(result, message);
});

function checkResult(result, message) {
    if (result == 'win') {
        yourScore++;
    } else if (result == 'lose') {
        computerScore++;
    };
    document.querySelector('.message').innerHTML = message;
    updateScore();
    round = round + 1;
    if (round == 5) {
        checkWinner();
    }
}

function resetScore() {
    round = 0;
    yourScore = 0;
    computerScore = 0;
    message = '';
    updateScore();
}

function checkWinner() {
    updateScore();

    if (computerScore == yourScore) {
        alert(`Is a tie! YOU: ${yourScore} COMPUTER: ${computerScore}`);
        resetScore()
    } else if (computerScore > yourScore) {
        alert(`Oh, you lose! YOU: ${yourScore} COMPUTER: ${computerScore}`)
        resetScore()
    } else {
        alert(`You won!, good one! YOU: ${yourScore} COMPUTER: ${computerScore}`)
        resetScore();
    }
}

function computerPlay() {
    let computerPlays;
    let number = Math.floor(Math.random() * (1 - 4)) + 4;

    if (number == 1) {
        computerPlays = 'rock';
    } else if (number == 2) {
        computerPlays = 'paper';
    } else {
        computerPlays = 'scissors';
    }

    return computerPlays;
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection == 'rock' && computerSelection == 'rock') {
        return ['tie', 'Almost! You both played rock, is a tie!']
    }
    if (playerSelection == 'paper' && computerSelection == 'paper') {
        return ['tie', 'So close! You both played paper, is a tie!']
    }
    if (playerSelection == 'scissors' && computerSelection == 'scissors') {
        return ['tie', 'Blade fight! You both played scissors, is a tie!']
    }
    if (playerSelection == 'rock' && computerSelection == 'scissors') {
        return ['win', 'Smash that!, you won the round!']
    }
    if (playerSelection == 'scissors' && computerSelection == 'rock') {
        return ['lose', 'Ups, you lose!']
    }
    if (playerSelection == 'paper' && computerSelection == 'rock') {
        return ['win', 'Good one!']
    }
    if (playerSelection == 'rock' && computerSelection == 'paper') {
        return ['lose', 'Shame on you, Loser!']
    }
    if (playerSelection == 'scissors' && computerSelection == 'paper') {
        return ['win', 'Nice choice!, You won the round!']
    }
    if (playerSelection == 'paper' && computerSelection == 'scissors') {
        return ['lose', 'Ups, you lose!']
    }
}

function updateScore() {
    document.querySelector('.you span').innerHTML = yourScore;
    document.querySelector('.computer span').innerHTML = computerScore;
}