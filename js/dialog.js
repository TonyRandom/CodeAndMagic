/* В модуле для работы с диалогом (dialog.js) реализуйте возможность
перетаскивания диалога:
    • Диалог должен начинать двигаться за курсором мыши при нажатии
(mousedown) на блок .setup-user-pic;
    • Диалог должен переставать двигаться за курсором мыши при отпускании
(mouseup) кнопки мыши и оставаться на новом месте;
    • При повторном открытии/закрытии диалога, положение диалога должно
сбрасываться на изначальное; */

'use strict';

// находим элемент, за который перемещаем и отлавливаем событие нажатия клика.
var dialogHandler = document.querySelector('.upload'); //на изображение .setup-user-pic не работает перемещение. А на блоке работает upload
var userDialog = document.querySelector('.setup');
var userDialogClose = userDialog.querySelector('.setup-close');

dialogHandler.addEventListener('mousedown', function(evt){
    evt.preventDefault();

    //запоминаем начальные координаты точки
    var startCoords = {
        x: evt.clientX,
        y: evt.clientY
    };

    var dragged = false;

    // При каждом движении мыши нам нужно обновлять смещение относительно первоначальной точки, чтобы диалог смещался на необходимую величину.
    var onMouseMove = function (moveEvt) {
        dragged =  true;
        
        var shift = {
            x: startCoords.x - moveEvt.clientX,
            y: startCoords.y - moveEvt.clientY
        }

        startCoords = {
            x: moveEvt.clientX,
            y: moveEvt.clientY
        };

        userDialog.style.top = (userDialog.offsetTop - shift.y) + 'px';
        userDialog.style.left = (userDialog.offsetLeft - shift.x) + 'px';
        
        
    }

    var onMouseUp = function (upEvt) {
        upEvt.preventDefault;

        if (dragged) {
            var onClickPreventDefault = function (evt) {
            evt.preventDefault();
            dialogHandler.removeEventListener('click', onClickPreventDefault)
            };
            dialogHandler.addEventListener('click', onClickPreventDefault);
            }
           

        document.removeEventListener('mousemove', onMouseMove);
        document.removeEventListener('mouseup', onMouseUp);
    }

    //добавляем обработчики на перемещение и отпускание мыши
    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseup', onMouseUp);


    

    
})


//При повторном открытии/закрытии диалога, положение диалога должно сбрасываться на изначальное
    //добавил в функцию закрытия диалога
    /* userDialog.style.top = null;
    userDialog.style.left = null; */
    