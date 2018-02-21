"use strict";

window.addEventListener('keydown',playSound);


function playSound(){
    var key=event.keyCode;
    console.log('play-sound %o', key);

    var audio=document.querySelector('audio[data-key="'+key+'"]');
    audio.play();

}
