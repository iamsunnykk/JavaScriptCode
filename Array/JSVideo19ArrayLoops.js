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
//For Each
let num = [3,5,1,2,4]
num.forEach((ele) => {
    console.log(ele*ele)
})
//ArrayFrom
let name="Sunil";
let arr1 =Array.from(name)
console.log(arr1)
//For of
for (let i of num){
    console.log(i)
}

//for in
for(let iteam of num){
console.log(iteam)
}