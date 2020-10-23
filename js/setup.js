"use strict";

//показываем окно изменений
var userDialog = document.querySelector('.setup');
/* userDialog.classList.remove('hidden'); */

//показываем окно похожих персонажей
document.querySelector('.setup-similar').classList.remove('hidden');

//находим элемент, куда будет вставлять шаблон
var similarListElement = document.querySelector('.setup-similar-list');
console.log(similarListElement);


// находим шаблон, который будем копировать
var similarWizardTemplate = document.querySelector('#similar-wizard-template')
    .content //обращаемся к содержимому шаблона
    .querySelector('.setup-similar-item'); // выбираем объект внутри шаблона
console.log(similarWizardTemplate);


//перед циклом добавим данные
//СОЗДАТЬ МАССИВ ИЗ ОБЪЕКТОВ
var NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var SURNAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var COAT_COLOR = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var EYES_COLOR = ['black', 'red', 'blue', 'yellow', 'green'];
var FIREBALL_COLOR = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];

//функция, выдющая случайное значение из массива
var randomizeFromArray = function (arrayName) {
    var randomResult = arrayName[Math.floor(Math.random() * arrayName.length)]
     return randomResult;
 }



 //создаем одного волшебника ФУНКЦИЯ - БУДЕМ СОЗДАВАТЬ МАССИВ ИЗ ВОЛШЕБНИКОВ


 var generateWizard = function () {

    var wisard = {
        name: randomizeFromArray(NAMES) + ' ' + randomizeFromArray(SURNAMES),
        
        coatColor: randomizeFromArray(COAT_COLOR),
    
        eyesColor: randomizeFromArray(EYES_COLOR),
    
        }

   
    return wisard;
}

// по заданию надо сгенерировать массив из 4 рандомных волшебников

   

var wizardsData = []; // МАССИВ С ВОЛШЕБНИКАМИ

for (var i = 0; i < 4; i++) {
    generateWizard();
    
    wizardsData.push(generateWizard());

}

console.log(wizardsData);


//ФУНКЦИЯ ОТРИСОВКИ МАГА В ШАБЛОН

var renderWizard = function (wizard) {
   
        var wizardElement = similarWizardTemplate.cloneNode(true); // wizardElement - это копия шаблона
        wizardElement.querySelector('.setup-similar-label').textContent = wizardsData[i].name; // обращение к элементам внутри шаблона
    
        var coat = wizardElement.querySelector('.wizard-coat')
        coat.style.fill = wizardsData[i].coatColor;
    
        var eyes = wizardElement.querySelector('.wizard-eyes')
        eyes.style.fill = wizardsData[i].eyesColor;
    
        /* similarListElement.appendChild(wizardElement); */

        return wizardElement;

}




// создаем функцию добавления в верстку 

var fragment = document.createDocumentFragment(); 
    
    for (var i = 0; i < wizardsData.length; i++) { 
        var newWizard = renderWizard(wizardsData[i]);
       

        fragment.appendChild(newWizard);
    }

    similarListElement.appendChild(fragment);

   

    
 

    var similarWizardsBlock = document.querySelector('.setup-similar');
    similarWizardsBlock.classList.remove('hidden');




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

var setupWizardCoat = document.querySelector('.wizard-coat');

setupWizardCoat.addEventListener('click', function () {
    setupWizardCoat.style.fill = randomizeFromArray(COAT_COLOR);
})

/* Изменение цвета глаз персонажа по нажатию. Цвет глаз волшебника меняется по нажатию на блок .setup-wizard .wizard-eyes.  */

var setupWizardEyes = document.querySelector('.wizard-eyes');
setupWizardEyes.addEventListener('click', function () {
    setupWizardEyes.style.fill = randomizeFromArray(EYES_COLOR);
})

/* Изменение цвета фаерболов по нажатию. Цвет задаётся через
изменение фона у блока .setup-fireball-wrap.  */

var setupWizardFireball = document.querySelector('.setup-fireball-wrap');
setupWizardFireball.addEventListener('click', function () {
    setupWizardFireball.style.background = randomizeFromArray(FIREBALL_COLOR);
})
