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

//añade los eventlisteners para el sonido
//habilitar();

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



    for (let i = 0; i < vocales.length; i++) {
        let letra = vocales[i].slice(-1).toLowerCase();
        let vFunction = function () {
            sonido(letra);
        };

        console.log('letra ' + letra);
        document.getElementById(vocales[i]).removeEventListener('click', vFunction, false);

        document.getElementById(vocales[i]).style.backgroundColor = 'black';
        //console.log('disabled'+vocales[i]);

    }

    let divNaranja = document.getElementById(id);
    divNaranja.style.backgroundColor = 'orange';

}



function habilitar() {



    for (let i = 0; i < vocales.length; i++) {
        let vFunction;
        let letra;
        letra = vocales[i].slice(-1).toLowerCase();
        console.log('letra ' + letra);

        vFunction = function () {
            sonido(letra);
        };

        document.getElementById(vocales[i]).addEventListener('click', vFunction, false);
        //console.log('disabled'+vocales[i]);

    }

}

function habilitarA() {
        let vFunction;
        let letra;
        letra = 'a';
        console.log('letra ' + letra);

        vFunction = function () {
            sonido(letra);
        };

        document.getElementById('vocalA').addEventListener('click', vFunction, false);
        //console.log('disabled'+vocales[i]);
}
