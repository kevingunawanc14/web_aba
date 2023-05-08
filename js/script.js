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

$(document).ready(function () {
  // get api
  let url = "http://localhost:8000/api/";
  $.ajax({
    url: url + "product",
    method: "GET",
    success: function (response) {
      // console.log(response);
      // console.log(response["data"]);
      // console.log(response["data"][0]);
      // console.log(response["data"][0]["nama"]);

      // console.log(response["data"].length);

      let productDataElement = $(".ourProductIndex");

      var counterData = 0

      for (let i = 0; i < response["data"].length && counterData < 4; i++) {
        // console.log("a")
        // console.log(data[""])
        if (response["data"][i]["status"] == 0) {
          continue;
        }
        // console.log("a")

        let html = `
        <div class="col-sm-6 col-md-6 col-lg-3">
          <div class="card mb-4 shadow">
            <img
              src="${response["data"][i]["image"]}"
              class="card-img-top img-fluid"
              alt="Product 1"
            />
            <div class="card-body">
              <p class="card-text">${response["data"][i]["nama"]}</p>
              <p class="text-muted fs-6 text">${response["data"][i]["harga"]}</p>
              <p class="text-muted fs-6 text">${response["data"][i]["deskripsi"]}</p>

              <button onclick="location.href='${response["data"][i]["link"]}'"
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
        counterData += 1
        // console.log(i);
      }

      let pageProductData = $(".product-page");

      var htmlPageProduct = ""
      var counterIsi = 0
      var counterIsi1 = 0

      // console.log(response["data"].length)
      // console.log(response["data"])
      // return

      var aktifCounter = 0;

      for (let i = 0; i < response["data"].length; i++) {
        if (response["data"][i]["status"] == "1") {
          aktifCounter++;
        }
      }


      for (let i = 0; i < response["data"].length; i++) {

        if (response["data"][i]["status"] == 0) {
          continue;
        }

        if (i == 8) {
          console.log(counterIsi)
          console.log(counterIsi1)

        }

        if (counterIsi == 0) {
          htmlPageProduct += `<div class="row">`

        }


        htmlPageProduct +=
          ` 
          <div class="col-sm-6 col-md-6 col-lg-3">
            <div class="card mb-4 shadow">
              <img
                src="${response["data"][i]["image"]}"
                class="card-img-top img-fluid"
                alt="Product 1"
              />
              <div class="card-body">
                <p class="card-text">${response["data"][i]["nama"]}</p>
                <p class="text-muted fs-6 text">${response["data"][i]["harga"]}</p>
                <p class="text-muted fs-6 text">${response["data"][i]["deskripsi"]}</p>
  
                <button onclick="location.href='${response["data"][i]["link"]}'"
                  type="button"
                  class="cartButton btn btn-outline-dark rounded-pill btn-lg"
                >
                  <i class="fa-brands fa-whatsapp"></i> ORDER
                </button>
              </div>
            </div>
          </div>
          `



        if (counterIsi == 3 || counterIsi1 == aktifCounter - 1) {
          htmlPageProduct += `</div>`
          counterIsi = -1
          //  console.log(htmlPageProduct)

          pageProductData.append(htmlPageProduct)
          htmlPageProduct = ""
        }

        // console.log(i)
        counterIsi1 += 1
        counterIsi += 1
      }




    },
    error: function (xhr, status, error) {
      console.error(error);
    },
  });

  $.ajax({
    url: url + "catalog",
    method: "GET",
    success: function (response) {
      console.log(response);

      let catalogDataElementBaris1 = $(".catalogBaris1");
      let catalogDataElementBaris2 = $(".catalogBaris2");
      let catalogDataElementBaris3 = $(".catalogBaris3");

      for (let i = 0; i < response["data"].length; i++) {
        // console.log("a")
        // console.log(data[""])
        if (response["data"][i]["status"] == 0) {
          continue;
        }
        if (i <= 3) {
          let html = `
            <div class="col-12 col-sm-6 col-md-6 col-lg-3">
              <div class="cardbox_catalog rounded shadow">
                <img
                  src="${response["data"][i]["image"]}"
                  alt=""
                  class="img-fluid rounded"
                />

                <div class="content_catalog rounded">
                  <button
                  onclick="location.href='${response["data"][i]["pdf"]}'"
                    target="_blank"
                    class="btn btn-info rounded-pill btn-md"
                    ><i class="fas fa-cloud-download-alt"></i> Download</button
                  >
                </div>
              </div>
              <div class="content_catalog_1 text-start">
                <p class="blueColor fw-bold mb-0 mt-2">${response["data"][i]["nama"]}</p>
                <p class="redColor">${response["data"][i]["judul"]}</p>
              </div>
            </div>
          `;
          // console.log(html);
          catalogDataElementBaris1.append(html);
        } else if (i > 3 && i <= 7) {
          let html = `
            <div class="col-12 col-sm-6 col-md-6 col-lg-3">
              <div class="cardbox_catalog rounded shadow">
                <img
                  src="${response["data"][i]["image"]}"
                  alt=""
                  class="img-fluid rounded"
                />

                <div class="content_catalog rounded">
                  <button
                   onclick="location.href='${response["data"][i]["pdf"]}'"
                    target="_blank"
                    class="btn btn-info rounded-pill btn-md"
                    ><i class="fas fa-cloud-download-alt"></i> Download</button
                  >
                </div>
              </div>
              <div class="content_catalog_1 text-start">
                <p class="blueColor fw-bold mb-0 mt-2">${response["data"][i]["nama"]}</p>
                <p class="redColor">${response["data"][i]["judul"]}</p>
              </div>
            </div>
          `;
          catalogDataElementBaris2.append(html);
        } else if (i > 7 && i <= 9) {
          let html = `
            <div class="col-12 col-sm-6 col-md-6 col-lg-3">
              <div class="cardbox_catalog rounded shadow">
                <img
                  src="${response["data"][i]["image"]}"
                  alt=""
                  class="img-fluid rounded"
                />

                <div class="content_catalog rounded">
                  <button
                   onclick="location.href='${response["data"][i]["pdf"]}'"
                    target="_blank"
                    class="btn btn-info rounded-pill btn-md"
                    ><i class="fas fa-cloud-download-alt"></i> Download</button
                  >
                </div>
              </div>
              <div class="content_catalog_1 text-start">
                <p class="blueColor fw-bold mb-0 mt-2">${response["data"][i]["nama"]}</p>
                <p class="redColor">${response["data"][i]["judul"]}</p>
              </div>
            </div>
          `;
          catalogDataElementBaris3.append(html);
        } else {
          return;
        }

        // console.log(i);
      }
    },
    error: function (xhr, status, error) {
      console.error(error);
    },
  });

  $.ajax({
    url: url + "team",
    method: "GET",
    success: function (response) {
      // console.log(response);
      // console.log(response[0]["data"]["nama"]);

      // console.log(response.length)

      let teamDataElement = $(".our_team_anggota");

      var counterData = 0

      for (let i = 0; i < response["data"].length && counterData < 4; i++) {
        if (response["data"][i]["status"] == 0) {
          continue;
        }
        // console.log("a")
        // console.log(data[""])
        let html = `
        <div class="col-12 col-sm-6 col-md-6 col-lg-6 col-xl-3 col-xxl-3 text-center">
          <div class="our_team_1 mb-5">
            <img src="${response["data"][i]["image"]}" alt="asiabangunabadi" />
            <div class="wrapTrapezoid">
              <div class="trapezoid">
                <p class="text-white pt-3">
                  ${response["data"][i]["nama"]}
                  <span class="text-black"><br />
                    ${response["data"][i]["jabatan"]}
                  </span>
                </p>
              </div>
            </div>
            <div class="shadow p-3 p-md-5 borderCeo">
              <div class="row">
                <p class="my-5">
                  ${response["data"][i]["deskripsi"]}
                </p>
              </div>
              <div class="row">
                <div class="col-12">
                  <button onclick="location.href='${response["data"][i]["linkedin"]}'"" type="button" class="btn btn-dark rounded-circle ${response["data"][i]["linkedin"] ? '' : 'hidden'}">
                    <i class="fa-brands fa-linkedin-in"></i>
                  </button>
                  <button onclick="location.href='${response["data"][i]["facebook"]}'" type="button" class="btn btn-dark rounded-circle ${response["data"][i]["facebook"] ? '' : 'hidden'}">
                    <i class="fa-brands fa-facebook-f"></i>
                  </button>
                  <button onclick="location.href='${response["data"][i]["instagram"]}'" type="button" class="btn btn-dark rounded-circle ${response["data"][i]["instagram"] ? '' : 'hidden'}">
                    <i class="fa-brands fa-twitter"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      `;

        // console.log(html);
        teamDataElement.append(html);
        counterData += 1
      }
    },
    error: function (xhr, status, error) {
      console.error(error);
    },
  });

  // send contact us form
  $('#form_kirim_email').submit(function (event) {
    // return alert ("*")
    event.preventDefault(); // Prevent the default form submission
    // return alert("*")
    // Get the form data
    var formData = {
      nama: $('#nama').val(),
      email: $('#email').val(),
      pesan: $('#pesan').val()
    };

    // return console.log(formData)
    // submit
    // Send the form data to the server-side endpoint using AJAX
    $.ajax({
      url: 'http://localhost:8000/api/test1',
      type: 'POST',
      dataType: 'json',
      data: formData,
      success: function (response) {
        // Handle the server's response
        console.log(response);
        $('#nama + .text-danger').text('');
        $('#email + .text-danger').text('');
        $('#pesan + .text-danger').text('');

        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Data Sukses Dikirim',
          showConfirmButton: false,
          timer: 1500
        })
      },
      error: function (xhr, status, error) {
        // Handle the AJAX error
        console.log(error);
        console.log(status);
        console.log(xhr);

        // return  
        // Remove existing error elements
        $('#nama + .text-danger').text('');
        $('#email + .text-danger').text('');
        $('#pesan + .text-danger').text('');

        // Parse the error response JSON
        var response = JSON.parse(xhr.responseText);
        var errorList = response.errors;

        console.log(response)
        console.log(errorList)
        // Loop through the error list and create error elements
        $.each(errorList, function (fieldName, errorMessage) {
          // Check if the error message is not null
          console.log(fieldName)
          console.log(errorMessage)

          if (errorMessage != null) {
            var inputElement = $('#' + fieldName);
            var errorElement = $('<span>', {
              class: 'text-danger',
              text: errorMessage[0]
            });
            inputElement.after(errorElement);
          }
        });


        // var namaInput = $('#nama');
        // var emailInput = $('#email');
        // var pesanInput = $('#pesan');




        // // Create and append new error elements
        // if (JSON.parse(xhr.responseText).errors.nama[0]) {
        //   var namaErrorElement = $('<span>', {
        //     class: 'text-danger',
        //     text: JSON.parse(xhr.responseText).errors.nama[0]
        //   });
        //   $('#nama').after(namaErrorElement);
        // }

        // if (JSON.parse(xhr.responseText).errors.email[0]) {
        //   var emailErrorElement = $('<span>', {
        //     class: 'text-danger',
        //     text: JSON.parse(xhr.responseText).errors.email[0]
        //   });
        //   $('#email').after(emailErrorElement);
        // }

        // if (JSON.parse(xhr.responseText).errors.pesan[0]) {
        //   var pesanErrorElement = $('<span>', {
        //     class: 'text-danger',
        //     text: JSON.parse(xhr.responseText).errors.pesan[0]
        //   });
        //   $('#pesan').after(pesanErrorElement);
        // }


      }
    });
  })
});

