/******************************************************************
 * Enums
 ******************************************************************/

enum Role {
  Admin = 1,
  Editor,
  Guest = "Guest"
}

let userRoleNumber: Role;
let userRoleName: Role;

userRoleNumber = 1;
userRoleName = Role.Guest;

/******************************************************************
 * Literal Types
 ******************************************************************/

let userRoleLiteral: "admin" | "editor" | "guest";

userRoleLiteral = "guest";
userRoleLiteral = "editor";

let possibleResultsLiteral: [1 | -1, number];

possibleResultsLiteral = [1, 12];
possibleResultsLiteral = [-1, 12];

/******************************************************************
 * Aliases and Custom Types
 ******************************************************************/

type RoleAlias = "admin" | "editor" | "guest";

let userRoleByAlias: RoleAlias;

userRoleByAlias = "editor";

const access = (roleByAlias: RoleAlias): void => {
  console.log(`userRoleByAlias: ${roleByAlias}`)
}