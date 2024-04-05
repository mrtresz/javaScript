"use strict";

let num1 = 7;
let num2 = 14;

let operator = "+";

function calculator(n1, n2, op) {
    if (op === "+") {
        let result = n1 + n2;
        return result;
    } else if (op === "-") {
        let result = n1 - n2;
        return result
    } else {
        let result = n1 + n2;
        return result;
    }
}

console.log(calculator(num1, num2, "-"));