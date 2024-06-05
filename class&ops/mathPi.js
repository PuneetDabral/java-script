// you cant change Math.PI value 
const des = Object.getOwnPropertyDescriptor(Math,"PI");
console.log(des)

// factory function
// In object-oriented programming, a factory is an object for creating other objects;

// const obj = Object.create(null);

const obj ={
    name:'pun',
    class:'x',
    roll:3
}

console.log(Object.getOwnPropertyDescriptor(obj,'name'))

// now this name key is not coming
Object.defineProperty(obj,'name',{
    enumerable:false,
    // writable:false,
    // configurable:false
})

for (const iterator in obj) {
    console.log(iterator)
}