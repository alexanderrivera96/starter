'use strict';

const secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;

console.log(secretNumber);

document.querySelector('.check').addEventListener('click', function () {
  const guess = document.querySelector('.guess').value;
  console.log(guess);

  if (!guess) {
    document.querySelector('.message').textContent = 'No number!';
  } else if (Number(guess) === secretNumber) {
    // When the player wins.

    document.querySelector('body').style.backgroundColor = '#60b347';

    document.querySelector('.message').textContent = 'Correct Number!';
    score++;
    document.querySelector('.score').textContent = score;
  } else if (guess > secretNumber) {
    // When the guess is too high.
    if (score > 1) {
      document.querySelector('.message').textContent = 'Guess is Too high!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'You lost the game!';
      document.querySelector('.score').textContent = 0;
    }
  } else if (guess < secretNumber) {
    // When the guess is too low.
    if (score > 1) {
      document.querySelector('.message').textContent = 'Guess is Too low!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'You lost the game!';
      document.querySelector('.score').textContent = 0;
    }
  }
});
