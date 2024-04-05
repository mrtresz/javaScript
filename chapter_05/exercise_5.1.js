"use strict";
let maxValue = 5;

let solution = Math.floor(Math.random() * maxValue + 1);
console.log(solution);
let correct = false;
let guess;
while (solution != guess) {
    guess = Number(prompt("Please enter a number between (1 and 5)"));


    if (guess === solution) {
        correct = true;
        alert("Congradulations you got it right")
        break;
    } else if (guess > solution) {
        alert("You are high");
    } else
        alert("you are low");
}
