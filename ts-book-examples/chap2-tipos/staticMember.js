var ClassA = /** @class */ (function () {
    function ClassA() {
    }
    ClassA.getFullName = function () {
        return "classA " + ClassA.typeName;
    };
    return ClassA;
}());
var Runner = /** @class */ (function () {
    function Runner(typeName) {
        this.typeName = typeName;
    }
    Runner.prototype.run = function () {
        Runner.lastRunTypeName = this.typeName;
    };
    return Runner;
}());
var a = new Runner('a');
var b = new Runner('b');
b.run();
a.run();
console.log(Runner.lastRunTypeName);
