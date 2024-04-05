"use strict";

let descriptiveWords = ["soccer", "money", "food", "bored", "board", "couch"];
let randomValue = descriptiveWords[Math.floor(Math.random() * descriptiveWords.length)];

function askUserName() {
    let userName = prompt("Whats is your name? ");
    return userName;
}

console.log(askUserName());
console.log(randomValue);

askUserName();