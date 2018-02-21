"use strict";

var divVocales = document.getElementById('divVocales');

var boxes = document.getElementsByClassName('vocal');

var vocales = ['vocalA', 'vocalE', 'vocalI', 'vocalO', 'vocalU'];



function sonido(filename) {

    var audio = new Audio('../../sounds/' + filename + '.wav');

    audio.play();

    let id = 'vocal' + filename.toUpperCase();

    let divNaranja = document.getElementById(id);
    divNaranja.style.backgroundColor = 'orange';

    console.log('audio' + filename);
    deshabilitar(filename);

    audio.addEventListener('ended', function () {
        habilitar();
    })
}


function deshabilitar(vocal) {

    let id = 'vocal' + vocal.toUpperCase();

    divVocales.style.pointerEvents = "none";

    for (let i = 0; i < vocales.length; i++) {
        document.getElementById(vocales[i]).style.backgroundColor = 'black';
    }

    let divNaranja = document.getElementById(id);
    divNaranja.style.backgroundColor = 'orange';

}



function habilitar() {

    divVocales.style.pointerEvents = "auto";
}
