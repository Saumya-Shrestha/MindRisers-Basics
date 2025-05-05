const students = [
  {
    name: "John",
    paidStatus: true,
    scholarship: true,
  },
  {
    name: "Jane",
    paidStatus: false,
    scholarship: false,
  },
  {
    name: "Bob",
    paidStatus: true,
    scholarship: true,
  },
  {
    name: "Alice",
    paidStatus: false,
    scholarship: true,
  },
];

// students.map((value) => {
//   if (value.paidStatus && value.scholarship) {
//     console.log(`${value.name} can give the exams.`);
//   } else {
//     console.log(`${value.name} can't give the exams.`);
//   }
// });

// students.forEach((value) => {
//   if (value.paidStatus && value.scholarship) {
//     console.log(`${value.name} can give the exams.`);
//   } else {
//     console.log(`${value.name} can't give the exams.`);
//   }
// });

for (let i = 0; i < students.length; i++) {
  const element = students[i];
  if (element.paidStatus && element.scholarship) {
    console.log(`${element.name} can give the exams.`);
  } else {
    console.log(`${element.name} can't give the exams.`);
  }
}
