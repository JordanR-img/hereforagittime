let x = 1;

for (x = 1; x <= 10; x++) {
  if (x === 5 || x === 9) {
    continue;
  }
  console.log(x);
}

// from slides, functions will have: The name of the function, a list of parameters, statements that define the function in curly brackets.
// ------------------------------------------
function double(num) {
  return num * 2;
}

console.log(double(2)); // calling the double function

// ------------------------------------------
function myFirstFunction() {
  console.log("I just called my first function");
}

myFirstFunction(); // This is a function call, logging into the console.

// ------------------------------------------

function addingTogether(num1, num2) {
  console.log(num1 + num2);
}

addingTogether(2, 20000);

// ------------------------------------------

function string(string1, string2) {
  return string1 + string2;
}

console.log("hello", "world");

// ------------------------------------------
// another example instead of using return is console.log (string("hello", "world"));

// return statement is like a break; any code after it won't be read (from the slides of course)

// ------------------------------------------ How to check if the string is truty or falsy
function str(string) {
  const isEmpty = string;
  if (isEmpty === "") {
    return false;
  } else {
    return true;
  }
}

console.log(str(""));
// ------------------------------------------

// ------------------------------------------ example of a method, which means a function inside of an object
const person = {
  firstName: "John",
  lastName: "Dor",
  greeting: function (name) {
    console.log(`Hi ${name}!`);
  },
};

person.greeting("Jordan");

// ------------------------------------------ Exercises

function halfNumber(num) {
  const halvedNumber = num / 2;
  return halvedNumber;
}

console.log(`Half of 20 is ${halfNumber(20)}`);

// function timeInSeconds(minutes) {
//    const timeInSeconds = minutes * 60;
//     return timeInSeconds;
// }
// const userInputMinutes = prompt("Enter in your minutes");

// alert(`Did you know that there're ${timeInSeconds(userInputMinutes)} seconds in ${userInputMinutes} minute`);

// ------------------------------------------ Exercises

// manipulating strings

// lower case
const myVar = " GOOD MORNING ";
console.log(myVar.toLowerCase());

// upper case
console.log(myVar.toUpperCase());

// trim removes whitespace from beginning and the end
console.log(myVar.trim())

// alert("Hi there");


function myPrac (num5, num6){
  return num5 * num6;
}

console.log(myPrac(5,6));


function myPrac2 (num10){
const there = num10 * 10;
  return (num10 * there)
}

console.log(myPrac2(10));



function multiply (num1, num2){
  const num3 = num1 * num2;
  return num3;

}
console.log(multiply(3,5))


