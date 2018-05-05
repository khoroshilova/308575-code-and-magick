'use strict';

(function () {
  var SAVE_URL = 'https://js.dump.academy/code-and-';
  var LOAD_URL = 'https://js.dump.academy/code-and-magick/data';
  var SERVER_TIME = 10000;
  var STATUS_OK = 200;

  var loadHandler = function (onLoad, onError) {
    var xhr = new XMLHttpRequest();
    xhr.responseType = 'json';
    xhr.addEventListener('load', function () {
      if (xhr.status === STATUS_OK) {
        onLoad(xhr.response);
      } else {
        onError('Статус ответа: ' + xhr.status + ' ' + xhr.statusText);
      }
    });
    xhr.addEventListener('error', function () {
      onError('Произошла ошибка соединения');
    });
    xhr.addEventListener('timeout', function () {
      onError('Запрос не успел выполниться за ' + xhr.timeout + 'мс');
    });
    xhr.timeout = SERVER_TIME;
    return xhr;
  };

  var load = function (onLoad, onError) {
    var xhr = loadHandler(onLoad, onError);
    xhr.open('GET', LOAD_URL);
    xhr.send();
  };

  var save = function (data, onLoad, onError) {
    var xhr = loadHandler(onLoad, onError);
    xhr.open('POST', SAVE_URL);
    xhr.send(data);
  };

  window.backend = {
    load: load,
    save: save
  };
})();
