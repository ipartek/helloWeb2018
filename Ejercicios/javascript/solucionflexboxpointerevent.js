"use strict";

var contentLetras = document.getElementById("container-flex");

var boxes = document.getElementsByClassName("box");
var aOrden = [1, 2, 3, 4, 5];
var aSonidos = ['a', 'e', 'i', 'o', 'u']; /*Sirve para que coja las letras y deshabilite luego el evento*/
var letraAleatoria=['a', 'e', 'i', 'o', 'u'];
var sacarletraaleatoria= math.random(letraAleatoria);
var acierto;
var fallo;

var direccionacierto= document.getElementById("ondo");
var direccionfallo= document.getElementById("txarto");


var btn = document.getElementById("btnBarajear");


for (var i = 0; i < boxes.length; i++) {
    boxes[i].addEventListener('click', sonido);
}



/*En esta funcion se coge el sonido*/
function sonido() {
    var letra = event.target.parentElement.dataset.letter; /*Se le recoge la letra asignada al div*/
    event.target.parentElement.style.backgroundColor = 'orange';
    console.debug('letra %s', letra);

    contentLetras.style.pointerEvents = "none";
    console.log("Se quita el color de fondo");

    /***********Empieza a reproducirse el sonido**********/

    var audio = new Audio('/sounds/' + letra + '.wav');
    audio.play();
    audio.onended = function(){
        contentLetras.style.pointerEvents = "auto";

    }

}





 /********Coge cada letra para luego ordenarla*********/
btn.addEventListener('click', function () {
    aOrden = shuffle(aOrden);
    var box;
    for (var i = 0; i < boxes.length; i++) {
        box = boxes[i];
        box.style.order = aOrden[i];
    }

    if(sacarletraaleatoria==boxes[i]){

        acierto++
        direccionacierto.innerHTML= acierto;
         console.log("He pasado por acierto");
    }

    else{

        fallo++;
          direccionfallo.innerHTML= fallo;
        console.log("He pasado por fallo");

    }
});


/**********Metodo para ordenar***********/
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
