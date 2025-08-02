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