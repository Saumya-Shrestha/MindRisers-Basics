// For Loop
// for (let i = 1; i <= 10; i++) {
//   console.log(`2 x ${i} = ${i * 3}`);
// }

let num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(num.length);
console.log(num.indexOf(10));

let fruits = ["apple", "banana", "grapes"];
console.log(fruits.indexOf("banana"));

fruits.push("orange");
console.log(fruits);

let even = [];
let odd = [];

for (let j = 0; j < num.length; j++) {
  const x = num[j];
  if (x % 2 == 0) {
    even.push(x);
  } else {
    odd.push(x);
  }
}

console.log("This is even number array", even);
console.log("This is odd number array", odd);
