(function () {
  const swiper = new Swiper(".swiper", {
    // Optional parameters
    // direction: "vertical",
    effect: "fade",
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    loop: true,

    pagination: {
      el: ".swiper-pagination",
    },

    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },

    scrollbar: {
      el: ".swiper-scrollbar",
    },
  });
})();

(function () {
  var swiper = new Swiper(".swiperCoverFlow", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    direction: "vertical",
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    loop: true,
    coverflowEffect: {
      rotate: 0,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows: false,
    },
    pagination: {
      el: ".swiper-pagination",
    },
  });
})();
