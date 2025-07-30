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