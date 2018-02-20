'use strict';

var btnReordenar = document.getElementById('btnReordenar');
var vocales = ['vocalA', 'vocalE', 'vocalI', 'vocalO', 'vocalU'];

/* reodena los contenedores de las vocales usando order de flex */
function reordenarVocales() {

    console.log(vocales);

    //mezclar array
    var n = vocales.length;
    while (n--) {
        var i = Math.floor(n * Math.random());
        var tmp = vocales[i];
        vocales[i] = vocales[n];
        vocales[n] = tmp;

    }

    for (i = 0; i < vocales.length; i++) {

        document.getElementById(vocales[i]).style.order = i + 1;

    }

}

btnReordenar.addEventListener('click', function () {
    reordenarVocales();
    console.log('reordenar');
}, false)


var parrafos = document.getElementsByTagName('p');
/*pinta de rojo el parrafo seccionado */
for (let i = 0; i < parrafos.length; i++) {

    parrafos[i].addEventListener('click', function (event) {
        //reset
        for (let i = 0; i < parrafos.length; i++) {
            parrafos[i].style.backgroundColor = 'white';
        }
        //console.log('clickiti');
        //pintar el parrafo
        event.target.style.backgroundColor = 'red';
    }, false);
}


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

/* Desabilita todos los eventos onclick igualandos a null, pinta todos los divs de negro y el activo de naranja
Cuando deja de sonar llama a habilitar para volver a cambiar los onclick
*/
function deshabilitar(vocal) {

    let id = 'vocal' + vocal.toUpperCase();

    for (let i = 0; i < vocales.length; i++) {
        let letra = vocales[i].slice(-1).toLowerCase();
        let vFunction = function () {
            sonido(letra);
        };

        //console.log('letra ' + letra);
        document.getElementById(vocales[i]).onclick = null;

        document.getElementById(vocales[i]).style.backgroundColor = 'black';
    }

    let divNaranja = document.getElementById(id);
    divNaranja.style.backgroundColor = 'orange';

}


/* Añade un evento onclick con el sonido. Se usa function(){} para que no ejecute el codigo al cargarlo */
function habilitar() {

    for (let i = 0; i < vocales.length; i++) {
        let letra;
        letra = vocales[i].slice(-1).toLowerCase();
        document.getElementById(vocales[i]).onclick = function () {
            sonido(letra)
        };
    }
}
