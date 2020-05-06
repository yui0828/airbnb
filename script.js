"use strict"

// ------------index.html-------------

$(function() {
  $("#questionBg").hide();
  $(".icon").click(function() {
    $("#questionBg").fadeIn(200);
  });
  $("#questionClick").click(function() {
      $("#questionBg").fadeOut(200);
    });
});

$(function() {
  $(".scrollNav, .scrollNav-end").hide();
  $(window).scroll(function() {
    // $(".scrollNav").fadeIn(1500);
    if ($(this).scrollTop() > 500) {
      $(".scrollNav, .scrollNav-end").stop().fadeIn(400);
    } else {
      $(".scrollNav, .scrollNav-end").stop().fadeOut(400);
    };

  });
});

$(function() {
  let dis = 820;
  $(".headerImg").click(function() {
    // $("body").children().animate({"margin-top": "+=" + dis + "px"}, 400);
    $("#navbar").animate({"margin-top": "+=" + dis + "px"}, 400);

    dis *= -1;
  });
});

$(function() {
  $("a[href^='#']:not([href='#'])").click(function() {
     let target = $($(this).attr("href")).offset().top;
     target -= -70;
     $("html, body").animate({scrollTop: target}, 500);
     return false;
  });
});


// ------------businessTrip.html--------------


$(function() {
    $(".videoBtn").on("click", function() {
        if ($("#video01").get(0).paused) {
          $("#video01").get(0).play();
          $(".videoBtn").html("再生&nbsp▶︎");
        } else {
          $("#video01").get(0).pause();
          $(".videoBtn").html("停止&nbsp▶︎");
        };
        return false;
    });
});

