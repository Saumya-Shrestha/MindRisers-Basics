// localStorage.setItem("name", "saumya");
// localStorage.setItem("token", "tdywahsdas");
// console.log(localStorage.getItem("name"));
// console.log(localStorage.getItem("token"));

let user = {
  name: "John",
  token: "dshgafdjahsfgdjahsdfgakjsdhgaks",
  email: "john@gmail.com",
  password: "123456",
};

localStorage.setItem("userObject", JSON.stringify(user));
let userObject = localStorage.getItem("userObject");
console.log(userObject);

let userName = userObject.name;
console.log(userName);

let parsedUser = JSON.parse(userObject);
let parsedUsername = parsedUser.name;
console.log(parsedUsername);
