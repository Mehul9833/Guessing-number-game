'use strict';

const checkBtn = document.querySelector('.check');
const againBtn = document.querySelector('.again');

let score = 20;
let highScore = 0;

let secretNumber = generateSecretNumber();
document.querySelector('.number').textContent = '?';

function generateSecretNumber() {
  const number = Math.trunc(Math.random() * 20) + 1;
  return number;
}

function displayMessage(message) {
  document.querySelector('.message').textContent = message;
}

checkBtn.addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  // When no input
  if (!guess) {
    displayMessage('🚫 No number');
    // When player wins
  } else if (guess === secretNumber) {
    displayMessage('🎉 Correct Number!');

    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';

    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = score;
    }

    // When guess is wrong
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? '📈 Too high' : '📉 Too low');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage('🤬 You lost the game!');
      document.querySelector('.score').textContent = 0;
      document.querySelector('body').style.backgroundColor = 'red';
    }
  }
});

againBtn.addEventListener('click', function () {
  score = 20;
  secretNumber = generateSecretNumber();
  document.querySelector('.number').textContent = '?';
  document.querySelector('.score').textContent = score;
  displayMessage('Start guessing...');
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.guess').value = '';
  document.querySelector('.number').style.width = '15rem';
});
