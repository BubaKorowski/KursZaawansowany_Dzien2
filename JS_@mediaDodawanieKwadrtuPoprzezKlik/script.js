console.log("ok");

const buttonJS = document.querySelector(".js");
const buttonJQ = document.querySelector(".jq");

buttonJS.addEventListener("click", createDiv);

function createDiv() {
  const divItem = document.createElement("div");

  //stworzenie elementu w HTML
  document.body.appendChild(divItem);

  //3 sposoby na dodanie klasy do elementu HTML
  divItem.className = "box";
  // divItem.classList.add("box");
  // divItem.setAttribute("class,", "box");

  // divItem.innerText = "Przykładowy tekst dodany w emencie HTML poprzez JS";
}
