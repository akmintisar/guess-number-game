'use strict';
const result = document.querySelector('.message').textContent;
console.log('from JS file');
console.log(result);

const randomNumber = Math.trunc(Math.random() * 20 + 1);
console.log(randomNumber);
var score = 20;

document.querySelector('.check').addEventListener('click', function () {
  const inputValue = document.querySelector('.guess').value;
  console.log(inputValue);

  if (!inputValue) {
    document.querySelector(
      '.message'
    ).textContent = `What's stopping you from entering a proper value?!`;
  } else if (inputValue == randomNumber) {
    document.querySelector('.message').textContent = `Correct Answer!`;
    score++;
    document.querySelector('.score').textContent = score;
  } else if (inputValue > randomNumber) {
    document.querySelector('.message').textContent = `You need to aim LOW`;
    score--;
    if (score < 1) {
      document.querySelector('.message').textContent = `GAME OVER`;
    } else {
      document.querySelector('.score').textContent = score;
    }
  } else if (inputValue < randomNumber) {
    document.querySelector('.message').textContent = `You need to aim HIGH!`;
    score--;
    if (score < 1) {
      document.querySelector('.message').textContent = `GAME OVER`;
    } else {
      document.querySelector('.score').textContent = score;
    }
  }
});
