"use strict";

// Definir un evento global al Objeto WINDOW
// NOTE: con 'keydown' no diferencia mayus/minus, con 'keypress' devuelve diferentes códigos
window.addEventListener('keydown', playSound);



// FUNCIONES


function playSound() {
    var key = event.keyCode;
    // mostrar por consola la tecla pulsada
    console.debug("Tecla pulsada: %o", event.key);

    var audio = document.querySelector('audio[data-key="' + key + '"]');
    if (audio != null) {
        audio.play();
        console.debug("Audio reproducido: %s", audio.src.split('/')[5] );
    }

}
