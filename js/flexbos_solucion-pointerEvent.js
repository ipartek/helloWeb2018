"use strict";


var contenedorLetras = document.getElementById ("container-flex");


var boxes= document.getElementsByClassName("box");
for (var i; i<boxes.length; i++){
    boxes[i].addEventListener('click', sonido);
}

function sonido(){
    var letra =event.target.parentElement.dataset.letter;
    event.target.parentElement.style.background="orange";

    contenedorLetras.style.pointerEvents ="none";
     var audio = new Audio( '../sounds/'+fileName+'.wav' );
            audio.play();
            audio.onended = function(){
                contenedorLetras.style.pointerEvents="auto";
            }
}

