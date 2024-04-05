"use strict";

let prize = prompt("Select a number between (0 - 10)"); //letting the user select a number bt 0 and 10 and assigning it to prize
prize = Number(prize); //converting prize to a number data type

let message = "My Selection: ";
let prizes = ["PS5", "HD TV", "32\'' Monitor", "LAPTOP", "CELL PHONE"];
let randomPrize = prizes[Math.floor(Math.random() * prizes.length)];


switch (prize) {
    case prize:
        if (prize > 0 && prize < 10) {
            alert(`${message} ${prize} \nCongradulations you have won a ${randomPrize} `);
            break;
        }

    default:
        alert("I didnt quite get that!");
}
