//JQuery ONLY

function changeText() {
  const wielkoscSrola = $(document)
    .scrollTop()
    .toFixed();
  //   console.log(wielkoscSrola);

  const wysokoscSekcji1 = $(".sekcja1").height();
  const wysokoscSekcji2 = $(".sekcja2").height();
  const wysokoscSekcji3 = $(".sekcja3").height();
  const wysokoscSekcji4 = $(".sekcja4").height();
  //   console.log(wysokoscSekcji2);

  const odleglocsOdPoczatkuSekcji1 = $(".sekcja1").offset().top;
  const odleglocsOdPoczatkuSekcji2 = $(".sekcja2").offset().top;
  const odleglocsOdPoczatkuSekcji3 = $(".sekcja3").offset().top;
  const odleglocsOdPoczatkuSekcji4 = $(".sekcja4").offset().top;
  //   console.log(odleglocsOdPoczatkuSekcji1);

  if (wielkoscSrola < wysokoscSekcji1) {
    $("div.info").text("Sekcja 1");
  } else if (wielkoscSrola < wysokoscSekcji2 + odleglocsOdPoczatkuSekcji2) {
    $("div.info").text("Sekcja 2");
  } else if (wielkoscSrola < wysokoscSekcji3 + odleglocsOdPoczatkuSekcji3) {
    $("div.info").text("Sekcja 3");
  } else {
    $("div.info").text("Sekcja 4");
  }
}
$(document).on("scroll", changeText);
