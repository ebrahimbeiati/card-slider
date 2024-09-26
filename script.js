new Swiper(".card-wrapper", {
  // Optional parameters
    loop: true,
    slidesPerView: 4,
    spaceBetween: 30,

  // If we need pagination
  pagination: {
      el: ".swiper-pagination",
      clickable: true,

      dynamicBullets: true,

  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

    // responsive breakpoint

    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        640: {
            slidesPerView: 2,
        },
        768: {
            slidesPerView: 3,
        },
        1024: {
            slidesPerView: 4,
        },
    }

});
