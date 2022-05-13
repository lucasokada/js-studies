const callerObj = {
    name: 'John'
}

function checkMyThis(age) {
    console.log(`What is this ${this}`)
    console.log(`Do I have a name? ${this.name}`)
    this.age = age
    console.log(`What is my age ${this.age}`)
}

checkMyThis()
/* 
What is this [object global]
Do I have a name? undefined
What is my age undefined
*/

checkMyThis.call(callerObj, 25)
/*
What is this [object Object]
Do I have a name? John
What is my age 25
*/