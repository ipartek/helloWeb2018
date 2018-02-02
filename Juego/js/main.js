var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
var x = canvas.width/2;
var y = canvas.height-30;
var dx = 2;
var dy = -2;
var ballRadius = 10;
function drawBall() {
    ctx.beginPath();
    ctx.arc(x, y, ballRadius, 0, Math.PI*2);
    ctx.fillStyle = "#0095DD";
    ctx.fill();
    ctx.closePath();
}
function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawBall();

    if(x + dx > canvas.width-ballRadius || x + dx < ballRadius) {
        ctx.fillStyle = "#FF0000";
        ctx.fill();
        dx = -dx;

    }
    if(y + dy > canvas.height-ballRadius || y + dy < ballRadius) {


        ctx.fillStyle = "#000000";
        ctx.fill();
        dy = -dy;
    }

    x += dx;
    y += dy;
    }
setInterval(draw, 100);
