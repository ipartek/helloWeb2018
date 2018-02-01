// Variables globales
var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
var score = 0;
var lives = 3;

// ----- VARIABLES DE LA BOLA -----
// Posición inicial de la bola
var x = canvas.width/2;
var y = canvas.height-30;
// Movimiento de la bola
var dx = 2;
var dy = -2;
// Radio de la bola
var ballRadius = 10;
// ----- VARIABLES DE LA PALETA -----
var paddleHeight = 10;
var paddleWidth = 75;
var paddleX = (canvas.width-paddleWidth)/2;

var rightPressed = false;
var leftPressed = false;
// ----- VARIABLES DE LOS LADRILLOS -----
var brickRowCount = 4;
var brickColumnCount = 5;
var brickWidth = 75;
var brickHeight = 20;
var brickPadding = 10;
var brickOffsetTop = 30;
var brickOffsetLeft = 30;
var colorLadrillo = null;
// Matriz de los ladrillos
var bricks = [];
for(c=0; c<brickColumnCount; c++) {
    bricks[c] = [];
    for(r=0; r<brickRowCount; r++) {
        bricks[c][r] = { x: 0, y: 0, status: 1 };
    }
}

// Event Listener de los eventos de teclado/mouse
document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);
document.addEventListener("mousemove", mouseMoveHandler, false);
document.addEventListener("pause", pauseHandler, false);

// Método para gestionar los movimientos del mouse
function mouseMoveHandler(e) {
    var relativeX = e.clientX - canvas.offsetLeft;
    if(relativeX > (0 + paddleWidth/2) && relativeX < (canvas.width - paddleWidth/2 ) ) {
        paddleX = relativeX - paddleWidth/2;
    }
}

// Métodos para gestionar los eventos de teclado
// keyCode == '37' --> Flecha izquierda
// keyCode == '39' --> Flecha derecha
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

function pauseHandler(e) {
    if(e.keyCode == 32) {
        pauseGame();
    }
}

// Método para pausar el juego
function pauseGame() {
    // TODO: Pausara el juego y paralizar el canvas
}

// Método para dibujar la bola
function drawBall() {
    ctx.beginPath();
	ctx.arc(x,y,ballRadius,0,2*Math.PI);
	ctx.fillstyle="#0033FF";
	ctx.fillStroke="#0033FF";
	ctx.Stroke="10"
	ctx.fill();
	ctx.closePath();
}

// Método para dibujar la paleta
function drawPaddle() {
    ctx.beginPath();
    ctx.rect(paddleX, canvas.height-paddleHeight, paddleWidth, paddleHeight);
    ctx.fillStyle = "#0095DD";
    ctx.fill();
    ctx.closePath();
}

// Método para dibujar los ladrillos
function drawBricks() {
    for(c=0; c<brickColumnCount; c++) {
        for(r=0; r<brickRowCount; r++) {
            // Dibujar el ladrillo si no ha sido previamente golpeado por la bola
            if(bricks[c][r].status == 1) {
                // Pintar cada fila de un color
                switch(r) {
                    case 0:
                        colorLadrillo = "#5B2C6F";
                        break;
                    case 1:
                        colorLadrillo = "#1B4F72";
                        break;
                    case 2:
                        colorLadrillo = "#186A3B";
                        break;
                    case 3:
                        colorLadrillo = "#D4AC0D";
                        break;
                    default:
                        break;
                }
                var brickX = (c*(brickWidth+brickPadding))+brickOffsetLeft;
                var brickY = (r*(brickHeight+brickPadding))+brickOffsetTop;
                bricks[c][r].x = brickX;
                bricks[c][r].y = brickY;
                ctx.beginPath();
                ctx.rect(brickX, brickY, brickWidth, brickHeight);
                ctx.fillStyle = colorLadrillo;
                ctx.fill();
                ctx.closePath();
            }
        }
    }
}

// Método para detectar colisiones entre bola y ladrillos
function collisionDetection() {
    for(c=0; c<brickColumnCount; c++) {
        for(r=0; r<brickRowCount; r++) {
            var b = bricks[c][r];
            if(b.status == 1) {
                if(x > b.x && x < b.x+brickWidth && y > b.y && y < b.y+brickHeight) {
                    dy = -dy;
                    b.status = 0;
                    score++;
                    if(score == brickRowCount*brickColumnCount) {
                        alert("VICTORIA!");
                        document.location.reload();
                    }
                }
            }
        }
    }
}

// Método para dibujar la puntuación en el canvas
function drawScore() {
    ctx.font = "16px Arial";
    ctx.fillStyle = "#0095DD";
    ctx.fillText("Score: "+score, 8, 20);
}

// Método para dibujar las vidas restantes en el canvas
function drawLives() {
    ctx.font = "16px Arial";
    ctx.fillStyle = "#0095DD";
    ctx.fillText("Lives: "+lives, canvas.width-65, 20);
}

// Método para simular el movimiento de la bola
function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawBricks();
    drawBall();
    drawPaddle();
    drawScore();
    drawLives();
    collisionDetection();

    // Simular que la bola rebota contre los bordes del canvas
    if(x + dx > canvas.width-ballRadius || x + dx < ballRadius) {
        dx = -dx;
    }
    if(y + dy < ballRadius) {
        dy = -dy;
    } else if(y + dy > canvas.height-ballRadius) {
        if(x > paddleX && x < paddleX + paddleWidth) {
            dy = -dy;
        }
        else {
            // Si la bola toca el borde inferior del canvas y no te quedan vidas --> FIN DEL JUEGO
            lives--;
            if(!lives) {
                lives--;
                drawLives();
                alert("GAME OVER \nSCORE: " + score);
                document.location.reload();
            }
            else {
                x = canvas.width/2;
                y = canvas.height-30;
                dx = 2;
                dy = -2;
                paddleX = (canvas.width-paddleWidth)/2;
            }
        }
    }

    // Dibujar el movimiento de la paleta
    if(rightPressed && paddleX < canvas.width-paddleWidth) {
        paddleX += 7;
    }
    else if(leftPressed && paddleX > 0) {
        paddleX -= 7;
    }

    x += dx;
    y += dy;

    // Volver a llamar recurrentemente a la misma función para simular el movimiento
    requestAnimationFrame(draw);
}

// Intervalo de repintado de la bola para simular el movimiento
// Se puede cambiar el intervalo para aumentar/disminuir la "velocidad" de la bola
/*setInterval(draw, 10);*/
draw();


