// Index types

type DataStore = {
  [prop: string]: number | boolean;
};

let store: DataStore = {};

store.id = 5;
store.isOpen = false;

if(store.isOpen) {
  console.log(`Store with Id ${store.id} is open`);
} else {
  console.log(`Store with Id ${store.id} is closed`);
}
