window.addEventListener('load', () => {
  if (!(document.querySelector('.single-cars') === null)) {

    // let options_select = document.querySelector('.single-cars__options-select');
    // let options_set = document.querySelectorAll('.single-cars__options-item');
    // let result_price = document.getElementById('result_price');

    // ? --- Установка изначального состояния характеристик
    // result_price.textContent = options_select.options[0].dataset.options_initial_price;

    // options_set.forEach(set => {
    //   if (set.dataset.options_set === options_select.options[0].dataset.options_select) {
    //     set.classList.add('single-cars__options-item--active');

    //     set.querySelector('.single-cars__options-item-button').classList.add('single-cars__options-item-button--selected');
    //     set.querySelector('.single-cars__options-item-price-name').textContent = set.querySelector('.single-cars__options-item-button').dataset.options_name;
    //     set.querySelector('.single-cars__options-item-price-num--yellow').textContent = set.querySelector('.single-cars__options-item-button').dataset.options_price;
    //   }
    // })

    // ? --- Выбор комплектации
    // options_select.addEventListener('change', (e) => {
    //   let selected_option = e.target.options[e.target.selectedIndex].dataset.options_select;

    //   options_set.forEach(set => {
    //     set.classList.remove('single-cars__options-item--active');
    //   })
    //   options_set.forEach(set => {
    //     if (set.dataset.options_set === selected_option) {
    //       set.classList.add('single-cars__options-item--active');
    //     }
    //   })
    //   result_price.textContent = e.target.options[e.target.selectedIndex].dataset.options_initial_price;
    // });

    // ? --- Выбор элемента характеристики
    // options_set.forEach(set => {
    //   let set_options_name = set.querySelector('.single-cars__options-item-price-name');
    //   let set_options_price = set.querySelector('.single-cars__options-item-price-num--yellow');

    //   let set_options_items = set.querySelectorAll('.single-cars__options-item-button');
    //   set_options_items.forEach(item => {
    //     item.addEventListener('click', () => {

    //       set_options_items.forEach(item_value => { item_value.classList.remove('single-cars__options-item-button--selected') });

    //       item.classList.add('single-cars__options-item-button--selected')

    //       set_options_name.textContent = item.dataset.options_name;
    //       set_options_price.textContent = item.dataset.options_price;
    //     })
    //   })
    // });

    // ? --- Итоговая сумма
    // let price_count_triggers = document.querySelectorAll('.single-cars__options-item-button');
    // let price_parts = document.getElementsByClassName('single-cars__options-item-price-num--yellow');

    // price_count_triggers.forEach(trigger => {
    //   trigger.addEventListener('click', () => {
    //     Array.from(price_parts).map(item => { console.log(item.textContent) });
    //   });
    // })
  }
})