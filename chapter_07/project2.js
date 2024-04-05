"use strict";



class MenuItem {

    #price1 = 20;
    #price2 = 19;
    constructor(quantity1, quantity2) {

        this.quantity1 = quantity1;
        this.quantity2 = quantity2;
    }

    calculate() {
        let total = (this.#price1 * this.quantity1) + (this.#price2 * this.quantity2);
        return total;
    }


    get getTotal() {
        return this.calculate();
    }
}

let pizzaAndBurger = new MenuItem(5, 7);

console.log("pizzaAndBUrger " + pizzaAndBurger.getTotal);

