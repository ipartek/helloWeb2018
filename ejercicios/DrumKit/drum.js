"use strict";

//seleccionamos todos los que sean de clase key
var keys = document.querySelectorAll(".key");
//la ventana es el propio escuchador
window.addEventListener('keydown', reproducirSonido);


function reproducirSonido() {

    var key = event.keyCode;
    console.log('reproducirSonido %o', key);
    var audio = document.querySelector('audio[data-key="' + key + '"]');
    console.log('duracin %o', audio.duration*1000);
    var keyDiv = document.querySelector('div[data-key="' + key + '"]');
    keys.forEach(tecla => tecla.classList.remove('seleccionado'));
    if (audio != null) {

        audio.play();
        //se le añade al div la clase para transformarla
        keyDiv.classList.add('seleccionado');
        setInterval(function () {
            keyDiv.classList.remove('seleccionado');
        }, audio.duration*1000);



    } else {
        console.log('No hay sonido %o', key);
    }
}
