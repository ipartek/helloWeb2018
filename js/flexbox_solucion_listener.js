"use strict";


var aOrden = [1, 2, 3, 4, 5];
var aSonidos = ['a', 'e', 'i', 'o', 'u'];

var boxes = document.getElementsByClassName("box");
for (var i = 0; i < boxes.length; i++) {
    boxes[i].addEventListener('click', sonido);
}


var btn = document.getElementById("btnBarajear");
btn.addEventListener('click', function () {
    aOrden = shuffle(aOrden);
    var box;
    for (var i = 0; i < boxes.length; i++) {
        box = boxes[i];
        box.style.order = aOrden[i];
    }
});

function sonido() {
    var letra = event.target.parentElement.dataset.letter;
    event.target.parentElement.style.backgroundColor = 'orange';
    console.debug('letra %s', letra);

    for (var i = 0; i < boxes.length; i++) {
        boxes[i].removeEventListener('click', sonido);
    }

    var audio = new Audio('../sounds/' + letra + '.wav');
    audio.play();
    audio.onended = habilitar;

}

function habilitar() {
    //volver habilitar botones
    for (var i = 0; i < boxes.length; i++) {
        boxes[i].addEventListener('click', sonido);
        boxes[i].style.backgroundColor = 'teal';
    }
}


/**
 * Shuffles array in place.
 * @param {Array} a items An array containing the items.
 */
function shuffle(a) {
    var j, x, i;
    for (var i = a.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        x = a[i];
        a[i] = a[j];
        a[j] = x;
    }
    return a;
}
