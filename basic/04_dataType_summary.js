// basically there is two type of comparsion of data primitive and non-primitive (how they have store in memmory)

//primitive 
// 7 types - string ,Number ,boolearn, null,undefined ,symbol,BigInt

// data type of null is object 
// data type of undefined is undefined 

const id = Symbol('123');
const userId = Symbol('123');
console.log(id===userId);

// reference (non-primitive)
// array, objects , functions

let hero =['a','b','c'];
let obj ={
    name:'puneet',
    class:'X'
}

const myFun =function(){
    console.log('heelo')
}