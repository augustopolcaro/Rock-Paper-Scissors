let yourScore = 0;
let computerScore = 0;
let playing = true;


let buttons = document.querySelectorAll('.options div');


let restartButton = document.querySelector('#restart');
restartButton.addEventListener('click', function() {
    playing = true;
    resetScore();
    setMessage('');
    restartButton.setAttribute('hidden', true);
})

//Le doy funcionalidad a los botones
buttons.forEach((elem) => {
    elem.addEventListener('click', function(e) {
        id = elem.id
        if (playing) {
            [result, message] = playRound(id, computerPlay());
            checkResult(result, message);
        }
    })
})

function checkResult(result, message) {
    if (result == 'win') {
        yourScore++;
    } else if (result == 'lose') {
        computerScore++;
    };
    updateScore();
    document.querySelector('.message').innerHTML = message;
    if (yourScore == 5 || computerScore == 5) {
        checkWinner();
    }
}

function resetScore() {
    yourScore = 0;
    computerScore = 0;
    updateScore();
}

function checkWinner() {
    updateScore();
    playing = false;
    if (computerScore == yourScore) {
        setMessage(`Is a tie! \n
        YOU: ${yourScore} \n
        CPU: ${computerScore}`);
    } else if (computerScore > yourScore) {
        setMessage(`Oh, you lose! \n
        YOU: ${yourScore} \n
        CPU: ${computerScore}
        `);
    } else {
        setMessage(`You won!, good one! \n
            YOU: ${yourScore} \n
            CPU: ${computerScore}`);
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
        return ['tie', 'Almost! You both played rock, is a tie!'];
    }
    if (playerSelection == 'paper' && computerSelection == 'paper') {
        return ['tie', 'So close! You both played paper, is a tie!'];
    }
    if (playerSelection == 'scissors' && computerSelection == 'scissors') {
        return ['tie', 'Blade fight! You both played scissors, is a tie!'];
    }
    if (playerSelection == 'rock' && computerSelection == 'scissors') {
        return ['win', 'Smash that!, you won the round!'];
    }
    if (playerSelection == 'scissors' && computerSelection == 'rock') {
        return ['lose', 'Ups, you lose!'];
    }
    if (playerSelection == 'paper' && computerSelection == 'rock') {
        return ['win', 'Good one!'];
    }
    if (playerSelection == 'rock' && computerSelection == 'paper') {
        return ['lose', 'Shame on you, Loser!'];
    }
    if (playerSelection == 'scissors' && computerSelection == 'paper') {
        return ['win', 'Nice choice!, You won the round!'];
    }
    if (playerSelection == 'paper' && computerSelection == 'scissors') {
        return ['lose', 'Ups, you lose!'];
    }
}

function updateScore() {
    document.querySelector('.you span').textContent = yourScore;
    document.querySelector('.computer span').textContent = computerScore;
}

function setMessage(message) {
    document.querySelector('.message').textContent = message;
    document.querySelector('header button').hidden = false;
}