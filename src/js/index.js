import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock';

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