// Enums
console.log("\nENUM");

enum Role {
  Admin = 1,
  Editor,
  Guest = "Guest"
}

let userRoleNumber: Role;
let userRoleName: Role;

userRoleNumber = 1;
userRoleName = Role.Guest;

console.log(userRoleNumber);
console.log(userRoleName);

// Literal Types
console.log("\nLITERAL TYPES");

let userRoleLiteral: "admin" | "editor" | "guest";

userRoleLiteral = "guest";
console.log(userRoleLiteral);

userRoleLiteral = "editor";
console.log(userRoleLiteral);

let possibleResultsLiteral: [1 | -1, number];

possibleResultsLiteral = [1, 12];
console.log(possibleResultsLiteral);

possibleResultsLiteral = [-1, 12];
console.log(possibleResultsLiteral);