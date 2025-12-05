//Tut no 1 
let a = 45;
{
    let a= 'this'
    console.log(a)
}
console.log(a)

//Video No 5 Practice Set 

//1.Create a variable of type string and try to add a number to it.
let name = "Harry ";
let age = 29;
console.log(name + age); // "Harry29"

//2.Use the typeof keyword to see the data type of the variables in the previous question.
console.log(typeof name); // "string"
console.log(typeof age); // "number"

//3.Create a constant object in JavaScript and then try to change its value to another data type.
// const biodata = { 
//     name: "Harry",
//     age: 30 
// };
//biodata = 29; // 

//4.Try to add a new key to the previous const object.
const biodata = { 
    name: "Sunil", 
    age: 30 
    };
biodata.address = "123 Main St";
console.log(biodata); // { name: "John", age: 30, address: "123 Main St" }
//5.Create a JavaScript program to make a month dictionary like 1 = January, 2 = February, and so on.
const months = {
  1: "January",
  2: "February",
  3: "March",
  4: "April",
  5: "May",
  6: "June",
  7: "July",
  8: "August",
  9: "September",
  10: "October",
  11: "November",
  12: "December"
};
console.log(months)
