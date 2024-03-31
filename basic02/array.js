const arr =[ 0,1,2,3,'hello',true];
console.log(arr[0])

// copy operations
// shallow copy and deep copy
// deep copy
let newArr = arr
newArr.push('hello')
// shallow 
let copyArr = [...arr];
copyArr.push(1)
console.table({arr,newArr,copyArr})
// push (add in end) . pop (delete from end)

// unShift (it shift all the values to next index)
arr.unshift(10) //at the begining of the array

// shift it delete from starting index

// include
arr.includes('hello')

// indexOf
console.log(arr.indexOf(3))

// if you want to convert array to string use join
let stringArr =arr.join()
console.log( typeof stringArr)


// slice or splice
console.log(arr)
let myn1 = arr.slice(1,3) //last range does not include

console.log(myn1) //[0,1]

let myn2 = arr.splice(1,3) // last range include also it change actual array values (deep copy)
console.log(myn2) //[0,1,2]