// without function overloading

function getLength(val: string | any[]) {
  if(typeof val === "string") {
    const numberOfWords = val.split(" ").length;
    return `${numberOfWords} words`;
  }
  return val.length;
}

const numberOfWords = getLength("These are four words") as string;
console.log(numberOfWords);
console.log(numberOfWords.length);

console.log(getLength(["one", "two", "three"]));

// with function overload

function getLengthOverloaded(val: string): string;
function getLengthOverloaded(val: any[]): number;

function getLengthOverloaded(val: string | any[]) {
  if(typeof val === "string") {
    const numberOfWords = val.split(" ").length;
    return `${numberOfWords} words`;
  }
  return val.length;
}

const numberOfWordsOverloaded = getLengthOverloaded("These are four words");
console.log(numberOfWordsOverloaded);
console.log(numberOfWordsOverloaded.length);

console.log(getLengthOverloaded(["one", "two", "three"]));