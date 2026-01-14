//Practice Set 4

//Question 1
//What will the following code print in JavaScript?
console.log("har\"".length)

//Question 2
//Explore the includes, startsWith, and endsWith functions in a string.
let str = "Hello World";
console.log(str.includes("Hello")); // true
console.log(str.startsWith("Hello")); // true
console.log(str.endsWith("World")); // true

console.log(str.includes("harry")); // false
console.log(str.startsWith("new")); // false
console.log(str.endsWith("new")); // false

// Question 3
// Write a program to convert a given string into lowercase.
let str1= "SUNIL"
console.log(str1.toLowerCase())
console.log(str.toLowerCase())

// Question 4
// Extract the numerical amount from this string "Total: Rupees 2907".
let str2 = "Total: Rupees 2907";
console.log(str2.slice(14));

// Question 5
// Try to change the 4th character of a given string. Would you be able to do it?
let str3 = "Hello3 World3";
str[3] = "z"; // 3rd index is 4th character 
console.log(str3); // Hello World | No change