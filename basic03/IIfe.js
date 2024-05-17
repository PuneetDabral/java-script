// immediately invoked function expressions 
// wrap into parenthesis then its immedatly invoked first one for its definaion
(function (){
    console.log('db connected')
})();

// to remove global scope varible pollution we need this
// it gives error in this case js dont know where is the context stop so we need semicolan 
// named iifi 
(function (){
    console.log('db connected')
})();

// you can also use arrow function
// (()=>console.log('db connected'))();

// unnamed iifi
// you can pass name also
((name)=>console.log(`${name}db connected`))('puneet');

// note if you have to write two iifi then you need semi colan in the ends