$(".large").click(function() {
  $("h1").toggleClass("duzy");
});

$(".small").click(function() {
  $("h1").toggleClass("maly");
});

$(".order").click(function() {
  $("h1").toggleClass("border");
});
// przy toggleClass dodaniu kilku .class zachowana jest zasada nadpisywania wartości. Aktywna pozostaje późniejsza wartość. i do dizałania linku JQuerryCND potrzybny jest internet ;p
