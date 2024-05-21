// for of
let arr =[1,2,3]
for (const a of arr ) {
    console.log(a)
}

// it stores only unique entry and order is also same
const map = new Map();
map.set('name','puneet')
map.set('class','12th')

console.log(map)

for( const [key,value] of map){
     console.log(key,value)
}

// this for of loop doest work on object

let obj ={
    name:'puneet',
    class:'12'
}

// not work in object 
// for(const [key] of obj){
//     console.log(key);
// }

// for in it gives key if you can use it in array then also it gives you an index like it treates it as an object and return index 
for (const key in obj) {
   console.log(key)
   console.log(obj[key])
}

// we cant use itrate map using in or any where because map is not itrable


// for each loop
const lang = ['c','c++','js','java'];
lang.forEach((i)=>{console.log(i)})
// lang.forEach(function(val){
// console.log(val)
// })

// another way to use this
// const print =(val)=>{console.log(val)}
// lang.forEach(print)

// we have axis for these three things here under this arraw function
// lang.forEach((item,index,arr)=>{
//     console.log(item,index,arr)
// })


// also you can use arr.forEach [{},{}] in array of object

// it does not return any thing so all value is undefined 
// const all = lang.forEach((item,index,arr)=>{
//     console.log(item,index,arr)
// })


// filter 
// it returns Array of passed value (true value)
let num =[1,2,3,4,5,6,7,8];
// let gre = num.filter(n=>n>5);
let gre = num.filter((n)=>{
    // you have write return then only it will return other wise it empty array will get
return n>5
});

let arr1=[];
num.forEach(n=>{
    if(n>5){
        arr1.push(n)
    }
});

console.log(arr1)

console.log(gre)