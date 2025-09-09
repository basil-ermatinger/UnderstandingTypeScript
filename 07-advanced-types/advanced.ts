/*********************************
 * Index types
 *********************************/

type DataStore = {
  [prop: string]: number | boolean;
};

let store: DataStore = {};

store.id = 5;
store.isOpen = false;

// constant types with "as const"

let roles = ["admin", "guest", "editor"];
roles.push("visitor");
const firstRole = roles[0];

let rolesConst = ["admin", "guest", "editor"] as const;
// rolesConst.push("visitor") -> won't work because rolesConst is readonly

const firstRoleConst = rolesConst[0];

/*********************************
 * "satisfies" keyword
 *********************************/

const dataEntries: Record<string, number> = {
  entry1: 0.51,
  entry2: -1.23
}

dataEntries.entry3 = 42;

const dataEntriesSatisfied = {
  entry1: 1,
  entry2: 2
} satisfies Record<string, number>;

// dataEntriesSatisfied.entry3 = 3; > won't work

console.log(dataEntriesSatisfied.entry1);
// console.log(dataEntriesSatisfied.entry3); > won't work

type satisfiedContract = Record<string, number>;

const dataEntriesWithContract = {
  entry1: 5,
  entry2: 6
} satisfies satisfiedContract;

