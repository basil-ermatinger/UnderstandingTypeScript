// Arrays
console.log("ARRAYS");
var hobbies;
hobbies = ["Sports", "Cooking"];
console.log(hobbies);
hobbies.push("Gardening");
console.log(hobbies);
// Advanced Array Types
console.log("\nADVANCED ARRAY TYPES");
var users;
users = ["Basil", 12];
console.log(users);
users = [12, "Basil"];
console.log(users);
users = ["Basil", "Ermatinger"];
console.log(users);
// Alternative Array Type Declaration
console.log("\nALTERNATIVE ARRAY TYPE DECLARATION");
var ids;
ids = ["ABC", 123];
console.log(ids);
ids = [456, "DEF"];
console.log(ids);
ids = ["GHI", "JKL"];
console.log(ids);
// Tuples
console.log("\nTUPLES");
var tuple;
var anotherTuple;
tuple = [1, -1];
console.log("tuple: ".concat(tuple));
anotherTuple = [1, "One"];
console.log("anotherTuple: ".concat(anotherTuple));
// Objects
console.log("\nOBJECTS");
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
console.log("\nMUST NOT BE NULL");
var val; // means not "null or undefinied"
val = "test";
console.log(val);
val = false;
console.log(val);
// Flexible Objects with Record Type
console.log("\nFLEXIBLE OBJECTS WITH RECORD TYPE");
var data;
data = {
    entry1: 1,
    entry2: "some string",
    1: 2,
    2: "some other string"
};
console.log(data);
