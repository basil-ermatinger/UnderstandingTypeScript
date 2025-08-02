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

// Aliases and Custom Types
console.log("\nALIASES AND CUSTOM TYPES");

type RoleAlias = "admin" | "editor" | "guest";

let userRoleByAlias: RoleAlias;

userRoleByAlias = "editor";

const access = (roleByAlias: RoleAlias): void => {
  console.log(`userRoleByAlias: ${roleByAlias}`)
}

access(userRoleByAlias);
access("guest");