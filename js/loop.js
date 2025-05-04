let num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let even = [];
let odd = [];

//* For Each Loop
// num.forEach((num) => {
//   if (num % 2 == 0) {
//     even.push(num);
//   } else {
//     odd.push(num);
//   }
// });

//* Map Function
// num.map((num) => {
//   if (num % 2 == 0) {
//     even.push(num);
//   } else {
//     odd.push(num);
//   }
// });

// console.log("This is even number array", even);
// console.log("This is odd number array", odd);

// let num2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let findNum = num2.find((num) => {
//   return num > 5;
// });
// console.log(findNum);

// let filterNum = num2.filter((num) => {
//   return num > 6;
// });
// console.log(filterNum);

// filterNum.map((num) => {
//   console.log("This filter number multiplication", num * 2);
// });

// let filterNumArr = [];
// filterNum.map((num) => {
//   filterNumArr.push(num * 2);
// });
// console.log(filterNumArr);

//  Using forEach for multiplication table of 3
console.log("Multiplication table of 3 using forEach:");
num.forEach((num) => {
  console.log(`3 × ${num} = ${3 * num}`);
});

//  Using map for multiplication table of 3
console.log("Multiplication table of 3 using map:");
num.map((num) => {
  console.log(`3 × ${num} = ${3 * num}`);
});

//  Using forEach for multiplication table of 4
console.log("Multiplication table of 4 using forEach:");
num.forEach((num) => {
  console.log(`4 × ${num} = ${4 * num}`);
});

//  Using map for multiplication table of 4
console.log("Multiplication table of 4 using map:");
num.map((num) => {
  console.log(`4 × ${num} = ${4 * num}`);
});
