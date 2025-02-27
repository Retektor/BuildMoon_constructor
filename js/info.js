document.addEventListener("DOMContentLoaded", function () {
  const items = document.querySelectorAll(".info_list-item");

  items.forEach((item) => {
    const link = item.querySelector(".info_list-txt");
    const subItems = item.querySelector(".sub-items");

    link.addEventListener("click", function (event) {
      event.preventDefault(); // Предотвращаем переход по ссылке

      // Закрываем все открытые подпункты, кроме текущего
      items.forEach((otherItem) => {
        if (otherItem !== item) {
          const otherSubItems = otherItem.querySelector(".sub-items");
          otherSubItems.classList.remove("visible");
        }
      });

      // Переключаем видимость текущего подпункта
      subItems.classList.toggle("visible");
    });
  });
});
