let cart = [
  {
    product: "Apple",
    price: 100,
    quantity: 2,
  },
  {
    product: "Mango",
    price: 50,
    quantity: 3,
  },
  {
    product: "Banana",
    price: 150,
    quantity: 4,
  },
  {
    product: "Pineapple",
    price: 250,
    quantity: 5,
  },
  {
    product: "Pineapple",
    price: 150,
    quantity: 5,
  },
];

// const total = cart.slice(0, 2).reduce((acc, item) => acc + item.price * item.quantity, 0);
// console.log(`Total Price of items in cart is Rs.${total}.`);

let courses = [
  {
    class: "Maths",
    completedStatus: false,
  },
  {
    class: "Science",
    completedStatus: true,
  },
  {
    class: "English",
    completedStatus: false,
  },
  {
    class: "History",
    completedStatus: true,
  },
  {
    class: "Geograpy",
    completedStatus: false,
  },
];

let complete = [];
let incomplete = [];

courses.map((item) => {
  if (item.completedStatus) {
    complete.push(item.class);
  } else {
    incomplete.push(item.class);
  }
});

// console.log("Completed Classes: ", complete);
// console.log("Incomplete Classees: ", incomplete);

const countries = [
  {
    name: "India",
    code: "IN",
  },
  {
    name: "USA",
    code: "US",
  },
  {
    name: "United Kingdom",
    code: "UK",
  },
  {
    name: "Australia",
    code: "AU",
  },
  {
    name: "Canada",
    code: "CA",
  },
  {
    name: "Germany",
    code: "DE",
  },
  {
    name: "Nepal",
    code: "NP",
  },
];

const getCountryCode = (countryName) => {
  let country = countries.find((item) => item.name.toLowerCase() === countryName.trim().toLowerCase());
  if (country) {
    return country.code;
  } else {
    return "Country Not Found!";
  }
};

// console.log(getCountryCode("Nepal "));

let User = [
  {
    name: "Sanjaya",
    age: 25,
    email: "sanjaya@gmail.com",
    password: "sanjaya123",
  },
  {
    name: "Shyam",
    age: 25,
    email: "shyam@gmail.com",
    password: "shyam123",
  },
  {
    name: "Santosh",
    age: 25,
    email: "santosh@gmail.com",
    password: "santosh123",
  },
  "Ajaya",
  "Bijaya",
  "Sita",
  "Gita",
  "Rita",
];

// let registeredUser = User.includes("Sanjaya");
// if (registeredUser) {
//   console.log("You are a registered user.");
// } else {
//   console.log("You are not a registered user.");
// }

const isUserRegistered = (username) => {
  let user = User.find((u) => u.toLowerCase() === username.trim().toLowerCase());
  if (user) {
    return "User is already registered.";
  } else {
    return "User is not registered.";
  }
};

// console.log(isUserRegistered("Shyam"));

const findUserEmail = (username) => {
  let user = User.find((u) => u.name.toLowerCase() === username.trim().toLowerCase());
  if (user) {
    return user.email;
  } else {
    return "User not found";
  }
};

// console.log(findUserEmail("Santosh"));

const product = [
  {
    title: "Laptop",
    price: 4000,
    quantity: 10,
  },
  {
    title: "Mobile",
    price: 3000,
    quantity: 20,
  },
  {
    title: "Watch",
    price: 2000,
    quantity: 30,
  },
  {
    title: "Wallet",
    price: 1000,
    quantity: 30,
  },
];

const findProduct = () => {
  return product.filter((item) => item.price < 4000).map((item) => item.title);
};

console.log(findProduct());

// const findProduct = () => {
//   const results = [];
//   product.map((item) => {
//     if (item.price < 4000) {
//       results.push(item.title);
//     }
//   });
//   return results;
// };

// console.log(findProduct());
