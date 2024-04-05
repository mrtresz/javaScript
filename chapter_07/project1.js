"use strict";

class Employee {
    constructor(firstName, lastName, yearsWorked) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.yearsWorked = yearsWorked;
    }
}

let emp1 = new Employee("Keanu", "Reeves", 7);
let emp2 = new Employee("Jackie", "Chan", 16);
let emp3 = new Employee("Cillian", "Murphy", 13);

let employees = [];
employees.push(emp1, emp2, emp3);
Employee.prototype.getDetails = function () { console.log(this.firstName + " " + this.lastName + " Worked:  " + this.yearsWorked + " years") };

employees.forEach((Employee) => { (Employee.getDetails()) });

