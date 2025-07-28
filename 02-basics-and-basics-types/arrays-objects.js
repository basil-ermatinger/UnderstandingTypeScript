// Arrays
console.log("---------------------");
console.log("Arrays");
console.log("---------------------");
var hobbies;
hobbies = ["Sports", "Cooking"];
console.log(hobbies);
hobbies.push("Gardening");
console.log(hobbies);
// Advanced Array Types
console.log("---------------------");
console.log("Advanced Array Types");
console.log("---------------------");
var users;
users = ["Basil", 12];
console.log(users);
users = [12, "Basil"];
console.log(users);
users = ["Basil", "Ermatinger"];
console.log(users);
// Alternative Array Type Declaration
console.log("---------------------");
console.log("Alternative Array Type Declaration");
console.log("---------------------");
var ids;
ids = ["ABC", 123];
console.log(ids);
ids = [456, "DEF"];
console.log(ids);
ids = ["GHI", "JKL"];
console.log(ids);
// Tuples
console.log("---------------------");
console.log("Tuples");
console.log("---------------------");
var tuple;
var anotherTuple;
tuple = [1, -1];
console.log("tuple: ".concat(tuple));
anotherTuple = [1, "One"];
console.log("anotherTuple: ".concat(anotherTuple));
// Objects
console.log("---------------------");
console.log("Objects");
console.log("---------------------");
var user;
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
console.log("---------------------");
console.log("Must Not be Null");
console.log("---------------------");
var val; // means not "null or undefinied"
val = "test";
console.log(val);
val = false;
console.log(val);
