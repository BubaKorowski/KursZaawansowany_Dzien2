const burg = document.querySelector(".arrow");
const menu = document.querySelector("nav");

burg.addEventListener("click", function() {
  burg.classList.toggle("up");
  menu.classList.toggle("up");
});
