"use strict;"



window.addEventListener("keydown", playSound);
window.addEventListener("keyup",function(){
    var keys=document.querySelectorAll(".key");
    for(var i=0; i<keys.length;i++){
        keys[i].style.border=".4rem solid black"
    }
});

function playSound(){
    var key=event.keyCode;
    var audio= document.querySelector("audio[data-key='"+key+"']");
    var key = document.querySelector(".key[data-key='"+key+"']");
    key.style.border=".4rem solid gold"
    audio.play();
    
    
    console.log('playsound %o',)
}