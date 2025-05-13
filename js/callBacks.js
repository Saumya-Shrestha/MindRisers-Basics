// Callback function
// To pass function as a parameter to another function

// function fetchData(c) {
//   console.log("Fetching Data...");
//   setTimeout(() => {
//     c("API Successfully Fetched");
//   }, 2000);
// }

// fetchData((data) => {
//   console.log(data);
// });

// const mutateArray = (arr, action) => {
//   for (let i = 0; i < arr.length; i++) {
//     arr[i] = action(arr[i]);
//   }
// };

// let array = [1, 2, 3, 4, 5];
// mutateArray(array, (x) => {
//   return x * 3;
// });

// console.log("This is mutateArray", array);

// Promise (resolve, reject, pending)
const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject("Internal Server Error");
    // resolve({
    //   data: "Data from Promise",
    // });
    resolve({
      email: "ramesh@gmail.com",
      password: "ramesh123",
    });
  }, 5000);
});

promise
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log(error);
  });
