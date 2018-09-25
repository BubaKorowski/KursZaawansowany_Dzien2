// let bdy = document.querySelector("body");
var firstDiv = document.querySelector(".s1");
var seckondDiv = document.querySelector(".s2");

function changeColor() {
  //   firstDiv.classList.toggle("red");
  //   seckondDiv.classList.toggle("red");
  console.log("this");
  this.classList.toggle("red");
}
firstDiv.addEventListener("click", changeColor);
seckondDiv.addEventListener("click", changeColor);
