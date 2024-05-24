let clock = document.querySelector('#clock');


setInterval(()=>{
    let date = new Date();
    date.toLocaleTimeString();
    clock.innerHTML = date;
},500)


