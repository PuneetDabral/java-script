let buttons = document.querySelectorAll(".button");

// buttons.forEach((butt) => {
//     butt.style.padding='20px'
//     butt.style.backgroundColor  = `${butt.id}`;
// });

const changeBgColor = (bg) => 
  document.querySelector(".canvas").style.backgroundColor = bg;


buttons.forEach((butt) => {
  butt.addEventListener("click", (e) => {
    console.log(e.target);
    if (e.target.id === "grey") {
      changeBgColor("grey");
    } else if (e.target.id === "white") {
      changeBgColor("white");
    } else if (e.target.id === "blue") {
      changeBgColor("blue");
    } else {
      changeBgColor(e.target.id);
    }
  });
});
