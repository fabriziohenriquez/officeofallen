$(".tab-nav").click(function(event) {
  var index = $(this).index();
  $(".tab-nav").removeClass("active-tab");
  $(this).addClass("active-tab");
  $(".topic-menu").fadeOut("fast");
  $(".topic-menu").eq(index).fadeIn("slow");
  $("#display-col").fadeOut("fast");
});

if (screen.width < 500) {
  $("#tab-nav-list-container").removeClass("col-4");
  $("#tab-nav-list-container").addClass("col-12");
  $("#display-col").removeClass("col-8");
  $("#display-col").addClass("col-12");
  $(".topic-menu").removeClass("col-8");
  $(".topic-menu").addClass("col-12");

}

$(".topic-menu").hide();
