$(document).ready(function () {
  $("#imageGallery").lightSlider({
    gallery: true,
    item: 1,
    loop: true,
    thumbItem: 9,
    slideMargin: 0,
    enableDrag: false,
    currentPagerPosition: "left",
  });
});
$(".icon-fullscreen").click(function () {
  $("#imageGallery").lightGallery({});
});
$("#imageGallery li").click(function () {
  $(".lg-backdrop.in").addClass("n");
  $(".lg-outer.lg-visible").addClass("n");
});
$(document).ready(function () {
  $(".js-example-basic-single").select2();
});
jQuery(document).ready(function ($) {
  //close popup
  $(".cd-popup").on("click", function (event) {
    if (
      $(event.target).is(".cd-popup-close") ||
      $(event.target).is(".cd-popup")
    ) {
      event.preventDefault();
      $(this).removeClass("is-visible");
    }
  });
  //close popup when clicking the esc keyboard button
  $(document).keyup(function (event) {
    if (event.which == "27") {
      $(".cd-popup").removeClass("is-visible");
    }
  });
});

//open popup
function openpopup(id) {
  event.preventDefault();
  $("#" + id + "").addClass("is-visible");
}
var vid = document.getElementById("home-video");
function pauseVid() {
  vid.pause();
}
$("#pop2-close").click(function () {
  pauseVid();
});
$(".lg-close.lg-icon").click(function () {
  $(".lg-start-zoom").css("display", "none");
});
