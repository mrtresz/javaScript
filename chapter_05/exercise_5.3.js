"use strict";

let myWork = [];

for (let i = 1; i < 10; i++) {
    let lessons = { name: `Lesson ${i}`, status: i % 2 === 0 ? true : false };
    myWork.push(lessons);
}
console.log(myWork);


// const myWork = [];
// for (let x = 1; x < 10; x++) {
//     let stat = x % 2 ? true : false;
//     let temp = {
//         name: `Lesson ${x}`, status: stat
//     };
//     myWork.push(temp);
// }
// console.log(myWork);