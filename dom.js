// Dom is short for document object model
// When a web page is loaded, the browser creates a dom of the page.
// dom allows us to chnage certain things about the page after it is loaded, for instance buttons user may press
// for example; if we wanted a button that upon being clicked, changes the colour of the page background, how would we do that right now?
// We can do this by manipulating the dom with javascript

// scripts with 'defer' attribute always execute when the DOM is ready
// From now on, place it in the head tag

// document.body.innerHTML = "<h1>Hello world</h1";
// document.body.style.background = "blue";

let currentColour = 0;

function changeColour() {
  const colorPicker = ["red", "green", "purple", "orange", "black"];

  // currentColour = currentColour +1;
  document.body.style.background = colorPicker[currentColour];

  if (currentColour === 5) {
    currentColour = 0;
  } else {
    currentColour++;
  }
}

// there are plenty of ways to access content!!

document.getElementById("title").textContent = "Hi everyone";

// some useful properties
// textcontent (changes the text inside of an element)

const test = document.getElementById("header3");

test.style.fontSize = "70px";
test.textContent = "testing 1 2 3";

// We use getElement to update the code.
const counterValue = document.getElementById("span1");
let counter = 0;

function addCount() {
  counter = counter + 1;
  counterValue.textContent = counter;
}

function subCount() {
  counter = counter - 1;
  counterValue.textContent = counter;
}

// when I study I'll go over.

// event listeners

// making buttons that count

// changing content

// accessing arrays like we did with the first button

// .addEventListener, when something happens, we want something to change

let firstColor = 0;
function change() {
  let color = ["blue", "red", "white", "green", "turqoise"];
  console.log(document.body.style.background);
  document.body.style.background = color[firstColor];

  if (firstColor === 5) {
    firstColor = 0;
  } else {
    firstColor++;
  }
}

const mikeyTheCat = document.getElementById("mikey");

mikeyTheCat.addEventListener("click", () => change());

// const testing = document.body.textContent = "Hi world";

// target property

// function, name (event){}
// event.target.style.background = colour, or action
const test5 = document.getElementById("testing");
test5.addEventListener("click", () => changeToPink()); // this is a function, passing the function two parameters, listening to click, once that happens, do the next thing which is the function "change to pink"
function changeToPink() {
  test5.style.background = "pink";
}

// test5.addEventListener("onclick", changeToPink);

// when using query selector and you're getting an id, make sure you have a hashtag
const inputElement = document.querySelector("input");
const inputCount = document.getElementById("countChar");
inputElement.addEventListener("input", logValue); //

function logValue(event) {
  console.log(event);
  console.log(event.target.value);
  // console.log(event.target.value.length);
  const bullet = event.target.value.length; //targeting the event, and we specified the value and the length of the input
  inputCount.textContent = bullet;
}

const userInput = document.getElementById("user1");
const userInput2 = document.getElementById("user2");
const userSum = document.getElementById("result");
const butt = document.getElementById("sum1");

butt.addEventListener("click", function () {
  // console.log(typeof userInput.value);
  console.log(userInput.value);
  userSum.textContent = `${parseInt(userInput.value)} + ${parseInt(
    userInput2.value
  )} = ${parseInt(userInput.value) + parseInt(userInput2.value)}`;
});

// today we are looking at variable scope
// We are looking at what variables can be accessed. Typically cannot access a variable that is inside of a function

// global scope, function scope, block scope.

// important reminder is checking if the variable is readable to the action I'm trying to undertake
// important reminder that usually code is read top to bottom, good reminder when naming variables

// arrow function
let doubleNum = (num) => {
  return num * 2;
};

// // traditional function
// function sum (first, second){
//   return first + second;
// }

// arrow function
let sum = (first, second) => {
  return first + second;
};

// => can mean return
const divideNum = (num12, num13 = 1) => num12 / num13;
console.log(divideNum(3));

const isEven = function (num15) {
  return num15 % 2 === 0;
};
console.log(isEven(3));

// another way of writing previous but with arrow function
// const isEven = (num) => num % 2 === 0;

//you can have an array inside of an array as well as an object inside of an object

//the spread operator

let arry1 = [1, 2, 3, 4, 5];
let arry2 = [...arry1, 6, 7, 8, 9, 10];

console.log(arry2);



//regular expressions "regex", sort of like testing

let re = /a|b/;

let answer = re.test("a");

console.log(answer);

// regex helps us to test if there is a specific amount of numbers in a password I believe, or when you're filling out a form or putting in your drivers license, it has to be valid
// [a-z] matches from a to z, [A-G] matches capital letters from a - g

// example 2 letters and 6 digits, /[a-zA-Z][a-zA-Z][0-9][0-9][0-9][0-9][0-9][0-9]/


// more regex practice

// Regex for word \w ,if there're multiple add a plus + . And then add the @ symbol normally
// exercise, create a regular expression that validates a password. must have 8 characters


// We are now going to look at Jquery


// jquery is a library that helps to simplify some JS Code
// you have to link jquery through script src
//jquery is usually aaccessed by $(document).ready

// testing a change to be sent to the repo