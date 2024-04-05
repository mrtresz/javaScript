"use strict";


let myArray = [];

for (let i = 0; i < 10; i++) {
    let num1 = i * 5;
    let num2 = i * i;

    let response = addValues(num1, num2);
    myArray.push(response);
}

function addValues(n1, n2) {
    let result = n1 + n2
    return result;
}

console.log(myArray);