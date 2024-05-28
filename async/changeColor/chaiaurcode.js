// generate random color

const randomColor = () => {
  let hax = "123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += hax[Math.floor(Math.random() * 16)];
  }
  return color;
};

let inter;
document.querySelector("#start").addEventListener("click", () => {
  inter = setInterval(() => (document.body.style.backgroundColor = randomColor()),1000);
});

document.querySelector("#stop").addEventListener("click", () => {
  clearInterval(inter, 1000);
  inter = null;
});
