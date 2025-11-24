// a) Template literal
let username = "Sam";
let course = "JS";
console.log(Hello, welcome to the course ${course}, ${username}!);

// b) Object shorthand + method shorthand
const name = "Sam";
const age = 21;
const greet = () => console.log("Hello");

const user = { name, age, greet };
console.log(user);

// c) Arrow function with no return keyword
const getFullName = (first, last) => ({ first, last });
console.log(getFullName("Sam", "Roy"));