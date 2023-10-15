// import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock';

// // ? --- Модалка с формой
// window.addEventListener('load', () => {
//   let modal_with_form = document.getElementById('modal_with_form');

//   if (!(modal_with_form === null)) {
//     let modal_with_form_buttons = document.querySelectorAll('.modal-with-form__button');
//     let modal_with_form_close = document.querySelector('.modal-with-form__close');
//     let modal_with_form_formset = document.getElementById('modal_with_form_formset');

//     // ? - Открытие
//     modal_with_form_buttons.forEach((button) => {
//       button.addEventListener('click', () => {
//         modal_with_form.classList.add('modal-with-form--active');
//         disableBodyScroll(modal_with_form);
//       })
//     })

//     // ? - Закрытие
//     modal_with_form_close.addEventListener('click', () => {
//       modal_with_form.classList.remove('modal-with-form--active');
//       document.querySelector('.modal-with-form__inner').classList.remove('modal-with-form__inner--hidden');
//       document.querySelector('.modal-with-form__success').classList.remove('modal-with-form__success--active');
//       enableBodyScroll(modal_with_form);
//     })

//     window.addEventListener('click', (e) => {
//       console.log(e.target);
//       if (Array.from(modal_with_form_buttons).includes(e.target)) {
//         return;
//       }
//       else if (!(document.querySelector('.modal-with-form__wrapper').contains(e.target))) {
//         modal_with_form.classList.remove('modal-with-form--active');
//         document.querySelector('.modal-with-form__inner').classList.remove('modal-with-form__inner--hidden');
//         document.querySelector('.modal-with-form__success').classList.remove('modal-with-form__success--active');
//         enableBodyScroll(modal_with_form);
//       }
//     })

//     // ? - Отправка
//     // modal_with_form_formset.addEventListener('submit', (e) => {
//     //   e.preventDefault();
//     //   document.querySelector('.modal-with-form__inner').classList.add('modal-with-form__inner--hidden');
//     //   document.querySelector('.modal-with-form__success').classList.add('modal-with-form__success--active');
//     // })
//   }
// })

// // ? --- Модалка без формы
// window.addEventListener('load', () => {

//   let modal_without_form = document.getElementById('modal_without_form');
//   let modal_without_form_formset = document.querySelector('.modal-without-form__formset');

//   if (!(modal_without_form === null) && !(modal_without_form_formset === null)) {

//     // ? - Открытие
//     modal_without_form_formset.addEventListener('submit', (e) => {
//       e.preventDefault();
//       modal_without_form.classList.add('modal-without-form--active');
//       disableBodyScroll(modal_without_form);

//       window.addEventListener('click', (e) => {
//         if (!(document.querySelector('.modal-without-form__wrapper').contains(e.target))) {
//           modal_without_form.classList.remove('modal-without-form--active');
//           enableBodyScroll(modal_without_form);
//         }
//       })

//       // ? - Очищение инпутов
//       modal_without_form_formset.querySelectorAll('input, textarea').forEach(item => {
//         item.value = '';
//       })
//     })
//   }
// });