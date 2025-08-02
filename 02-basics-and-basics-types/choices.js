// Enums
console.log("\nENUM");
var Role;
(function (Role) {
    Role[Role["Admin"] = 1] = "Admin";
    Role[Role["Editor"] = 2] = "Editor";
    Role["Guest"] = "Guest";
})(Role || (Role = {}));
var userRoleNumber;
var userRoleName;
userRoleNumber = 1;
userRoleName = Role.Guest;
console.log(userRoleNumber);
console.log(userRoleName);
// Literal Types
console.log("\nLITERAL TYPES");
var userRoleLiteral;
userRoleLiteral = "guest";
console.log(userRoleLiteral);
userRoleLiteral = "editor";
console.log(userRoleLiteral);
var possibleResultsLiteral;
possibleResultsLiteral = [1, 12];
console.log(possibleResultsLiteral);
possibleResultsLiteral = [-1, 12];
console.log(possibleResultsLiteral);
// Aliases and Custom Types
console.log("\nALIASES AND CUSTOM TYPES");
var userRoleByAlias;
userRoleByAlias = "editor";
var access = function (roleByAlias) {
    console.log("userRoleByAlias: ".concat(roleByAlias));
};
access(userRoleByAlias);
access("guest");
