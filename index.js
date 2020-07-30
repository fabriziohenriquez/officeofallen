$(".tab-nav").click(function(event) {
  var index = $(this).index();
  $(".tab-nav").removeClass("active-tab");
  $(this).addClass("active-tab");
  $(".topic-menu").fadeOut("fast");
  $(".topic-menu").eq(index).fadeIn("slow");
  $("#display-col").fadeOut("fast");
});

$(".topic-menu").hide();
