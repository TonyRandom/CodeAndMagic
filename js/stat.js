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
   
    ctx.lineTo (x+310, y+70); 
    ctx.lineTo (x+350, y+100);
    ctx.lineTo (x+340, y+250);
    
    ctx.lineTo (x+280, y+270);
    ctx.lineTo (x+180, y+250);
    ctx.lineTo (x+10, y+220);
    ctx.lineTo (x+30, y+90);
    ctx.closePath();
    ctx.fill(); 
     
}; 

var CLOUD_X = 170; //начальная точка первого столбца по горизонтали
var CLOUD_Y = 90; //начальная точка первого столбца по вертикали
var FONT_GAP =50; // расстояние между столбцами
var BAR_WIDTH = 40; // ширина столбца
var BAR_HEIGHT = 150;
var TEXT_BAR = 5; // сдвиг текста относительно начала координат столбца


window.renderStatistics = function (ctx, names, times) {

   
    renderCloud(ctx, 120, 30, 'rgba(0, 0, 0, 0.7)');
    renderCloud(ctx, 110, 20, 'white');
   

    ctx.fillStyle='black';
    ctx.font='16px PT Mono';
    ctx.fillText ('Ура вы победили!', 215, 30);
    ctx.fillText ('Список результатов:', 200, 50);




    ctx.fillStyle='rgba(255, 0, 0, 1)';  
    ctx.fillRect (CLOUD_X , CLOUD_Y, BAR_WIDTH, BAR_HEIGHT);
    ctx.fillStyle='black';
    ctx.fillText ('Вы', CLOUD_X + TEXT_BAR, 75);

    ctx.fillStyle='rgba(0, 0, 255, 1)';  
    ctx.fillRect (260, 90, 40 , BAR_HEIGHT);
    ctx.fillStyle='black';
    ctx.fillText ('Юлия', 265, 75);

    ctx.fillStyle='rgba(0, 0, 255, 1)';  
    ctx.fillRect (350, 90, 40 , BAR_HEIGHT);
    ctx.fillStyle='black';
    ctx.fillText ('Иван', 355, 75);


};