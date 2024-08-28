const max = 5;
let secretNumber = Math.trunc(Math.random() * max) + 1; // random number from 1 to 20
const message = document.querySelector('.message');
const scoreDisplay = document.querySelector('.score');
const guessInput = document.querySelector('.gusses');
const background = document.querySelector('.background');

function resetGame() {
    console.log('Reset game');
    secretNumber = Math.trunc(Math.random() * max) + 1; // random number from 1 to 20

    // Reset initial condition
    message.textContent = 'Start guessing...';
    scoreDisplay.textContent = `Score: ?`;
    guessInput.value = '';
    scoreDisplay.style.width = '15rem';
    background.style.backgroundColor = '#222';
}

function checkNumber() {
    if (guessInput.value == secretNumber) {
        message.textContent = '🎉 Correct Number!';
        background.style.backgroundColor = '#60b347';
        scoreDisplay.style.width = '30rem';
    } else {
        message.textContent = 'try again!';
    }
}
document.querySelector('.check').addEventListener('click', checkNumber);
document.querySelector('.again').addEventListener('click', resetGame);