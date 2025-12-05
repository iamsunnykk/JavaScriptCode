// Video No 6
console.log("Operators In JS")
let a = 10;
let b =4;
console.log("a+b",a+b)
console.log("a-b",a-b)
console.log("a/b",a/b)
console.log("a**b",a**b)
console.log("a%b",a%b)
console.log("++a " + ++a)
console.log("a++ " + a++)
console.log("--a " + --a)
console.log("a-- " + a--)
console.log("a " + a)
console.log("a-- " + a--)


//Assigment Operator

let x = 5;

// Addition assignment
x += 3; // equivalent to x = x + 3
console.log(x); // Output: 8

// Subtraction assignment
x -= 2; // equivalent to x = x - 2
console.log(x); // Output: 6

// Multiplication assignment
x *= 4; // equivalent to x = x * 4
console.log(x); // Output: 24

// Division assignment
x /= 3; // equivalent to x = x / 3
console.log(x); // Output: 8

// Modulus assignment
x %= 5; // equivalent to x = x % 5
console.log(x); // Output: 3

//Comparison Operators

console.log(5 > 2); // true
console.log(5 == "5"); // true (type coercion is performed)
console.log(5 === "5"); // false (different types)
console.log(5 != "6"); // true
console.log(5 !== "5"); // true (different types)

//Logical Operators
const m = 10;
const n = 20;
const o = 30;

console.log(m < n && n < o); // true
console.log(m < n && b > o); // false
