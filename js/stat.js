var renderCloud = function (ctx, x, y, color) {
    ctx.fillStyle= color;
    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.lineTo(x + 30, y + 10); 
    ctx.lineTo(x + 130, y - 20); 
    ctx.lineTo(x+350, y-10);
    ctx.lineTo(x+450, y+10);  
   
    ctx.lineTo (x+410, y+70); 
    ctx.lineTo (x+450, y+100);
    ctx.lineTo (x+440, y+250);
    
    ctx.lineTo (x+380, y+270);
    ctx.lineTo (x+180, y+250);
    ctx.lineTo (x+10, y+220);
    ctx.lineTo (x+30, y+90);
    ctx.closePath();
    ctx.fill(); 
     
}; 

var CLOUD_X = 170; //начальная точка первого столбца по горизонтали
var CLOUD_Y = 240; //начальная точка первого столбца по вертикали
var FONT_GAP =50; // расстояние между столбцами
var BAR_WIDTH = 40; // ширина столбца
var BAR_HEIGHT = 150;
var TEXT_BAR = 5; // сдвиг текста относительно начала координат столбца
var TEXT_Y = 75;




var getMaxElement = function(arr) {
    var maxElement = arr[0];
    for(var i = 1; i< arr.length; i++) {
        if(arr[i] > maxElement) {
            maxElement = arr[i];
            
        }
    }
    
    return maxElement;
}




window.renderStatistics = function (ctx, players, times) {

   
    renderCloud(ctx, 120, 30, 'rgba(0, 0, 0, 0.7)');
    renderCloud(ctx, 110, 20, 'white');
   

    ctx.fillStyle='black';
    ctx.font='16px PT Mono';
    ctx.fillText ('Ура вы победили!', 215, 30);
    ctx.fillText ('Список результатов:', 200, 50);

    
    var maxTime = getMaxElement(times);
    
    function getRandomSaturationOfBlue(){ //рандомный синий цвет
        var red = 0;
        var green = 0;
        var blue = 255;
        var a =(Math.random().toFixed(1)) 

        if (a<=0.2) { //подстраховка от 0
            a += 2;
        }

        console.log(a);
             
        return "rgba("+red+","+green+"," +blue+", " +a+" )";  
      }
      
     
   

    for (var i = 0; i<players.length; i++) {
        if(players[i]=='Вы') {
            ctx.fillStyle='rgba(255, 0, 0, 1)';
        }
        else {
        
            ctx.fillStyle = getRandomSaturationOfBlue();
    }
       
        ctx.fillRect (CLOUD_X +((BAR_WIDTH + FONT_GAP)*i), CLOUD_Y, BAR_WIDTH, -(BAR_HEIGHT * times[i]) / maxTime);
        ctx.fillStyle='black';
        ctx.fillText (players[i], CLOUD_X + ((BAR_WIDTH + FONT_GAP)*i) + TEXT_BAR, TEXT_Y);
    
    }

  


};