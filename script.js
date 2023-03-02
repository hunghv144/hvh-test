"use strict";
// console.log(document.querySelector(".message").textContent);
// document.querySelector(".message").textContent = "Correct Number👌";
// document.querySelector(".number").textContent = 13;
// document.querySelector(".score").textContent = 10;
// document.querySelector(".guess").value = 23;
// console.log(document.querySelector(".guess").value);

let secretNumber = Math.trunc(Math.random() * 20 + 1);

let score = 20;
let highscore = 0;

const displayMessage = function (message) {
  document.querySelector(".message").textContent = message;
};
document.querySelector(".check").addEventListener("click", function () {
  {
    const guess = Number(document.querySelector(".guess").value);
    console.log(guess, typeof guess);

    if (score > 1) {
      if (!guess) {
        displayMessage("No Number ⛔"); // Tạo biến gán 1 hàm với đối số là 1 string
        //document.querySelector(".message").textContent = "No Number ⛔";
      }
      // WHen player Win
      else if (guess === secretNumber) {
        document.querySelector(".message").textContent = "Correct Number👌";
        document.querySelector("body").style.backgroundColor = "#60b347";
        document.querySelector(".number").style.width = "30rem";
        document.querySelector(".number").textContent = secretNumber;

        // Tạo highscore

        if (score > highscore) {
          highscore = score;
          document.querySelector(".highscore").textContent = highscore;
        }
      }
      // When guess is wrong tối ưu code
      else if (guess !== secretNumber) {
        document.querySelector(".message").textContent =
          guess > secretNumber ? "Too High" : "Too low";
        score--;
        document.querySelector(".score").textContent = score;
      }
      // // When guess too High
      // else if (guess > secretNumber) {
      //   document.querySelector(".message").textContent = "Too high !";
      //   score--;
      //   document.querySelector(".score").textContent = score;
      // }
      // // When gues too Low
      // else if (guess < secretNumber) {
      //   document.querySelector(".message").textContent = "Too low !";
      //   score--;
      //   document.querySelector(".score").textContent = score;
      // }
    }
    // When player lost the game
    else {
      document.querySelector(".message").textContent = "You lost the Game !";
      document.querySelector(".score").textContent = 0;
    }
  }
});
// Thiết lập nút Again
document.querySelector(".again").addEventListener("click", function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20 + 1);
  document.querySelector(".message").textContent = "Start guessing...";
  document.querySelector(".score").textContent = score;
  document.querySelector(".number").textContent = "?";
  document.querySelector(".guess").value = "";
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".number").style.width = "15rem";
  document.querySelector(".highscore").textContent = highscore;
});
