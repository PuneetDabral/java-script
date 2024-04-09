const arr =[1,2,3,4,5];
const arr2=['a','b','c'];

// arr.push(arr2) same array push
console.log(arr) //[1,2,3,[a,b,c]]

let a = arr.concat(arr2) //[1,2,3,a,b,c] return new array

// merge using spred
const merge = [...arr,...arr2]
console.log(merge)

let newArr = [1,2,[2,3],4,[3,3,[1,10],5]];
const sorted = newArr.flat(2)
console.log(sorted)

// check array
Array.isArray('hello')
// convert it to array
Array.from('hello') //['h','e','l']

// interview case 
Array.from({name:'abc'}) //return empty array cant convery you have to pass specific key and pair then only it should create array of that