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

window.addEventListener('load', () => {
  if (!(document.querySelector('.banners__slider') === null)) {
    document.querySelector('.banners__slider').addEventListener('mouseenter', () => {
      console.log('stop');
      banners_slider.autoplay.stop();
    })
    document.querySelector('.banners__slider').addEventListener('mouseleave', () => {
      console.log('start');
      banners_slider.autoplay.start();
    })
  }
})

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

var brands_catalogue_slider_init = false;

function brands_catalogue_slider() {
  if (window.innerWidth <= 1199) {
    if (!brands_catalogue_slider_init) {
      brands_catalogue_slider_init = true;

      var brands_catalogue_slider = new Swiper(".brands__catalogue-slider", {
        direction: "horizontal",
        spaceBetween: 50,
        slidesPerView: 1,

        navigation: {
          nextEl: '.brands__catalogue-slider-arrow--next',
          prevEl: '.brands__catalogue-slider-arrow--prev',
        },
      });
    }
  } else if (brands_catalogue_slider_init) {
    brands_catalogue_slider.destroy();
    brands_catalogue_slider_init = false;
  }
}
brands_catalogue_slider();
window.addEventListener("resize", brands_catalogue_slider);

let reviews_slider = new Swiper(".reviews__slider", {
  direction: "horizontal",
  spaceBetween: 20,
  slidesPerView: "auto",
  speed: 1000,

  pagination: {
    el: ".reviews__slider-pagination",
    clickable: true,
  },
});