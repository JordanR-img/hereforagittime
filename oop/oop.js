const x = 5;

function addOne(num) {
  const answer = num + 1;
  return answer;
}

addOne(x);

//talking about global execution context.
// when loading firstly it would store the code into memory then the second time it would execute the function
// everything that is not a primitive data type is an object

console.log(this === window);

//"this" refers to the object!! that's what this means\

function add5() {
  return 5 * 5;
}

console.log(add5());

// class is helpful when making objects
// class objectTest = [
//     firstName: Jordan;
// ]

// When using the class, we need to use the constructor,
// when using contructor, you always need to put "new" in there when naming users or so on and so forth

class User {
  constructor(first, last) {
    this.firstName = first;
    this.lastName = last;
  }
  introduce() {
    console.log("Hello, my name is " + this.firstName);
  }
}

const user1 = new User("Buddy", "bro");
console.log(user1);
user1.introduce();

class vehicle {
  constructor(model, manufacturer, year, colour) {
    this.model = model;
    this.manufacturer = manufacturer;
    this.year = year;
    this.colour = colour;
  }
  getYear(){
    console.log("Look at the details of this thing, it's colour is " + this.colour);
  }
}


const future = new vehicle ("DMC DeLorean", "DMC", "1981", "24-Karat gold");
console.log(future);

future.getYear();

