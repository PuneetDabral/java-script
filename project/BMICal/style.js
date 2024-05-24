

const form = document.querySelector('form');

form.addEventListener('submit',(e)=>{
e.preventDefault();

let height = parseInt(document.querySelector('#height').value);
let weight = parseInt(document.querySelector('#weight').value);
 
let results = document.querySelector('#results')

if(height==='' ||height<0|| weight===''||weight<0|| isNaN(height) || isNaN(height)){
    results.innerHTML='plz give height and weight'}
else{
    
    let bmi=  (weight/((height*height)/10000)).toFixed(2)
let message =''
    if(bmi<18.6){
message= `under weight ${bmi}`
    }else if(bmi >=18.6 && bmi <= 24.9){
        message =`normal weight ${bmi}`
    }else{
        message =`over weight ${bmi}`
    }

    results.innerHTML=message

    // results.innerHTML =``

    }
});


