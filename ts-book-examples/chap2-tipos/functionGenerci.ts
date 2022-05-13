interface HashLength {
    length: number
}

function getLength<T extends HashLength> (arg: T): number {
    return arg["length"]
}

console.log(getLength<number>(22))      //Type 'number' does not satisfy the constraint 'HashLength'.
console.log(getLength('Hello World.'))