//Practice Set 2
//Q1: Using Logical Operators
const prompt=require("prompt-sync")();
let age = prompt("Enter your age");
if (age >= 10 && age <= 20) {
  console.log("You are between 10 and 20");
} else {
  console.log("You are not between 10 and 20");
}

//Q2: Using Switch Case
let day = prompt("Enter a day");
switch (day) {
  case "Monday":
    console.log("Today is Monday");
    break;
  case "Tuesday":
    console.log("Today is Tuesday");
    break;
  case "Wednesday":
    console.log("Today is Wednesday");
    break;
  case "Thursday":
    console.log("Today is Thursday");
    break;
  case "Friday":
    console.log("Today is Friday");
    break;
  case "Saturday":
    console.log("Today is Saturday");
    break;
  case "Sunday":
    console.log("Today is Sunday");
    break;
  default:
    console.log("Invalid day");
}

//Q3: Divisible by 2 and 3
let num = prompt("Enter a number");
if (num % 2 == 0 && num % 3 == 0) {
  console.log("The number is divisible by 2 and 3");
} else {
  console.log("The number is not divisible by 2 and 3");
}
//Q4: Divisible by 2 or 3
let num1 = prompt("Enter a number");
if (num1 % 2 == 0 || num1 % 3 == 0) {
  console.log("The number is divisible by 2 or 3");
} else if (num1 % 2 == 0) {
  console.log("The number is divisible by 2");
} else if (num1 % 3 == 0) {
  console.log("The number is divisible by 3");
} else {
  console.log("The number is not divisible by 2 or 3");
}

//Q5: Using Ternary Operator
let age1 = prompt("Enter your age");
age1 >= 18
  ? console.log("You can drive")
  : console.log("You cannot drive");