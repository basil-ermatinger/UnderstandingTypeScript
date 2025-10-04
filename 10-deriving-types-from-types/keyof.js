"use strict";
/******************************************************************
 * Extracting Keys with "keyof"
 ******************************************************************/
let validKey;
validKey = "name";
validKey = "age";
/******************************************************************
 * Example for using "keyof"
 ******************************************************************/
const getProp = (obj, key) => {
    const val = obj[key];
    if (val === undefined || val === null) {
        throw new Error("Accessing undefined or null value");
    }
    return val;
};
const user = { name: "Basil", age: 39 };
const uName = getProp(user, "name");
const data = { id: 1, isStored: false, values: [1, 5, 10] };
const dValues = getProp(data, "values");
