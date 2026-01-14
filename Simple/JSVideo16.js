//Arrays
//Accessing Elements of an Array
let marks = [90, 85, 95, 80];
console.log(marks[0]); // 90

//
let fruits = ["Apple", "Orange", "Banana"];
console.log(fruits[0]); // Apple
console.log(fruits[1]); // Orange
console.log(fruits[2]); // Banana

let fruits1 = ["Apple", "Orange", "Banana"];
console.log(fruits1[-1]); // Banana

//Array Length
console.log(fruits.length);

//Adding and Changing Array Values:
console.log(fruits); // ["Apple", "Orange", "Banana"]
console.log(fruits.length); // 3
fruits[3] = "Grapes";
console.log(fruits); // ["Apple", "Orange", "Banana", "Grapes"]
console.log(fruits.length); // 4

//Quiz

let marks1 = [55, 66, 88, 98, 55, 78];
let i;
for (i = 0; i < marks1.length; i++) {
  console.log(marks1[i]);
}