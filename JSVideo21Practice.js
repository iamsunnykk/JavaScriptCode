//Practice Test
// problem 1 
// let arr = [1,5,8,15,27]
// let a = prompt ("Enter a no:")
// a = Number.parseInt(a)
// arr.push(a)
// console.log(arr)

// problem 2 
//  let b 
//  do{
//     b= prompt ("Enter a no:")
//     b = Number.parseInt(b)
//       arr.push(b)
//  } while(b!=0)
//     console.log(arr)

    //problem 3
let numbers1 = [10, 29, 33, 40, 50, 61, 17, 38, 90, 7];
let filtered = numbers1.filter(function (number) {
  return number % 10 == 0;
});
console.log(filtered);
    //Problem 4
let numbers = [1, 2, 3, 4, 5];
let squares = numbers.map(function (number) {
  return number * number;
});
console.log(squares);

// problem 5
let numbers2 = [1, 2, 3, 4, 5];
let factorial = numbers2.reduce(function (x1, x2) {
  return x1 * x2;
});
console.log(factorial);

