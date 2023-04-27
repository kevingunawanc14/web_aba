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
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
    ],
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
  });
});

// get api
$(document).ready(function () {
  $.ajax({
    url: "http://localhost:8000/api/product",
    method: "GET",
    success: function (response) {
      console.log(response);

      let productDataElement = $(".ourProductIndex");

      for (let i = 0; i < response.length && i < 4; i++) {
        // console.log("a")
        // console.log(data[""])
        var html = `
        <div class="col-sm-6 col-md-6 col-lg-3">
          <div class="card mb-4 shadow">
            <img
              src="assets/product/masamortarthb.jpg"
              class="card-img-top img-fluid"
              alt="Product 1"
            />
            <div class="card-body">
              <p class="card-text">${response[0]["data"]["nama"]}</p>
              <p class="text-muted fs-6 text">${response[0]["data"]["harga"]}</p>
              <p class="text-muted fs-6 text">${response[0]["data"]["deskripsi"]}</p>

              <button
                type="button"
                class="cartButton btn btn-outline-dark rounded-pill btn-lg"
              >
                <i class="fa-brands fa-whatsapp"></i> ORDER
              </button>
            </div>
          </div>
        </div>
        `;
        productDataElement.append(html);
      }
    },
    error: function (xhr, status, error) {
      console.error(error);
    },
  });

  $.ajax({
    url: "http://localhost:8000/api/catalog",
    method: "GET",
    success: function (response) {
      console.log(response);

      let catalogDataElementBaris1 = $("#catalogBaris1");
      let catalogDataElementBaris2 = $("#catalogBaris2");
      let catalogDataElementBaris3 = $("#catalogBaris3");

      for (let i = 0; i < response.length; i++) {
        // console.log("a")
        // console.log(data[""])
        if (i <= 3) {
          var html = 
          `
            <div class="col-12 col-sm-6 col-md-6 col-lg-3">
              <div class="cardbox_catalog rounded shadow">
                <img
                  src="assets/catalog/thunder.jpg"
                  alt=""
                  class="img-fluid rounded"
                />
  
                <div class="content_catalog rounded">
                  <a
                    href="catalog/Thunder Board Brochure.pdf"
                    target="_blank"
                    class="btn btn-info rounded-pill btn-md"
                    ><i class="fas fa-cloud-download-alt"></i> Download</a
                  >
                </div>
              </div>
              <div class="content_catalog_1 text-start">
                <p class="blueColor fw-bold mb-0 mt-2">${response[0]["data"]["nama"]}</p>
                <p class="redColor">${response[0]["data"]["judul"]}</p>
              </div>
            </div>
          `;
          catalogDataElementBaris1.append(html);
        } else if (i > 3  && i <= 7) {
          var html = 
          `
            <div class="col-12 col-sm-6 col-md-6 col-lg-3">
              <div class="cardbox_catalog rounded shadow">
                <img
                  src="assets/catalog/thunder.jpg"
                  alt=""
                  class="img-fluid rounded"
                />
  
                <div class="content_catalog rounded">
                  <a
                    href="catalog/Thunder Board Brochure.pdf"
                    target="_blank"
                    class="btn btn-info rounded-pill btn-md"
                    ><i class="fas fa-cloud-download-alt"></i> Download</a
                  >
                </div>
              </div>
              <div class="content_catalog_1 text-start">
                <p class="blueColor fw-bold mb-0 mt-2">${response[0]["data"]["nama"]}</p>
                <p class="redColor">${response[0]["data"]["judul"]}</p>
              </div>
            </div>
          `;
          catalogDataElementBaris2.append(html);

        } else if (i > 7 && i <= 9) {
          var html = 
          `
            <div class="col-12 col-sm-6 col-md-6 col-lg-3">
              <div class="cardbox_catalog rounded shadow">
                <img
                  src="assets/catalog/thunder.jpg"
                  alt=""
                  class="img-fluid rounded"
                />
  
                <div class="content_catalog rounded">
                  <a
                    href="catalog/Thunder Board Brochure.pdf"
                    target="_blank"
                    class="btn btn-info rounded-pill btn-md"
                    ><i class="fas fa-cloud-download-alt"></i> Download</a
                  >
                </div>
              </div>
              <div class="content_catalog_1 text-start">
                <p class="blueColor fw-bold mb-0 mt-2">${response[0]["data"]["nama"]}</p>
                <p class="redColor">${response[0]["data"]["judul"]}</p>
              </div>
            </div>
          `;
          catalogDataElementBaris3.append(html);

        } else {
          return
        }

      }
    },
    error: function (xhr, status, error) {
      console.error(error);
    },
  });

  $.ajax({
    url: "http://localhost:8000/api/team",
    method: "GET",
    success: function (response) {
      console.log(response);
      console.log(response[0]["data"]["nama"]);

      // console.log(response.length)

      let teamDataElement = $(".our_team_anggota");

      for (let i = 0; i < response.length; i++) {
        // console.log("a")
        // console.log(data[""])
        var html =
          '<div class="col-12 col-sm-6 col-md-6 col-lg-6 col-xl-3 col-xxl-3 text-center">' +
          '<div class="our_team_1 mb-5">' +
          '<img src="' +
          response[0]["data"]["image"] +
          '" alt="asiabangunabadi" />' +
          '<div class="wrapTrapezoid">' +
          '<div class="trapezoid">' +
          '<p class="text-white pt-3">' +
          response[0]["data"]["nama"] +
          ' <span class="text-black"><br />' +
          response[0]["data"]["jabatan"] +
          "</span></p>" +
          "</div>" +
          "</div>" +
          '<div class="shadow p-3 p-md-5 borderCeo">' +
          '<div class="row">' +
          '<p class="my-5">' +
          response[0]["data"]["deskripsi"] +
          "</p>" +
          "</div>" +
          '<div class="row">' +
          '<div class="col-12">' +
          '<button href="' +
          response[0]["data"]["linkedin"] +
          '" type="button" class="btn btn-dark rounded-circle">' +
          '<i class="fa-brands fa-linkedin-in"></i>' +
          "</button>" +
          '<button href="' +
          response[0]["data"]["facebook"] +
          '" type="button" class="btn btn-dark rounded-circle">' +
          '<i class="fa-brands fa-facebook-f"></i>' +
          "</button>" +
          '<button href="' +
          response[0]["data"]["instagram"] +
          '" type="button" class="btn btn-dark rounded-circle">' +
          '<i class="fa-brands fa-twitter"></i>' +
          "</button>" +
          "</div>" +
          "</div>" +
          "</div>" +
          "</div>" +
          "</div>";

        teamDataElement.append(html);
      }
    },
    error: function (xhr, status, error) {
      console.error(error);
    },
  });
});

// function fetchDataFromAPICatalog() {
//   $.ajax({
//     url: "http://localhost:8000/api/" + jenis_data,
//     method: "GET",
//     success: function (response) {
//       // Handle the API response here
//       console.log(response);
//     },
//     error: function (xhr, status, error) {
//       // Handle AJAX errors here
//       console.error(error);
//     },
//   });
// }

// function fetchDataFromAPITeam() {
//   $.ajax({
//     url: "http://localhost:8000/api/" + jenis_data,
//     method: "GET",
//     success: function (response) {
//       // Handle the API response here
//       console.log(response);
//     },
//     error: function (xhr, status, error) {
//       // Handle AJAX errors here
//       console.error(error);
//     },
//   });
// }
