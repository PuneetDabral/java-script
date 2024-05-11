// Object() constructor function
// const tinder = new Object();
const tinderUser = {
    name:'abcd',
    id:1,
    isLogin:false,
    fullname:{cast:'dabral'}
}
console.log(tinderUser)

const obj1 = {1:'a',2:'b'};
const obj2 = {3:'c', 4:'d'};

// let obj3 = {obj1,obj2};
// console.log(obj3)
// { obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'c', '4': 'd' } }
// const obj4 = Object.assign(obj1,obj2)
// first para is opetinal object so the final value is garented assign 
const obj4 = Object.assign({},obj1,obj2)
const obj5 = {...obj1,...obj2};
console.log(obj4);
console.log(obj5);

console.log(Object.keys(obj5))
// the value is in array format [1,2,3,4]
console.log(Object.values(obj5))
// same as key 
console.log(Object.entries(obj5))
// all the key are value be in the form of nested array
// [ [ '1', 'a' ], [ '2', 'b' ], [ '3', 'c' ], [ '4', 'd' ] ]

// it gives truw and false
console.log(tinderUser.hasOwnProperty('name'))


// object destructure 
const subject ={
    name:'Hindi',
    std:'10th',
    assign:'puneet'
}

const {name, assign:person,std} = subject;
console.log(name,person,std)

// json
// {
//     'name':'puneet',
//     'class':'10th'
// }