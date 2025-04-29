// Data Types
// There are two types of datatypes: Primitive annd Non-Primitive

// String
let title = "coconut";
let number1 = "45";

// Number
let rollNumber = 20;

// Boolean
let isRain = true;

// Undefined
let willNotRain;

// Object
let student = {
  name: "Rahul",
  age: 20,
};

// Array
let students = ["Ram", "Shyam", "Sita", "Gita", 1, 2, 4, 5]; // This is not an array
let fruits = ["Ram", "Shyam", "Mango", "Banana"]; // This is not an array
let users = ["Sanjaya", "Bijaya", "Rupesh"]; // This is an array i.e. Collection of Similar Data Types

let user = [
  {
    name: "Samrat",
    age: 20,
    email: "samrat@gmail.com",
    password: "samrat123",
    items: ["Phone", "Laptop", "Watch"],
  },
  {
    name: "Niaz",
    age: 16,
    email: "niaz@gmail.com",
    password: "niaz123",
    items: ["Mask", "Tshirt", "Sun Glass"],
  },
];

// console.log(student.age);

for (let i = 0; i < user.length; i++) {
  const element = user[i];
  console.log(element.name);
  console.log(element.age);
}
