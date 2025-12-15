//Functions

//Example: Simple Function
function sayHello() {
  console.log("Hello, world!");
}

sayHello(); // calling/invoking the function

//Example: Function with Arguments
function averageWith30(x, y) {
  let average = (x + y) / 2;
  let result = average + 30;
  console.log(`30 + average of ${x} and ${y} is = ${result}`);
}

averageWith30(5, 10); // calling/invoking the function with arguments

//Returning Values
function square(x) {
  return x * x;
}

let result = square(5); // calling/invoking the function and storing the result
console.log(result);

//Arrow Functions
let sayHello1 = () => {
  console.log("Hello, world! with Arrow");
}

sayHello1(); // calling/invoking the function