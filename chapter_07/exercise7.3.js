"use strict";

class Animal {
    constructor(species, sound) {
        this.species = species;
        this.sound = sound;
    }

    makeSound() {
        console.log("a " + this.species + " goes " + this.sound);
    }
}

Animal.prototype.sitDown = () => console.log("sitting down");
let animal1 = new Animal("cow", "mooo!");
let animal2 = new Animal("cat", "meow!");

animal1.makeSound();
animal2.makeSound();

