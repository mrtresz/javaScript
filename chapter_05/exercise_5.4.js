"use strict";

let myTable = [];

let rows = 3;
let columns = 5;

let counter = 0;

for (let r = 0; r < rows; r++) {

    let tempTable = [];
    for (let c = 0; c < columns; c++) {

        counter++;
        tempTable.push(counter);

    }
    myTable.push(tempTable);

}

console.table(myTable)