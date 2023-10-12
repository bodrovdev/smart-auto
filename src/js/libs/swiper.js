import Swiper from 'swiper/bundle';

let brands_slider = new Swiper(".brands__slider", {
  direction: "horizontal",

  breakpoints: {
    320: {
      spaceBetween: 0,
      slidesPerView: "auto",
    },
    768: {
      spaceBetween: 28,
      slidesPerView: 3,
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

let banners_slider = new Swiper(".banners__slider", {
  direction: "horizontal",
  spaceBetween: 100,
  slidesPerView: 1,
  speed: 1000,

  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },

  pagination: {
    el: ".banners__slider-pagination",
    clickable: true,
  },
});

var gallery_slider_init = false;

function gallery_slider() {
  if (window.innerWidth <= 1279) {
    if (!gallery_slider_init) {
      gallery_slider_init = true;

      var gallery_slider = new Swiper(".single-cars__gallery-slider", {
        direction: "horizontal",
        spaceBetween: 10,
        slidesPerView: "auto",
      });
    }
  } else if (gallery_slider_init) {
    gallery_slider.destroy();
    gallery_slider_init = false;
  }
}
gallery_slider();
window.addEventListener("resize", gallery_slider);