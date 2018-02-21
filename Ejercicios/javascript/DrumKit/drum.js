"use strict";

var keys = document.querySelectorAll(".key");

window.addEventListener('keydown', playSound);


function removeTransition(keys) {
    if (keys.propertyName !== 'transform') return;
    keys.target.classList.remove('playing');
  }



function playSound(){
    var key = event.keyCode;
    console.log('playSound %o', key);

    var audio = document.querySelector('audio[data-key="'+key+'"]');

    var key1 = document.querySelector('div[data-key="'+key+'"]');

    key1.classList.add('playing');

    audio.currentTime = 0;
    audio.play();
}

for (var i=0; i<keys.length; i++){
    keys[i].addEventListener('transitionend', removeTransition);
}

