const items = [
    { name: 'jon', age: 20 },
    { name: 'linda', age: 40 },
    { name: 'jon', age: 40 }
];
const jon = items.find((item) => {
    return item.name == 'lucas';
});
console.log(jon); //{ name: 'jon', age: 20 }
