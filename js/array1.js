// For Loop
// for (let i = 1; i <= 10; i++) {
//   console.log(`2 x ${i} = ${i * 3}`);
// }

// let num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// console.log(num.length);
// console.log(num.indexOf(10));

// let fruits = ["apple", "banana", "grapes"];
// console.log(fruits.indexOf("banana"));

// fruits.push("orange");
// console.log(fruits);

// let even = [];
// let odd = [];

// for (let j = 0; j < num.length; j++) {
//   const x = num[j];
//   if (x % 2 == 0) {
//     even.push(x);
//   } else {
//     odd.push(x);
//   }
// }

// console.log("This is even number array", even);
// console.log("This is odd number array", odd);

// Assingment For Array Methods
// shift;
// let numbers = [10, 20, 30, 40];
// let removedNumber = numbers.shift();
// console.log(removedNumber);
// console.log(numbers);

// unshift;
// let numbers = [20, 30, 40];
// let newNumber = numbers.unshift(10);
// console.log(newNumber;
// console.log(numbers);

// splice;
// let numbers = [10, 20, 30, 40];
// numbers.splice(2, 1, 25);
// console.log(numbers);

// slice;
// let numbers = [10, 20, 30, 40, 50];
// let newArray = numbers.slice(1, 4);
// console.log(newArray);
// console.log(numbers);

// indexOf;
// let fruits = ["apple", "banana", "cherry"];
// let index = fruits.indexOf("banana");
// console.log(index);

// findIndex;
// let numbers = [4, 9, 16, 25];
// let index = numbers.findIndex(num => num > 10);
// console.log(index);

// includes;
let fruits = ["apple", "banana", "cherry"];
let hasBanana = fruits.includes("banana");
console.log(hasBanana);

let hasMango = fruits.includes("mango");
console.log(hasMango);
