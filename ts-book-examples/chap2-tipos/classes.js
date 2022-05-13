var Person = /** @class */ (function () {
    function Person(msg) {
        this.msg = msg;
        this.msg = msg;
    }
    Person.prototype.speak = function () {
        console.log(this.msg);
    };
    return Person;
}());
var tom = new Person('my message');
tom.speak();
