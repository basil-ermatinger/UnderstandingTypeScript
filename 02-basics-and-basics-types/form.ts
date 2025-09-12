/******************************************************************
 * With Null-Check
 ******************************************************************/

const inputEl = document.getElementById("user-name") as HTMLInputElement | null;

if(!inputEl) {
  throw new Error("Element not found!");
}

/******************************************************************
 * With "Not Null"
 ******************************************************************/

const inputEl2 = document.getElementById("user-name")! as HTMLInputElement;

/******************************************************************
 * With Optional Chaining
 ******************************************************************/

const inputEl3 = document.getElementById("user-name") as HTMLInputElement | null;
const value = inputEl3?.value;
