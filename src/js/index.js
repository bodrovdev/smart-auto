import { lock, unlock } from 'tua-body-scroll-lock';

import { accordionFunc } from './accordionFunc';
import { tabsFunc } from './tabsFunc';
import { modalFunc } from './modalFunc';

// ? --- Отключение подсветки ошибок в инпутах
window.addEventListener('load', () => {
  if (!(document.querySelectorAll('input') === null)) {
    document.querySelectorAll('input').forEach((input) => {
      input.setAttribute('spellcheck', 'false');
    })
  }
})

// ? --- Запустить анимацию после загрузки страницы
window.addEventListener('load', () => {
  let animation_wrapper = document.querySelector('.heading__title-variants-wrapper');
  let heading_link = document.querySelector('.heading__link');

  if (!(animation_wrapper === null)) {
    animation_wrapper.classList.add('heading__title-variants-wrapper--active');

    setTimeout(() => {
      heading_link.classList.add('heading__link--active');
    }, 5100);
  }
});

// ? --- Анимация в блоке новости
window.addEventListener('load', () => {
  let news_items = document.querySelectorAll('.news__wrapper-item');

  if (!(news_items === null)) {
    news_items.forEach(item => {

      item.addEventListener('mouseenter', () => {
        news_items.forEach(news_item => {
          news_item.classList.remove('news__wrapper-item--active');
        });

        item.classList.add('news__wrapper-item--active');
      })
    })
  }
});

// ? --- Фильтр на странице каталога
window.addEventListener('load', () => {
  let filter_menu = document.querySelector('.catalogue-cars__wrapper-column--left');

  if (filter_menu === null) {
    return;
  }
  else {
    let filter_button = document.querySelector('.catalogue-cars__select-container-button');
    let filter_button_close = document.querySelector('.catalogue-cars__filters-content-close');

    filter_button.addEventListener('click', () => {
      filter_menu.classList.add('catalogue-cars__wrapper-column--left--active');
      lock(filter_menu);
      // if (window.innerWidth < 1280) {
      //   Lenis.stop();
      // }
    })

    filter_button_close.addEventListener('click', () => {
      filter_menu.classList.remove('catalogue-cars__wrapper-column--left--active');
      unlock(filter_menu);
      // if (window.innerWidth < 1280) {
      //   Lenis.start();
      // }
    })
  }
})

// ? --- Аккордеон в блоке вопросов
accordionFunc('questions');

// ? --- Табы в блоке характеристик
tabsFunc(`single-cars`);

// ? --- Модалки
modalFunc('cars-modal');
modalFunc('goods-modal');
modalFunc('callback-modal');
modalFunc('success-modal');


window.addEventListener('load', () => {
  let single_goods_cat = document.querySelector('.single-goods__cat');
  let single_goods_title = document.querySelector('.single-goods__title');
  let single_goods_price = document.querySelector('.single-goods__price');

  let modal_goods_cat = document.getElementById('goods_order_cat');
  let modal_goods_title = document.getElementById('goods_order_title');
  let modal_goods_price = document.getElementById('goods_order_price');

  let single_goods_button = document.querySelector('.goods-modal__button');

  if (!(single_goods_title === null)) {
    single_goods_button.addEventListener('click', () => {
      modal_goods_cat.value = single_goods_cat.textContent;
      modal_goods_title.value = single_goods_title.textContent;
      modal_goods_price.value = single_goods_price.textContent;
    });
  }
});