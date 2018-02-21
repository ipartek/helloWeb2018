"use strict;"


window.addEventListener('keydown', playSound);

function playSound() {
    var key = event.keyCode;
    console.log('playSound %o', key);
    var audio = document.querySelector('audio[data-key="' + key + '"]');
    var keyPress = document.querySelector('div[data-key="' + key + '"]');
    if (!audio) {
        return false;
    }
    audio.addEventListener("ended", function() {
                console.log("Terminada cancion");
               keyPress.classList.remove('playing');
            });
    keyPress.classList.add('playing');
    audio.currentTime= 0;
    audio.play();

}
