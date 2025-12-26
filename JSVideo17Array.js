//Array Methods
//1.toString()  
let fruits = ["Apple", "Orange", "Banana"];
console.log(fruits.toString()); // Apple,Orange,Banana
console.log(typeof fruits.toString()); // string

//2.join()  
console.log(fruits.join("-")); // Apple-Orange-Banana
console.log(typeof fruits.join("-")); // string
//3.pop()
console.log(fruits.pop()); // Banana
console.log(fruits); // ["Apple", "Orange"]
//4.push()
console.log(fruits.push("Pineapple")); // 4
console.log(fruits); // ["Apple", "Orange", "Banana", "Pineapple"]
//5.shift()
console.log(fruits.shift()); // Apple
console.log(fruits); // ["Orange", "Banana"]
//6.unshift()
console.log(fruits.unshift("Pineapple")); // 4
console.log(fruits); // ["Pineapple", "Apple", "Orange", "Banana"]