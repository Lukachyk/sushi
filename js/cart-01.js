//div внутри корзины, в который мы добавляем товары
const cartWrapper = document.querySelector(".cart-wrapper");

// отслеживаем клики на странице
window.addEventListener("click", (event) => {
  // Проверяем что клик был совершен по кнопке Добавить в корзин

  if (event.target.hasAttribute("data-cart")) {
    // Находим карточку с товаром, внутри которой был совершен клик
    const card = event.target.closest(".card");

    // Собираем данные с этого товара и записываем их в единый обькт productInfo
    const productInfo = {
      id: card.dataset.id,
      imgSrc: card.querySelector(".product-img").getAttribute("src"),
      title: card.querySelector(".item-title").innerText,
      itemsInBox: card.querySelector("[data-items-in-box]").innerText,
      weight: card.querySelector(".price__weight").innerText,
      price: card.querySelector(".price__currency").innerText,
      counter: card.querySelector("[data-counter]").innerText,
    };

    // Собранные данные подставим в шаблон для товара в корзине
    const cardItemHTML = `<div class="cart-item" data-id=${productInfo.id}>
    <div class="cart-item__top">
        <div class="cart-item__img">
            <img src=${productInfo.imgSrc} alt=${productInfo.title}>
        </div>
        <div class="cart-item__desc">
            <div class="cart-item__title">${productInfo.title}</div>
            <div class="cart-item__weight">${productInfo.itemsInBox} / ${productInfo.weight}</div>

            <!-- cart-item__details -->
            <div class="cart-item__details">

                <div class="items items--small counter-wrapper">
                    <div class="items__control" data-action="minus">-</div>
                    <div class="items__current" data-counter="">${productInfo.counter}</div>
                    <div class="items__control" data-action="plus">+</div>
                </div>

                <div class="price">
                    <div class="price__currency">${productInfo.price}</div>
                </div>

            </div>
            <!-- // cart-item__details -->

        </div>
    </div>
</div>`;
    // добавляем  thml с улсовием beforeend
    cartWrapper.insertAdjacentHTML("beforeend", cardItemHTML);
  }
});
