/* Desordenar los div de las letras al pulsar el botón -->

var ta = document.getElementById("ta");

var numElem = document.querySelectorAll(".cnt-flex div");
document.getElementById("btnDesordenar").addEventListener('click', function() {
    for (var i = 0; i < numElem.length; i++) {
        orden = parseInt(Math.random() * 100);
        numElem[i].style.order = orden;
        }
    }, false); // el true/false es opcional

*/

var aOrden = [1, 2, 3, 4, 5];
var silencio = true;
var boxes = document.getElementsByClassName("caja-flex");
var box;

var btn = document.getElementById("btnDesordenar");
btn.addEventListener('click', function () {
    aOrden = shuffle(aOrden);

    for (i = 0; i < boxes.length; i++) {
        box = boxes[i];
        box.style.order = aOrden[i];
    }
})

function shuffle(a) {
    var j, x, i;
    for (i = a.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        x = a[i];
        a[i] = a[j];
        a[j] = x;
    }
    return a;
}

function sonido(filename, elem) {
    if (silencio) {
        var audio = new Audio('../sounds/' + filename + '.wav');
        audio.play();
        elem.style.backgroundColor = "orange";
        silencio = false;

        audio.onended = function () {
            silencio = true;
            elem.style.backgroundColor = "#2E4053";
        }
    }
}
