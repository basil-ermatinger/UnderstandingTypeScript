/**************************************************************************
 * Classes, public/private, Getters, Setters, Static Properties and Methods
 **************************************************************************/

class User {
  protected _firstName: string = "";
  protected _lastName: string = "";

  set firstName(firstName: string) {
    if(firstName.trim() === "") {
      throw new Error("Invalid name.");
    }

    this._firstName = firstName;
  }

  set lastName(lastName: string) {
    if(lastName.trim() === "") {
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

User.greet();

const basil = new User();

basil.firstName = "Basil";
basil.lastName = "Ermatinger";

/******************************************************************
 * Inheritance
 ******************************************************************/

class Employee extends User {
  constructor(public jobTitle: string) {
    super();
  }

  public work() {
    console.log(`The ${this.jobTitle} ${this._firstName} is working now`);
  }
}

const employee1 = new Employee("Manager");
employee1.firstName = "Peter";
employee1.work();

/******************************************************************
 * Abstract Class
 ******************************************************************/

abstract class UiElement {
  constructor(public identifier: string) {}

  public clone(targetLocation: string) {
    console.log(`Clone ${this.identifier} to ${targetLocation}`);
  }
}

class SideDrawerElement extends UiElement {
  constructor(public identifier: string, public position: "left" | "right") {
    super(identifier);
  }

  public cloneAndPrintPosition() {
    super.clone("C:\\");
    console.log(`position is ${this.position}`);
  }
}

const sideDrawerElement = new SideDrawerElement("SDE", "right");
sideDrawerElement.cloneAndPrintPosition();