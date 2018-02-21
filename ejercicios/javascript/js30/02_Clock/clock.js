"use strict";

var segundero = document.querySelector('.second-hand');



function darSegundos(){

    var fecha = new Date();

    var segundos = fecha.getSeconds();
    console.log(`segundos ${segundos}`);
    //entre 60 para el percentil * 360 los grados + 90 rotacion inicial
    var rotacionSegundos = ((segundos/60)*360)+90;

    segundero.style.transform = `rotate(${rotacionSegundos}deg)`;



}

setInterval (darSegundos, 1000);

