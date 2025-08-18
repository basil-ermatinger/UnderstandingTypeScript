class User {
  private _firstName: string = "";
  private _lastName: string = "";

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
}

console.log(User.eid);

const basil = new User();

basil.firstName = "Basil";
basil.lastName = "Ermatinger";

console.log(basil.fullName);
