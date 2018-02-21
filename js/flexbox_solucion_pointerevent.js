"use strict";

var contentLetras = document.getElementById("container-flex");

var boxes = document.getElementsByClassName("box");
for (var i = 0; i < boxes.length; i++) {
    boxes[i].addEventListener('click', sonido);
}

function sonido() {
    var letra = event.target.parentElement.dataset.letter;
    event.target.parentElement.style.backgroundColor = 'orange';
    console.debug('letra %s', letra);

    contentLetras.style.pointerEvents = "none";

    var audio = new Audio('../sounds/' + letra + '.wav');
    audio.play();
    audio.onended = function(){
        contentLetras.style.pointerEvents = "auto";
    }

}
