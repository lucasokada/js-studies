let literal: 'tom' | 'linda' | 'jeff' | 'sue' | 1 | 54 | 21 = 'linda'
literal = 'sue'
console.log(literal) // sue
literal = 'lucas' // error TS2322: Type '"lucas"' is not assignable to type '"tom" | "linda" | "jeff" | "sue"'.
