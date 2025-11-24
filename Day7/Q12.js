function processStudents(students) {
  return students
    .filter(function (stu) {
      return stu.marks > 60;
    })
    .sort(function (a, b) {
      return b.marks - a.marks;
    })
    .map(function (stu) {
      return stu.name;
    });
}

let students = [
  {name:"Alice", marks:58},
  {name:"Bob", marks:85},
  {name:"Charlie", marks:92},
  {name:"David", marks:45},
  {name:"Emma", marks:73},
  {name:"Frank", marks:76},
  {name:"Grace", marks:89},
  {name:"Hannah", marks:91},
  {name:"Mia", marks:95},
  {name:"Leo", marks:88},
  {name:"Jack", marks:67},
  {name:"Olivia", marks:82},
  {name:"Nathan", marks:72},
  {name:"Kate", marks:79}
];

let result = processStudents(students);
console.log(result);
