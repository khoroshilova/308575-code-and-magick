'use strict';

(function () {
  // Фунция генерации случайных данных из любого массива
  window.util = {
    getRandomItemFromArray: function (items) {
      var getRandomItem = items[Math.floor(Math.random() * items.length)];
      return getRandomItem;
    }
  };
})();
