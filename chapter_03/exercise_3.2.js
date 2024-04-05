"use strict";

let shoppingList = []; //creates an empty array
shoppingList.push("Milk", "Bread", "Apples"); //uses push() method adds 3 items to array
shoppingList.splice(1, 1, "Bananas", "Eggs"); //replaces index 1 with bananas and eggs
console.log(shoppingList);
console.log(shoppingList.pop()); //removes last item in the array and prints it on the console
shoppingList.sort(); //sorts the array alphabetically
console.log(shoppingList.findIndex(e => e === "Milk")); //finds the index of milk and prints it to the console
shoppingList.splice(1, 0, "Carrots", "Lettuce");
let newList = ["Juice", "Pop"];
shoppingList = shoppingList.concat(newList).concat(newList);//adding newList to shoppingList twice
console.log(shoppingList);


