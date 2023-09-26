import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock';

// ? --- Модалка с формой
window.addEventListener('load', () => {
  let modal_with_form = document.getElementById('modal_with_form');

  if (!(modal_with_form === null)) {
    let modal_with_form_buttons = document.querySelectorAll('.modal-with-form__button');
    let modal_with_form_formset = document.getElementById('modal_with_form_formset');

    // ? - Открытие
    modal_with_form_buttons.forEach((button) => {
      button.addEventListener('click', () => {
        modal_with_form.classList.add('modal-with-form--active');
        disableBodyScroll(modal_with_form);
      })
    })

    // ? - Закрытие
    window.addEventListener('click', (e) => {
      if (Array.from(modal_with_form_buttons).includes(e.target)) {
        return;
      }
      else if (!(document.querySelector('.modal-with-form__wrapper').contains(e.target))) {
        modal_with_form.classList.remove('modal-with-form--active');
        document.querySelector('.modal-with-form__inner').classList.remove('modal-with-form__inner--hidden');
        document.querySelector('.modal-with-form__success').classList.remove('modal-with-form__success--active');
        enableBodyScroll(modal_with_form);
      }
    })

    // ? - Отправка
    modal_with_form_formset.addEventListener('submit', (e) => {
      e.preventDefault();
      document.querySelector('.modal-with-form__inner').classList.add('modal-with-form__inner--hidden');
      document.querySelector('.modal-with-form__success').classList.add('modal-with-form__success--active');
    })
  }
})