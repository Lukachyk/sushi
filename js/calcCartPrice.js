const calcCartPriceAndDelivery = () => {
  const cartWrapper = document.querySelector(".cart-wrapper");
  const priceElements = cartWrapper.querySelectorAll(".price__currency");
  const totalPriceEl = document.querySelector(".total-price");
  const deliveryCost = document.querySelector(".delivery-cost");
  const cardDelivery = document.querySelector("[data-cart-delivery]");

  let priceTotal = 0;

  priceElements.forEach((item) => {
    const amountEl = item.closest(".cart-item").querySelector("[data-counter]");

    priceTotal += parseInt(item.innerText) * parseInt(amountEl.innerText);
    console.log(priceTotal);
  });
  // Отображем ценну на странице
  totalPriceEl.innerText = priceTotal;
  // Cкрываем либо показываем блок с стоиомтью доставки
  if (priceTotal > 0) {
    cardDelivery.classList.remove("none");
  } else {
    cardDelivery.classList.add("none");
  }

  if (priceTotal >= 600) {
    deliveryCost.classList.add("free");
    deliveryCost.innerText = "бесплатно";
  } else {
    deliveryCost.classList.remove("free");
    deliveryCost.innerText = "250 $";
  }
};
