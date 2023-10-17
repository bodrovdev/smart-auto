import { lock, unlock } from 'tua-body-scroll-lock';

// ? --- Модалки
function modalFunc(rootClassName) {
  window.addEventListener('load', () => {
    if (document.querySelector(`.${rootClassName}`) !== null && document.querySelector(`.${rootClassName}__form`) !== null) {

      let modal = document.querySelector(`.${rootClassName}`);
      let modal_wrapper = document.querySelector(`.${rootClassName}__wrapper`);
      let modal_inner = modal.querySelector(`.${rootClassName}__inner`);
      let modal_success = modal.querySelector(`.modal-success`);
      let modal_buttons = document.querySelectorAll(`.${rootClassName}__button`);
      let modal_close = document.querySelectorAll(`.${rootClassName}__close`);
      let modal_form = document.querySelector(`.${rootClassName}__form`);

      function modalClose() {
        if (modal.contains(modal_inner)) {
          // * Если обычная модалка
          modal.classList.remove(`${rootClassName}--active`);
          modal_inner.classList.remove(`${rootClassName}__inner--hidden`);
          modal_success.classList.remove('modal-success--active');
          // lock(modal);
        }
        else {
          // * Если модалка с подтверждением отправки
          modal.classList.remove(`${rootClassName}--active`);
          // lock(modal);
        }
      }

      // ? - Открытие
      modal_buttons.forEach(button => {
        button.addEventListener('click', () => {
          modal.classList.add(`${rootClassName}--active`);
          // unlock(modal);
        })
      })

      // ? - Закрытие по клику на кнопку
      modal_close.forEach(close_button => {
        close_button.addEventListener('click', () => {
          modalClose();
        })
      })

      // ? - Закрытие по клику снаружи модалки
      window.addEventListener('click', (e) => {
        if (Array.from(modal_buttons).includes(e.target)) {
          return;
        }
        else if (!(modal_wrapper.contains(e.target))) {
          modalClose();
        }
      })

      // ? - Закрытие по нажатию на esc
      window.addEventListener('keydown', (e) => {
        if (e.key === "Escape") {
          modalClose();
        }
      });

      // ? - Отправка
      modal_form.addEventListener('submit', (e) => {
        if (modal.contains(modal_inner)) {
          // * Если обычная модалка
          e.preventDefault();
          modal_inner.classList.add(`${rootClassName}__inner--hidden`);
          modal_success.classList.add('modal-success--active');
        }
        else {
          // * Если модалка с подтверждением отправки
          e.preventDefault();
          modal.classList.add(`${rootClassName}--active`);
          modal_success.classList.add('modal-success--active');
          // unlock(modal);
        }
      })
    }
  });
}

export { modalFunc };