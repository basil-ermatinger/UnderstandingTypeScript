var userWithOptionalOne = {
    name: "AdminName",
    age: 30,
    role: "admin"
};
var userWithOptionalTwo = {
    name: "NoRoleName",
    age: 40
};
console.log(userWithOptionalOne);
console.log(userWithOptionalTwo);
function generateError(msg) {
    if (msg) {
        throw new Error(msg);
    }
    else {
        console.log("No error detected");
    }
}
generateError();
generateError("Error");
