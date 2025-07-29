// any
console.log("---------------------")
console.log("any");
console.log("---------------------")

let anyVar: any = 36;
console.log(`${typeof anyVar}: ${anyVar}`)

anyVar = "37";
console.log(`${typeof anyVar}: ${anyVar}`)

anyVar = false;
console.log(`${typeof anyVar}: ${anyVar}`)

// Union Types

console.log("---------------------")
console.log("Union Types");
console.log("---------------------")

let age: string | number = 36;
console.log(`${typeof age}: ${age}`)

age = "37";
console.log(`${typeof age}: ${age}`)
