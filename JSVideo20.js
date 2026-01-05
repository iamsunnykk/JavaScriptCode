//map()
let numbers = [1, 2, 3, 4, 5];
let doubledNumbers = numbers.map((i) => {
    return i * 2;
});
console.log(doubledNumbers); // [2, 4, 6, 8, 10]

let stringNumbers = numbers.map((i) => {
    return i.toString();
});
console.log(stringNumbers); // ["1", "2", "3", "4", "5"]

//filter()

let filteredNumbers = numbers.filter((i) => {
    return i > 3;
});
console.log(filteredNumbers); // [4, 5]

//reduce()
let sum = numbers.reduce((first, second) => {
    return first + second;
});
console.log(sum); // 15