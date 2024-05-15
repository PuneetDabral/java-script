
// let c =300 global scope
// let a =5 both are diffrent because it has global and if block have there on scope 
if(true){
    let a = 1;
    const b = 2;
    var c = 2;
    // console.log(a) block scope 
}

// console.log(a)/ block type
// console.log(b) block type
console.log(c) // global scope



// mini hoisting

function one(){
    const useName = 'puneet';

    function two (){
        const website = 'youtube';
        // this will print because userName have global scope for this two
        console.log(useName); 
    }
    // this has block scope thats why it is not avilable for this
    console.log(website);
    two()
}

one()

// when we have nested function child will acess parent varible but parent cant

// ++++++++++++++++++++++++++++++++++
function addTwo (value){
    return value+1
}

// console.log(addTwo(5)); ypu cant acess this because you are declaring this into a varible
const addTwo = function(value){
    return value+1   
}
