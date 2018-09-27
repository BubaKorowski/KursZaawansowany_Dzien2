//JS ONLY
const txt = document.querySelector("div.info");

function changeText() {
  const wielkoscSrola = window.scrollY;
  //   console.log(wielkoscSrola);

  const wysokoscSekcji1 = document.querySelector(".sekcja1").clientHeight;
  const wysokoscSekcji2 = document.querySelector(".sekcja2").clientHeight;
  const wysokoscSekcji3 = document.querySelector(".sekcja3").clientHeight;
  const wysokoscSekcji4 = document.querySelector(".sekcja4").clientHeight;
  //   console.log(wysokoscSekcji2);

  // const odleglocsOdPoczatkuSekcji1 = document.querySelector(".sekcja1")
  //   .offsetTop;
  // const odleglocsOdPoczatkuSekcji2 = document.querySelector(".sekcja2")
  //   .offsetTop;
  // const odleglocsOdPoczatkuSekcji3 = document.querySelector(".sekcja3")
  //   .offsetTop;
  // const odleglocsOdPoczatkuSekcji4 = document.querySelector(".sekcja4")
  //   .offsetTop;
  //   console.log(odleglocsOdPoczatkuSekcji1);

  if (wielkoscSrola < wysokoscSekcji1) {
    txt.textContent = "sekcja 1";
  } else if (wielkoscSrola < wysokoscSekcji2 + odleglocsOdPoczatkuSekcji2) {
    txt.textContent = "sekcja 2";
  } else if (wielkoscSrola < wysokoscSekcji3 + odleglocsOdPoczatkuSekcji3) {
    txt.textContent = "sekcja 3";
  } else {
    txt.textContent = "sekcja 4";
  }
}
window.addEventListener("scroll", changeText);
