"use strict";




window.addEventListener('keydown', playSound);
window.addEventListener('keyup', resetear);


function playSound() {
    var key = event.keyCode;

    console.log('playSound keyCode %s', key);

    var audio = document.querySelector('audio[data-key="' + key + '"]');
    audio.currentTime = 0;
    audio.play();
    var divKey = document.querySelector('.key[data-key="' + key + '"]');
    divKey.style.borderColor = "yellow";

}

function resetear() {
    var key = event.keyCode;
    var divKey = document.querySelector('.key[data-key="' + key + '"]');
    divKey.style.borderColor = "black";
};
