$(function () {
  "use strict";

  //   ! start navigation bar

  //   links active
  $(".links li a").on("click", function () {
    $(this).parent().addClass("active").siblings().removeClass("active");
  });

  //   menu toggle
  $(".menuToggle").on("click", function () {
    $(".links").slideToggle(500);
  });

  //   smooth scroll
  $(".links li a").on("click", function () {
    $("html , body").animate(
      {
        scrollTop: $("#" + $(this).data("value")).offset().top,
      },
      1000
    );
  });

  // ! end navigation bar

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
});
