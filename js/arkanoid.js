var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
var x = canvas.width/2;
var y = canvas.height-30;

/*Bola */
var radio = 10;
var dx=1;
var dy=1;

/* Pala*/
var anchoPala=75;
var altoPala=10;
var palaPos = (canvas.width-anchoPala)/2;

/* Ladrillos */
var brickRowCount = 3;
var brickColumnCount = 5;
var brickWidth = 75;
var brickHeight = 20;
var brickPadding = 10;
var brickOffsetTop = 30;
var brickOffsetLeft = 30;

var bricks = [];
for(c=0; c<brickColumnCount; c++) {
    bricks[c] = [];
    for(r=0; r<brickRowCount; r++) {
        bricks[c][r] = { x: 0, y: 0, status:1 };
    }
}

var rightPressed = false;
var leftPressed = false;


function dibujarLadrillos() {
    for(c=0; c<brickColumnCount; c++) {
        for(r=0; r<brickRowCount; r++) {
            if(bricks[c][r].status == 1) {
                var brickX = (c*(brickWidth+brickPadding))+brickOffsetLeft;
                var brickY = (r*(brickHeight+brickPadding))+brickOffsetTop;
                bricks[c][r].x = brickX;
                bricks[c][r].y = brickY;
                ctx.beginPath();
                ctx.rect(brickX, brickY, brickWidth, brickHeight);
                ctx.fillStyle = "#0095DD";
                ctx.fill();
                ctx.closePath();
            }
        }
    }
}
function dibujarPala() {
    ctx.beginPath();
    ctx.rect(palaPos, canvas.height-altoPala, anchoPala, altoPala);
    ctx.fillStyle = "#0095DD";
    ctx.fill();
    ctx.closePath();
}

function dibujarBola(){
    ctx.beginPath();
    ctx.arc(x, y, radio, 0, Math.PI*2, false);//posicion,radianes iniciales y finales,false sentido=sebtido horario
    ctx.fillStyle = "#FF0000";
    //ctx.strokeStyle = "rgba(0, 0, 255, 0.5)";pintar solo perimetro (color y ancho)
    ctx.fill(); //color relleno
    ctx.closePath();
}

function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);//borra lo anterior
    dibujarLadrillos();
    dibujarPala();
    dibujarBola();

    x+=dx; //modifica la posicion horizontal
    y+=dy; //modifica la posicion vertical
    if(y + dy < 0+radio) {//rebote arriba
        dy = -dy;
    } else if(y + dy > canvas.height-radio) {//llega abajo
        if(x > palaPos && x < palaPos+anchoPala) {//la bola toca la pala
            dy = -dy;
        }
        else { //no toca la pala
            alert("GAME OVER");
            document.location.reload();
            x = canvas.width/2;
            y = canvas.height-30;
        }
    }
    if(x + dx > canvas.width-radio || x + dx < 0+radio ) {//rebotes derecho e izquierdo
        dx = -dx;
    }
    if(rightPressed && palaPos < canvas.width-anchoPala) {//si se pulsa flecha derecha del teclado
        palaPos += 4;
    }
    else if(leftPressed && palaPos > 0) {//si se pulsa flecha izquierda del teclado
        palaPos -= 4;
    }
}

document.addEventListener("keydown", keyDownHandler, false);//pulsado de tecla
document.addEventListener("keyup", keyUpHandler, false);//soltar tecla

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

function collisionDetection() {//colisiones entre la bola y los ladrillos
    for(c=0; c<brickColumnCount; c++) {
        for(r=0; r<brickRowCount; r++) {
            var b = bricks[c][r];
            if(x > b.x && x < b.x+brickWidth && y > b.y && y < b.y+brickHeight) {
                dy = -dy;
            }
        }
    }
}

setInterval(draw, 10);
