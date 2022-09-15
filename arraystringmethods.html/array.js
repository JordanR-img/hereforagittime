const person = {
  name: "Rob",
  lastName: "computer",
  age: "22",
};
console.log(person.age);

const halo = ["haloCE", "Halo 2", "halo 3"];
console.log(halo);

halo.push = "halo 4";
// halo.push = 'Zelda';
console.log(halo);

// halo.pop()
// console.log(halo);

halo.push = "zelda";

// How to do .split() string method

const split1 = "Vanilla chocolate icecream";
const resultsIcecreamSplit = split1.split(" ", 2); //can split spaces and letters if necessary

console.log(resultsIcecreamSplit);

// array.join() concatenating all of the elements in the array
// const joinCream = split1.join(" ");
// console.log(joinCream);

// this one I didn't get up above

// next up is .slice() , slicing the desired item off
const iceCreamSlice = ["blueberry", "neopolitan", "meat", "banana"];

//slices off the start and the end, first numb is start, second is end, play around if necessary
const resultsIcecreamSlice = iceCreamSlice.slice(1, 2);
console.log(resultsIcecreamSlice);

// array.includes() method, returns a boolean, stating whether all elements in the array passed a test
// const arrayOfThings = ["computer", "food", "html", "js"];

// const userInput = prompt(
//   `Try and guess what I've put into my list`
// ).toLowerCase();
// console.log(
//   `Does the array contain ${userInput}? ... ${arrayOfThings.includes(
//     userInput
//   )}`
// );

// array.forEach() for each array

const icecreamsForEach = ["vanilla", "chocolate", "blueberry"];
icecreamsForEach.forEach(function (icecream, index) {
  console.log(icecream + " ice-cream");
});
// as you can see we renamed our array to icecream and we are logging, for each array print "this"

// array.map() you need to pass in function just like foreach
// for every iteration, icecream is linked to the value of the array because of index
const iceCreamsMap = ["vanilla", "chocolate", "blueberry"];
const orderedIcecreams = iceCreamsMap.map(function (icecream, index) {
  return `flavour ${index + 1}: ${icecream}`;
});

console.log(orderedIcecreams);

//array.filter() returns a new array with all elements in the original array that passed a test

const icecreamCosts = [2.95, 4, 5];
const expensiveIceCreams = icecreamCosts.filter(function (cost, index, array) {
  return cost > 4;
});

console.log(expensiveIceCreams);
// using cost, which is the name of the new element, index, array links the cost to the index, that is linked to the array
//this is checking if the icecreams are greater then the cost of 3

//array.indexOf()

const sports = ["rugby", "hockey", "basketball"];
const sportsOf = sports.indexOf("basketball");

console.log(sportsOf);

//array.every() //returns true or false whether everything passes a test
const ages1 = [19, 35, 24, 55];
const everyAgeOver30 = ages1.every(function (age) {
  return age > 30;
});

909-kj[[]

console.log(everyAgeOver30);

// (age) => age > 30 // still renaming it with the arrow function and then returning it without writing return

//array.some()

const ages2 = [19, 35, 24, 55];
const someAgeOver30 = ages1.some((age) => age > 30);

console.log(someAgeOver30);



function morning11(sentence) {
  function capitalise(word) {
    return word[0].toUpperCase() + word.slice(1);
  }
  const lowercaseString = sentence.toLowerCase();
  console.log(lowercaseString);

  const splitString = lowercaseString.split(" ");
  console.log(splitString);

  const mapStr = splitString.map(function (word) {
    return capitalise(word);
  });
  const joinStr = mapStr.join(" ");
  return joinStr;
}

console.log(morning11("Hi there how are you"));

// shorthand ways to write java, examples below

// if (answer === true) can be if (answer) because it will always check if its true
// if (answer != true) can be if (!answer) because ! is the not operator

// more ways to do this
// const num1 = Number ("100"); // converting to a number, so not to be a string

// easy way of doing the above, const num1 = +"100"; a simpler way of writing it


// DEBUGGING


