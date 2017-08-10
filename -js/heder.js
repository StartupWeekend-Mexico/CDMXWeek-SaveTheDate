$(document).ready(function() {
  $("input.search").focus(function() {
    $(".result-search").css("display", "block").show(2000);
  });
  $("input.search").blur(function() {
    $(".result-search").css("display", "none").fadeOut(2000);
  });
});
