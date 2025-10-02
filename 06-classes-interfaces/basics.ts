enum UserLocation {
  Zurich = "Zürich",
  Basel = "Basel",
  Bern  = "Bern"
}

class UserLong {
  name: string;
  age: number;
  location: UserLocation;

  constructor(name: string, age: number, location: UserLocation) {
    this.name = name;
    this.age = age;
    this.location = location;
  }
}

class UserShort {
  public hobbies: string[] = [];
  readonly favoriteBooks: string[] = [];

  constructor(private name: string, public age: number, public location: UserLocation) {}

  printName() {
    console.log(this.name);
  }
}

const user1 = new UserShort("Richard", 39, UserLocation.Zurich);
const user2 = new UserShort("Tanja", 25, UserLocation.Bern);

user1.age = 40;
user1.location = UserLocation.Basel;
user1.hobbies = ["Programming", "Music"];
user1.favoriteBooks.push("Lord Of The Rings")

user1.printName();
