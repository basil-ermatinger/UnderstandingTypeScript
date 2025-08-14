// Examples for const and let

const userName = "Basil";
let age = 30;

age = 29;

function add(a: number, b: number) {
  let result;
  result = a + b;
  return result;
}

// Examples of arrow functions

const addAsArrowFunc = (a: number, b: number) => {
  return a + b;
}

const addAsArrowFuncShort = (a: number, b: number) => a + b;

const printOutput: (a: number | string) => void = output => console.log(output);

console.log(addAsArrowFunc(2, 5));
console.log(addAsArrowFuncShort(10, 10));
printOutput(add(8, 8));

const button = document.querySelector("button");

if(button) {
  button.addEventListener("click", event => console.log(event));
}

// Examples for default function parameters

const addWithDefault = (a: number, b: number = 2) => a + b;

console.log(addWithDefault(3));