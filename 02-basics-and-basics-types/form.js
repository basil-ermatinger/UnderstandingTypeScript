// with null-check
var inputEl = document.getElementById("user-name");
if (!inputEl) {
    throw new Error("Element not found!");
}
console.log(inputEl.value);
// with "Not Null"
var inputEl2 = document.getElementById("user-name");
console.log(inputEl2.value);
// with optional chaining
var inputEl3 = document.getElementById("user-name");
console.log(inputEl3 === null || inputEl3 === void 0 ? void 0 : inputEl3.value);
