<<<<<<< HEAD
"use strict";

// function doSomething(callback) {

//     callback();
//     console.log("doing something..");

// }

// function sayHi() {
//     console.log("Hi");
// }

// doSomething(sayHi);




// function judge(grade) {
//     switch (true) {
//         case grade == "A":
//             console.log("You got an", grade, ": amazing!");
//             break;
//         case grade == "B":
//             console.log("You got a", grade, ": well done!");
//             break;
//         case grade == "C":
//             console.log("You got a", grade, ": alright.");
//             break;
//         case grade == "D":
//             console.log("You got a", grade, ": hmmm...");
//             break;
//         default:
//             console.log("An", grade, "! What?!");
//     }
// }
// function getGrade(score, callback) {
//     let grade;
//     switch (true) {
//         case score >= 90:
//             grade = "A";
//             break;
//         case score >= 80:
//             console.log(score);
//             grade = "B";
//             break;
//         case score >= 70:
//             grade = "C";
//             break;
//         case score >= 60:
//             grade = "D";
//             break;
//         default:
//             grade = "F";
//     }
//     callback(grade);
// }
// getGrade(85, judge);


// let myPromise = new Promise((resolve, reject) => {
//     //do something that might take a while
//     // lets just set x instead for this example

//     let = 20;
//     if (x > 10) {
//         resolve(x); //if successful
//     } else {
//         reject("too low"); // on error
//     }
// })

//     .then(
//         function (value) {
//             console.log("success:", value);
//         },

//         function (error) {
//             console.log("Error", error);
//         }
//     )


//              async await

// function saySomething(x) {
//     return new Promise(resolve => {
//         setTimeout(() => {
//             resolve("something " + x)
//         }, 2000);
//     });
// }

// async function talk(x) {
//     const words = await saySomething(x);
//     console.log(words);
// }

// talk(2);
// talk(4);
// talk(8);


// event loop

// console.log("Hi there");
// add(4, 5);
// function add(x, y) {
//     return x + y;
// }

// console.log("Hi there");
// setTimeout(() => console.log("Sorry I'm late"), 1000);
// console.log(add(4, 5));
// function add(x, y) {
//     return x + y;
=======
"use strict";

// function doSomething(callback) {

//     callback();
//     console.log("doing something..");

// }

// function sayHi() {
//     console.log("Hi");
// }

// doSomething(sayHi);




// function judge(grade) {
//     switch (true) {
//         case grade == "A":
//             console.log("You got an", grade, ": amazing!");
//             break;
//         case grade == "B":
//             console.log("You got a", grade, ": well done!");
//             break;
//         case grade == "C":
//             console.log("You got a", grade, ": alright.");
//             break;
//         case grade == "D":
//             console.log("You got a", grade, ": hmmm...");
//             break;
//         default:
//             console.log("An", grade, "! What?!");
//     }
// }
// function getGrade(score, callback) {
//     let grade;
//     switch (true) {
//         case score >= 90:
//             grade = "A";
//             break;
//         case score >= 80:
//             console.log(score);
//             grade = "B";
//             break;
//         case score >= 70:
//             grade = "C";
//             break;
//         case score >= 60:
//             grade = "D";
//             break;
//         default:
//             grade = "F";
//     }
//     callback(grade);
// }
// getGrade(85, judge);


// let myPromise = new Promise((resolve, reject) => {
//     //do something that might take a while
//     // lets just set x instead for this example

//     let = 20;
//     if (x > 10) {
//         resolve(x); //if successful
//     } else {
//         reject("too low"); // on error
//     }
// })

//     .then(
//         function (value) {
//             console.log("success:", value);
//         },

//         function (error) {
//             console.log("Error", error);
//         }
//     )


//              async await

// function saySomething(x) {
//     return new Promise(resolve => {
//         setTimeout(() => {
//             resolve("something " + x)
//         }, 2000);
//     });
// }

// async function talk(x) {
//     const words = await saySomething(x);
//     console.log(words);
// }

// talk(2);
// talk(4);
// talk(8);


// event loop

// console.log("Hi there");
// add(4, 5);
// function add(x, y) {
//     return x + y;
// }

// console.log("Hi there");
// setTimeout(() => console.log("Sorry I'm late"), 1000);
// console.log(add(4, 5));
// function add(x, y) {
//     return x + y;
>>>>>>> 1ae81a3f3df886b413a965c24c4688d09b9039d7
// }