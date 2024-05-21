let arr =[1,2,3,4];

// let newArr = arr.map(a=>a+5);

// let newArr1 = arr.map(a=>
//     {return a+5}
// );
// // chaning we can apply multiple methods 
// let chaning = arr.map(a=>a+10).map(a=>a+2).filter(a=>a>13);

// console.log(chaning)

// reduce 

const myReduce = arr.reduce((acc,value)=>{
    return acc+value
},0)
console.log(myReduce)

const shoping =[{course:'hindi',price:100},{course:'c++',price:20},{course:'eng',price:10}]

let ans = shoping.reduce((acc,val)=>{
    if(val.price>15)
        {
            acc.push(val)
        }
        return acc
},[])
console.log(ans)
