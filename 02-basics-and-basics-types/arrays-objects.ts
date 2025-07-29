// Arrays
console.log("---------------------")
console.log("Arrays");
console.log("---------------------")

let hobbies: string[];
hobbies = ["Sports", "Cooking"];
console.log(hobbies)

hobbies.push("Gardening");
console.log(hobbies);

// Advanced Array Types
console.log("---------------------")
console.log("Advanced Array Types");
console.log("---------------------")

let users: (string | number)[];

users = ["Basil", 12];
console.log(users);
users = [12, "Basil"];
console.log(users);
users = ["Basil", "Ermatinger"];
console.log(users);

// Alternative Array Type Declaration
console.log("---------------------")
console.log("Alternative Array Type Declaration");
console.log("---------------------")

let ids: Array<string | number>;

ids = ["ABC", 123];
console.log(ids);
ids = [456, "DEF"];
console.log(ids);
ids = ["GHI", "JKL"];
console.log(ids);

// Tuples
console.log("---------------------")
console.log("Tuples");
console.log("---------------------")

let tuple: [number, number];
let anotherTuple: [number, string];

tuple = [1, -1]
console.log(`tuple: ${tuple}`);

anotherTuple = [1, "One"];
console.log(`anotherTuple: ${anotherTuple}`);

// Objects
console.log("---------------------")
console.log("Objects");
console.log("---------------------")

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

console.log("user:");
console.log(user);

// "Must Not be Null"
console.log("---------------------")
console.log("Must Not be Null");
console.log("---------------------")

let val: {}; // means not "null or undefinied"

val = "test";
console.log(val);
val = false;
console.log(val);

// Flexible Objects with Record Type
console.log("---------------------")
console.log("Flexible Objects with Record Type");
console.log("---------------------")

let data: Record<string | number, string | number>;

data = {
  entry1: 1,
  entry2: "some string",
  1: 2,
  2: "some other string"
}

console.log(data);