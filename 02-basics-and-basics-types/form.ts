// with null-check

const inputEl = document.getElementById("user-name") as HTMLInputElement | null;

if(!inputEl) {
  throw new Error("Element not found!");
}

console.log(inputEl.value);

// with "Not Null"

const inputEl2 = document.getElementById("user-name")! as HTMLInputElement;

console.log(inputEl2.value);

// with optional chaining

const inputEl3 = document.getElementById("user-name") as HTMLInputElement | null;

console.log(inputEl3?.value);
