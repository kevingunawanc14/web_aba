// slick slider
$(document).ready(function () {
  $(".slider").slick({
    // infinite: true,
    // arrows: false,
    // autoplay: true,
    // autoplaySpeed: 5000,
    // swipe: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: true,
    swipe: false,
    responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        }
      }
    ]
  });

  // ganti icon arrow
  $(".slick-prev").addClass("btn px-2");
  $(".slick-prev").css({
    // "background-color": "yellow",
    // "font-size": "200%",
    position: "absolute",
    left: "0",
    top: "35%",
    "z-index": "1",
    // "border-radius": "100%",
    border: "none",
    // padding: 0
  });

  $(".slick-prev").html(
    "<i class='fa-solid fa-circle-chevron-left fa-2xl'></i>"
  );

  $(".slick-next").addClass("btn px-2");
  $(".slick-next").css({
    // "background-color": "yellow",
    // "font-size": "200%",
    position: "absolute",
    right: "0",
    top: "35%",
    "z-index": "1",
    // "border-radius": "100%",
    border: "none",
    // padding: 0
  });

  $(".slick-next").html(
    "<i class='fa-solid fa-circle-chevron-right fa-2xl'></i>"
  );

  // script lightgallery
  lightGallery(document.getElementById("sliderGambar"), {
    speed: 500,
    mode: "lg-slide",
    selector: "img",
  });

  // position: absolute;
  // right: 0px;
  // top: 35%;
  // z-index: 1;
  // border-radius: 200%;
  // border: none;
  // padding: 0;

  // <i class="fa-solid fa-chevron-right"></i>

  /* background-color: yellow; */
  /* font-size: 200%; */
  // position: absolute;
  // left: 0px;
  // top: 35%;
  // z-index: 1;

  $(window).scroll(function () {
    $nav = $(".content-nav").outerHeight();
    // console.log($(this).scrollTop());
    if ($(this).scrollTop() > $nav) {
      $(".navbar").addClass("fixed-top");
    } else {
      $(".navbar").removeClass("fixed-top");
      // console.log("false");
    }
  });
});

// scroll dipaskan
$("ul.navbar-nav li")
  .find("a")
  .click(function () {
    var scr = $(window).width();
    if (scr <= 768) {
      var nnav = $(".navbar-collapse").outerHeight();
      var nav = $(".navbar").outerHeight();
      var enav = nav - nnav;
      console.log(nav, nnav);
    } else {
      var enav = $(".navbar").outerHeight();
      console.log(enav);
    }

    var href = $(this).attr("href");
    var anchor = $(href).offset();
    window.scrollTo(anchor.left, anchor.top - enav);
    $(".navbar-collapse").collapse("hide");
    return false;
  });

  // aos
  $(function () {
    AOS.init({
      duration: 1200,
      once: true,
    })
  })