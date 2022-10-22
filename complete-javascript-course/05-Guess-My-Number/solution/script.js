"use strict";

let result;
let start = false; // check if user starts the game

const btnCheck = document.querySelector(".check");
const btnAgain = document.querySelector(".again");
const number = document.querySelector(".number");
const message = document.querySelector(".message");
const scoreText = document.querySelector(".score");
let score = Number(scoreText.innerText);

const generateResult = () => {
  result = Math.floor(Math.random() * 20 + 1);
  console.log(result);
};

generateResult();

const setHighScore = (score) => {
  let highScore = Number(document.querySelector(".highscore").innerText);
  highScore = score > highScore ? score : highScore;
  document.querySelector(".highscore").innerText = highScore;
};

btnAgain.addEventListener("click", () => {
  number.innerText = "?";
  message.innerText = "Start guessing...";
  document.querySelector(".guess").value = "";
  document.querySelector("body").style.backgroundColor = "#222";
  number.style.width = "15rem";
  if (start) {
    setHighScore(score);
  }
  start = false;
  scoreText.innerText = 20;
  score = 20;
  generateResult();
});

btnCheck.addEventListener("click", () => {
  start = true;
  const guess = Number(document.querySelector(".guess").value);
  // No input
  if (!guess) {
    console.log("No number!");
  }
  // Guess is different from result
  else if (guess !== result) {
    score--;
    scoreText.innerText = score;
    if (score > 0) {
      message.innerText = guess > result ? "Too high!" : "Too low!";
    } else {
      message.innerText = "You lost! 😏😏";
      scoreText.innerText = 0;
    }
  }
  // Guess matches with result
  else {
    number.innerText = result;
    message.innerText = "Correct 🤗🤗";
    document.querySelector("body").style.backgroundColor = "#60b347";
    number.style.width = "30rem";
  }
});
