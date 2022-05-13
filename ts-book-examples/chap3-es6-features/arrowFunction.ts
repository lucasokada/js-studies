const myFunc = (message: string) : void => {
    console.log(message)
}

myFunc('hello') //hello

const func = () => console.log('func')
const func1 = () => ({ name: 'dave' })
const func2 = () => {
    const val = 20
    return val
}

console.log(func()) //func
console.log(func1()) //undefined { name: 'dave' }
console.log(func2())