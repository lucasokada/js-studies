type Points = 20 | 30 | 50
type ComplexPerson = {
    name: string,
    age: number,
    birthYear: number,
    married: boolean,
    address: string
}
let score: Points = 20
console.log(score)
score = 90 // Type '90' is not assignable to type 'Points'.