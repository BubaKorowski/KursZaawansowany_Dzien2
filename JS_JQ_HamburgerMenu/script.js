console.log("plik OK");

//JQuereyOnly_czyli to co w JS tylko w JQ

// $(".burger").on("click", function() {
//   $(".fas, aside, .wraper").toggleClass("show");
// });

// JS + CSS;
// const burger = document.querySelector(".burger");
// burger.addEventListener("click", function() {
//   burger.classList.toggle("active");
// });

//JS and less CSS
// const burger = document.querySelector(".burger");
// const icoBurger = document.querySelector(".fa-bars");
// const icoX = document.querySelector(".fa-times");
// const aside = document.querySelector("aside");
// const wrap = document.querySelector(".wraper");

// burger.addEventListener("click", function() {
//   icoBurger.classList.toggle("show"); //tak
//   icoX.classList.toggle("show"); //nie
//   aside.classList.toggle("show");
//   burger.classList.toggle("active");
//   wrap.classList.toggle("show");
// });

//JS pętla 'for' - a to nowość ;p
const burger = document.querySelector(".burger");
const activeElement = document.querySelectorAll(".active");
burger.addEventListener("click", function() {
  for (let i = 0; i < activeElement.length; i++) {
    activeElement[i].classList.toggle("show");
  }
});
//w pęti towrzymy let i = 0 aby potem pętla mogla sie wykonywać dla kazdego i < activeElement gdzie .length pobiera aktualną ilość tych że elementów; za każdym wykonaniem pętli i++ aby osiągnąć wartość i > activeElement gdzie warunek do wykonania pętli już nie jest spełniany.
