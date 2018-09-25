console.log("ok");

const btn = document.querySelector("button");
const kwadrat = document.querySelector(".square");
// kwadrat.style.transition = ".5s";

let degZero = 0;
let degChange = 10;

// btn.addEventListener("click", rotateSqr);

// function rotateSqr() {
//   degZero = degZero + degChange;
//   console.log("klik");
//   kwadrat.style.transform = "rotate(" + degZero + "deg)";
// }

//poniżej funkcja 'anonimowa'
btn.addEventListener("click", function() {
  //degZero = degZero + degChange;
  degZero += degChange;
  kwadrat.style.transform = "rotate(" + degZero + "deg)";
  kwadrat.classList.add("animation");
});
