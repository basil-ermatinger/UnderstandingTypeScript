"use strict";
// Index types
let store = {};
store.id = 5;
store.isOpen = false;
if (store.isOpen) {
    console.log(`Store with Id ${store.id} is open`);
}
else {
    console.log(`Store with Id ${store.id} is closed`);
}
// constant types with "as const"
let roles = ["admin", "guest", "editor"];
roles.push("visitor");
const firstRole = roles[0];
console.log(firstRole);
let rolesConst = ["admin", "guest", "editor"];
// rolesConst.push("visitor") -> won't work because rolesConst is readonly
const firstRoleConst = rolesConst[0];
console.log(firstRoleConst);
// "satisfies" keyword
const dataEntries = {
    entry1: 0.51,
    entry2: -1.23
};
dataEntries.entry3 = 42;
console.log(dataEntries.entry1);
console.log(dataEntries.entry3);
console.log(dataEntries.entry4);
const dataEntriesSatisfied = {
    entry1: 1,
    entry2: 2
};
// dataEntriesSatisfied.entry3 = 3; > won't work
console.log(dataEntriesSatisfied.entry1);
const dataEntriesWithContract = {
    entry1: 5,
    entry2: 6
};
console.log(dataEntriesWithContract.entry1);
