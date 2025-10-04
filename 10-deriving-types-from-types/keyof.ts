/******************************************************************
 * Extracting Keys with "keyof"
 ******************************************************************/

type User = {
  name: string;
  age: number
};

type UserKeys = keyof User;

let validKey: UserKeys;

validKey = "name";
validKey = "age";

/******************************************************************
 * Example for using "keyof"
 ******************************************************************/

const getProp = <T extends object, U extends keyof T>(obj: T, key: U) => {
  const val = obj[key];

  if(val === undefined || val === null) {
    throw new Error("Accessing undefined or null value");
  }

  return val;
}

const user = { name: "Basil", age: 39 };

const uName = getProp(user, "name");

const data = { id: 1, isStored: false, values: [1, 5, 10] };

const dValues = getProp(data, "values");