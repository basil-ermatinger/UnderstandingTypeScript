/******************************************************************
 * Arrays
 ******************************************************************/
console.log("ARRAYS");

let hobbies: string[];

hobbies = ["Sports", "Cooking"];

hobbies.push("Gardening");

/******************************************************************
 * Advanced Array Types
 ******************************************************************/

let users: (string | number)[];

users = ["Basil", 12];
users = [12, "Basil"];
users = ["Basil", "Ermatinger"];

/******************************************************************
 * Alternative Array Type Declaration
 ******************************************************************/

let ids: Array<string | number>;

ids = ["ABC", 123];
ids = [456, "DEF"];
ids = ["GHI", "JKL"];

/******************************************************************
 * Tuples
 ******************************************************************/

let tuple: [number, number];
let anotherTuple: [number, string];

tuple = [1, -1]

anotherTuple = [1, "One"];

/******************************************************************
 * Objects
 ******************************************************************/

let user: {
  name: string,
  age: number,
  hobbies: string[],
  role: {
    description: string,
    id: number,
  }
}

user = {
  name: "Basil",
  age: 39,
  hobbies: ["Music", "Gaming"],
  role: {
    description: "Programmer",
    id: 2,
  }
};

/******************************************************************
 * "Must Not be Null"
 ******************************************************************/

let val: {}; // means not "null or undefinied"

val = "test";
val = false;

/******************************************************************
 * Flexible Objects with Record Type
 ******************************************************************/

let data: Record<string | number, string | number>;

data = {
  entry1: 1,
  entry2: "some string",
  1: 2,
  2: "some other string"
}
