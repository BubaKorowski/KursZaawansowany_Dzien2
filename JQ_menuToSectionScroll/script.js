// console.log("OK");

//JQ dłuższa i najprostrza metoda

// $(".me").on("click", function() {
//   $("body, html").animate(
//     {
//       scrollTop: $(".s1").offset().top
//     },
//     500
//   );
// });

// $(".portfolio").on("click", function() {
//   $("body, html").animate(
//     {
//       scrollTop: $(".s2").offset().top
//     },
//     500
//   );
// });
// $(".offer").on("click", function() {
//   $("body, html").animate(
//     {
//       scrollTop: $(".s3").offset().top
//     },
//     500
//   );
// });
// $(".contact").on("click", function() {
//   $("body, html").animate(
//     {
//       scrollTop: $(".s4").offset().top
//     },
//     500
//   );
// });

//JQ sposób krótszy i uniwersalny(potórzyć/wyjaśnić/rozjaśnić)
$("nav a").on("click", function() {
  const goToSection = "#" + $(this).attr("class");
  $("body, html").animate(
    {
      scrollTop: $(goToSection).offset().top
    },
    500
  );
});
