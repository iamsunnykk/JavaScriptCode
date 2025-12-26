//More Array Methods
//7.delete()
let fruits = ["Apple", "Orange", "Banana"];
//delete fruits[1];
console.log(fruits); // ["Apple", <1 empty item>, "Banana"]

//8.concat()
let vegetables = ["Potato", "Tomato", "Onion"];
let food = fruits.concat(vegetables);
console.log(food); // ["Apple", "Orange", "Banana", "Potato", "Tomato", "Onion"]

//9.sort()
fruits.sort();
console.log(fruits); // ["Apple", "Banana", "Orange"]
let numbers = [40, 100, 1, 5, 29, 10, 2907];
numbers.sort();
console.log(numbers); // [1, 10, 100, 2907, 29, 40, 5]
let compare = (a, b) => {
    return a - b;
}
let numbers1 = [40, 100, 1, 5, 29, 10, 2907];
numbers1.sort(compare);
console.log(numbers1); // [1, 5, 10, 29, 40, 100, 2907]

//10.reverse()
fruits.reverse();
console.log(fruits); // ["Banana", "Orange", "Apple"]
numbers1.reverse();
console.log(numbers1); // [2907, 10, 29, 5, 1, 100, 40]

//11.slice()
let copy = fruits.slice();
console.log(copy); // ["Apple", "Orange", "Banana"]
let copy1 = fruits.slice(0, 2);
console.log(copy1); // ["Apple", "Orange"]

//12.splice()
fruits.splice(0, 1);
console.log(fruits); // ["Orange", "Banana"]

//13.indexOf()
let index = fruits.indexOf("Apple");
console.log(index); // 2