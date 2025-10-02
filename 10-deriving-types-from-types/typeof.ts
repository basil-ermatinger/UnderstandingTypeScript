/******************************************************************
 * Using "typeof"
 ******************************************************************/

const userName = "Basil";

type UserName = typeof userName; // type UserName = "Basil"

/******************************************************************
 * "typeof" & a More Useful Example
 ******************************************************************/

const settings = {
  difficulty: "easy",
  minLevel: 10,
  didStart: false,
  players: ["Basil", "John"]
};

type Settings = typeof settings;

function loadData(s: typeof settings) {
  /// ...
}

/******************************************************************
 * Another Use-Case for "typeof"
 ******************************************************************/

const sum = (a: number, b: number) => {
  return a + b;
}

const subtract = (a: number, b: number) => {
  return a - b;
}

type SumFn = typeof sum;
type SubtractFn = typeof subtract;

const performMathAction = (cb: SumFn | SubtractFn) => {
  // ...
}

performMathAction(sum);
performMathAction(subtract);