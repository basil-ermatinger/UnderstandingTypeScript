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

// Examples for spread operator

const hobbies = ["Sports", "Cooking"];

const activeHobbies = ["Gaming", "Programming"];
activeHobbies.push(...hobbies);

const moreHobbies = ["Eating", ...hobbies, ...activeHobbies];

console.log(hobbies);
console.log(activeHobbies);
console.log(moreHobbies);

const person = {
  name: "Basil",
  age: 30,
}

const copiedPerson = { ...person };
copiedPerson.name = "Other Basil";

console.log(person);
console.log(copiedPerson);

// Examples for rest parameters

const addWithRestPara = (...numbers: number[]) => numbers.reduce((curResult, curValue) => curResult + curValue, 0)

const addFiveNumbers = addWithRestPara(1, 2, 3, 4, 5.5);
const addTenNumbers = addWithRestPara(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);

console.log(addFiveNumbers);
console.log(addTenNumbers);

const subtractWithRestParaThreeNumbers = (...numbers: [number, number, number]) => numbers.reduce((curResult, curValue) => curResult - curValue, numbers[0]);

const subtractFiveNumbers = subtractWithRestParaThreeNumbers(10, 3, 2);
console.log(subtractFiveNumbers);

// Examples for array and object destruction

const games = ["Fallout", "Skyrim", "GTA", "Final Fantasy"]
const [game1, game2, ...remainingGames] = games;

console.log(`${game1}\n${game2}\n${remainingGames}`);

const game = {
  gameName: game1,
  genre: "RPG",
  durationToComplete: "100+"
}

const { gameName, genre, durationToComplete: durationInHour } = game;

console.log(`The ${genre} game ${gameName} needs ${durationInHour} hours to be completed.`);

