"use strict";

//window.addEventListener('keypress',playSound);keypress devuelve si es MAYUS o minus
window.addEventListener('keydown',playSound); //keydown siempre devuelve los valores asociados a la MAYUS

function playSound(){
    var key = event.keyCode;
    console.log('playSound %o',event);

    var audio= document.querySelector('audio[data-key="'+key+'"]');
    var clase= document.querySelector('div[data-key="'+key+'"]');
    audio.currentTime = 0;
    audio.play();
    clase.classList.add('playing');

    audio.onended = function () {
            clase.classList.remove('playing');
        }
}
