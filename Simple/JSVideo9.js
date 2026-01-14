//For Loops
for (let i = 1; i <= 29; i++) {
  console.log(i);
}

//Summing Numbers with a for Loop

let n = prompt("Enter a number");
let sum = 0;
for (let i = 1; i <= n; i++) {
  sum = sum + i;
}
console.log("The sum of first " + n + " numbers is " + sum);

//For-In Loops
let person = {
  name: "Harry",
  age: 30,
  gender: "male"
};

for (let x in person) {
  console.log(x + ": " + person[x]);
}

//For-Of Loops
let numbers = [1, 2, 3, 4, 5];

for (let number of numbers) {
  console.log(number);
}
