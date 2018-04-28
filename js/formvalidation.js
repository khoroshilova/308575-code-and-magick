'use strict';

(function () {
  var setup = document.querySelector('.setup');
  var userNameInput = setup.querySelector('.setup-user-name');

  // Валидность формы
  userNameInput.addEventListener('invalid', function (evt) {
    if (userNameInput.validity.tooShort) {
      userNameInput.setCustomValidity('Слишком короткое имя!');
    } else if (userNameInput.validity.tooLong) {
      userNameInput.setCustomValidity('Слишком длинное имя!');
    } else if (userNameInput.validity.valueMissing) {
      userNameInput.setCustomValidity('Обязательное поле!');
    } else {
      userNameInput.setCustomValidity('');
    }
  });

  // Поддержка minlength для Edge
  userNameInput.addEventListener('input', function (evt) {
    evt.target.setCustomValidity(evt.target.value.length < 2 ? 'Слишком короткое имя!' : '');
  });
})();
