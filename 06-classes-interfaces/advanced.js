"use strict";
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
}
console.log(User.eid);
const basil = new User();
basil.firstName = "Basil";
basil.lastName = "Ermatinger";
console.log(basil.fullName);
