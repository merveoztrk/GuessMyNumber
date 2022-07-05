"use strict";

// console.log(document.querySelector(".message").textContent);
// document.querySelector(".number").textContent = 13;
// document.querySelector(".score").textContent = 10;

// document.querySelector(".guess").value = 23;
// console.log(document.querySelector(".guess").value);
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

const displayMessage = function (message) {
  document.querySelector(".message").textContent = message;
};

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  console.log(guess, typeof guess); //string

  //Giriş yokken
  if (!guess) {
    // document.querySelector(".message").textContent);
    displayMessage("No number!");

    //Oyuncu kazandığında
  } else if (guess === secretNumber) {
    //document.querySelector(".message").textContent = 'Correct number!';

    displayMessage("Correct Number!");
    document.querySelector(".number").textContent = secretNumber;

    document.querySelector(".main").style.backgroundImage =
      "linear-gradient(to bottom right, #60b347, #ccc)";
    document.querySelector(".header").style.backgroundImage =
      "linear-gradient(to bottom right, #60b347, #ccc)";

    // document.querySelector("main").style.backgroundImage = "#60b347";
    document.querySelector(".number").style.width = "30rem";

    if (score > highscore) {
      highscore = score;
      document.querySelector(".highscore").textContent = highscore;
    }
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? "Too High!" : "Too Low!");
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      displayMessage("You lost the game!");
      document.querySelector(".score").textContent = 0;
    }
  }

  //  //Tahmin yüksek olduğunda
  //   } else if (guess > secretNumber){
  //     if (score > 1){
  //     document.querySelector('.message').textContent = 'Too high!';
  //     score--;
  //     document.querySelector('.score').textContent = score;
  //     } else {
  //     document.querySelector('.message').textContent = 'You lost the game!';
  //     document.querySelector('.score').textContent = 0;
  //     }

  //  //Tahmin düşük olduğunda
  //   } else if(guess < secretNumber){
  //     if (score > 1){
  //     document.querySelector('.message').textContent = 'Too low';
  //     score--;
  //     document.querySelector('.score').textContent = score;
  //   } else {
  //     document.querySelector('.message').textContent = 'You lost the game!';
  //     document.querySelector('.score').textContent = 0;
  //     }
});

document.querySelector(".again").addEventListener("click", function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  //document.querySelector('.message').textContent = 'Start guessing...';
  displayMessage("Start guessing...");
  document.querySelector(".score").textContent = score;
  document.querySelector(".number").textContent = "?";
  document.querySelector(".guess").value = "";

  document.querySelector(".main").style.backgroundImage =
    "linear-gradient(to bottom right, #ccc, #639)";
  document.querySelector(".header").style.backgroundImage =
    "linear-gradient(to bottom right, #ccc, #639)";
  document.querySelector(".number").style.width = "15rem";
});
