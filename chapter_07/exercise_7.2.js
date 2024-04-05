"use strict";

"use strict";

class Person {
    constructor(firstname, lastname) {
        this.firstname = firstname;
        this.lastname = lastname;
    }

    fullName() {
        let fullname = this.firstname + " " + this.lastname;
        return fullname;
    }
}

let p1 = new Person("Macdonald", "Mahlalela");
let p2 = new Person("Mandla", "Mbethe");
let p3 = new Person("Andile", "Thwala");

console.log("hello", p3.fullName());
