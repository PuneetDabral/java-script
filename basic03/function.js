
// default value
// empty or undefined basically is false
function addTwo(a=5,b){
    return a+b;
}

console.log(addTwo(1,5));

// rest operator
// now because of this rest we are getting values in array
function addSome(...num1){
return num1;
}
console.log(addSome(1,2,3,4))


const a ={
    name:'puneet',
    class:'X'
}

const printName =()=>{
    console.log(a.name);
}

let arr=[1,2,3,4,5];
const itrate =()=>{
    arr.map(i=>console.log(i))
}

itrate();
printName();