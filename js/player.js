'use strict';

(function () {
  // player.js
  // Изменение цвета глаз и фаербола волшебника
  var WIZARD_EYES_COLORS = ['black', 'red', 'blue', 'yellow', 'green'];
  var WIZARD_FIREBALL_COLORS = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];

  var setup = document.querySelector('.setup');
  var wizardEyes = setup.querySelector('.setup-wizard .wizard-eyes');
  var wizardFireball = setup.querySelector('.setup-fireball-wrap');

  wizardEyes.style.cursor = 'pointer';
  wizardEyes.addEventListener('click', function () {
    var wizardEyesColor = window.util.getRandomItemFromArray(WIZARD_EYES_COLORS);
    wizardEyes.style.fill = wizardEyesColor;
  });

  wizardFireball.style.cursor = 'pointer';
  wizardFireball.addEventListener('click', function () {
    var wizardFireballColor = window.util.getRandomItemFromArray(WIZARD_FIREBALL_COLORS);
    wizardFireball.style.background = wizardFireballColor;
  });
})();
