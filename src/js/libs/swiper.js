import Swiper from 'swiper/bundle';

let brands_slider = new Swiper(".brands__slider", {
  direction: "horizontal",


  breakpoints: {
    320: {
      spaceBetween: 28,
      slidesPerView: 3,
    },
    768: {
      spaceBetween: 28,
      slidesPerView: 4,
    },
    1280: {
      spaceBetween: 112,
      slidesPerView: 5,
    },
  },

  navigation: {
    nextEl: '.brands__slider-arrow--next',
    prevEl: '.brands__slider-arrow--prev',
  },
});