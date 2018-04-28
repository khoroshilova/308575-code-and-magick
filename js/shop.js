'use strict';

(function () {
  // Перетаскивание предметов
  var shopElement = document.querySelector('.setup-artifacts-shop');
  var artifactsElement = document.querySelector('.setup-artifacts');
  var draggedItem = null;

  shopElement.addEventListener('dragstart', function (evt) {
    if (evt.target.tagName.toLowerCase() === 'img') {
      artifactsElement.style.outline = '2px dashed red';
      draggedItem = evt.target;
      evt.dataTransfer.setData('text/plain', evt.target.alt);
    }
  });

  artifactsElement.addEventListener('dragover', function (evt) {
    evt.preventDefault();
    return false;
  });

  shopElement.addEventListener('dragend', function (evt) {
    evt.preventDefault();
    artifactsElement.style.outline = '';
  });

  artifactsElement.addEventListener('drop', function (evt) {
    evt.preventDefault();
    evt.target.style.backgroundColor = '';
    if (evt.target.tagName.toLowerCase() !== 'img' && evt.target.hasChildNodes() === false) {
      var cloneDraggedItem = draggedItem.cloneNode();
      cloneDraggedItem.setAttribute('draggable', 'false');
      evt.target.appendChild(cloneDraggedItem);
    }
  });

  artifactsElement.addEventListener('dragenter', function (evt) {
    evt.target.style.backgroundColor = 'yellow';
    evt.preventDefault();
  });

  artifactsElement.addEventListener('dragleave', function (evt) {
    evt.target.style.backgroundColor = '';
    evt.preventDefault();
  });
})();
