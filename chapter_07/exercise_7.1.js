"use strict";

class Person {
    constructor(firstname, lastname) {
        this.firstname = firstname;
        this.lastname = lastname;
    }
}



let p1 = new Person("Macdonald", "Mahlalela");
let p2 = new Person("Mandla", "Mbethe");
let p3 = new Person("Andile", "Thwala");

console.log("Hello", p2.firstname + " " + p2.lastname + " and" + " " + p1.firstname + " " + p1.lastname);