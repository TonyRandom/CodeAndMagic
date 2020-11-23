// все до "//ФУНКЦИЯ ОТРИСОВКИ МАГА В ШАБЛОН"

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
