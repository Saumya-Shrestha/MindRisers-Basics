// let num = 10;
// let fib = [0, 1];
// for (let i = 2; i <= num; i++) {
//   fib.push(fib[i - 1] + fib[i - 2]);
// }
// console.log(fib);

let users = [
  {
    name: "John",
    products: [
      {
        name: "Macbook",
        price: 1000,
      },
      {
        name: "iPhone",
        price: 500,
      },
      {
        name: "iPad",
        price: 800,
      },
    ],
  },
  {
    name: "Ramesh",
    products: [
      {
        name: "Macbook",
        price: 100,
      },
      {
        name: "iPhone",
        price: 500,
      },
      {
        name: "iPad",
        price: 80,
      },
    ],
  },
  {
    name: "Sujan",
    products: [
      {
        name: "Macbook",
        price: 1000,
      },
      {
        name: "iPhone",
        price: 50,
      },
      {
        name: "iPad",
        price: 800,
      },
    ],
  },
];

// users.map((user) => {
//   user.products.map((product) => {
//     if (product.name === "Macbook") {
//       console.log(`${user.name} bought ${product.name} for Rs.${product.price}`);
//     }
//   });
// });

const User1 = [
  {
    name: "Ramesh",
    age: 25,
    address: "Kathmandu",
    email: "ramesh@gmail.com",
    password: "ramesh123",
  },
  "Dinesh",
  "Ram",
  "Shyam",
  "Krishna",
  "Suresh",
];

const registeredUser = (name) => {
  const user = User1.find((u) => {
    return name.trim().toLowerCase() === u.name.toLowerCase();
  });
  if (user) {
    console.log(`${user.name} is already registered.`);
  } else {
    console.log(`${user.name} is not registered.`);
  }
};

registeredUser("Ramesh");
