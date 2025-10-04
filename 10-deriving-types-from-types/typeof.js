"use strict";
/******************************************************************
 * Using "typeof"
 ******************************************************************/
const userName = "Basil";
/******************************************************************
 * "typeof" & a More Useful Example
 ******************************************************************/
const settings = {
    difficulty: "easy",
    minLevel: 10,
    didStart: false,
    players: ["Basil", "John"]
};
function loadData(s) {
    /// ...
}
/******************************************************************
 * Another Use-Case for "typeof"
 ******************************************************************/
const sum = (a, b) => {
    return a + b;
};
const subtract = (a, b) => {
    return a - b;
};
const performMathAction = (cb) => {
    // ...
};
performMathAction(sum);
performMathAction(subtract);
