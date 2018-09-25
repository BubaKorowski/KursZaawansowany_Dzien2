// console.log("ok");

//Poniżej mój kod

// $("div.green").on("click", function() {
//   $("body").attr("class", "green");
// });

// $("div.orange").on("click", function() {
//   $("body").attr("class", "orange");
// });

// let initialSize = 60;
// $("div.increase").on("click", function() {
//   initialSize += 10;
//   $("p.text").css("font-size", initialSize + "px");
// });

// let space = 1;
// $("div.move").on("click", function() {
//   initialSize += 10;
//   space += 10;
//   $("p.text").css({
//     "font-size": initialSize + "px",
//     "letter-spacing": space + "px"
//   });
// });

//Poniżej kod SAMURAJA

$(".interface").on("click", function() {
  //console.log("dziala");
  //   console.log(this);  //dla elementu wybranego przez klik
  //   console.log($(this)); //tak samo wybrany element owinięty w obiekt JQ
  console.log($(this).attr("class")); //j.w. plus wyświetlenie class

  //instrunkcja warunkowa w JQ
  if ($(this).hasClass("orange")) {
    console.log("true orage");
    $("body").attr("class", "orange");

    //pooniżej inne opcje
    // $('body').tooggleClass("orange");
    // $("body").css("background-color", "orange");
  }

  if ($(this).hasClass("green")) {
    console.log("true green");
    $("body").attr("class", "green");
  }

  if ($(this).hasClass("increase")) {
    console.log("true increase");
    $(".text").animate(
      {
        "font-size": "+=10"
      },
      500
    );
  }

  if ($(this).hasClass("move")) {
    console.log("true move");
    $(".text").animate({
      "font-size": "+=10",
      left: "+=60px",
      "letter-spacing": "+=10px"
    });
  }

  //instrukcja warunkowa w JS
  //   if (this.classList.contains("green")) {
  //     console.log("true green");
  //   }
});
