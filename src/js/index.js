// import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock';
import { lock, unlock } from 'tua-body-scroll-lock';
import Lenis from '@studio-freight/lenis'

// ? --- Плавный скроллинг
window.addEventListener('load', () => {
  if (window.innerWidth >= 1280) {
    const lenis = new Lenis()

    lenis.on('scroll', (e) => {
      console.log(e)
    })

    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)
  }
})

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

// ? --- Аккордеон в блоке вопросов
function accordionFunc(rootClassName) {
  window.addEventListener('load', () => {
    let accordionList = document.querySelectorAll(`.${rootClassName}__accordion-item`);

    if (accordionList === null) {
      return;
    }
    else {
      accordionList.forEach(item => {
        let accordionItemContent = item.querySelector(`.${rootClassName}__accordion-item-content`);
        let accordionItemTop = item.querySelector(`.${rootClassName}__accordion-item-top`);

        item.addEventListener('click', () => {
          if (item.classList.contains(`${rootClassName}__accordion-item--active`)) {
            item.classList.remove(`${rootClassName}__accordion-item--active`);
            item.setAttribute('style', '');
          }
          else {
            item.classList.add(`${rootClassName}__accordion-item--active`);
            item.setAttribute(`style`, `height:${accordionItemContent.offsetHeight + accordionItemTop.offsetHeight}px; transition:all 0.3s;`);
          }
        })
      })
    }
  })
}
accordionFunc('questions');

// ? --- Табы в блоке характеристик
function tabsFunc(rootClassName) {
  window.addEventListener('load', () => {
    let tabs_buttons = document.querySelectorAll(`.${rootClassName}__tabs-button`);
    if (tabs_buttons === null) {
      return;
    }
    else {
      let tabs_items = document.querySelectorAll(`.${rootClassName}__tabs-body-item`);

      tabs_buttons.forEach(button => {
        button.addEventListener('click', (e) => {

          tabs_buttons.forEach(button_value => { button_value.classList.remove(`${rootClassName}__tabs-button--active`) });
          button.classList.add(`${rootClassName}__tabs-button--active`);

          tabs_items.forEach(item => {
            if (button.dataset.tab === item.dataset.tab) {
              tabs_items.forEach(item_value => { item_value.classList.remove(`${rootClassName}__tabs-body-item--active`); });
              item.classList.add(`${rootClassName}__tabs-body-item--active`);
            }
          });
        });
      })
    }
  });
}
tabsFunc(`single-cars`);

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
      if (window.innerWidth < 1280) {
        Lenis.stop();
      }
    })

    filter_button_close.addEventListener('click', () => {
      filter_menu.classList.remove('catalogue-cars__wrapper-column--left--active');
      unlock(filter_menu);
      if (window.innerWidth < 1280) {
        Lenis.start();
      }
    })
  }
})