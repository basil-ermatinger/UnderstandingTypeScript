// Function Return Value Types
console.log("\nFUNCTION RETURN VALUE TYPES");
var add = function (a, b) {
    return a + b;
};
var addedNumber;
addedNumber = add(1, 2);
console.log(addedNumber);
// "void" Type
console.log("\n\"VOID\" TYPE");
var log = function (message) {
    console.log(message);
};
log("TestMessage");
// "never" type
console.log("\n\"NEVER\" TYPE");
function logAndThrow(errorMessage) {
    console.log(errorMessage);
    throw new Error(errorMessage);
}
// const logError = logAndThrow("This is an error message!");
// Functions as Types
console.log("\nFUNCTION AS TYPES");
var logMsg = function (msg) {
    console.log(msg);
};
function performJob(cb) {
    // ...do something
    cb("Job done!");
}
performJob(logMsg);
var user = {
    name: "Basil",
    age: 39,
    greet: function () {
        console.log("Hello there!");
        return "Greetings from ".concat(this.name);
    }
};
console.log(user.greet());
