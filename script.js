$(document).ready(function () {
  if ($(header).width() < 480) {
    $("header nav a").hide();
    $("header nav").append('<button class="menu-button">=</button>');
  }
  $("header").on("click", ".menu-button", function () {
    $("header nav a").toggle();
  });
});
