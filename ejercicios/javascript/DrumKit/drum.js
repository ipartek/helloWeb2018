"use strict"

var keys = document.querySelectorAll(".key");

keys.forEach(function (item) {
    item.addEventListener("transitionend", removeTrans);
})

window.addEventListener("keydown", playSound);

keys.forEach(function (item) {
    // item.addEventListener("keypress", playSound);
})

function playSound(event) {
    console.log("playsound %o", event);
    console.log("playsound %o", event.keyCode);

    var elem = document.querySelector("div[data-key='" + event.keyCode + "']")
    var aud = document.querySelector("audio[data-key='" + event.keyCode + "']")

    //Controlo que el audio no esté en ejcución
    //Si lo está lo paro y lo vuelvo a reproducir
    if (!aud.paused) {
        aud.pause();
        aud.currentTime = 0;
    }

    aud.play();
    elem.classList.add("playing");

    //Este evento controla el fin de la transition
    //Solo se puede mediante eventListener. NO FUNCIONA
    elem.onTransitionEnd = function () {
        console.log("Hola");
        removeTrans(elem);
    };
}

function removeTrans() {
    this.classList.remove("playing");
}
