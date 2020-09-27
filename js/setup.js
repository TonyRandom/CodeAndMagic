var setup = document.querySelector('.setup');
setup.classList.remove('hidden');


var NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var SURNAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var COAT_COLOR = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var EYES_COLOR = ['black', 'red', 'blue', 'yellow', 'green'];
var  FIREBALL_COLOR = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];

//функция, выдющая случайное значение из массива
var randomizeFromArray = function (arrayName) {
   var randomResult = arrayName[Math.floor(Math.random() * arrayName.length)]
    return randomResult;
}

// генерируем каждый ключ по-отдельности


    var name = randomizeFromArray(NAMES) + ' ' + randomizeFromArray(SURNAMES);
    
    var coatColor = randomizeFromArray(COAT_COLOR);

    var eyesColor = randomizeFromArray(EYES_COLOR);

    var fireballColor = randomizeFromArray(FIREBALL_COLOR);


    //создаем одного волшебника


    var generateWizard = function () {

        var wisard = {
            name: randomizeFromArray(NAMES) + ' ' + randomizeFromArray(SURNAMES),
            
            coatColor: randomizeFromArray(COAT_COLOR),
        
            eyesColor: randomizeFromArray(EYES_COLOR),
        
            fireballColor: randomizeFromArray(FIREBALL_COLOR),
        
            }

       
        return wisard;
    }

    // по заданию надо сгенерировать массив из 4 рандомных волшебников

    // создаю функцию создания волшебника, которую буду вызывать в цикле


    var wizardsData = [];

    for (var i = 0; i < 4; i++) {
        generateWizard();
        
        wizardsData.push(generateWizard());

    }

    console.log(wizardsData);



    //ЗАДАНИЕ 3

    //НЕ ПОНИМАЮ, КАК СВЯЗАТЬ ПРЕДЫДУЩЕЕ ЗАДАНИЕ С ТЕКУЩИМ

    var wizardList = document.querySelector('#similar-wizard-template');
    console.log(wizardList);

    var setupSimilar = document.createElement('div');
    setupSimilar.classList.add('.setup-similar-label');
    setupSimilar.textContent = name;
    console.log(setupSimilar.textContent);

    var coat = document.querySelector('.wizard-coat');
    coat.style.fill = coatColor;
    console.log(coat);
    
    var eyes = document.querySelector('.wizard-eyes');
    eyes.style.fill = eyesColor;
    console.log(eyes);
    

    
    //КУДА ВСТАВЛЯТЬ ВОЛШЕБНИКОВ
    var wizardContainer = document.querySelector('.setup-similar-list');
    console.log(wizardContainer);


    var similarWizardsBlock = document.querySelector('.setup-similar');
    similarWizardsBlock.classList.remove('hidden');
    
