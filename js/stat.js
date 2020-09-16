/* var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
 */
/* var renderCloud = function (ctx, x, y, color) {
    ctx.fillStyle= color;
    ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);

   
};  */


 /* renderCloud(ctx, 110, 20, 'rgba(0, 0, 0, 0.7)');
    renderCloud(ctx, 100, 10, '#ffffff'); */


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
    

    for (var i = 0; i<players.length; i++) {
        if(players[i]=='Вы') {
            ctx.fillStyle='rgba(255, 0, 0, 1)';
        }
        else {
        ctx.fillStyle='rgba(0, 0, 255, 1)'; 
    }
       
        ctx.fillRect (CLOUD_X +((BAR_WIDTH + FONT_GAP)*i), CLOUD_Y, BAR_WIDTH, -(BAR_HEIGHT * times[i]) / maxTime);
        ctx.fillStyle='black';
        ctx.fillText (players[i], CLOUD_X + ((BAR_WIDTH + FONT_GAP)*i) + TEXT_BAR, TEXT_Y);
    
    }

  


};