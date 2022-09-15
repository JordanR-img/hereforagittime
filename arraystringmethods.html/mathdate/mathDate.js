// 'use strict';

// // strict mode, strict mode helps us to identify if a name(interface) is a reserved word

// // const interface = "audio";



// const pastDate = new Date(1997, 7, 22, 3, 24, 0); //built in date and time thing. Every value has a meaning, so the first value is the year, I'm sure I could probably change the order
// const myDate = new Date();

// console.log(pastDate)

// console.log(myDate.getFullYear()) //"mydate." helps to understand more about what is available

// console.log(myDate.getMinutes());
// console.log(myDate.toISOString());
// console.log(myDate.getTime());
// console.log(new Date(1663019949950));


// // js has built in "intl.DateTimeFormat" object which enables language-sensitive and date time formatting

// const options = {
//     hour: "numeric",
//     minute: "numeric",
//     day: "numeric",
//     month: "numeric",
//     year: "numeric",
// };


// const myFormattedDate = new Intl.DateTimeFormat("en-NZ", options).format(myDate);
// console.log(myFormattedDate);

// // This helps us to format our date to look nicer



// const myBirthdate = new Date(2024, 7, 22, 12, 98);
// const myNewDate = new Intl.DateTimeFormat("en-NZ", options).format(myBirthdate);
// console.log(`My birthdate is the ${myBirthdate.getDay()}th`);


// -----------------  MATH OBJECT -------------------------


// console.log(Math.PI)
// console.log(Math.floor (Math.random() * 100));

let test = [10, 20, 40];
console.log(Math.max(...test));
console.log(Math.min(...test));

console.log(Math.pow(Math.min(...test), 3))



