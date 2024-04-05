"use strict";

let myCar = {
    make: "Ford",
    model: "Wildtrack",
    doors: 4,
    wheels: 4,
    color: "Orange",
    registration: "SCE 453 MP",
    engineOn: true

}

let color = "Black";
myCar["color"] = color;
console.log(myCar.color);
color = "forSale";
myCar["forSale"] = true;
console.log(myCar.make);
console.log(myCar.model);
console.log(myCar.forSale);