"use strict";

let age = prompt("How old are you? ");
age = Number(age);
let msg;

if (age >= 21) {
    msg = "You are allowed to enter and purchase alcohol";
} else if (age >= 19) {
    msg = "You are allowed to enter but you cannot buy alcohol"
} else {
    msg = "You are not allowed to enter nor buy alcohol"
}
console.log(msg);