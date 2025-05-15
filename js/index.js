// var a = 6; //Global Scope
// let a = 5; //Block Scope
// const a = 5; //Block Scope

// Global Scope
// var a = 5;
// var a = 10;
// {
//   var a = 15;
//   console.log("Value of block a is: ", a);
// }
// var a = 10;
// console.log("Value of global a is: ", a);

// Block Scope
// let b = 10;
// let c = 20;
// {
//   let b = 40;
//   console.log("Value of block b is: ", b);
// }
// console.log("Value of global b is: ", b);
// console.log("Value of c is: ", c);

// Block Scope
// const d = 20;
// const e = 40;
// {
//   const d = 50;
//   console.log("Value of block d is: ", d);
// }
// console.log("Value of global d is: ", d);
// console.log("Value of e is: ", e);

// Naming
// const name = "Ramesh";
// let title = "js";
// let number = 40;

//* HTML JS DOM
const mainTitle = document.querySelector("h1");
const allButtons = document.getElementsByTagName("button");
const orderButtons = document.querySelectorAll(".btn-warning");
const contactForm = document.querySelector(".section-two form");

mainTitle.textContent = "Welcome to Grand Hotel";
mainTitle.innerHTML = "Welcome to <em>Grand Hotel</em>";

mainTitle.style.color = "#ff8800";
mainTitle.style.fontSize = "3rem";

const toggleBtn = document.querySelector(".toggle-btn");
const toggleBtnIcon = document.querySelector(".toggle-btn i");
const dropdownMenu = document.querySelector(".dropdown_menu");

toggleBtn.addEventListener("click", function () {
  dropdownMenu.classList.toggle("open");
  const isOpen = dropdownMenu.classList.contains("open");
  toggleBtnIcon.classList = isOpen ? "fa-solid fa-xmark" : "fa-solid fa-bars";
});
