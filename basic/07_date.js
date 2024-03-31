// date
let myDate = new Date()
console.log(myDate);
console.log(myDate.toString());
console.log(myDate.toISOString());
console.log(myDate.toLocaleString());
console.log(myDate.toJSON());

console.log( typeof myDate)

// let createNewDate = new Date(2023,0,23);
// YY-MM-DD
// let createNewDate = new Date("2023-01-14");

// in india

let createNewDate = new Date("01-14-2024");
// console.log(createNewDate.toDateString())

let myTimeStamp = Date.now();
// in sec
console.log(Math.floor(myTimeStamp/1000))