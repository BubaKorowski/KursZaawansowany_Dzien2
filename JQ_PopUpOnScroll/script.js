// console.log("ok");
$(document).on("scroll", function() {
  //   console.log($(document).scrollTop());
  if ($(window).scrollTop() > 200) {
    $("div.info").addClass("active");
    $("div.info").text(
      "Obecna pozycja scoll to: " +
        $(window)
          .scrollTop()
          .toFixed() +
        "px"
    );
  } else {
    $("div.info").removeClass("active");
  }
});
