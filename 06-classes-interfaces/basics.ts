enum UserLocation {
  Zurich = "Zürich",
  Aarau = "Aarau"
}

class User {
  name: string;
  age: number;
  location: UserLocation;

  constructor(name: string, age: number, location: UserLocation) {
    this.name = name;
    this.age = age;
    this.location = location;
  }
}