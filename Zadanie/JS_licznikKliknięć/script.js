console.log("script OK");

var body = document.querySelector("body");
// var body = document.body;
let counter = 0;
body.addEventListener("click", function() {
  counter = counter + 1;
  console.log("klik");
});
let clickResult = document.querySelector("span");
document.addEventListener("click", function() {
  clickResult.textContent = counter;
});

// dodawanie i odejmowanie

let plus = document.querySelector("button:nth-child(1)");
let minus = document.querySelector("button:nth-child(2)");
let klik = 0;
let spn = document.querySelector("span");

plus.addEventListener("click", function() {
  klik = klik + 1;
  console.log("klik plus");
  spn.textContent = klik;
});

minus.addEventListener("click", function() {
  console.log("klik minus");
  klik = klik - 1;
  spn.textContent = klik;
});
