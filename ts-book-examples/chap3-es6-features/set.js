const userIds = [
    1, 2, 1, 3
];
const uniqueIds = new Set(userIds);
console.log(uniqueIds); //Set(3) { 1, 2, 3 }
uniqueIds.add(10);
console.log('add 10 ', uniqueIds); //add 10  Set(4) { 1, 2, 3, 10 }
console.log('has ', uniqueIds.has(3)); //has  true
console.log('size ', uniqueIds.size); //size  4
for (let item of uniqueIds) {
    console.log('iterate ', item);
    /*
        iterate  1
        iterate  2
        iterate  3
        iterate  10
    */
}
console.log(uniqueIds.values().next());
let done = false;
let response = uniqueIds.values().next();
while (!done) {
    console.log(response.value);
    response = uniqueIds.values().next();
    done = response.done;
}
