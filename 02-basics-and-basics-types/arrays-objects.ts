// Arrays
console.log("---------------------")
console.log("Arrays");
console.log("---------------------")

let hobbies : string[];
hobbies = ["Sports", "Cooking"];
console.log(hobbies)

hobbies.push("Gardening");
console.log(hobbies);

// Advanced Array Types
console.log("---------------------")
console.log("Advanced Array Types");
console.log("---------------------")

let users : (string | number)[];

users = ["Basil", 12];
console.log(users);

users = [12, "Basil"];
console.log(users);

users = ["Basil", "Ermatinger"];
console.log(users);