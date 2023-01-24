// Добавляем прослушку на всем окне

window.addEventListener("click", (event) => {
  // обьявляем переменную для счетчика
  let counter;
  // Проверяем клик строго по кнопкам плюс либо минус
  if (
    event.target.dataset.action === "plus" ||
    event.target.dataset.action === "minus"
  ) {
    //Проверяем являеться ли совершен клик на елемнт кнопкой плюс
    const counterWrapper = event.target.closest(".counter-wrapper");
    counter = counterWrapper.querySelector("[data-counter]");
  }
  if (event.target.dataset.action === "plus") {
    counter.innerText = ++counter.innerText;
  }

  if (event.target.dataset.action === "minus") {
    // проверяем текст меньше ли 1
    if (parseInt(counter.innerText) > 1) {
      // изменяем текс в счетчике уменьшая его
      counter.innerText = --counter.innerText;
    } else if (
      event.target.closest(".cart-wrapper") &&
      parseInt(counter.innerText) === 1
    ) {
      // Удаляем товра из корзины
      event.target.closest(".cart-item").remove();
      // Отображение статуса корзины Пустая / полная
      toggleCartStatus();
      // Пересчет обей стоимости товара в корзине
      calcCartPriceAndDelivery();
    }
  }
  // Проверяем клик на + или - внутри корзины

  if (
    event.target.hasAttribute("data-action") &&
    event.target.closest(".cart-wrapper")
  ) {
    calcCartPriceAndDelivery();
  }
});
