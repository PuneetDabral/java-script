// implicit Conversion - automatic type conversion
// Explicit Conversion - manual type conversion

// let score = '23';
// let score = '23abc';  NaN
// let score = null; // 0
// let score =true; 1/0
let score = 'abc' //NaN



console.log(typeof(score))
console.log(typeof score);

let valueInNumber = Number(score) 

console.log(typeof valueInNumber)
// now its value is NaN
console.log(valueInNumber)