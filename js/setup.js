'use strict';

(function () {
  // Создание похожих персонажей
  // var NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
  // var SURNAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
  // var COAT_COLORS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
  // var EYES_COLORS = ['black', 'red', 'blue', 'yellow', 'green'];
  var WIZARDS_CARDS = 4;

  var userDialog = document.querySelector('.setup');
  var similarListElement = userDialog.querySelector('.setup-similar-list');
  var similarWizardTemplate = document.querySelector('#similar-wizard-template')
      .content
      .querySelector('.setup-similar-item');

  // Функция создания DOM элементов
  var renderWizard = function (wizard) {
    var wizardElement = similarWizardTemplate.cloneNode(true);
    wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
    wizardElement.querySelector('.wizard-coat').style.fill = wizard.colorCoat;
    wizardElement.querySelector('.wizard-eyes').style.fill = wizard.colorEyes;

    return wizardElement;
  };
  // Сообщение об ошибке
  var errorHandler = function (errorMessage) {
    var node = document.createElement('div');
    node.style = 'z-index: 100; margin: 0 auto; text-align: center; background-color: violet;';
    node.style.position = 'absolute';
    node.style.left = 0;
    node.style.right = 0;
    node.style.fontSize = '30px';
    node.textContent = errorMessage;
    document.body.insertAdjacentElement('afterbegin', node);
  };

  // Успешная отправка формы
  var successFormHandler = function () {
    var form = userDialog.querySelector('.setup-wizard-form');
    form.addEventListener('submit', function (evt) {
      evt.preventDefault();
      window.backend.save(new FormData(form), function () {
        userDialog.classList.add('hidden');
      }, errorHandler);
    });
  };

  // Похожие персонажи
  var successHandler = function (wizards) {
    var fragment = document.createDocumentFragment();
    for (var i = 0; i < WIZARDS_CARDS; i++) {
      fragment.appendChild(renderWizard(wizards[i]));
    }
    similarListElement.appendChild(fragment);
    userDialog.querySelector('.setup-similar').classList.remove('hidden');
    successFormHandler();
  };

  window.backend.load(successHandler, errorHandler);
})();
