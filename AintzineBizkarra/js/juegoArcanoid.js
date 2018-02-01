//Variables globales

var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
var x = canvas.width/2;
var y = canvas.height-30;
var dx = 2;
var dy = 2;
var ballRadius = 10; //mantiene el radio del círculo dibujado
var paddleHeight = 10; //altura de la paleta que golpea la bola
var paddleWidth = 75;//anchura de la paleta que golpea la bola
var paddleX = (canvas.width-paddleWidth)/2; //posicion del eje X en la que empieza a dibujarse
//variables que nos dicen si se ha pulsado un botón
var rightPressed = false;
var leftPressed = false;

//escuchadores de los eventos. Al principio estan a false ya que no pulsamos botones.
document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);

//Permite al usuario controlar la paleta
function keyDownHandler(e) {
    if(e.keyCode == 39) {
        rightPressed = true;
    }
    else if(e.keyCode == 37) {
        leftPressed = true;
    }
}

function keyUpHandler(e) {
    if(e.keyCode == 39) {
        rightPressed = false;
    }
    else if(e.keyCode == 37) {
        leftPressed = false;
    }
}


 //código para dibujar la bola
function drawBall(){

    ctx.beginPath();
    ctx.arc(x,y,ballRadius,0,Math.PI*2);
    ctx.fillStyle="#DF0101";
    ctx.fill();
    ctx.closePath();
}

//Código para dibujar la paleta
function drawPaddle(){
    ctx.beginPath();
    ctx.rect(paddleX, canvas.height - paddleHeight, paddleWidth, paddleHeight);
    ctx.fillStyle="#0101DF";
    ctx.fill();
    ctx.closePath();
}
function draw(){
    //Código para borrar el lienzo
    ctx.clearRect(0,0,canvas.width, canvas.height);
    drawBall();
    drawPaddle();
    if(x + dx > canvas.width-ballRadius || x + dx < ballRadius){
        dx=-dx;
    }
    if(y + dy > canvas.height-ballRadius || y + dy < ballRadius){
        dy=-dy;
    }
    if(rightPressed && paddleX < canvas.width-paddleWidth){
        paddleX+= 7;
    }else if(leftPressed && paddleX > 0){
        paddleX -= 7;
    }
    x += dx;
    y +=dy;
}

//Función para ejecutar una y otra vez. En este caso cada 10 seg llama a la función draw
setInterval(draw, 10);
