AOS.init();

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

// SCRIPT FOR ACCORDIANS FAQS

document.addEventListener('DOMContentLoaded', function () {
  function faqsAccordion() {
      var accordionSections = document.querySelectorAll(".faq__accordion");

      accordionSections.forEach(section => {
          var accordionItemHeaders = section.querySelectorAll(".accordion-item-header");

          if (accordionItemHeaders.length > 0) {
              var firstAccordionItemHeader = accordionItemHeaders[0];
              var firstAccordionItemBody = firstAccordionItemHeader.nextElementSibling;

              firstAccordionItemHeader.classList.add("active");
              firstAccordionItemBody.style.maxHeight = firstAccordionItemBody.scrollHeight + "px";
          }

          accordionItemHeaders.forEach(accordionItemHeader => {
              accordionItemHeader.addEventListener("click", event => {
                  var accordionItemBody = accordionItemHeader.nextElementSibling;

                  accordionItemHeaders.forEach(item => {
                      if (item !== accordionItemHeader) {
                          item.classList.remove("active");
                          item.nextElementSibling.style.maxHeight = 0;
                      }
                  });

                  accordionItemHeader.classList.toggle("active");

                  if (accordionItemHeader.classList.contains("active")) {
                      accordionItemBody.style.maxHeight = accordionItemBody.scrollHeight + "px";
                  } else {
                      accordionItemBody.style.maxHeight = 0;
                  }
              });
          });
      });
  }

  faqsAccordion();
});

// SCRIPT FOR ACCORDIANS FAQS