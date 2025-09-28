/******************************************************************
 * const and let
 ******************************************************************/

const userName = "Basil";
let age = 30;

age = 29;

function add(a: number, b: number) {
  let result;
  result = a + b;
  return result;
}

/******************************************************************
 * Arrow Functions
 ******************************************************************/

const addAsArrowFunc = (a: number, b: number) => {
  return a + b;
}

const addAsArrowFuncShort = (a: number, b: number) => a + b;

const printOutput: (a: number | string) => void = output => console.log(output);

printOutput(add(8, 8));

const button = document.querySelector("button");

if(button) {
  button.addEventListener("click", event => console.log(event));
}

/******************************************************************
 * Default Function Parameters
 ******************************************************************/

const addWithDefault = (a: number, b: number = 2) => a + b;

/******************************************************************
 * Spread Operator
 ******************************************************************/

const hobbies = ["Sports", "Cooking"];

const activeHobbies = ["Gaming", "Programming"];
activeHobbies.push(...hobbies);

const moreHobbies = ["Eating", ...hobbies, ...activeHobbies];

const person = {
  name: "Basil",
  age: 30,
}

const copiedPerson = { ...person };
copiedPerson.name = "Other Basil";

/******************************************************************
 * Rest Parameters
 ******************************************************************/

const addWithRestPara = (...numbers: number[]) => numbers.reduce((curResult, curValue) => curResult + curValue, 0)

const addFiveNumbers = addWithRestPara(1, 2, 3, 4, 5.5);
const addTenNumbers = addWithRestPara(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);

const subtractWithRestParaThreeNumbers = (...numbers: [number, number, number]) => numbers.reduce((curResult, curValue) => curResult - curValue, numbers[0]);

const subtractFiveNumbers = subtractWithRestParaThreeNumbers(10, 3, 2);

/******************************************************************
 * Array and Object Destruction
 ******************************************************************/

const games = ["Fallout", "Skyrim", "GTA", "Final Fantasy"]
const [game1, game2, ...remainingGames] = games;

const game = {
  gameName: game1,
  genre: "RPG",
  durationToComplete: "100+"
}

const { gameName, genre, durationToComplete: durationInHour } = game;