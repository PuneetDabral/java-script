// singleton
// Object.create
//object literals
// key-value
// by default system will take key as a string
const obj ={
    name:'puneet',
    age:12,
    location:'ambala',
    'full name':'hitesh dabral'
}
// we can acess this in two ways
console.log(obj.name)
console.log(obj['name'])
// not able to see so we need string
// console.log(obj.full name)
console.log(obj['full name'])
// add symbol
let mysum = Symbol('key1');
const obj2 ={
    name:'puneet',
    age:12,
    [mysum]:'key3',
    location:'ambala',
    'full name':'hitesh dabral'
}
// ob2.name='hitesh'
// also we can function there
obj2.fun=()=>{
    console.log('hell0')
}
// also you can frees
Object.freeze(obj2);
console.log(obj2[mysum])