'use strict';

(function () {
  var CLOUD_WIDTH = 420; // ширина облака
  var CLOUD_HEIGHT = 270; // высота облака
  var CLOUD_X = 140;
  var CLOUD_Y = 90;
  var GAP = 10;
  var GAP_X = 50; // отступ по горизонтали
  var BAR_WIDTH = 40; // ширина колонки
  var BAR_HEIGHT = 150; // максимальная высота колонки
  var MAIN_PLAYER = 'Вы';

  var renderCloud = function (ctx, x, y, color) {
    ctx.fillStyle = color;
    ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
  };

  var renderText = function (ctx, x, y, text) {
    ctx.fillStyle = 'black';
    ctx.fillText(text, x, y);
  };

  var randomOpacity = function () {
    var opacity = (Math.random() * 0.9).toFixed(2);
    return 'rgba(0, 0, 255, ' + opacity + ')';
  };

  var getMaxElement = function (elements) {
    var maxElement = elements[0];
    elements.forEach(function (i) {
      if (elements[i] > maxElement) {
        maxElement = elements[i];
      }
    });
    return maxElement;
  };

  window.renderStatistics = function (ctx, names, times) {
    renderCloud(ctx, 110, 20, 'rgba(0, 0, 0, 0.7)');
    renderCloud(ctx, 100, 10, 'white');
    renderText(ctx, 120, 40, 'Ура! Вы победили');
    renderText(ctx, 120, 60, 'Список результатов:');

    var maxTime = getMaxElement(times);

    times.forEach(function (timeRect, i) {
      ctx.fillStyle = (names[i] === MAIN_PLAYER) ? 'rgba(255, 0, 0, 1)' : randomOpacity();
      timeRect = BAR_HEIGHT * times[i] / maxTime;
      ctx.fillRect(CLOUD_X + (BAR_WIDTH + GAP_X) * i, BAR_HEIGHT + GAP + CLOUD_Y - timeRect, BAR_WIDTH, timeRect);

      ctx.fillStyle = 'black';
      ctx.fillText(Math.floor(times[i]), CLOUD_X + (BAR_WIDTH + GAP_X) * i, CLOUD_Y + BAR_HEIGHT - timeRect);
      ctx.fillText(names[i], CLOUD_X + (BAR_WIDTH + GAP_X) * i, CLOUD_HEIGHT);
    });
  };
})();
