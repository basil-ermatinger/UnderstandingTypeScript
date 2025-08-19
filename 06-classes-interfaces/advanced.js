"use strict";
/**
 * Classes, public/private, Getters, Setters, static properties and methods
 */
class User {
    _firstName = "";
    _lastName = "";
    set firstName(firstName) {
        if (firstName.trim() === "") {
            throw new Error("Invalid name.");
        }
        this._firstName = firstName;
    }
    set lastName(lastName) {
        if (lastName.trim() === "") {
            throw new Error("Invalid name.");
        }
        this._lastName = lastName;
    }
    get fullName() {
        return `${this._firstName} ${this._lastName}`;
    }
    static eid = "USER";
    static greet() {
        console.log("Hello");
    }
}
console.log(User.eid);
User.greet();
const basil = new User();
basil.firstName = "Basil";
basil.lastName = "Ermatinger";
console.log(basil.fullName);
/**
 * Inheritance
 */
class Employee extends User {
    jobTitle;
    constructor(jobTitle) {
        super();
        this.jobTitle = jobTitle;
    }
    work() {
        console.log(`The ${this.jobTitle} ${this._firstName} is working now`);
    }
}
const employee1 = new Employee("Manager");
employee1.firstName = "Peter";
employee1.work();
/**
 * Abstract class
 */
class UiElement {
    identifier;
    constructor(identifier) {
        this.identifier = identifier;
    }
    clone(targetLocation) {
        console.log(`Clone ${this.identifier} to ${targetLocation}`);
    }
}
class SideDrawerElement extends UiElement {
    identifier;
    position;
    constructor(identifier, position) {
        super(identifier);
        this.identifier = identifier;
        this.position = position;
    }
    cloneAndPrintPosition() {
        super.clone("C:\\");
        console.log(`position is ${this.position}`);
    }
}
const sideDrawerElement = new SideDrawerElement("SDE", "right");
sideDrawerElement.cloneAndPrintPosition();
