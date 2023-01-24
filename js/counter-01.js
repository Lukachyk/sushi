//находими элементы

const btnMinus = document.querySelector('[data-action="minus"]');
const btnPlus = document.querySelector('[data-action="plus"]');
const counter = document.querySelector("[data-counter]");
//проверяем чо б счет был больше 1
btnMinus.addEventListener("click", () => {
  if (parseInt(counter.innerText) > 1) {
    // изменяем текс в счетчике уменьшая его
    counter.innerText = --counter.innerText;
  }
});

//отслеживаем клик  бтнплюс
btnPlus.addEventListener("click", () => {
  // изменяем текст +1
  counter.innerText = ++counter.innerText;
});
