console.log("ok");

const btn = document.querySelector("button");
btn.addEventListener("click", function() {
  console.log("klik");
});

// const bdy = document.querySelector("body");

btn.addEventListener("mouseover", function() {
  console.log("najechanie myszką");
});

btn.addEventListener("mousemove", function() {
  console.log("najechanie myszką");
});

btn.addEventListener("click", function() {
  alert("kliknąłeś");
});

// const paragraph = document.querySelector("p");
// btn.addEventListener("click", function() {
//   console.log("klik");
//   paragraph.style.backgroundColor = "red";
// });

let clicksNumber = 1;

btn.addEventListener("click", function() {
  // clicksNumber = clicksNumber + 1;
  // clicksNumber++;
  clicksNumber += 2;
  console.log("klkik numer", clicksNumber);
});
window.addEventListener("scroll", function() {
  console.log("skrollujesz o " + window.scrollY + "px");
});
