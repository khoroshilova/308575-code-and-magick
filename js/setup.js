'use strict';

var NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var SURNAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var COAT_COLORS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var EYES_COLORS = ['black', 'red', 'blue', 'yellow', 'green'];
var WIZARDS_CARDS = 4;

var userDialog = document.querySelector('.setup');
userDialog.classList.remove('hidden');

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

// Фунция генерации случайных данных из любого массива
var randomArrays = function (array) {
  return array[Math.floor(Math.random() * array.length)];
};

// Фунция генерации случайных данных волшебника
var getRandomWizards = function () {
  return {
    name: randomArrays(NAMES) + ' ' + randomArrays(SURNAMES),
    coatColor: randomArrays(COAT_COLORS),
    eyesColor: randomArrays(EYES_COLORS)
  };
};

// Цикл создания массива одного волшебника
var wizards = [];
for (var j = 0; j < WIZARDS_CARDS; j++) {
  wizards[j] = getRandomWizards();
}

var fragments = function () {
  var fragment = document.createDocumentFragment();
  for (var i = 0; i < wizards.length; i++) {
    fragment.appendChild(renderWizard(wizards[i]));
  }
  return fragment;
};

similarListElement.appendChild(fragments());
