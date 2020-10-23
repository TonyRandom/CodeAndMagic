var setup = document.querySelector('.setup');
setup.classList.remove('hidden');


//МАССИВЫ СО ЗНАЧЕНИЯМИ

var NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var SURNAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var COAT_COLOR = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var EYES_COLOR = ['black', 'red', 'blue', 'yellow', 'green'];

//функция, выдющая случайное значение из массива
var randomizeFromArray = function (arrayName) {
   var randomResult = arrayName[Math.floor(Math.random() * arrayName.length)]
    return randomResult;
}

// генерируем каждый ключ по-отдельности

    var name = randomizeFromArray(NAMES) + ' ' + randomizeFromArray(SURNAMES);
    
    var coatColor = randomizeFromArray(COAT_COLOR);

    var eyesColor = randomizeFromArray(EYES_COLOR);

    


    //создаем одного волшебника ФУНКЦИЯ


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



    //ЗАДАНИЕ 3

    //НЕ ПОНИМАЮ, КАК СВЯЗАТЬ ПРЕДЫДУЩЕЕ ЗАДАНИЕ С ТЕКУЩИМ


    // ШАБЛОН ВОЛШЕБНИКА. В НЕГО НАДО ДОБАВИТЬ ВСЕ, А ПОТОМ ВСТАВЛЯТЬ В КОНТЕЙНЕР
    var wizardList = document.querySelector('#similar-wizard-template');


    //  СОЗДАЕМ ВЕРСТКУ ОДНОГО ВОЛШЕБНИКА

    var setupSimilar = document.createElement('div');
    setupSimilar.classList.add('.setup-similar-label');
    setupSimilar.textContent = name;
    
    var coat = document.querySelector('.wizard-coat');
    coat.style.fill = coatColor;
   
    
    var eyes = document.querySelector('.wizard-eyes');
    eyes.style.fill = eyesColor;
  
    
    // ФУНКЦИЯ СОЗДАНИЯ ВОЛШЕБНИКА.

    var createWizard = function () {

    var setupSimilar = document.createElement('div');
    setupSimilar.classList.add('.setup-similar-label');
    setupSimilar.textContent = name;
    
    var coat = document.createElement('div');
    coat.classList.add('wizard-coat');
    coat.style.fill = coatColor;
    setupSimilar.appendChild(coat);
   
    
    var eyes = document.querySelector('.wizard-eyes');
    eyes.style.fill = eyesColor;

    return setupSimilar;

    }

    console.log(createWizard());



       //КУДА ВСТАВЛЯТЬ ВОЛШЕБНИКОВ
       var wizardContainer = document.querySelector('.setup-similar-list');
       console.log(wizardContainer.children);
   

    // 	Иногда бывает удобно сгруппировать однотипные или разнотипные элементы и вставить их все вместе. Тогда для этого можно использовать специальный элемент documentFragment.

    var wizardTemplate = document.createDocumentFragment(); 
    
    for (var i = 0; i < wizardsData.length; i++) { 
        var newWizard = createWizard();
       

        wizardTemplate.appendChild(newWizard);
    }

        wizardContainer.appendChild(wizardTemplate);

   

    
 

     var similarWizardsBlock = document.querySelector('.setup-similar');
    similarWizardsBlock.classList.remove('hidden');
    


 	