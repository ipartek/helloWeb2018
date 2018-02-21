"use strict";

function removeTransition(e) {
    if (e.propertyName !== 'transform') return;
    e.target.classList.remove('playing');
}

function playSound(e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`div[data-key="${e.keyCode}"]`);
    if (!audio) return;

    key.classList.add('playing');
    audio.currentTime = 0;
    audio.play();
}

const keys = Array.from(document.querySelectorAll('.key'));

//quitar clase css con transiscion al terminar el evento 'transitionend'
keys.forEach(key => key.addEventListener('transitionend', removeTransition));

//escuchar cualquier tecla pulsada
window.addEventListener('keydown', playSound);
