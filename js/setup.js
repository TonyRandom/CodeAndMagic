"use strict";
(function () {
//показываем окно изменений
var userDialog = document.querySelector('.setup');
/* userDialog.classList.remove('hidden'); */

//показываем окно похожих персонажей
document.querySelector('.setup-similar').classList.remove('hidden');




// находим шаблон, который будем копировать
/* var similarWizardTemplate = document.querySelector('#similar-wizard-template')
    .content //обращаемся к содержимому шаблона
    .querySelector('.setup-similar-item'); // выбираем объект внутри шаблона
console.log(similarWizardTemplate); */






//РАБОТА С СЕТЬЮ

//функция создания мага

/* window.createWizard = function (wizard) {
   
        var wizardElement = similarWizardTemplate.cloneNode(true); // wizardElement - это копия шаблона
        wizardElement.querySelector('.setup-similar-label').textContent = wizard.name; // обращение к элементам внутри шаблона
    
        var coat = wizardElement.querySelector('.wizard-coat')
        coat.style.fill = wizard.colorCoat;
    
        var eyes = wizardElement.querySelector('.wizard-eyes')
        eyes.style.fill = wizard.colorEyes;

        return wizardElement;

} */

/* console.log(renderWizard()); */




window.wizards_data = [];

var successHandler = function (wizards) {

    wizards_data = wizards;
    /* window.renderWizard(wizards); */
    console.log(wizards_data);
    window.renderWizard(wizards_data);
  };



  var errorHandler = function (errorMessage) {
    var node = document.createElement('div');
    node.style = 'z-index: 100; margin: 0 auto; text-align: center; background-color: red;';
    node.style.position = 'absolute';
    node.style.left = 0;
    node.style.right = 0;
    node.style.fontSize = '30px';
    
    node.textContent = errorMessage; 
    document.body.insertAdjacentElement('afterbegin', node);
  };
  
  window.load(successHandler, errorHandler);

 

var submitButton = document.querySelector('.setup-submit');

submitButton.addEventListener('click', function (evt) {
    window.save(new FormData(userDialogForm), function (response){
        userDialog.classList.add('hidden');
        console.log(response);
    })
    
    evt.preventDefault();
    
}, errorHandler);


//ФУНКЦИЯ ОТРИСОВКИ МАГА В ШАБЛОН

/* var renderWizard = function (wizard) {
   
        var wizardElement = similarWizardTemplate.cloneNode(true); // wizardElement - это копия шаблона
        wizardElement.querySelector('.setup-similar-label').textContent = wizardsData[i].name; // обращение к элементам внутри шаблона
    
        var coat = wizardElement.querySelector('.wizard-coat')
        coat.style.fill = wizardsData[i].coatColor;
    
        var eyes = wizardElement.querySelector('.wizard-eyes')
        eyes.style.fill = wizardsData[i].eyesColor;
    
        /* similarListElement.appendChild(wizardElement); 

        return wizardElement;

}*/
 



// создаем функцию добавления в верстку 


   

    
 

    




    //ЗАДАНИЕ 4 обработка событий
  /*   . Открытие/закрытие окна настройки персонажа:
o Окно.setup должно открываться по нажатию на блок.setup-open.
Открытие окна производится удалением класса hidden у блока
o Окно.setup должно закрываться по нажатию на элемент.setup-close,
расположенный внутри окна
Добавить обработчики для альтернативного ввода с
клавиатуры keydown для кнопок открытия/закрытия диалога настройки
персонажа: */
//userDialog - окно

//назнача. переменные для числовых констант
var ESCAPE_BUTTON = 27;
var ENTER_BUTTON = 13;

//отдельно описываю сценарии закрытия
var userDialogOpen = document.querySelector('.setup-open');
var userDialogClose = userDialog.querySelector('.setup-close');

var userNameInput = document.querySelector('.setup-user-name');

var onUserDialogEscapePress = function (evt) {
    if (userNameInput!==document.activeElement && evt.keyCode === ESCAPE_BUTTON) 
     {
        closeUserDialog();
        
    }
};

var onUserDialogEnterClosePress = function (evt) {
    if (evt.keyCode === ENTER_BUTTON) {
        closeUserDialog();
    }
};

var onUserDialogEnterOpenPress = function (evt) {
    if (evt.keyCode === ENTER_BUTTON) {
        openUserDialog();
    }
};

var openUserDialog = function () {
    userDialog.classList.remove('hidden');
    document.addEventListener('keydown', onUserDialogEscapePress);
    };

var closeUserDialog = function () {
    userDialog.classList.add('hidden');
    document.removeEventListener('keydown', onUserDialogEscapePress);
    userDialog.style.top = null;
    userDialog.style.left = null;
};

userDialogOpen.addEventListener('click', function () {
    openUserDialog();
    });



userDialogClose.addEventListener('click', function () {
    closeUserDialog();
});

userDialogClose.addEventListener('keydown', onUserDialogEnterClosePress);

/* 
Когда иконка пользователя в фокусе .setup-open-icon, то окно
настройки персонажа должно открываться по нажатию кнопки ENTER
Не забудьте добавить tabindex="0" для иконки пользователя, чтобы
она фокусировалась. */

userDialogOpen.addEventListener('keydown', onUserDialogEnterOpenPress);

var userDialogForm = document.querySelector('.setup-wizard-form');


/* Валидация ввода имени персонажа. Имя персонажа вводится в
поле .setup-user-name. Добавьте следующие ограничения:
o имя персонажа не может содержать менее 2 символов;
o максимальная длина имени персонажа — 25 символов.
Для указания ограничений на ввод используйте стандартные возможности
форм HTML5. */


/* Изменение цвета мантии персонажа по нажатию. Цвет мантии .setupwizard .wizard-coat должен обновляться по нажатию на неё. Цвет мантии
задаётся через изменение инлайнового CSS-свойства fill для элемента. Цвет должен сменяться произвольным образом на один из следующих цветов */

/* var setupWizardCoat = document.querySelector('.wizard-coat');
setupWizardCoat.addEventListener('click', function () {
    setupWizardCoat.style.fill = randomizeFromArray(COAT_COLOR);
})

/* Изменение цвета глаз персонажа по нажатию. Цвет глаз волшебника меняется по нажатию на блок .setup-wizard .wizard-eyes.  */

/* var setupWizardEyes = document.querySelector('.wizard-eyes');
setupWizardEyes.addEventListener('click', function () {
    setupWizardEyes.style.fill = randomizeFromArray(EYES_COLOR);
})  */

/* Изменение цвета фаерболов по нажатию. Цвет задаётся через
изменение фона у блока .setup-fireball-wrap.  */

/* var setupWizardFireball = document.querySelector('.setup-fireball-wrap');
setupWizardFireball.addEventListener('click', function () {
    setupWizardFireball.style.background = randomizeFromArray(FIREBALL_COLOR);
}) */












})();









