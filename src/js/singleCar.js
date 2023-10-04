// ? --- Функционал на странице отдельной машины

// ? - Обработчик клика на опцию
function selectOptionItem(buttons, atr, atr_price, var_price) {
  buttons.forEach(button => {
    button.addEventListener('click', () => {
      buttons.forEach(button_item => { button_item.classList.remove('option-selected'); })
      button.classList.add('option-selected');

      atr.textContent = button.dataset.atr_name;
      atr_price.textContent = button.dataset.atr_price;
      var_price = button.dataset.atr_price;
    })
  })
}

window.addEventListener('load', () => {
  let displayed_img = document.querySelector('.single-cars__display-img');
  if (!(displayed_img === null)) {

    // ? - Для результирующей цены
    let type_price = 0;
    let body_color_price = 0;
    let interior_color_price = 0;
    let wheels_price = 0;
    let initial_price = document.querySelector('.single-cars__options-result').dataset.initial_price;

    // ? - Выбор типа машины
    let car_types = document.querySelector('.single-cars__options-select');
    displayed_img.setAttribute('src', car_types.options[0].dataset.img);

    car_types.addEventListener('change', () => {
      displayed_img.setAttribute('src', car_types.options[car_types.selectedIndex].dataset.img);
      type_price = car_types.options[car_types.selectedIndex].dataset.price;
      console.log(`Тип цена ${type_price}`);
    });

    // ? - Выбор цвета кузова
    let body_color_buttons = document.querySelector('.body_color').querySelectorAll('.single-cars__options-item-button');
    let body_color_atr = document.querySelector('.body_color .single-cars__options-price-name');
    let body_color_atr_price = document.querySelector('.body_color .single-cars__options-price-num');
    selectOptionItem(body_color_buttons, body_color_atr, body_color_atr_price);

    // ? - Выбор цвета салона
    // ? - Выбор колёс

    // ? - Результирующая цена
    let result_price = initial_price + type_price + body_color_price + interior_color_price + wheels_price;
  }
});