"use strict";



window.addEventListener('keydown',function(e){playSound();});
//keypress: devuelve mayusculas y minuscuals
//keydown: devuelve el mismo codigo en mayus y minus

function removeTransition(e) {
    if (e.propertyName !== 'transform') return;
    e.target.classList.remove('playing');
  }

function playSound (){
    
    var key= event.keyCode;
    console.log('playSound keyCode %s', key);
    
    var audio = document.querySelector('audio[data-key="' +key+ '"]');
    
   key.style.borderColor = "yellow";
   
    
}


const keys = document.querySelectorAll('.key');

keys.forEach(key =>key.addEventListener('finTransicion',removeTransition));