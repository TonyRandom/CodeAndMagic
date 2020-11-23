'use strict';

(function(){


   

    

    window.load = function (onLoad, onError) { //параметрами, какую функцию надо вызвать. я эти параметры пропишу при вызове функции.
        var URL = 'https://javascript.pages.academy/code-and-magick/data';
       
        var xhr = new XMLHttpRequest();
        xhr.responseType = 'json';

        xhr.addEventListener('load', function () {
            if (xhr.status === 200) {
            onLoad(xhr.response); //при удаче вызовется функция onLoad с параметром в скобках. 
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
          
          xhr.timeout = 10000; // 10s
          

        xhr.open('GET', URL);
        xhr.send();

    };


    window.save = function(data, onLoad, onSave) {

        var URL = 'https://javascript.pages.academy/code-and-magick';

        var xhr = new XMLHttpRequest();
        xhr.responseType = 'json';

        xhr.addEventListener('load', function () {
            if (xhr.status === 200) {
            onLoad(xhr.response); //при удаче вызовется функция onLoad с параметром в скобках. 
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
          
          xhr.timeout = 10000; // 10s

          xhr.open('POST', URL);
        xhr.send(data);
    };

})();