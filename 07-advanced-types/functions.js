"use strict";
// without function overloading
function getLength(val) {
    if (typeof val === "string") {
        const numberOfWords = val.split(" ").length;
        return `${numberOfWords} words`;
    }
    return val.length;
}
const numberOfWords = getLength("These are four words");
console.log(numberOfWords);
console.log(numberOfWords.length);
console.log(getLength(["one", "two", "three"]));
function getLengthOverloaded(val) {
    if (typeof val === "string") {
        const numberOfWords = val.split(" ").length;
        return `${numberOfWords} words`;
    }
    return val.length;
}
const numberOfWordsOverloaded = getLengthOverloaded("These are four words");
console.log(numberOfWordsOverloaded);
console.log(numberOfWordsOverloaded.length);
console.log(getLengthOverloaded(["one", "two", "three"]));
