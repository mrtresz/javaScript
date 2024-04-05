"use strict";

let gridArray = [];
let cells = 64;
let counter = 0;

let row;

for (let c = 1; c < cells; c++) {
    if (counter % 8 == 0) {
        if (row != undefined) {
            gridArray.push(row);
        }
        row = [];

    }
    counter++;
    let count = counter;
    row.push(count);

}
console.log(gridArray);