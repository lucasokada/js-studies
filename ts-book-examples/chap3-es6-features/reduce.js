var allTrucks = [
    2, 4, 7, 10
];
var initialCapacity = 0;
var allTonnage = allTrucks.reduce(function (totalCapacity, currentCapacity) {
    totalCapacity = totalCapacity + currentCapacity;
    return totalCapacity;
}, initialCapacity);
console.log(allTonnage);
