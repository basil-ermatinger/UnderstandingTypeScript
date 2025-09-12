/******************************************************************
 * Function Return Value Types
 ******************************************************************/

const addNumbers = (a: number, b: number): number => {
  return a + b;
}

let addedNumber: number;
addedNumber = addNumbers(1, 2);

/******************************************************************
 * "Void" Type
 ******************************************************************/

const log = (message: string) => {
  console.log(message);
}

/******************************************************************
 * "Never" Type
 ******************************************************************/

// "never" means “never ends normally, e.g., due to an error or infinite loop.”
// Would also work with "void" but is less specific
function logAndThrow(errorMessage: string): never {
  throw new Error(errorMessage);
}

/******************************************************************
 * Functions as Types
 ******************************************************************/

const logMsg = (msg: string) => {
  console.log(msg);
}

function performJob(cb: (message: string) => void) {
  // ...do something
  cb("Job done!");
}

performJob(logMsg);

type User = {
  name: string;
  age: number;
  greet: () => string;
}

let userTest: User = {
  name: "Basil",
  age: 39,
  greet() {
    return `Greetings from ${this.name}`;
  }
}