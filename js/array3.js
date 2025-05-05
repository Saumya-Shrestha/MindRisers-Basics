let cartItems = [
  {
    name: "Ramesh",
    products: [
      {
        title: "Laptop",
        Price: 1000,
      },
      {
        title: "Mobile",
        Price: 500,
      },
      {
        title: "Watch",
        Price: 200,
      },
    ],
  },
  {
    name: "Dinesh",
    products: [
      {
        title: "Phone",
        Price: 3000,
      },
      {
        title: "Mobile",
        Price: 500,
      },
      {
        title: "Watch",
        Price: 200,
      },
    ],
  },
  {
    name: "Hitesh",
    products: [
      {
        title: "TV",
        Price: 1000,
      },
      {
        title: "Mobile",
        Price: 500,
      },
      {
        title: "Watch",
        Price: 200,
      },
    ],
  },
];

// cartItems.map((user) => {
//   const total = user.products.reduce((acc, item) => acc + item.Price, 0);
//   console.log(user.name, total);
// });

const cartItems1 = [
  {
    name: "Jeans",
    price: 2000,
  },
  {
    name: "Tshirt",
    price: 3000,
  },
  {
    name: "Jacket",
    price: 4000,
  },
  {
    name: "Belt",
    price: 5000,
  },
  {
    name: "Watch",
    price: 6000,
  },
];

const total = cartItems1.reduce((acc, item) => acc + item.price, 0);
console.log(`Total Price of cartItems1 is Rs.${total}.`);
