'use strict';

(function () {
  // Открытие и закрытие окна
  var ESC_KEYCODE = 27;
  var ENTER_KEYCODE = 13;

  var setupOpen = document.querySelector('.setup-open');
  var setup = document.querySelector('.setup');
  var setupClose = setup.querySelector('.setup-close');
  var userNameInput = setup.querySelector('.setup-user-name');

  var onPopupEscPress = function (evt) {
    if (userNameInput === document.activeElement) {
      onPopupEscPress();
    } else if (evt.keyCode === ESC_KEYCODE) {
      onClosePopup();
    }
  };

  var openPopup = function () {
    setup.classList.remove('hidden');
    document.addEventListener('keydown', onPopupEscPress);
  };

  var onClosePopup = function () {
    setup.classList.add('hidden');
    setup.removeAttribute('style');
    document.removeEventListener('keydown', onPopupEscPress);
  };

  setupOpen.addEventListener('click', function () {
    openPopup();
  });

  setupOpen.addEventListener('keydown', function (evt) {
    if (evt.keyCode === ENTER_KEYCODE) {
      openPopup();
    }
  });

  setupClose.addEventListener('click', onClosePopup);

  setupClose.addEventListener('keydown', function (evt) {
    if (evt.keyCode === ENTER_KEYCODE) {
      onClosePopup();
    }
  });
})();
