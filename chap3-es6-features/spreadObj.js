var NamespaceA;
(function (NamespaceA) {
    class A {
        constructor() {
            this.aName = 'A';
        }
    }
    class B {
        constructor() {
            this.bName = 'B';
        }
    }
    const a = new A();
    const b = new B();
    const c = Object.assign(Object.assign({}, a), b);
    const d = Object.assign(a, b);
    console.log(c); //{ aName: 'A', bName: 'B' }
    console.log(d); //A { aName: 'A', bName: 'B' }
    a.aName = 'a1';
    console.log(c); //{ aName: 'A', bName: 'B' }
    console.log(d);
})(NamespaceA || (NamespaceA = {}));
