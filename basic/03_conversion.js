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


// 
let value =2;
let ngValue = -value;
console.log(ngValue)

let a='Puneet';
let b = ' dabral'
console.log(a+b);

console.log('1'+1+3); //113
console.log(2+'2'); //22
console.log(2+2+'2') //42 compu left to right

// try to us bracket 
console.log((3+4)*5%3)


// comparison 