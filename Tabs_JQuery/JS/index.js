$(document).ready(function () {
  $(".tabs").click(function () {
    // activation of tabs
    $(".tabs").removeClass("active");
    $tabName = $(this).attr("id");
    $divName = $(this).attr("href");
    $(this).addClass("active");
    // hide and show divs
    $(".divs").addClass("hidden");
    $($divName).removeClass("hidden");
  });
});
