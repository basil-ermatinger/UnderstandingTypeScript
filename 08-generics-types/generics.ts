/******************************************************************
 * Creating & using generic types
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
 * Generic functions and inference
 ******************************************************************/

const merge = <T>(a: T, b: T) => {
  return [a, b];
};

const ids = merge<number>(1, 2);
const ids2 = merge(3, 4);

/******************************************************************
 * Working with multiple generic parameters
 ******************************************************************/

const mergeTwoGenerics = <T, U>(a: T, b: U) => {
  return [a, b];
}

const ids3 = mergeTwoGenerics<number, string>(1, "Two");
const ids4 = mergeTwoGenerics(3, "Four");
