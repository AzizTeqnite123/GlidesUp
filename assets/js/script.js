var swiper = new Swiper(".prodSlider", {
  slidesPerView: 4,
  spaceBetween: 30,
  navigation: {
    nextEl: ".swiper-button-next", prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    150: {
      slidesPerView: 1.1,
      spaceBetween: 10,
    },
    576: {
      slidesPerView: 2,
      spaceBetween: 15,
    },
    769: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
    1025: {
      slidesPerView: 4,
      spaceBetween: 30,
    },
  },
});


var swiper = new Swiper(".testiSlider", {
  slidesPerView: 3,
  spaceBetween: 30,
  centeredSlides: true,
  initialSlide: 0,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    150: {
      slidesPerView: 1.1,
      spaceBetween: 10,
    },
    576: {
      slidesPerView: 2,
      spaceBetween: 15,
    },
    769: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
    1025: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
  },
});
