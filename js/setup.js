'use strict';

(function () {
  // Создание похожих персонажей
  var NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
  var SURNAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
  var COAT_COLORS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
  var EYES_COLORS = ['black', 'red', 'blue', 'yellow', 'green'];
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
    wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
    wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;
    return wizardElement;
  };

  userDialog.querySelector('.setup-similar').classList.remove('hidden');

  // Фунция генерации случайных данных волшебника
  var getRandomWizard = function () {
    return {
      name: window.util.getRandomItem(NAMES) + ' ' + window.util.getRandomItem(SURNAMES),
      coatColor: window.util.getRandomItem(COAT_COLORS),
      eyesColor: window.util.getRandomItem(EYES_COLORS)
    };
  };

  // Цикл создания массива одного волшебника
  var wizards = [];
  for (var j = 0; j < WIZARDS_CARDS; j++) {
    wizards[j] = getRandomWizard();
  }

  var fragments = function () {
    var fragment = document.createDocumentFragment();
    wizards.forEach(function (item) {
      fragment.appendChild(renderWizard(item));
    });
    return fragment;
  };

  similarListElement.appendChild(fragments());
})();
