var swiper = new Swiper(".prodSlider", {
  slidesPerView: 4,
  spaceBetween: 30,
  navigation: {
    nextEl: ".swiper-button-next", prevEl: ".swiper-button-prev",
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
});
