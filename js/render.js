'use strict';

(function () {

var COAT_COLOR = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var EYES_COLOR = ['black', 'red', 'blue', 'yellow', 'green'];
/* var FIREBALL_COLOR = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848']; */

var randomizeFromArray = function (arrayName) {
    var randomResult = arrayName[Math.floor(Math.random() * arrayName.length)]
    return randomResult;
}

    //находим элемент, куда будет вставлять шаблон
var similarListElement = document.querySelector('.setup-similar-list');
console.log(similarListElement);

// находим шаблон, который будем копировать
var similarWizardTemplate = document.querySelector('#similar-wizard-template')
    .content //обращаемся к содержимому шаблона
    .querySelector('.setup-similar-item'); // выбираем объект внутри шаблона
console.log(similarWizardTemplate);


    //загруженные волшебники сохраняются в window.wizards_data



//функция создания мага

window.createWizard = function (wizard) {
   
    var wizardElement = similarWizardTemplate.cloneNode(true); // wizardElement - это копия шаблона
    
    wizardElement.querySelector('.setup-similar-label').textContent = wizard.name; // обращение к элементам внутри шаблона

    var coat = wizardElement.querySelector('.wizard-coat')
    coat.style.fill = wizard.colorCoat;

    var eyes = wizardElement.querySelector('.wizard-eyes')
    eyes.style.fill = wizard.colorEyes;

    return wizardElement;

}

//функция ОТРИСОВКИ мага

/* var wizards = []; */

window.renderWizard = function(wizards) {
    similarListElement.innerHTML = ''; // при вызове функции сначала очищает от предыдущих волшебников
    
    var fragment = document.createDocumentFragment(); 
    
    for (var i = 0; i < 4; i++) { 
        var newWizard = window.createWizard(wizards[i]);
        fragment.appendChild(newWizard);
    }

    similarListElement.appendChild(fragment); 

    var similarWizardsBlock = document.querySelector('.setup-similar');
    /* similarWizardsBlock.innerHTML = ''; */
    similarWizardsBlock.classList.remove('hidden');
}




//КОД ПЕРЕКЛЮЧЕНИЯ ЦВЕТОВ
var coatColor;

/* console.log(coatColor); */
var setupWizardCoat = document.querySelector('.wizard-coat');
setupWizardCoat.addEventListener('click', function () {
    var newColor = randomizeFromArray(COAT_COLOR);
    setupWizardCoat.style.fill = newColor;
    coatColor = newColor;
     updateWizards();
     


})



var eyesColor;
var setupWizardEyes = document.querySelector('.wizard-eyes');
setupWizardEyes.addEventListener('click', function () {
    var newColor = randomizeFromArray(EYES_COLOR);
    setupWizardEyes.style.fill = newColor;
    eyesColor = newColor;
    updateWizards();
})


var getRank = function (wizard) {
    var rank = 0;
    if (wizard.colorCoat ===coatColor) {
        rank += 2;
    }
    if (wizard.colorEyes ===eyesColor) {
        rank += 1;
    }
    return rank;
}

var namesComporator = function (left, right) {
    if (left>right) {
        return 1;
    } else if (right > left) {
        return -1;
    } else {
        return 0;
    }
}



var updateWizards = function () {

    // 1st version

    /* var sameCoatAndEyesWizards = window.wizards_data.filter(function (it) {
        return it.colorCoat === coatColor && it.colorEyes === eyesColor});

    var sameCoatWizards = window.wizards_data.filter(function (it) {
        return it.colorCoat === coatColor});
    var sameEyesWizards = window.wizards_data.filter(function (it) {
        return it.colorEyes === eyesColor});
   
        // удаляем повторения. Дубликаты — это место, где индекс не совпадает с indexOf. 
        var filteredWizards = sameCoatAndEyesWizards.concat(sameCoatWizards).concat(sameEyesWizards).concat(window.wizards_data);
        var uniqueWizards = filteredWizards.filter(function (it, index) {
                return filteredWizards.indexOf(it) === index;

        })  window.renderWizard(uniqueWizards); */

    // 2nd version

        window.renderWizard(window.wizards_data.sort(function (left, right) {
            var rankDiff = getRank(right) - getRank(left);
            if (rankDiff === 0) {
                rankDiff = namesComporator (left.name, right.name);
        }
        return rankDiff;
        }));

};



})();