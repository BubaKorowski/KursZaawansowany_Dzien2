console.log("script src dziala ok");
var courseName = "kurs JS na stronie"; // string, czylli ciag znakow
console.log(typeof courseName);
var numberOfPeople = 1200; //number
console.log(typeof numberOfPeople);
var distance = 2.1; //number
var female = false; //boolean true/false
console.log(female, typeof female);
var onlyDeclared; // undefined jest nadawany przez interpreter
var activeTask = null; //null piszemy go sami
var taskArray = []; //tablica
var myNewFunction = function() {}; //funkcja TO JEST NAJWAŻNIEJSZA SPRAWA W JS. PODSTAWA PRZYSZŁYCH ZAROBKÓW!!!
var myObj = {}; //obiekt
console.log(taskArray);

// pobieranie elementów
var p = document.querySelector(".description");
var paragraph = document.querySelector("p");
var text = document.querySelector("p:nth-child(1)");
var myPage = document.querySelector("body");

var item1 = document.getElementById("p2");
// okno przeglądarki
console.log(window);

// skrót do body
console.log(document.body);
console.log(document.documentElement);

// skrót do kolekcji zbioru wszystkich obrazków na stroneie
console.log(document.images);
console.log(document.querySelectorAll("img"));
// czego używać najczęściej
document.querySelector("element");
document.querySelectorAll("elementy");
