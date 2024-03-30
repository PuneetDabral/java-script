const name ='puneet';
const repoCount = 50;

// console.log(name + repoCount + ' value')

console.log(`hello my count is ${repoCount}`)

const gameName = new String('Puneet');
// you will get an string object where all of its char is in key value pair from 0 to end and in prototype there is lot of string inbuilt methods
console.log(gameName[0]) // acess value by using key 

// you can acess prototype also
console.log(gameName.__proto__) // it is empty but in console you will see all this

// it does not change orignal value because memory is coming from stack
console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('P'));
console.log(gameName.toLowerCase())

// some img method

let newGame = gameName.substring(0,3) // op - Pun 
console.log(newGame)

// another imp method
// if last index is not valid then its start from 0 
let anotherNew = gameName.slice(-4);
let anotherNew1 = gameName.slice(0,2);
console.log(anotherNew1)


console.log(anotherNew);
console.log(gameName.trim())

console.log(gameName.replace('un','r')) //replace 

console.log(gameName.includes('Pun')) //return true or false if exect match found

