/******************************************************************
 * Creating & Using Generic Types
 ******************************************************************/

type DataStore<T> = {
  [key: string]: T
};

let store: DataStore<string | boolean> = {};

store.name = "Basil";
store.isAdmin = true;

let nameStore: DataStore<string> = {};
nameStore.name1 = "Basil";
nameStore.name2 = "Markus";

/******************************************************************
 * Generic Functions and Inference
 ******************************************************************/

const merge = <T>(a: T, b: T) => {
  return [a, b];
};

const ids = merge<number>(1, 2);
const ids2 = merge(3, 4);

/******************************************************************
 * Working with Multiple Generic Parameters
 ******************************************************************/

const mergeTwoGenerics = <T, U>(a: T, b: U) => {
  return [a, b];
}

const ids3 = mergeTwoGenerics<number, string>(1, "Two");
const ids4 = mergeTwoGenerics(3, "Four");

/******************************************************************
 * Generics & Constraints
 ******************************************************************/

const mergeObj = <T extends object>(a: T, b: T) => {
  return { ...a, ...b };
};

const merged = mergeObj({ userName: "Basil"}, { age: 39 });

/******************************************************************
 * Constraints & Multiple Generic Types
 ******************************************************************/

const mergeObjMult = <T extends object, U extends object>(a: T, b: U) => {
  return { ...a, ...b };
};

const mergedMult = mergeObjMult({ userName: "Basil"}, { age: 39 });

/******************************************************************
 * Working with Generic Classes & Interfaces
 ******************************************************************/

interface IRole<T> {
  name: T,
}

class User<T> {
  constructor(public id: T, public role: IRole<T>) { }
}

const userRole: IRole<string> = {
  name: "Basil"
}

const user = new User("id1", userRole);

const userRole2: IRole<number> = {
  name: 2
}

const user2 = new User(2, userRole2);






























