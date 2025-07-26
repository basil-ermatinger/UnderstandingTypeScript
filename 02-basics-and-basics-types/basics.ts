let userName : string;
let userAge = 0;

userName = "Basil";
userAge = 39;

const add = (a : number, b = 5) => {
  return a + b;
}

console.log(add(10));
console.log(add(10, 1));