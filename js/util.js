'use strict';

(function () {
  // Фунция генерации случайных данных из любого массива
  window.util = {
    getRandomItem: function (items) {
      return items[Math.floor(Math.random() * items.length)];
    }
  };
})();
