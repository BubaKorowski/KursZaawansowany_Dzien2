console.log("OK");

//JQuery
// $(".article button").on("click", function() {
//   $(".modal-wrap").addClass("active");
//   $(".article").addClass("blur");
// });
// $(".hide").on("click", function() {
//   $(".modal-wrap").removeClass("active");
//   $(".article").removeClass("blur");
// });

//JQuery dla jednej funkcji obsługującej obydwa zdarzenia
// $(".article button, .hide").on("click", function() {
//   $(".modal-wrap").toggleClass("active");
//   $(".article").toggleClass("blur");
// });

//JS wersja bardziej szczegółowa
// const baton = document.querySelector("button");
// const modal = document.querySelector(".modal-wrap");
// const x = document.querySelector(".hide");
// const blur = document.querySelector(".article");

// baton.addEventListener("click", function() {
//   modal.classList.add("active");
//   blur.classList.add("blur");
// });

// x.addEventListener("click", function() {
//   modal.classList.remove("active");
//   blur.classList.remove("blur");
// });

//JS wersja "uproszczona" dla elementów poieranych i wykożystywanych tylko raz. bez ustalania zmiennych
document.querySelector("button").addEventListener("click", function() {
  document.querySelector(".modal-wrap").classList.add("active");
  document.querySelector(".article").classList.add("blur");
});

document.querySelector(".hide").addEventListener("click", function() {
  document.querySelector(".modal-wrap").classList.remove("active");
  document.querySelector(".article").classList.remove("blur");
});
