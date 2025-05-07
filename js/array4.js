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
  let country = countries.find((item) => item.name.toLowerCase() === countryName.toLowerCase());
  if (country) {
    return country.code;
  } else {
    return "Country Not Found!";
  }
};

console.log(getCountryCode("Nepal"));
