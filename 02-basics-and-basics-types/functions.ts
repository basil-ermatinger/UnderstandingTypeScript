// Function Return Value Types
console.log("\nFUNCTION RETURN VALUE TYPES");

const add = (a: number, b: number): number => {
  return a + b;
}

let addedNumber: number;

addedNumber = add(1, 2);
console.log(addedNumber);

// "void" Type
console.log("\n\"VOID\" TYPE")

const log = (message: string) => {
  console.log(message);
}

log("TestMessage");

// "never" type
console.log("\n\"NEVER\" TYPE");

function logAndThrow(errorMessage: string): never {
  console.log(errorMessage);
  throw new Error(errorMessage);
}

// const logError = logAndThrow("This is an error message!");

// Functions as Types
console.log("\nFUNCTION AS TYPES");

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

let user: User = {
  name: "Basil",
  age: 39,
  greet() {
    console.log("Hello there!");
    return `Greetings from ${this.name}`;
  }
}

console.log(user.greet());