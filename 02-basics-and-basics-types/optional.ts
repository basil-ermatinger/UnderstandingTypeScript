type UserWithOptional = {
  name: string;
  age: number;
  role?: "admin" | "guest";
}

const userWithOptionalOne: UserWithOptional = {
  name: "AdminName",
  age: 30,
  role: "admin"
}

const userWithOptionalTwo: UserWithOptional = {
  name: "NoRoleName",
  age: 40
}

console.log(userWithOptionalOne);
console.log(userWithOptionalTwo);

function generateError(msg?: string) {
  if(msg) {
    throw new Error(msg);
  } else {
    console.log("No error detected");
  }
}

generateError();
generateError("Error")
