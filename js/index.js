$(document).ready(function () {
  $("#burgerline").click(function () {
    $("#slider").slideToggle("slow");
  });


  $("#inner").click(function () {
    $("#innerdata").slideToggle("slow");
  });
  $("#inner1").click(function () {
    $("#innerdata1").slideToggle("slow");
  });
  $("#inner2").click(function () {
    $("#innerdata2").slideToggle("slow");
  });
  $("#inner3").click(function () {
    $("#innerdata3").slideToggle("slow");
  });



});


var swiper = new Swiper(".mySwiper", {
  autoplay: {
    delay: 2000,
    disableOnInteraction: false
  },
  slidesPerView: 3,
  spaceBetween: 30,
  freeMode: true,
  pagination: {
    el: ".swiper-pagination",

  },
});

var swiper = new Swiper(".mySwiper1", {
  autoplay: {
    delay: 2000,
    disableOnInteraction: false
  },

  spaceBetween: 30,
  freeMode: true,
  pagination: {
    el: ".swiper-pagination",

  },
});

var swiper = new Swiper(".mySwiper2", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "auto",
  coverflowEffect: {
    rotate: 50,
    stretch: 0,
    depth: 100,
    modifier: 1,
    slideShadows: true,
  },
  pagination: {
    el: ".swiper-pagination",
  },
});

