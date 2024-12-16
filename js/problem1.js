const students = [
  { name: "sabbir", email: "sabbir@gmail.com", avg: 57, fiftyPercent: true },
  { name: "abir", email: "sabbir@gmail.com", avg: 43, fiftyPercent: false },
  { name: "emran", email: "sabbir@gmail.com", avg: 48, fiftyPercent: true },
  { name: "palash", email: "sabbir@gmail.com", avg: 52, fiftyPercent: false },
];

// const findSCIC = (students) => {
//   const find = students.filter(
//     (person) => person.avg >= 50 && person.fiftyPercent === true
//   );
//   const names = find.map((p) => p.name);
//   return names;
// };

const findSCIC = (students) =>
  students
    .filter((person) => person.avg >= 50 && person.fiftyPercent)
    .map((p) => p.name);

const result = findSCIC(students);
console.log(result);
