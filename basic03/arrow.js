let user={
    name:'puneet',
    std:10,
    welcome:function(){
        // this used for current context (means object context)
console.log(this.name)
    }
}
user.welcome()


// in browser globel object is window 
// but in node envi this refer to empty context so {} comes because there is no current context 


// but if you console it in some function then you will get some other values 
// function explainTHis(){
    // let userName='ac';
    // console.log(this.userName); //it gives undefined its context is only on object for function it gives some diffrent type values
// } 
// in diffrent type of declaration this should behaive in the same way
// const explainTHis =function (){
//     let userName='ac';
//     console.log(this.userName); //it gives undefined its context is only on object for function it gives some diffrent type values
// } 

// explainTHis()

const PrintName =()=> {
    let user='abc';
    console.log(this.user); // here also it is undefined but here value of this
    // is {} object like it does not have context but previous we got some diffrent values  
}

// basic structure of arraw function
// ()=>{} you can hold that into one varible 

// we call it implicet return because this is one line so we dont need return keyword
// const arrow =(a,b)=>(a+b)
// const arrow =(a,b)=>a+b
// if you want to return object 
const arrow = ()=> ({name:'puneer'}) 
// you need to wrap it to into () other wise it is undefined 

console.log(arrow(5,10))