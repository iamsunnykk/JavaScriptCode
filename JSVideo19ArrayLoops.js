//Loops with Arrays
let fruits = ["Apple", "Orange", "Banana"];
let n = fruits.length
//for
for (let i = 0; i < n; i++) {
    console.log(fruits[i]);
}
//forEach()
fruits.forEach((i) => {
    console.log(i);
});
//from()
let str = "Hello";
let arr = Array.from(str);
console.log(arr); // ["H", "e", "l", "l", "o"]

//for...of
for (let i of fruits) {
    console.log(i);
}

//for...in
for (let i in fruits) {
    console.log(fruits[i]);
}