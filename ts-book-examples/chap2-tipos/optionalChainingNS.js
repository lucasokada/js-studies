var OptionalChainingNS;
(function (OptionalChainingNS) {
    var _a, _b;
    var Automobile = /** @class */ (function () {
        function Automobile(wheels) {
            this.wheels = wheels;
        }
        return Automobile;
    }());
    var car = new Automobile({
        count: undefined
    });
    console.log("car ", car); //car  Automobile { wheels: { count: undefined } }
    console.log("wheels ", car === null || car === void 0 ? void 0 : car.wheels); //wheels  { count: undefined }
    console.log("count ", (_a = car === null || car === void 0 ? void 0 : car.wheels) === null || _a === void 0 ? void 0 : _a.count); //count  undefined    
    var count = !car ? 0
        : !car.wheels ? 0
            : !((_b = car.wheels) === null || _b === void 0 ? void 0 : _b.count) ? 0
                : car.wheels.count;
    var val1 = undefined;
    var val2 = 10;
    var result = val1 !== null && val1 !== void 0 ? val1 : val2;
    console.log(result);
})(OptionalChainingNS || (OptionalChainingNS = {}));
