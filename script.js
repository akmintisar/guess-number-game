'use strict';
const result = document.querySelector('.message').textContent;
console.log('from JS file');
console.log(result);

let randomNumber = Math.trunc(Math.random() * 20 + 1);
console.log(randomNumber);
let score = 20;
let highScore = 0;

document.querySelector('.check').addEventListener('click', function () {
  let inputValue = document.querySelector('.guess').value;
  console.log(inputValue);

  if (!inputValue) {
    document.querySelector(
      '.message'
    ).textContent = `What's stopping you from entering a proper value?!`;
  } else if (inputValue == randomNumber) {
    document.querySelector('.message').textContent = `Correct Answer!`;
    document.querySelector('body').style.backgroundColor = '#60b347';
    score++;
    document.querySelector('.score').textContent = score;
    document.querySelector('.number').textContent = inputValue;

    if (score > highScore) {
      highScore = score;
      console.log('highscore');
      document.querySelector('.highscore').textContent = highScore;
    }
  } else if (inputValue > randomNumber) {
    document.querySelector('.message').textContent = `You need to aim LOW`;
    score--;
    if (score < 1) {
      document.querySelector('.message').textContent = `GAME OVER`;
      document.querySelector('body').style.backgroundColor = '#FF0000';
    } else {
      document.querySelector('.score').textContent = score;
    }
  } else if (inputValue < randomNumber) {
    document.querySelector('.message').textContent = `You need to aim HIGH!`;
    score--;
    if (score < 1) {
      document.querySelector('.message').textContent = `GAME OVER`;
      document.querySelector('body').style.backgroundColor = '#FF0000';
    } else {
      document.querySelector('.score').textContent = score;
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  document.querySelector('.score').textContent = 20;
  randomNumber = '';
  document.querySelector('body').style.backgroundColor = 'rgb(207, 124, 0)';
  document.querySelector('.guess').value = '';
});
