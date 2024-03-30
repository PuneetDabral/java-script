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
// let obj ={
//     name:'puneet',
//     class:'X'
// }

const myFun =function(){
    console.log('heelo')
}


// +++++++++++++++++++++++++++++++++++++++++++
// stack primitive, heap non-primitive
// stack copy , heap reference (actual)

let myName = "Puneet";  // stack 
let newName = myName;
newName='abhi' // it should be change because here we are getting copy from stack

let obj ={
    name:'puneet'
} 
let obj2 = obj; // here value is getting from same ref here (coming from heap)
obj2.name='abhi'
console.log(obj, obj2)





console.log(myName);


