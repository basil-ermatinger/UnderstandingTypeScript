/******************************************************************
 * Mapped Types
 ******************************************************************/

type Operations = {
  add: (a: number, b: number) => number;
  subtract: (a: number, b: number) => number;
}

type Results<T> = {
  [Key in keyof T]: number
}

let mathOperations: Operations = {
  add(a: number, b: number) {
    return a + b
  },
  subtract(a: number, b: number) {
    return a - b;
  }
}

let mathResults: Results<Operations> = {
  add: mathOperations.add(1, 2),
  subtract: mathOperations.subtract(5, 2)
}

/******************************************************************
 * Readonly Types & Optional Mapping
 ******************************************************************/

type OperationsOptional = {
  multiply: (a: number, b: number) => number;
  divide: (a: number, b: number) => number;
}

type ResultsOptional<T> = {
  readonly [Key in keyof T]?: number
}

let mathOperationsOptional: OperationsOptional = {
  multiply(a: number, b: number) {
    return a * b
  },
  divide(a: number, b: number) {
    return a / b;
  }
}

let mathResultsOptional: ResultsOptional<OperationsOptional> = {
  multiply: mathOperationsOptional.multiply(1, 2),
  divide: mathOperationsOptional.divide(1, 2)
}