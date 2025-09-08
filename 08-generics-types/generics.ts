// Creating & using generic types

type DataStore<T> = {
  [key: string]: T
};

let store: DataStore<string | boolean> = {};

store.name = "Basil";
store.isAdmin = true;

let nameStore: DataStore<string> = {};
nameStore.name1 = "Basil";
nameStore.name2 = "Markus";