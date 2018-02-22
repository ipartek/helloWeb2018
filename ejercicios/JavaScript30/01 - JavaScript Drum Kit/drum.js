"use strict;"




window.addEventListener("keyup",function(){
    var keys=document.querySelectorAll(".key");
    for(var i=0; i<keys.length;i++){
        keys[i].style.border=".4rem solid black"
    }
});

window.addEventListener('keydown', playSound);

function playSound() {
    var key = event.keyCode;
    console.log('playSound %o', key);
    var audio = document.querySelector('audio[data-key="' + key + '"]');
    var keyPress = document.querySelector('.key[data-key="' + key + '"]');
    
    if (audio!=null) {
    
    keyPress.style.border=".4rem solid gold";
    audio.addEventListener("ended", function() {
                console.log("Terminada cancion");
               
            });
    audio.currentTime= 0;
    audio.play();
    }
}