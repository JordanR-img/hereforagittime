'use strict';

const btn = document.getElementById("btn");

// 3 questions for the user to answer.

// -------------Question 1---------------------
function changeFont() {
  document.body.style.fontFamily = "wingdings";
  setTimeout(() => {
    trap();
    
  }, 1000);
}

function trap() {
  prompt("error");
  prompt("error");
  prompt("error");
  prompt("You think this is over yet, this has just begun!!!");
  prompt("Try that again will ya");
  prompt("answer these 3 questions, and I'll leave you alone!!");

  let guess;
  const ans1 = "sanghelios";
  while (guess != ans1) {
    guess = prompt("Where do elites live?");
    guess === ans1
      ? prompt("Success, onto the next question")
      : prompt("Try again!!");
    if (guess === ans1) {
      trap2();
    }
  }
}
// -------------Question 2---------------------
function trap2() {
  let guess;
  const ans1 = "21";
  while (guess != ans1) {
    guess = prompt("What's 9 + 10?");
    guess === ans1
      ? prompt("You're old enough to view this website")
      : prompt("Git gud kid");
    if (guess === ans1) {
      trap3();
    }
  }
}
// -------------Question 3---------------------
function trap3() {
  prompt("I've saved the hardest question for now");

  let guess;
  const ans1 = "rumpelstiltskin";
  while (guess != ans1) {
    guess = prompt("What is my name?");
    if (guess === ans1){
      document.body.style.fontFamily = "'Bebas Neue', cursive"
      prompt("I have been bested, all I wanted was love")
    } else {
      prompt("Git gud kid again");
    }
  }
}
