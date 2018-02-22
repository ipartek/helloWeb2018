"use strick";


 //sonidos

 //pointerEvent en un div los eventos de ratón no funcionan

 var teclas = document.getElementById('keys');

 //key down te devuelve siempre mayúscula
 window.addEventListener('keydown', sonido);


 function sonido() {

     //console.log('tecla pulsada %o', event);

     //coge la tecla
     var tecla = event.keyCode;

     var audio = document.querySelector('audio[data-key="' + tecla + '"]');
     audio.play();


     var aTecla = document.querySelectorAll('.key');
     var teclaSel;

     for (var i = 0; i < aTecla.length; i++) {
         if (tecla == aTecla[i].getAttribute("data-key")) {

             teclaSel= aTecla[i];
             teclaSel.classList.add("playing");

             audio.onended = function () {

                 teclaSel.classList.remove("playing");
            }

         }


     }


 }
