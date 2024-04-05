"use strict";

let randomNumber = Math.floor(Math.random() * 5);
console.log(randomNumber);
let userString = prompt("Ask a question");
let response;

switch (randomNumber) {
    case 0:
        response = "Fede";

        break;
    case 1:
        response = "Nah ";

        break;
    case 2:
        response = "Okay ";

        break;
    case 3:
        response = "Weeeee ";

        break;
    case 4:
        response = "Andizi ";
        cconsole.log(userString + response);
        break;
    case 5:
        response = "Sho ";

        break;
    default:
        console.log("i dont understand");


}


let finalResponse = `You asked ${userString} and i say to that ${response} `;
console.log(finalResponse);
