$(function () {
  "use strict";

  //! start header

  let myHeader = $("header");

  // header height
  myHeader.height($(window).height());

  //   resize header height
  $(window).resize(function () {
    myHeader.height($(window).height());
  });

  //   slider
  $(".owl-carousel").owlCarousel({
    loop: true,
    items: 1,
    autoplay: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: true,
    smartSpeed: 1000,
  });

  //! end header

  //   ! start navigation bar

  //   links active
  $(".links li").on("click", function () {
    $(this).addClass("active").siblings().removeClass("active");
  });

  //   menu toggle
  $(".menuToggle").on("click", function () {
    $(".links").slideToggle(500);
  });

  // ! end navigation bar
});
