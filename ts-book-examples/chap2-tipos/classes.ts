class Person {
    constructor(private readonly msg: string) {
        this.msg = msg
    }
    
    speak() {
        console.log(this.msg)
    }
}

const tom = new Person('my message');
tom.speak();