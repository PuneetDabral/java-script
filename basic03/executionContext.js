// js execution context
// 1) global ec ->this in browser has an window object in global in node js env we have empty {} because there is no global context 

// 2) function ec 

// 3 eval ec

// let v1 =10;
// let v2=15;
// function sum(a,b){
//     let total = a+b;
//     return total;
// }
// let result1= sum(v1,v2);
// let result2=sum(10,2)


// steps 
// first the code runs by global execution 
// 1) global execution -> this

// 2) memort creation phase (memory phase)
// val1= undefined
// val2= undefined
// addnum = defination
// result1 = undefined
// result2 = ""

// 3)execution phase
// val1=10;
// val2=15;


// 4) return to global execution

// call stack
// it is just like stack like main goes first and remove in last and at the end this stack got empty affter all the execution