console.log("plik OK");

//JS + CSS
const burger = document.querySelector(".burger");
// burger.addEventListener("click", function() {
//   burger.classList.toggle("active");
// });

//JS and less CSS
const icoBurger = document.querySelector(".fa-bars");
const icoX = document.querySelector(".fa-times");
const aside = document.querySelector("aside");

burger.addEventListener("click", function() {
  icoBurger.classList.toggle("show"); //tak
  icoX.classList.toggle("show"); //nie
  aside.classList.toggle("show");
  burger.classList.toggle("active");
});
