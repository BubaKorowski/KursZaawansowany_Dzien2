// console.log("JS ok");
//1. Pobieramy wszystkie potrzebne elementy z DOM
const btnBig = document.querySelector(".bigger");
const btnSmall = document.querySelector(".smaller");
let paragraph = document.querySelector("p");

//1 Określamy potrzebne dane
let txtSize = 16;

//2. Określamy akcje - piszemy funkcje.

//powięszemie
function texIncrease() {
  txtSize++;
  paragraph.style.fontSize = txtSize + "px";
  console.log("klik");
}
btnBig.addEventListener("click", texIncrease);

//pomniejszenie
function texDecrease() {
  txtSize--;
  paragraph.style.fontSize = txtSize + "px";
  console.log("klik");
}
btnSmall.addEventListener("click", texDecrease);
